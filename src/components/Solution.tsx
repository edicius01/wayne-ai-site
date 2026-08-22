import { Globe, MessageSquareReply, BotMessageSquare, BellRing } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: 1,
    icon: <Globe className="w-8 h-8" strokeWidth={2} />,
    title: 'A Site Built to Book Jobs',
    description: 'We build you a fast, mobile-first site with booking on every page, or we install the booking on the site you already have. Your call.',
  },
  {
    number: 2,
    icon: <MessageSquareReply className="w-8 h-8" strokeWidth={2} />,
    title: 'Every Call Answered',
    description: "Busy on a job? The line still gets answered, by voice or by text back from your own number, asking what they need and offering a time.",
  },
  {
    number: 3,
    icon: <BotMessageSquare className="w-8 h-8" strokeWidth={2} />,
    title: 'Booked on Your Calendar',
    description: 'The right questions get asked, the lead gets qualified, your real availability gets checked, and the job lands on your calendar with no back-and-forth.',
  },
  {
    number: 4,
    icon: <BellRing className="w-8 h-8" strokeWidth={2} />,
    title: 'Reminders and Review Requests',
    description: 'Confirmations, reminders, and post-job review requests keep going out on their own, so fewer people forget and more of them leave you a review.',
  },
];

export function Solution() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            The whole front of your business, built and run
          </h2>
          <p className="text-lg text-[#1f2937] max-w-3xl mx-auto">
            Not a tool you have to set up. We build the site, wire the booking, answer the calls you miss, and keep the follow-up running. <span className="font-bold text-[#f97316]">One price, one company on the hook.</span>
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-slate-200" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
