import { PhoneCall, MessageCircleQuestion, CalendarPlus, TriangleAlert, Handshake } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Tier3Callout() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    {
      icon: <PhoneCall className="w-6 h-6" strokeWidth={2} />,
      title: 'Picks up in under 2 rings',
      description: '(even at 2 AM on a Sunday)',
    },
    {
      icon: <MessageCircleQuestion className="w-6 h-6" strokeWidth={2} />,
      title: 'Qualifies the lead',
      description: '"Is this an emergency? What seems to be the issue?"',
    },
    {
      icon: <CalendarPlus className="w-6 h-6" strokeWidth={2} />,
      title: 'Books the appointment',
      description: 'Directly into your calendar - no back-and-forth',
    },
    {
      icon: <TriangleAlert className="w-6 h-6" strokeWidth={2} />,
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
              🎙️ It Doesn't Just Text Back - It Answers Your Phone Like a Real Person
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
                  <div className="w-12 h-12 bg-[#f97316]/15 rounded-lg flex items-center justify-center text-[#f97316] flex-shrink-0">
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

          <div className={`bg-white/[0.07] border border-white/10 border-l-4 border-l-[#f97316] rounded-2xl p-8 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center flex-shrink-0">
                <Handshake className="w-6 h-6 text-white" strokeWidth={2} />
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
