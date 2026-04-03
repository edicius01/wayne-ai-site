import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://wayneai.net';

const staticRoutes: { path: string; priority: string; changefreq: string; lastmod?: string }[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/demo', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
];

export function sitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      // Dynamically import posts to get slugs and dates
      const postsFile = path.resolve(__dirname, 'src/content/blog/posts.ts');
      const content = fs.readFileSync(postsFile, 'utf8');

      // Extract slugs and dates with a simple regex (avoids needing ts execution)
      const slugMatches = [...content.matchAll(/slug:\s*'([^']+)'/g)];
      const dateMatches = [...content.matchAll(/date:\s*'([^']+)'/g)];

      const blogRoutes = slugMatches.map((m, i) => ({
        path: `/blog/${m[1]}`,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: dateMatches[i]?.[1],
      }));

      const allRoutes = [...staticRoutes, ...blogRoutes];
      const today = new Date().toISOString().split('T')[0];

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

      const outDir = path.resolve(__dirname, 'dist');
      if (fs.existsSync(outDir)) {
        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
        console.log(`✓ sitemap.xml generated with ${allRoutes.length} URLs`);
      }
    },
  };
}
