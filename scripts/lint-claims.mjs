// Claim-boundary gate. Fails the build when site copy attaches a number to an
// outcome we deliver.
//
// Why this exists: the claim boundary in vault "Reference/Wayne AI Positioning
// 2026.md" lists any results stat — client counts, averages, efficacy rates —
// as NEVER-SAY while zero clients are on record. In Aug 2026 all eight trade
// LPs were carrying one, and finding them took three passes because each page
// phrased it differently ("typically recover 20-30%", "typically see 15-25%",
// "up to 35% reactivation rate", "10x the response rate"). Grepping for a
// phrase misses the next phrasing; this matches the SHAPE — a number bound to
// an outcome verb.
//
// Two severities, because two different things are wrong:
//   BLOCK  a results/efficacy claim about what our system achieves. Never-say
//          until a real client win exists. Fails the build.
//   WARN   an unsourced market/problem stat about the PROSPECT's situation
//          ("80% of callers hang up after voicemail"). Allowed by the canon and
//          load-bearing for the argument, but unsourced. Reported, not fatal.
//          Use --strict to fail on these too.
//
// Usage:  node scripts/lint-claims.mjs [--strict] [--blog] [--quiet]

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

const args = process.argv.slice(2);
const STRICT = args.includes('--strict');
const INCLUDE_BLOG = args.includes('--blog') || STRICT;
const QUIET = args.includes('--quiet');

const allowlist = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'claims-allowlist.json'), 'utf8')
).allow;

// A number: percentage, multiplier, or a range of either.
const NUM = String.raw`\d+(?:[.,]\d+)?\s*(?:[–—-]\s*\d+(?:[.,]\d+)?\s*)?%`;
// Both directions count: a system that "recovers 30% more jobs" and one that
// "reduces no-shows by 40%" are the same kind of unevidenced efficacy claim.
const OUTCOME_VERB = String.raw`recover|reactivate|convert|capture|rebook|re-book|book|generate|see|return|save|increase|boost|lift|close|reduces?|cuts?|eliminates?|decreases?|drops?|lowers?|slashes?`;
const COUNT_NOUN = String.raw`appointments?|jobs?|patients?|clients?|visits?|inspections?|calls?|leads?|bookings?`;

// BLOCK — a number bound to an outcome we deliver.
const BLOCK_RULES = [
  {
    id: 'typically-outcome',
    // "typically recover 20-30%", "typically see 15-25%", "on average books"
    re: new RegExp(String.raw`\b(?:typically|on average|averages?)\b[^.!?]{0,40}?\b(?:${OUTCOME_VERB})\b`, 'i'),
    hint: 'A typical/average outcome is a results stat. Use the guarantee instead.',
  },
  {
    id: 'up-to-rate',
    // "reactivate up to 35% of lapsed patients"
    re: new RegExp(String.raw`\bup to\s+${NUM}`, 'i'),
    hint: '"Up to N%" is an efficacy ceiling we cannot evidence.',
  },
  {
    id: 'multiplier-rate',
    // "10x the response rate", "5× more replies"
    re: /\b\d+(?:\.\d+)?\s*[x×]\s+(?:the\s+)?(?:\w+\s+){0,2}(?:rate|response|replies|results|bookings)\b/i,
    hint: 'A multiplier on a response/conversion rate is an efficacy claim.',
  },
  {
    id: 'automated-then-number',
    // "companies using automated lead response ... 20-30%"
    re: new RegExp(String.raw`\b(?:using|running|with)\s+(?:our\s+)?automated\b[^.!?]{0,80}?${NUM}`, 'i'),
    hint: 'Attributes a percentage to running our automation.',
  },
  {
    id: 'verb-then-percent',
    // "recover 20-30% of calls", "book 20-30% more inspections"
    re: new RegExp(String.raw`\b(?:${OUTCOME_VERB})\b[^.!?]{0,30}?${NUM}`, 'i'),
    hint: 'A percentage bound to an outcome verb is a results claim.',
  },
  {
    id: 'percent-more-noun',
    // "20-30% more inspections"
    re: new RegExp(String.raw`${NUM}\s+more\s+(?:${COUNT_NOUN})`, 'i'),
    hint: '"N% more <outcome>" is a results claim.',
  },
  {
    id: 'arithmetic-forecast',
    // "that's 60-90 hygiene appointments"
    re: new RegExp(String.raw`\bthat'?s\s+\d+\s*[–—-]\s*\d+\s+(?:\w+\s+){0,2}(?:${COUNT_NOUN})`, 'i'),
    hint: 'Multiplying an invented rate into a forecast reads as a promise.',
  },
  {
    id: 'client-results',
    // "our clients see", "most shops recover"
    re: new RegExp(String.raw`\b(?:our|most)\s+(?:clients?|customers?|shops?|practices?)\b[^.!?]{0,30}?\b(?:${OUTCOME_VERB})\b`, 'i'),
    hint: 'A claim about what clients achieve. Never-say until a real win exists.',
  },
  {
    id: 'testimonial-surface',
    re: /\b(?:case stud(?:y|ies)|success stor(?:y|ies))\b/i,
    hint: 'Testimonials and case studies are never-say until the first real Won.',
  },
];

// WARN — a bare percentage in prose. Market/problem stats live here.
const WARN_RE = new RegExp(NUM, 'i');

function isAllowed(line) {
  return allowlist.some((a) => line.includes(a.match));
}

