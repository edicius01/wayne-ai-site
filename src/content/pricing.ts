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
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'The Solo Shield',
    price: 397,
    paysFor: '~1 recovered job/mo',
    badge: null,
    description: 'Stop Missing Calls',
    features: [
      { text: 'Missed Call Text-Back Only', bold: false },
      { text: 'Works with existing site', bold: false },
      { text: 'Standard Review Requests', bold: false },
      { text: 'Basic Text Follow-Up', bold: false },
      { text: 'N/A', bold: false, label: 'Voice AI Minutes' },
    ],
    bestFor: "Solo plumbers who don't want to miss another call",
  },
  {
    name: 'The Growth Engine',
    price: 897,
    paysFor: '~2 recovered jobs/mo',
    badge: 'MOST POPULAR',
    description: 'Dominate Your Market',
    features: [
      { text: 'SMS + Unified Inbox', bold: true },
      { text: 'Conversion Site Included', bold: true, subtext: '(or integrates with yours)' },
      { text: 'Auto-Review Engine', bold: true },
      { text: 'Advanced Long-Term Drip', bold: true },
      { text: 'N/A', bold: false, label: 'Voice AI Minutes' },
    ],
    bestFor: '2-3 truck shops ready to scale without hiring',
  },
  {
    name: 'The AI Front Desk',
    price: 1497,
    paysFor: '~3 recovered jobs/mo',
    badge: 'PREMIUM',
    description: 'Answer Every Call, 24/7',
    features: [
      { text: 'Voice AI (Answers Phone 24/7)', bold: true },
      { text: 'Conversion Site Included', bold: true },
      { text: 'Auto-Review Engine', bold: true },
      { text: 'Advanced + Voice Follow-Up', bold: true },
      { text: '250 Mins Included*', bold: true, label: 'Voice AI Minutes' },
    ],
    bestFor: '4+ truck operations replacing front desk payroll',
  },
  {
    name: 'Front Office + Growth',
    price: 1997,
    paysFor: '~4 recovered jobs/mo',
    badge: 'NEW',
    description: 'Growth Managed For You',
    features: [
      { text: 'Everything in The AI Front Desk', bold: true },
      { text: 'Ad Management + Lead Generation', bold: true },
      { text: 'Monthly Strategy Review', bold: true, subtext: 'your numbers, what to tune next' },
      { text: 'Priority Support Line', bold: true },
      { text: '500 Mins Included*', bold: true, label: 'Voice AI Minutes' },
    ],
    bestFor: 'Established operations that want growth handled end-to-end, not just calls answered',
  },
];

// Per-minute charge for voice AI usage beyond a tier's included allowance.
export const voiceOverageRate = 0.35;
