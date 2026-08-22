import { Link } from 'react-router-dom';

// Price anchor for the trade LPs, 2026-08-21 reposition. The comparison a
// prospect reaches for is a HUMAN answering service, not the $19-59 self-serve
// AI apps, because that is what a shop this size has actually shopped for. Two
// facts do the work: those services cost 2-5x ours for answering alone, and not
// one of them builds the website the call came from.
//
// Rates are each vendor's published starter plan, verified 2026-08-21. Re-check
// before editing, and keep the dated footnote honest. Canon: vault
// "Reference/Wayne AI Positioning 2026.md", 2026-08-21 section.
const COMPARISON = [
  { name: 'Ruby', prefix: '', price: '$250', unit: '50 answering minutes', perMin: '$5.00/min', site: false, href: 'https://www.ruby.com/pricing/' },
  { name: 'PATLive', prefix: '', price: '$250', unit: '75 answering minutes', perMin: '$3.33/min', site: false, href: 'https://patlive.com/pricing/' },
  // No per-minute figure on our row on purpose: the $0.35 overage rate belongs to
  // the tiers that carry voice minutes, and pinning it to the $149 floor would be
  // a rate this plan does not include.
  { name: 'Wayne AI', prefix: 'from', price: '$149', unit: 'site, booking, text-back', perMin: 'no setup fee', site: true, href: null },
];

export function LpAnchor({ trade }: { trade: string }) {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-[#0f172a]">
          Compare it to what answering the phone already costs
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-lg text-[#475569]">
          Most {trade} who look at this have already priced an answering service. Here is what
          the big ones charge, off their own pricing pages.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {COMPARISON.map((c) => (
            <div
              key={c.name}
              className={`rounded-xl border-2 p-5 text-center ${
                c.site ? 'border-[#f97316] bg-[#FFF8F5]' : 'border-gray-300 bg-[#f8fafc]'
              }`}
            >
              <p className="font-bold text-[#0f172a]">{c.name}</p>
              <p className="mt-2 text-3xl font-extrabold text-[#0f172a]">
                {c.prefix && <span className="mr-1 text-base font-normal text-[#475569]">{c.prefix}</span>}
                {c.price}
                <span className="text-base font-normal text-[#475569]">/mo</span>
              </p>
              <p className="mt-1 text-sm text-[#475569]">{c.unit}</p>
              <p className="mt-1 text-xs font-semibold text-[#0f172a]">{c.perMin}</p>
              <p className={`mt-3 border-t pt-3 text-sm ${c.site ? 'border-[#f97316]/30 font-semibold text-[#0f172a]' : 'border-gray-300 text-[#475569]'}`}>
                {c.site ? '✓ Website built and run' : '✗ No website'}
              </p>
              {c.href && (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-[#94a3b8] underline underline-offset-2 hover:text-[#f97316]"
                >
                  Their pricing
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-[#0f172a] px-6 py-7 text-center">
          <p className="text-xl font-bold text-white">
            An answering service answers the phone. Nobody builds the website the call came from.
          </p>
          <p className="mt-3 text-[#cbd5e1]">
            Your site, the booking on it, the calls you miss, and the follow-up after are one
            monthly price here, starting at $149 with no setup fee.{' '}
            <Link to="/#pricing" className="font-semibold text-[#f97316] underline underline-offset-4">
              See all three plans
            </Link>
            .
          </p>
        </div>

        <p className="mt-5 text-center text-xs text-[#94a3b8]">
          Ruby and PATLive rates are their published starter plans as of August 2026. Per-minute
          figures are the plan price divided by the minutes it includes. Prices change, so check
          theirs before you decide.
        </p>
      </div>
    </section>
  );
}