// Strip the things that carry numbers but aren't copy: imports, className/style
// attributes, svg path data, url()s, hex colors, and JS number literals in
// tailwind-ish strings.
function stripNonCopy(text, isHtml) {
  let t = text;
  if (!isHtml) {
    t = t.replace(/^\s*import\s.+$/gm, '');
  }
  t = t
    .replace(/className\s*=\s*(?:"[^"]*"|'[^']*'|\{`[^`]*`\})/g, '')
    .replace(/class\s*=\s*"[^"]*"/g, '')
    .replace(/style\s*=\s*(?:"[^"]*"|\{\{[^}]*\}\})/g, '')
    .replace(/<svg[\s\S]*?<\/svg>/g, '')
    .replace(/\bd\s*=\s*"[^"]*"/g, '')
    .replace(/viewBox\s*=\s*"[^"]*"/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/#[0-9a-fA-F]{3,8}\b/g, '');
  return t;
}

function collect(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) collect(p, exts, out);
    else if (exts.some((x) => e.name.endsWith(x))) out.push(p);
  }
  return out;
}

const targets = [
  ...collect(path.join(SRC, 'pages'), ['.tsx']),
  ...collect(path.join(SRC, 'components'), ['.tsx']),
  path.join(SRC, 'content', 'pricing.ts'),
  ...(INCLUDE_BLOG ? collect(path.join(SRC, 'content', 'blog'), ['.html', '.ts']) : []),
].filter((p) => fs.existsSync(p));

const blocks = [];
const warns = [];
const blogReview = [];
const isBlog = (rel) => rel.includes(path.join('content', 'blog'));

for (const file of targets) {
  const isHtml = file.endsWith('.html');
  const raw = fs.readFileSync(file, 'utf8');
  const cleaned = stripNonCopy(raw, isHtml).split('\n');
  const rel = path.relative(ROOT, file);

  // Join wrapped JSX prose so a claim split across lines still matches, but keep
  // the starting line number for reporting.
  for (let i = 0; i < cleaned.length; i++) {
    const window = cleaned
      .slice(i, i + 3)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!window || isAllowed(window)) continue;

    const hit = BLOCK_RULES.find((r) => r.re.test(window));
    if (hit) {
      // Blog prose legitimately discusses industry rates ("most service
      // businesses convert 20-40% of estimates"), which these rules cannot
      // distinguish from an efficacy claim the way they can in marketing copy.
      // Measured precision on the blog corpus is poor, so blog hits are review
      // items, never build failures. Marketing copy is where the gate bites.
      const bucket = isBlog(rel) ? blogReview : blocks;
      const already = bucket.some((b) => b.file === rel && Math.abs(b.line - (i + 1)) < 3);
      if (!already) bucket.push({ file: rel, line: i + 1, rule: hit.id, hint: hit.hint, text: window.slice(0, 150) });
      continue;
    }
    // Only warn on the line itself, not the 3-line window, to keep line numbers tight.
    const own = cleaned[i].replace(/\s+/g, ' ').trim();
    if (own && !isAllowed(own) && WARN_RE.test(own)) {
      const already = warns.some((w) => w.file === rel && w.line === i + 1);
      if (!already) warns.push({ file: rel, line: i + 1, text: own.slice(0, 120) });
    }
  }
}

const RED = '\x1b[31m';
const YEL = '\x1b[33m';
const DIM = '\x1b[2m';
const OFF = '\x1b[0m';

if (blocks.length) {
  console.error(`\n${RED}✗ claim-boundary check FAILED — ${blocks.length} results/efficacy claim(s)${OFF}`);
  console.error(`${DIM}  Never-say while zero clients are on record. Canon: vault Reference/Wayne AI Positioning 2026.md${OFF}\n`);
  for (const b of blocks) {
    console.error(`  ${RED}${b.file}:${b.line}${OFF}  [${b.rule}]`);
    console.error(`    ${b.text}`);
    console.error(`    ${DIM}→ ${b.hint}${OFF}\n`);
  }
  console.error(`${DIM}  Fix: replace with the 2-jobs-or-refund guarantee and the live line (812) 612-3105.`);
  console.error(`  If a claim is genuinely sanctioned, add it to scripts/claims-allowlist.json with a reason.${OFF}\n`);
}

if (warns.length && !QUIET) {
  console.log(`\n${YEL}⚠ ${warns.length} unsourced market stat(s)${OFF} ${DIM}(allowed by the canon — about the prospect's situation, not our results — but unsourced)${OFF}`);
  for (const w of warns) console.log(`  ${DIM}${w.file}:${w.line}${OFF}  ${w.text}`);
  console.log(`${DIM}  Source them, or swap for the canon's 62% missed-call figure.${OFF}\n`);
}

if (blogReview.length && !QUIET) {
  console.log(`\n${YEL}⚠ ${blogReview.length} blog line(s) worth a human read${OFF} ${DIM}(--blog: long-form prose cites industry rates legitimately, so expect false positives here — judgment required, never fatal)${OFF}`);
  for (const b of blogReview) console.log(`  ${DIM}${b.file}:${b.line}${OFF}  [${b.rule}] ${b.text.slice(0, 100)}`);
  console.log('');
}

if (blocks.length) process.exit(1);
if (STRICT && warns.length) {
  console.error(`${RED}✗ --strict: unsourced market stats present${OFF}`);
  process.exit(1);
}
console.log(`✓ claim-boundary check: ${targets.length} files, no results/efficacy claims${warns.length ? ` (${warns.length} unsourced market stat${warns.length === 1 ? '' : 's'} noted)` : ''}`);
