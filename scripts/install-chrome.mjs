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

// If a Chrome is explicitly provided (e.g. local dev with Playwright's
// chromium), respect it and skip the download entirely.
if (process.env.PUPPETEER_EXECUTABLE_PATH && existsSync(process.env.PUPPETEER_EXECUTABLE_PATH)) {
  console.log(`✓ Using PUPPETEER_EXECUTABLE_PATH: ${process.env.PUPPETEER_EXECUTABLE_PATH}`);
  process.exit(0);
}

const puppeteer = require('puppeteer');

try {
  const path = puppeteer.executablePath();
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
