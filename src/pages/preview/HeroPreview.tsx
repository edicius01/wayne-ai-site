import { useState } from 'react';
import { HeroRefined } from '../../components/preview/HeroRefined';
import { HeroSpotlight } from '../../components/preview/HeroSpotlight';
import { HeroEditorial } from '../../components/preview/HeroEditorial';

const VARIANTS = [
  { key: 'a', label: 'A · Refined Depth', sub: 'Polish the current split layout', el: <HeroRefined /> },
  { key: 'b', label: 'B · Centered Spotlight', sub: 'Bold centered, live ticker + stats', el: <HeroSpotlight /> },
  { key: 'c', label: 'C · Editorial', sub: 'Gradient wash, oversized type, phone', el: <HeroEditorial /> },
] as const;

export function HeroPreview() {
  const [active, setActive] = useState<(typeof VARIANTS)[number]['key']>('a');
  const current = VARIANTS.find((v) => v.key === active) ?? VARIANTS[0];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#64748b]">Hero directions</span>
          {VARIANTS.map((v) => (
            <button
              key={v.key}
              type="button"
              onClick={() => setActive(v.key)}
              className={`rounded-lg border px-4 py-2 text-left text-sm transition ${
                active === v.key
                  ? 'border-[#f97316] bg-[#f97316]/15 text-white'
                  : 'border-white/10 bg-white/5 text-[#94a3b8] hover:border-white/25 hover:text-white'
              }`}
            >
              <span className="block font-semibold">{v.label}</span>
              <span className="block text-xs text-[#64748b]">{v.sub}</span>
            </button>
          ))}
        </div>
      </div>
      {current.el}
    </div>
  );
}
