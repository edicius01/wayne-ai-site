import { PhoneCall, MessageSquareText, CalendarPlus, ClipboardCheck, Handshake } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Tier3Callout() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    {
      icon: <PhoneCall className="w-6 h-6" strokeWidth={2} />,
      title: 'Catches every missed call',
      description: '(even at 2 AM on a Sunday, the text-back goes out in seconds)',
    },
    {
      icon: <MessageSquareText className="w-6 h-6" strokeWidth={2} />,
      title: 'Texts from the number they just dialed',
      description: 'Not a third-party number your customer has never seen. Your line answers.',
    },
    {
      icon: <CalendarPlus className="w-6 h-6" strokeWidth={2} />,
      title: 'Books the appointment',
      description: 'A real booking link, straight onto your calendar, no back-and-forth',
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" strokeWidth={2} />,
      title: 'Logs the proof',
      description: 'Every call caught shows up in your dashboard. Jobs saved is a number, not a vibe.',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <div className="inline-block bg-[#f97316] text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              PROOF, NOT PROMISES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              📞 The site brings them in. This is what happens when they call.
            </h2>
            <p className="text-xl text-gray-300">
              Here's what it does, live, today:
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
                <h3 className="text-xl font-bold text-white mb-2">🛡️ Proof Over Promises</h3>
                <p className="text-white/90">
                  Voice answering is live. An AI picks up, talks, and books a time. AI Front Desk
                  customers get it on their own number first. We don't sell what you can't hear, so hear it
                  now on our own business line:{' '}
                  <a href="/demo" className="underline decoration-[#f97316] underline-offset-4 font-semibold">
                    call it. An AI answers, or hang up and it texts you back
                  </a>.
                </p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-xl font-bold text-white">
                Translation: the phone is covered around the clock, by an AI that answers and books, not a half-baked robot you'd be embarrassed by. Hear it before you buy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
