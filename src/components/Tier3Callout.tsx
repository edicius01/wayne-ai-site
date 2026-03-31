import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Tier3Callout() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Picks up in under 2 rings',
      description: '(even at 2 AM on a Sunday)',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Qualifies the lead',
      description: '"Is this an emergency? What seems to be the issue?"',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Books the appointment',
      description: 'Directly into your calendar - no back-and-forth',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Knows when to escalate',
      description: 'Flood/gas leak/emergency → instant transfer to your cell or 911 direction',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <div className="inline-block bg-[#f97316] text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              THE AI FRONT DESK
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              🎙️ Your AI Receptionist Doesn't Just Text Back - It Answers the Phone Like a Real Person
            </h2>
            <p className="text-xl text-gray-300">
              Here's what it does:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-700 hover:bg-white/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-2xl p-8 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">🛡️ Human Handoff Guarantee</h3>
                <p className="text-white/90">
                  If the AI gets confused twice in a row, it doesn't trap the customer in a loop. It says:{' '}
                  <span className="italic">"I want to make sure I get this right. Let me have [Your Name] call you back ASAP. What's the best number?"</span>
                </p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-xl font-bold text-white">
                Translation: You get 24/7 coverage without the risk of losing a customer to a clunky robot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
