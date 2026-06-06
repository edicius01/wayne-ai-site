// Ensures a Chrome binary is present for the prerender step.
// Netlify spins up a fresh container each build and the default
// ~/.cache/puppeteer is not persisted, so prerender can fail with
// "Could not find Chrome". We install into a project-local cache dir
// (configured in .puppeteerrc.cjs) which Netlify persists via the
// node_modules cache. Idempotent: skips the download if already present.
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// If a Chrome is explicitly provided — via PUPPETEER_EXECUTABLE_PATH or the
// executablePath in .puppeteerrc.cjs (local dev points both at Playwright's
// chromium, since puppeteer's own download is blocked here) — respect it and
// skip the download entirely. On Netlify neither is set, so we fall through.
function configuredExecutable() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  try {
    return require('../.puppeteerrc.cjs').executablePath || '';
  } catch {
    return '';
  }
}

const configured = configuredExecutable();
if (configured && existsSync(configured)) {
  console.log(`✓ Using configured Chrome: ${configured}`);
  process.exit(0);
}

const puppeteer = require('puppeteer');

try {
  const path = await puppeteer.executablePath();
  if (path && existsSync(path)) {
    console.log(`✓ Chrome already installed: ${path}`);
    process.exit(0);
  }
} catch {
  // executablePath throws when nothing is installed yet — fall through to install.
}

console.log('→ Installing Chrome for prerender…');
const cli = require.resolve('puppeteer/lib/puppeteer/node/cli.js');
const res = spawnSync(process.execPath, [cli, 'browsers', 'install', 'chrome'], {
  stdio: 'inherit',
});

if (res.status !== 0) {
  console.error('✗ Chrome install failed');
  process.exit(res.status ?? 1);
}
console.log('✓ Chrome installed');
