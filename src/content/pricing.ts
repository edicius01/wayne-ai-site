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
// Repositioned 2026-08-21: the site leads, the answering follows. AI phone
// answering is now a $19-59 self-serve commodity, so leading with it invites
// the wrong comparison. The website is the one component none of the answering
// services sell, so it is named first in every tier and the price anchor moved
// to human answering services (Ruby $250/50 min, PATLive $250/75 min). Prices
// themselves are unchanged.
//
// Payment Links minted 2026-07-28 (metadata source=pricing-market-reprice-2026-07,
// amounts API-verified). The old $397/$897/$1,497 links stay live until this
// merges — deactivate them in the Stripe dashboard AFTER merge.
export const pricingTiers: PricingTier[] = [
  {
    name: 'The Front Door',
    price: 149,
    paysFor: 'less than 1 recovered job/mo',
    badge: null,
    description: 'A Site Built to Book Jobs',
    features: [
      { text: 'Your Website, Built and Hosted', bold: true, subtext: '(or booking installed on the site you have)' },
      { text: 'Online Booking on Every Page', bold: true },
      { text: 'Missed-Call Text-Back', bold: true },
      { text: 'Standard Review Requests', bold: false },
      { text: 'N/A', bold: false, label: 'Voice AI Minutes' },
    ],
    bestFor: 'Solo operators who need a real site and every missed call caught by text',
    checkoutUrl: 'https://buy.stripe.com/eVq4gz7187SXfshbeOcAo03',
  },
  {
    name: 'The AI Front Desk',
    price: 297,
    paysFor: '~1 recovered job/mo',
    badge: 'MOST POPULAR',
    description: 'The Site, Plus Your Phone Answered',
    features: [
      { text: 'Everything in The Front Door, Site Included', bold: true },
      { text: 'Managed AI Phone Line (24/7 Missed-Call Capture)', bold: true },
      { text: 'SMS + Unified Inbox', bold: true },
      { text: 'Auto-Review Engine', bold: true },
      { text: 'Early Access: 250 Mins Included*', bold: true, label: 'Voice AI Minutes' },
    ],
    bestFor: "1-3 truck shops that can't answer while on the job",
    checkoutUrl: 'https://buy.stripe.com/9B63cv1GO6OTfsh1EecAo04',
  },
  {
    name: 'The Whole Phone Line',
    price: 497,
    paysFor: '~1-2 recovered jobs/mo',
    badge: 'PREMIUM',
    description: 'Site and Phone, Handled End to End',
    features: [
      { text: 'Everything in The AI Front Desk, Site Included', bold: true },
      { text: 'Booking on Your Real Calendar', bold: true },
      { text: 'Advanced Long-Term Drip', bold: true },
      { text: 'Monthly Call-Log Proof', bold: true },
      { text: 'Early Access: 600 Mins Included*', bold: true, label: 'Voice AI Minutes' },
    ],
    bestFor: '3+ truck operations that want the phone handled end to end',
    checkoutUrl: 'https://buy.stripe.com/eVq5kDfxE8X193Tgz8cAo05',
  },
];

// Per-minute charge for voice AI usage beyond a tier's included allowance.
export const voiceOverageRate = 0.35;
