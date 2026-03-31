import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "We confirm you're a fit and answer questions",
    duration: '15 minutes',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'You get a short intake form + we request access',
    duration: 'GBP, domain/email if needed',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'We install, test, and launch - then you run everything from one inbox',
    duration: null,
  },
];

export function Process() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Here's what happens after you book:
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-[#f97316]" />

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {steps.map((step, index) => (
              <div key={index} className="text-center relative bg-white rounded-xl p-6 border-2 border-gray-300 shadow-sm">
                <div className="w-12 h-12 bg-[#f97316] text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{step.title}</h3>
                {step.duration && (
                  <p className="text-sm text-[#374151]">({step.duration})</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
