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
    description: 'Replace a Human Receptionist',
    features: [
      { text: 'Voice AI (Answers Phone 24/7)', bold: true },
      { text: 'Conversion Site Included', bold: true },
      { text: 'Auto-Review Engine', bold: true },
      { text: 'Advanced + Voice Follow-Up', bold: true },
      { text: '250 Mins Included*', bold: true, label: 'Voice AI Minutes' },
    ],
    bestFor: '4+ truck operations replacing front desk payroll',
  },
];

// Per-minute charge for voice AI usage beyond a tier's included allowance.
export const voiceOverageRate = 0.35;
