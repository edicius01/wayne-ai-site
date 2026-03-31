# Wayne AI Website - Deployment Guide

## Quick Start

You have a complete, production-ready website rebuild with your new 3-tier pricing and conversion copy.

## What Changed

### ✅ New Sections
1. **ROI Calculator** - Shows customers the math (catch 2 jobs = pays for itself)
2. **3-Tier Pricing** - Solo Shield ($397), Growth Engine ($897), AI Front Desk ($1497)
3. **Who This Is For** - Green/red filter (perfect fit vs. not a fit)
4. **Tier 3 Callout** - Dark themed section highlighting AI Front Desk features
5. **Objection Crusher** - Handles "What if I have a website?" and "Can't I DIY?"

### 🔄 Updated
- **Pricing Table** - Now shows all 3 tiers with clear differentiation
- **FAQ** - Better questions including upgrade/downgrade info
- **Interactive Demo** - New heading: "Here's exactly what your customers see when you miss a call"

### ✓ Kept As-Is (Already Working)
- Hero, Problem, Solution, Features, Industries, Process, FinalCTA
- Navigation, Footer, Chat Widget, Mobile CTAs

## Deploy to Netlify (3 Options)

### Option 1: Drag & Drop (Fastest)
1. Open your terminal in the `wayneai-rebuild` folder
2. Run: `npm install`
3. Run: `npm run build`
4. Go to https://app.netlify.com/drop
5. Drag the `dist` folder onto the page
6. Done! Netlify gives you a URL

### Option 2: CLI Deploy (If you have Netlify CLI)
```bash
cd wayneai-rebuild
npm install
npm run build
netlify deploy --prod
```

### Option 3: Git Deploy (Best for ongoing updates)
1. Push this code to your GitHub repo
2. In Netlify, connect to your repo
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

## File Structure

```
wayneai-rebuild/
├── src/
│   ├── components/
│   │   ├── ROICalculator.tsx          ← NEW
│   │   ├── Pricing.tsx                ← UPDATED (3 tiers)
│   │   ├── WhoThisIsFor.tsx           ← NEW
│   │   ├── Tier3Callout.tsx           ← NEW
│   │   ├── ObjectionCrusher.tsx       ← NEW
│   │   ├── FAQ.tsx                    ← UPDATED
│   │   ├── InteractiveDemo.tsx        ← UPDATED (new heading)
│   │   └── [all other components]     ← Unchanged
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useCountUp.ts
│   ├── App.tsx                        ← UPDATED (new section order)
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Important: Before Deploying

Make sure you have your logo file in the `public` folder:
- The navigation references: `/og-image-1200x630_upscayl_4x_upscayl-standard-4x.png`
- Copy this from your old site's public folder

## Testing Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Pricing Summary (For Reference)

| Tier | Monthly | Setup | Target Market |
|------|---------|-------|---------------|
| **Solo Shield** | $397 | $697 | Solo plumbers |
| **Growth Engine** | $897 | $1,297 | 2-3 truck shops (MOST POPULAR) |
| **AI Front Desk** | $1,497 | $1,997 | 4+ truck operations |

## Questions?

If something doesn't look right or you need tweaks, just let me know which section and I'll update it.

## Next Steps

1. Deploy to Netlify
2. Test all CTAs (booking links, phone numbers)
3. Update your domain (wayneai.net) to point to new deploy
4. Done!
