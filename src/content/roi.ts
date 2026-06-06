import { pricingTiers } from './pricing';

export interface RoiPreset {
  label: string;
  jobValue: number;
  missedCalls: number;
  closeRate: number;
  monthlyCost: number;
}

// Monthly cost defaults/bounds are derived from pricing so the calculator
// can never drift out of sync with the actual tier prices.
const popularPrice = pricingTiers.find((tier) => tier.badge === 'MOST POPULAR')?.price ?? pricingTiers[0].price;

export const roiPresets: RoiPreset[] = [
  { label: 'Plumbing', jobValue: 650, missedCalls: 9, closeRate: 48, monthlyCost: popularPrice },
  { label: 'HVAC', jobValue: 850, missedCalls: 7, closeRate: 42, monthlyCost: popularPrice },
  { label: 'Electrical', jobValue: 700, missedCalls: 6, closeRate: 45, monthlyCost: popularPrice },
  { label: 'Med Spa', jobValue: 425, missedCalls: 12, closeRate: 35, monthlyCost: popularPrice },
];

export const roiDefaults = {
  jobValue: 650,
  missedCalls: 8,
  closeRate: 45,
  monthlyCost: popularPrice,
};

export const roiMonthlyCostBounds = {
  min: pricingTiers[0].price,
  max: pricingTiers[pricingTiers.length - 1].price,
};
