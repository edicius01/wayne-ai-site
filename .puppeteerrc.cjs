const { join } = require('path');

// Keep Chrome inside the project so Netlify's node_modules cache persists it
// across builds (default ~/.cache/puppeteer is wiped on every fresh container).
module.exports = {
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
};
