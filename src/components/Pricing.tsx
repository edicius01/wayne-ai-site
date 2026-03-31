import { useScrollAnimation } from '../hooks/useScrollAnimation';

// 1. Add these interfaces to define the shape of your data
interface Feature {
  text: string;
  bold: boolean;
  label?: string;   // Optional (?)
  subtext?: string; // Optional (?)
}

interface Tier {
  name: string;
  price: number;
  setup: number;
  badge: string | null;
  description: string;
  features: Feature[];
  bestFor: string;
}

// 2. Apply the type to the array: "const tiers: Tier[]"
const tiers: Tier[] = [
  {
    name: 'The Solo Shield',
    price: 397,
    setup: 697,
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
    setup: 1297,
    badge: 'MOST POPULAR',
    description: 'Dominate Your Market',
    features: [
      { text: 'SMS + Unified Inbox', bold: true },
      // This item caused the error because it was the only one with subtext
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
    setup: 1997,
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
                  <p className="text-sm text-[#374151] mt-2">
                    + ${tier.setup} Fast-Track Setup
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

                <div className="bg-[#FFF8F5] rounded-lg p-4 mb-6">
                  <p className="text-sm text-[#374151]">
                    <span className="font-semibold text-[#0f172a]">Best for:</span> {tier.bestFor}
                  </p>
                </div>

                <a
                  href="https://book.wayneai.net/home"
                  className={`block w-full text-center font-semibold py-4 rounded-lg transition-all duration-200 ${
                    tier.badge === 'MOST POPULAR'
                      ? 'bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg hover:shadow-xl'
                      : 'bg-white hover:bg-gray-50 text-[#0f172a] border-2 border-gray-300 hover:border-[#f97316]'
                  }`}
                >
                  Book Strategy Call
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-xl p-6 inline-block shadow-md border border-gray-200">
            <h4 className="font-bold text-[#0f172a] mb-2">What "Fast-Track Setup" Means</h4>
            <p className="text-sm text-[#374151] max-w-2xl">
              We custom-build your entire system in 7 days or less: calendar sync, SMS templates, review automation, website integration (or new site build), and 30 days of white-glove support. You don't waste 40+ hours trying to DIY this - we handle it, test it, and hand you a working system.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-[#6b7280] mt-6">
          *Additional voice minutes: $0.35/min after included allowance
        </p>
      </div>
    </section>
  );
}