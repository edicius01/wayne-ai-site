// Build-time prerender: crawl the built SPA in headless Chromium and write a
// static HTML snapshot per route so social/link scrapers and search engines get
// the correct per-route <head> (title, description, og:*, canonical) that
// react-helmet-async otherwise only sets client-side.
//
// Run automatically after `vite build` (see package.json "build" script).
// Uses the locally cached Chrome for Testing binary; puppeteer's own browser
// download is skipped in this environment (no unzip available).

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PORT = 5099;

// Explicit Chrome path via PUPPETEER_EXECUTABLE_PATH (set it to a cached Chrome
// for Testing binary in environments where puppeteer's own download is skipped).
// If unset, puppeteer resolves its own bundled/downloaded browser.
const CHROME_PATH = process.env.PUPPETEER_EXECUTABLE_PATH || '';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

function buildRouteList() {
  const staticRoutes = [
    '/',
    '/about',
    '/demo',
    '/blog',
    '/privacy',
    '/booking',
    '/lp/hvac-automation',
    '/lp/plumbing-automation',
    '/lp/roofing-automation',
    '/lp/chiropractor-reactivation',
    '/lp/med-spa-reactivation',
    '/lp/dental-reactivation',
    '/lp/physical-therapy-reactivation',
    '/lp/electrician-automation',
    '/lp/ai-audit',
  ];

  const postsFile = path.join(ROOT, 'src/content/blog/posts.ts');
  const content = fs.readFileSync(postsFile, 'utf8');
  const slugs = [...content.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  const blogRoutes = slugs.map((s) => `/blog/${s}`);

  return { routes: [...staticRoutes, ...blogRoutes], postCount: slugs.length };
}

function startStaticServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    let filePath = path.join(DIST, urlPath);

    // Directory or extensionless route → serve the SPA shell so the client
    // router can render the requested route (we then snapshot the result).
    if (!path.extname(filePath)) {
      const indexInDir = path.join(filePath, 'index.html');
      filePath = fs.existsSync(indexInDir) ? indexInDir : path.join(DIST, 'index.html');
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      filePath = path.join(DIST, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

function routeToOutputFile(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, route.replace(/^\//, ''), 'index.html');
}

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html not found — run vite build first.');
  }

  const { routes, postCount } = buildRouteList();
  console.log(`\n→ prerendering ${routes.length} routes (${postCount} blog posts)`);

  const server = await startStaticServer();

  const launchOpts = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  };
  if (CHROME_PATH && fs.existsSync(CHROME_PATH)) launchOpts.executablePath = CHROME_PATH;

  const browser = await puppeteer.launch(launchOpts);

  let ok = 0;
  let failed = 0;
  try {
    for (const route of routes) {
      const page = await browser.newPage();
      try {
        await page.goto(`http://localhost:${PORT}${route}`, {
          waitUntil: 'networkidle0',
          timeout: 45000,
        });

        // Wait until React has mounted real content.
        await page.waitForFunction(
          () => {
            const root = document.getElementById('root');
            return !!root && root.children.length > 0 && !!document.title;
          },
          { timeout: 45000 }
        );

        // react-helmet-async applies its route-specific <head> in a post-mount
        // effect (a Helmet'd page ends up with a SECOND, Helmet-owned <title>
        // ahead of the static shell title). Wait for that, but don't require it
        // — a few pages legitimately have no <Helmet> and keep the shell tags.
        await page
          .waitForFunction(() => document.head.querySelectorAll('title').length >= 2, {
            timeout: 4000,
          })
          .catch(() => {});

        // The static index.html template ships generic homepage SEO tags, and
        // react-helmet-async appends route-specific ones at the end of <head>.
        // A snapshot therefore contains BOTH — and scrapers read the FIRST
        // og:title/og:image they see (the generic one). Dedupe singleton head
        // tags, keeping the LAST occurrence (Helmet's authoritative value).
        const html = await page.evaluate(() => {
          const head = document.head;
          const keyOf = (el) => {
            const tag = el.tagName.toLowerCase();
            if (tag === 'title') return 'title';
            if (tag === 'link' && el.getAttribute('rel') === 'canonical') return 'link:canonical';
            if (tag === 'meta') {
              const name = el.getAttribute('name');
              const prop = el.getAttribute('property');
              if (prop) return `meta:property:${prop}`;
              if (name && /^(description|twitter:)/.test(name)) return `meta:name:${name}`;
            }
            return null;
          };
          // For <title>, Helmet's element comes FIRST and the static shell
          // title comes last; keep the first. For meta/canonical, Helmet
          // appends LAST (authoritative), so keep the last.
          const keepByKey = new Map();
          for (const el of head.children) {
            const k = keyOf(el);
            if (!k) continue;
            if (k === 'title') {
              if (!keepByKey.has(k)) keepByKey.set(k, el);
            } else {
              keepByKey.set(k, el);
            }
          }
          for (const el of [...head.children]) {
            const k = keyOf(el);
            if (k && keepByKey.get(k) !== el) el.remove();
          }
          return '<!doctype html>\n' + document.documentElement.outerHTML;
        });

        const title = await page.title();
        const outFile = routeToOutputFile(route);
        fs.mkdirSync(path.dirname(outFile), { recursive: true });
        fs.writeFileSync(outFile, html, 'utf8');
        ok++;
        console.log(`  ✓ ${route.padEnd(60)} ${title.slice(0, 50)}`);
      } catch (err) {
        failed++;
        console.error(`  ✗ ${route} — ${err.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`\n✓ prerender complete: ${ok} written, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error('prerender failed:', err);
  process.exit(1);
});
