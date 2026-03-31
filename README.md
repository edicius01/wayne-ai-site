# Wayne AI Website - Rebuild

This is your updated Wayne AI website with the new 3-tier pricing structure, improved conversion copy, and **4 additional pages**.

## What's New

### New Pages (Multi-Page Site with React Router)
- **Home** (`/`) - Main landing page with all conversion sections
- **Privacy** (`/privacy`) - Complete A2P-compliant privacy policy
- **Booking** (`/booking`) - Dedicated booking page with calendar embed
- **Demo** (`/demo`) - Interactive demo showcase (3 demo types)
- **About** (`/about`) - Your story and why Wayne AI exists

### New Components
- **ROICalculator.tsx** - Shows the math before pricing (catch 2 jobs = pays for itself)
- **Pricing.tsx** - 3-tier pricing table (Solo Shield, Growth Engine, AI Front Desk)
- **WhoThisIsFor.tsx** - Perfect fit / Not a fit filter section
- **Tier3Callout.tsx** - AI Front Desk feature highlight with emergency escalation
- **ObjectionCrusher.tsx** - Answers "What if I have a website?" and "Can't I DIY?"
- **FAQ.tsx** - Updated questions with upgrade/downgrade info

### Updated Components
- **InteractiveDemo.tsx** - New heading: "Here's exactly what your customers see when you miss a call"
- **Navigation.tsx** - React Router links to new pages
- **Footer.tsx** - Privacy policy link
- **App.tsx** - React Router setup with all pages

## Pages Breakdown

### 1. Home (`/`)
Complete landing page with all conversion sections (ROI calculator, pricing, demos, etc.)

### 2. Privacy (`/privacy`)
**Purpose:** A2P 10DLC compliance  
**Content:**
- Information collection and usage
- SMS/text messaging consent requirements
- Customer opt-out instructions (STOP, HELP)
- Data security measures
- GDPR/privacy rights
- A2P 10DLC compliance statement

### 3. Booking (`/booking`)
**Purpose:** Dedicated conversion page  
**Content:**
- What happens on the call (3-step breakdown)
- Calendar embed placeholder (ready for your booking link)
- Trust indicators (15 min max, no pressure, live demo)
- Call/text CTA

### 4. Demo (`/demo`)
**Purpose:** Interactive showcase  
**Content:**
- 3 demo types (switchable):
  1. Missed Call → Text Back (uses your InteractiveDemo component)
  2. Web Lead → Follow-Up (new visual flow)
  3. AI Voice Answering (Tier 3 showcase with emergency handling)
- Live call examples
- CTA to book

### 5. About (`/about`)
**Purpose:** Build trust and tell your story  
**Content:**
- The problem you saw (missed calls costing businesses thousands)
- Why you built Wayne AI
- Local focus (Evansville, Henderson, Owensboro)
- How it's different (white-glove, no DIY, real support)
- Your mission
- CTA to demo

## Installation

```bash
# Install dependencies (includes react-router-dom)
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build`
2. Drag the `dist` folder to Netlify

### Option 2: Connect to Git
1. Push this code to GitHub
2. Connect Netlify to your repo
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## Tech Stack
- Vite
- React 19
- TypeScript
- Tailwind CSS 4
- **React Router DOM 7** (for multi-page navigation)

## Notes
- All brand colors use `#f97316` (orange)
- Animations use scroll-triggered visibility
- Mobile-responsive with sticky CTAs
- GoHighLevel chat widget integrated
- Privacy policy is A2P 10DLC compliant

## Important: Booking Page Calendar
The `/booking` page has a placeholder for your calendar. To embed your actual booking calendar:

1. Open `src/pages/BookingPage.tsx`
2. Find the comment that says `<!-- To embed your actual calendar -->`
3. Replace the placeholder div with an iframe pointing to your booking URL

Example:
```tsx
<iframe
  src="https://book.wayneai.net/home"
  width="100%"
  height="600"
  frameBorder="0"
  title="Book a Strategy Call"
  className="rounded-lg"
/>
```
