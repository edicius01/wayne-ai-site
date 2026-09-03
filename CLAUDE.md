# CLAUDE.md — Wayne AI Site

Primary instruction file for Codex and AI coding assistants working on this codebase.
Full operating rules and agent personas are in `/home/wayne77/wayne_ai_workspace/AGENTS.md`.

---

## Project Identity

- **Site:** wayneai.net — marketing site for Wayne AI
- **Owner:** Wayne Dewig, Wayne AI founder
- **Purpose:** Lead generation for AI automation services targeting local home service and healthcare business owners

---

## Build & Verify

```bash
# Type-check + build (must exit 0 before any deploy)
npm run build

# Lint
npm run lint

# Local dev server (http://localhost:5173)
npm run dev
```

**Verification standard:** `npm run build` must exit 0 with no TypeScript errors. That is the minimum bar before any commit. There are no automated tests — build success + visual check is the current standard.

**A2P invariant:** the live Twilio SMS registration cites `/booking/`, `/privacy/`, `/terms/` and the "Book a Demo → /booking/" path as facts. Structural changes (nav/CTA targets, URL moves, prerender routes, consent copy) can silently falsify a LIVE registration. After any such change, run
`bash ~/wayne_ai_workspace/projects/wayne-crm/scripts/a2p-preflight.sh` (must PASS post-deploy). Consent copy changes ALSO require a new version in wayne-crm `lib/consent.ts`. Canon: wayne-crm `docs/A2P_RUNBOOK.md`.

---

## Deploy Pipeline

```
git add <files>
git commit -m "message"
git push
→ GitHub Actions (site/.github/workflows/deploy.yml)
→ Netlify auto-deploys to wayneai.net (~2 min)
```

- **Never force push to main**
- **Never skip commit hooks (`--no-verify`)**
- **Always run `npm run build` locally before pushing if there's any doubt**

---

## Stack gotcha

- react-helmet-async (SEO — every page must have a `<Helmet>` block or favicons drop)

---

## Design System

- **Background:** Dark navy `#0f172a` (hero, stats band)
- **Accent:** Orange `#f97316` (CTAs, highlights, stats)
- **Hero pattern:** Dot-grid texture + radial glow
- **Nav:** White text on dark hero (unscrolled) → dark text when scrolled or on interior pages
- **Do not** introduce new color tokens or override these without explicit instruction

---

## SEO Rules (critical)

- Every page and blog post needs a `<Helmet>` block with: `<title>`, `<meta name="description">`, `og:title`, `og:description`, `og:url`, `og:image`
- Blog post `og:url` must be dynamic per slug (not a static value)
- Blog category filter uses URL params (`/blog?category=HVAC`) — keep crawlable, do not revert to client-side state
- Internal linking: every blog post links to its niche LP + pillar post
- Pillar back-link required in every post:
  ```html
  <p><em>Want the full picture on AI automation for service businesses?
  <a href="/blog/complete-guide-ai-automation-local-service-businesses">
  Read our complete guide to AI automation for local service businesses.</a></em></p>
  ```

---

## Blog System

- Add a new post: create `src/content/blog/<slug>.html` + add entry to `src/content/blog/posts.ts`
- Featured images: Unsplash direct URLs only — `https://images.unsplash.com/photo-{ID}?w=1200&auto=format&fit=crop&q=80`
- Do NOT use AI-generated images for featured images — blurry at display size
- No "tool" in post titles
- No GHL named in copy — use generic language ("AI automation," "booking system," etc.)

---

## Landing Pages

- Route pattern: `/lp/<vertical>-<use-case>`
- Components live in `src/pages/lp/`
- All LPs must have minimal nav (logo + CTA only, no footer nav links) before running paid traffic
- `/lp/chiropractor-reactivation` is already minimal nav — no separate `-ads` variant needed
- UTM params (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are read from URL and appended to GHL form iframe `src` automatically on the chiro LP

---

## External Integrations

### GoHighLevel (GHL)
- SMS bridge only — forms/booking/CRM cut over to Wayne CRM; `book.wayneai.net` retired, all booking CTAs point to `/booking/` (native CRM widget)
- Location ID: `qn3C6gimURSVaujVaKiz`
- API base: `https://services.leadconnectorhq.com/`
- Header: `Authorization: Bearer {token}` + `Version: 2021-07-28`
- Never name GHL in client-facing copy

### MCP Servers
- Canva: `https://mcp.canva.com/mcp` (HTTP) — ad creative generation
- Stitch: `npx -y @_davideast/stitch-mcp proxy` — UI/design generation

---

## What Not To Do

- Do not add `console.log` statements to production code
- Do not install new dependencies without confirming with Wayne first
- Do not change the color system, nav behavior, or hero layout without explicit instruction
- Do not push to main without a passing `npm run build`
- Do not create a separate `-ads` variant of the chiro LP — it's already ads-ready
- Do not name GHL in any blog post or landing page copy
- Do not use "tool" in blog post titles

---

## Current Open Items

| Item | Status |
|---|---|
| Meta ads launch (chiro) | Ready for campaign setup — Canva A/B/C creatives built; manual upload to Meta still needed |
| Homepage social proof / testimonials | Not started — no client results on record |
| AI Business Audit page | Not started — `/services/ai-audit` or `/lp/ai-audit` |

---

*Last updated: 2026-05-05. For full operating rules, agent personas, and ClaudeClaw architecture see `AGENTS.md` in the workspace root.*
