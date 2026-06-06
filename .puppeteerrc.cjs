const { join } = require('path');
const fs = require('fs');
const os = require('os');

// Find a Playwright-installed Chromium, which exists on the local WSL dev box
// but NOT on Netlify CI. Puppeteer's own Chrome download is blocked here (the
// CDN is unreachable in this environment), so locally we point puppeteer at
// Playwright's binary and skip the download for both `npm install` and the
// build's prerender step. On CI this returns null and puppeteer falls back to
// its normal download into the project-local cache dir below.
function findPlaywrightChromium() {
  const envPath = process.env.PUPPETEER_EXECUTABLE_PATH;
  if (envPath && fs.existsSync(envPath)) return envPath;

  const base = join(os.homedir(), '.cache', 'ms-playwright');
  let dirs;
  try {
    dirs = fs.readdirSync(base).filter((d) => d.startsWith('chromium-'));
  } catch {
    return null;
  }
  dirs.sort((a, b) => parseInt(b.split('-')[1], 10) - parseInt(a.split('-')[1], 10));
  for (const d of dirs) {
    const p = join(base, d, 'chrome-linux64', 'chrome');
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const chromium = findPlaywrightChromium();

module.exports = {
  // Keep Chrome inside the project so Netlify's node_modules cache persists it
  // across builds (default ~/.cache/puppeteer is wiped on every fresh container).
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
  ...(chromium ? { executablePath: chromium, skipDownload: true } : {}),
};
