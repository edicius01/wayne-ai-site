export interface PricingFeature {
  text: string;
  bold: boolean;
  label?: string;
  subtext?: string;
}

export interface PricingTier {
  name: string;
  price: number;
  paysFor: string;
  badge: string | null;
  description: string;
  features: PricingFeature[];
  bestFor: string;
  /** Live Stripe Payment Link (monthly subscription, first month at signup). */
  checkoutUrl: string;
}

// Repriced 2026-07-28 against the AI-receptionist category (research in PR).
// The market bands: self-serve AI $49-299 (Rosie $49/$149/$299, Goodcall
// $79-249), done-for-you solo practice $199-499, human-hybrid $300+
// (Smith.ai $300/30 calls). These tiers sit inside the done-for-you band and
// sell what self-serve can't: built for you in 7 days, site included, proof
// on a live line. Missed-call text-back is a FEATURE of every tier, never a
// product — the market prices it between free-DIY and a $99 add-on.
//
// TODO before merge: checkoutUrl is a placeholder (/booking/) on all three
// tiers — mint Stripe Payment Links for $149/$297/$497 monthly and swap them
// in (the old $397/$897/$1,497 links stay live until this merges, then
// deactivate them in the dashboard).
export const pricingTiers: PricingTier[] = [
  {
    name: 'The Front Door',
    price: 149,
    paysFor: 'less than 1 recovered job/mo',
    badge: null,
    description: 'Never Miss the First Call',
    features: [
      { text: 'Conversion Site Included', bold: true, subtext: '(or integrates with yours)' },
      { text: 'Missed-Call Text-Back', bold: true },
      { text: 'Online Booking', bold: false },
      { text: 'Standard Review Requests', bold: false },
      { text: 'N/A', bold: false, label: 'Voice AI Minutes' },
    ],
    bestFor: 'Solo operators who want every missed call caught by text',
    checkoutUrl: '/booking/',
  },
  {
    name: 'The AI Front Desk',
    price: 297,
    paysFor: '~1 recovered job/mo',
    badge: 'MOST POPULAR',
    description: 'Your Phone Answered 24/7',
    features: [
      { text: 'Managed AI Phone Line (24/7 Missed-Call Capture)', bold: true },
      { text: 'Everything in The Front Door', bold: false },
      { text: 'SMS + Unified Inbox', bold: true },
      { text: 'Auto-Review Engine', bold: true },
      { text: 'Early Access — 250 Mins Included*', bold: true, label: 'Voice AI Minutes' },
    ],
    bestFor: "1-3 truck shops that can't answer while on the job",
    checkoutUrl: '/booking/',
  },
  {
    name: 'The Whole Phone Line',
    price: 497,
    paysFor: '~1-2 recovered jobs/mo',
    badge: 'PREMIUM',
    description: 'The Phone Handled End to End',
    features: [
      { text: 'Everything in The AI Front Desk', bold: false },
      { text: 'Booking on Your Real Calendar', bold: true },
      { text: 'Advanced Long-Term Drip', bold: true },
      { text: 'Monthly Call-Log Proof', bold: true },
      { text: 'Early Access — 600 Mins Included*', bold: true, label: 'Voice AI Minutes' },
    ],
    bestFor: '3+ truck operations that want the phone handled end to end',
    checkoutUrl: '/booking/',
  },
];

// Per-minute charge for voice AI usage beyond a tier's included allowance.
export const voiceOverageRate = 0.35;
