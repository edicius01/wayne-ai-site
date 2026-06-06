import { MessageSquareReply, BotMessageSquare, BellRing } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: 1,
    icon: <MessageSquareReply className="w-8 h-8" strokeWidth={2} />,
    title: 'Missed Call → Instant Text',
    description: "Customer calls while you're busy? They get a text back in seconds asking how we can help and offering to book their appointment.",
  },
  {
    number: 2,
    icon: <BotMessageSquare className="w-8 h-8" strokeWidth={2} />,
    title: 'AI Qualifying & Booking',
    description: 'Our AI asks the right questions, qualifies the lead, checks your calendar availability, and books them directly - no back-and-forth needed.',
  },
  {
    number: 3,
    icon: <BellRing className="w-8 h-8" strokeWidth={2} />,
    title: 'Reminders & Review Requests',
    description: 'Automated confirmations, reminders, and post-job review requests go out automatically so you get more 5-star reviews and fewer no-shows.',
  },
];

export function Solution() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            The receptionist that never sleeps
          </h2>
          <p className="text-lg text-[#1f2937] max-w-3xl mx-auto">
            Wayne AI responds to <span className="font-bold text-[#f97316]">every missed call</span> with an instant text, captures their information, and guides them straight into your booking calendar - automatically.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-slate-200" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-[#f97316] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>

                <div className="w-16 h-16 bg-[#0f172a]/5 rounded-2xl flex items-center justify-center text-[#0f172a] mb-6">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{step.title}</h3>
                <p className="text-[#1f2937]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
