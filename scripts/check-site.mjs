import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const base = process.env.SITE_TEST_URL || 'http://localhost:8898';
assert(['localhost', '127.0.0.1'].includes(new URL(base).hostname), 'Use a local Netlify dev server.');
const screenshots = process.env.SITE_TEST_SCREENSHOTS || '/tmp/wayneai-seo-review';
fs.mkdirSync(screenshots, { recursive: true });

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const industryRoutes = ['/industries/plumbers/', '/industries/electricians/', '/industries/roofers/'];
for (const route of industryRoutes) assert(urls.includes(`https://wayneai.net${route}`));
for (const url of urls) {
  const route = new URL(url).pathname;
  const html = fs.readFileSync(path.join(dist, route, 'index.html'), 'utf8');
  assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html), `${route} must be indexable`);
  assert(html.includes(`rel="canonical" href="${url}"`), `${route} must be self-canonical`);
  assert(html.includes('<h1'), `${route} must contain prerendered content`);
}
for (const slug of ['plumbing-automation', 'roofing-automation', 'electrician-automation', 'chiropractor-reactivation', 'dental-reactivation', 'med-spa-reactivation', 'physical-therapy-reactivation']) {
  const route = `/lp/${slug}/`;
  const html = fs.readFileSync(path.join(dist, route, 'index.html'), 'utf8');
  assert(html.includes('content="noindex, follow"'), `${route} must retain the paid-page exclusion`);
  assert(!urls.includes(`https://wayneai.net${route}`));
}

for (const route of ['/', '/booking/', '/privacy/', '/terms/', ...industryRoutes]) {
  const response = await fetch(base + route, { redirect: 'manual' });
  assert.equal(response.status, 200, `${route} must load directly`);
}
for (const route of ['/home', '/home/']) {
  const response = await fetch(base + route, { redirect: 'manual' });
  assert.equal(response.status, 301, `${route} must permanently redirect`);
  assert.equal(new URL(response.headers.get('location'), base).pathname, '/');
}
for (const route of ['/missing-site-check/', '/blog/missing-site-check/', '/lp/missing-site-check/']) {
  const response = await fetch(base + route, { redirect: 'manual' });
  assert.equal(response.status, 404, `${route} must return a real 404`);
  assert((await response.text()).includes('This page could not be found'));
}
console.log(`PASS: ${urls.length} sitemap pages, paid-page exclusions, direct routes, redirects, and 404s`);

const browser = await puppeteer.launch({
  headless: true,
  ...(process.env.PUPPETEER_EXECUTABLE_PATH ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH } : {}),
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
  for (const width of [320, 390, 768, 1440]) {
    const page = await browser.newPage();
    const payloads = [];
    let failSubmission = true;
    await page.setViewport({ width, height: 900, isMobile: width < 768, hasTouch: width < 768 });
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      const url = new URL(request.url());
      if (url.pathname === '/api/public/lead') {
        if (request.method() === 'OPTIONS') return request.respond({ status: 204, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'content-type' } });
        payloads.push(JSON.parse(request.postData()));
        return request.respond({ status: failSubmission ? 500 : 200, contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ ok: !failSubmission }) });
      }
      if (url.pathname === '/widget/booking') return request.respond({ status: 200, contentType: 'text/html', body: '<html><body>Booking widget test fixture</body></html>' });
      if (url.origin === new URL(base).origin) return request.continue();
      return request.abort();
    });

    await page.goto(base + '/', { waitUntil: 'networkidle0' });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${width}px homepage must not overflow horizontally`);
    await page.click('#roi-request');
    await page.waitForSelector('#roi-request-form input[name="phone"]');
    if (width < 768) assert.equal(await page.$('a[href="/booking/"].block'), null, 'Sticky CTA must not cover the form');
    assert.equal(await page.$eval('input[name="sms_consent"]', (el) => el.checked), false);
    await page.type('input[name="phone"]', '2025550147');
    await page.click('#roi-request-form button[type="submit"]');
    await page.waitForFunction(() => document.body.innerText.includes('Something went wrong'));
    failSubmission = false;
    await page.click('#roi-request-form button[type="submit"]');
    await page.waitForFunction(() => document.body.innerText.includes("Got it — we'll reach out shortly."));
    assert.equal(payloads.length, 2);
    assert.equal(payloads[1].slug, 'wayneai-roi');
    assert.equal(payloads[1].sms_consent, false);
    assert(payloads[1].message.includes('[ROI calc]'));
    await page.screenshot({ path: path.join(screenshots, `roi-${width}.png`) });
    if (width < 768) {
      await page.$eval('#contact', (el) => el.scrollIntoView());
      await page.waitForSelector('a[href="/booking/"].block');
      assert.equal(await page.$eval('a[href="/booking/"].block', (el) => el.textContent.trim()), 'Book Now');
    }

    await page.goto(base + '/booking/', { waitUntil: 'networkidle0' });
    const calendar = await page.$eval('#crm-booking', (el) => ({ top: el.getBoundingClientRect().top, width: el.getBoundingClientRect().width }));
    if (width < 768) {
      assert(calendar.top < 750, `${width}px calendar should be near the top: ${calendar.top}`);
      assert(calendar.width >= width - 75, 'Keep the calendar wide enough on mobile');
    }
    assert.equal(await page.$eval('input[name="sms_consent"]', (el) => el.checked), false);
    await page.screenshot({ path: path.join(screenshots, `booking-${width}.png`) });

    await page.goto(base + '/industries/plumbers/', { waitUntil: 'networkidle0' });
    assert.equal(await page.$$eval('h1', (els) => els.length), 1);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${width}px industry page must not overflow`);
    await page.screenshot({ path: path.join(screenshots, `plumbers-${width}.png`), fullPage: true });
    await page.goto(base + '/blog/plumbing-estimate-follow-up-automation/', { waitUntil: 'networkidle0' });
    assert(await page.$('article a[href="/industries/plumbers/"]'));
    assert(await page.$('article a[href="/lp/ai-audit/"]'));
    await page.close();
    console.log(`PASS: ${width}px ROI click, mocked error/retry, consent, booking layout, and service links`);
  }
} finally {
  await browser.close();
}
console.log(`Screenshots: ${screenshots}`);
