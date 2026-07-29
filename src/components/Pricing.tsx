import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { pricingTiers as tiers, voiceOverageRate } from '../content/pricing';

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="pricing" ref={ref} className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Three Ways to Work With Us
          </h2>
          <p className="text-lg text-[#1f2937] max-w-3xl mx-auto">
            Choose the level that fits where your business is today - you can always upgrade as you grow.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-[#0f172a]">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" /> No setup fees
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" /> Month-to-month
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" /> 2-job guarantee
            </span>
          </div>
        </div>

        <div className={`mx-auto mb-12 max-w-3xl rounded-2xl border border-[#0f172a]/10 bg-[#0f172a] px-6 py-6 text-center sm:px-8 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg font-semibold text-white sm:text-xl">
            Don't compare these plans to $0. Compare them to what you're losing.
          </p>
          <p className="mt-3 text-[#cbd5e1]">
            <span className="font-bold text-[#f97316]">62% of calls</span> to local service businesses go unanswered, and the first business to respond usually wins the job. At a typical miss rate that's <span className="font-bold text-[#f97316]">$2,000+ in jobs</span> walking out the door every month. Every plan below is priced to pay for itself with a single recovered job.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 px-2 md:px-0">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                tier.badge === 'MOST POPULAR' ? 'border-[#f97316] lg:scale-105' : 'border-gray-300'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {tier.badge && (
                <div className={`absolute top-0 right-0 ${tier.badge === 'MOST POPULAR' ? 'bg-[#f97316]' : 'bg-gray-700'} text-white text-xs font-bold px-4 py-2 rounded-bl-lg`}>
                  {tier.badge}
                </div>
              )}

              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{tier.name}</h3>
                <p className="text-[#374151] mb-6">{tier.description}</p>

                <div className="mb-6">
                  <div className="text-5xl font-bold text-[#0f172a]">
                    ${tier.price}<span className="text-xl font-normal text-[#374151]">/mo</span>
                  </div>
                  <p className="text-sm font-semibold text-[#0f172a] mt-2">
                    No setup fee <span className="font-normal text-[#374151]">— first month due at signup</span>
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16a34a]">
                    <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Pays for itself at {tier.paysFor}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="flex-1">
                        {feature.label && (
                          <div className="text-xs text-[#6b7280] mb-1">{feature.label}</div>
                        )}
                        <span className={feature.bold ? 'font-semibold text-[#0f172a]' : 'text-[#374151]'}>
                          {feature.text}
                        </span>
                        {feature.subtext && (
                          <div className="text-sm text-[#6b7280] italic">{feature.subtext}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#FFF8F5] rounded-lg p-4 mb-4">
                  <p className="text-sm text-[#374151]">
                    <span className="font-semibold text-[#0f172a]">Best for:</span> {tier.bestFor}
                  </p>
                </div>

                <div className="mb-6 flex items-center gap-2 rounded-lg border border-[#16a34a]/30 bg-[#16a34a]/[0.06] px-3 py-2.5">
                  <svg className="h-5 w-5 flex-shrink-0 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-semibold text-[#0f172a]">2 jobs in 30 days or your money back</span>
                </div>

                <a
                  href={tier.checkoutUrl}
                  className={`block w-full text-center font-semibold py-4 rounded-lg transition-all duration-200 ${
                    tier.badge === 'MOST POPULAR'
                      ? 'bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg hover:shadow-xl'
                      : 'bg-white hover:bg-gray-50 text-[#0f172a] border-2 border-gray-300 hover:border-[#f97316]'
                  }`}
                >
                  Start Today
                </a>
                <p className="mt-3 text-center text-xs text-[#6b7280]">
                  No long-term contract · Cancel anytime ·{' '}
                  <a href="/booking/" className="font-semibold text-[#0f172a] underline decoration-[#f97316] underline-offset-2 hover:text-[#f97316]">
                    Prefer to talk first? Book a call
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-[#f97316] bg-[#FFF8F5] p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <svg className="h-12 w-12 flex-shrink-0 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] sm:text-2xl">Our 30-Day Job Guarantee</h3>
                <p className="mt-2 text-[#374151]">
                  If the system doesn't catch at least <span className="font-bold text-[#f97316]">2 new jobs in your first 30 days</span>, we refund your first month and part ways as friends. No long-term contract — you're month-to-month and can cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-8 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-xl p-6 inline-block shadow-md border border-gray-200">
            <h4 className="font-bold text-[#0f172a] mb-2">Your Build Is Included — Done in 7 Days</h4>
            <p className="text-sm text-[#374151] max-w-2xl">
              No setup fee. We custom-build your entire system in 7 days or less: calendar sync, SMS templates, review automation, website integration (or new site build), and 30 days of white-glove support. You don't waste 40+ hours trying to DIY this - we handle it, test it, and hand you a working system.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-[#6b7280] mt-6">
          *Voice AI (an AI that answers your phone, talks, and books) is live — call (812) 612-3105 to hear it.
          The AI Front Desk includes it on your own number as early access (250 minutes included); The Whole
          Phone Line includes 600 minutes. Beyond your allowance it's ${voiceOverageRate.toFixed(2)}/min.
          Prefer text? The managed line also catches every missed call by text.
        </p>
      </div>
    </section>
  );
}