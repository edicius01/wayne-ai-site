import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function WhoThisIsFor() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const perfectFit = [
    "You run a 2-5 truck shop and you're tired of playing phone tag while your guys are in the field",
    "You're a solo plumber who's growing fast and needs systems in place before you hire",
    "You've lost jobs to competitors who simply answered the phone faster",
    "You're ready to invest in a system that generates revenue, not just saves time",
  ];

  const notAFit = [
    "You're hunting for the cheapest option on the market (we're not that)",
    "You want a set it and forget it tool with zero support (we're hands-on partners)",
    "You're not ready to invest in growth right now (we'll be here when you are)",
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Is This Right for You?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-900">This is a perfect fit if:</h3>
              </div>

              <ul className="space-y-4">
                {perfectFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0 mt-1">✓</span>
                    <span className="text-green-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-900">This is NOT a fit if:</h3>
              </div>

              <ul className="space-y-4">
                {notAFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0 mt-1">✗</span>
                    <span className="text-red-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl text-[#0f172a] max-w-2xl mx-auto">
            <span className="font-bold">Bottom line:</span> We work with plumbers who see their business as a{' '}
            <span className="text-[#f97316] font-bold">business</span> - not just a job. If that's you, let's talk.
          </p>
        </div>
      </div>
    </section>
  );
}
