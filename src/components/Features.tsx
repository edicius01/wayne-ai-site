import { Globe, ShieldCheck, Zap, CalendarClock, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: <Globe className="w-8 h-8" strokeWidth={2} />,
    title: 'A Site That Books Jobs',
    description: 'A fast, mobile-first site with your trades, your service area, and a booking button on every screen. Already have one you like? We add the booking to it instead.',
    benefits: ['Built and hosted by us', 'Booking on every page', 'Yours to keep the look you want'],
  },
  {
    icon: <ShieldCheck className="w-8 h-8" strokeWidth={2} />,
    title: 'Missed-Call Safety Net',
    description: 'If you miss the call, they get a text immediately so you stay in the game and get the booking.',
    benefits: ['Zero missed opportunities', 'Responds in under 30 seconds', 'Works 24/7, even after hours'],
  },
  {
    icon: <Zap className="w-8 h-8" strokeWidth={2} />,
    title: 'Speed-to-Lead Follow-Up',
    description: 'New leads get an automatic sequence that prompts a reply and pushes them toward scheduling.',
    benefits: ['Beat competitors to the response', 'Automated nurture sequences', 'Higher conversion rates'],
  },
  {
    icon: <CalendarClock className="w-8 h-8" strokeWidth={2} />,
    title: 'Booking + Reminders',
    description: 'A clean booking flow connected to your calendar, plus confirmations and reminders to reduce no-shows.',
    benefits: ['Syncs with your existing calendar', 'Automatic reminders before the appointment', 'Two-way text reminders'],
  },
  {
    icon: <Star className="w-8 h-8" strokeWidth={2} />,
    title: 'Reviews Engine',
    description: 'Review requests go out after the job, with follow-ups, so reviews become consistent instead of occasional.',
    benefits: ['Automatic timing post-job', 'More 5-star reviews', 'Better Google rankings'],
  },
];

export function Features() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="features" ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            What we build and run for you
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#1f2937]">
            Five pieces, installed and managed. You do not set any of it up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg border-2 border-gray-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[#0f172a]/5 rounded-xl flex items-center justify-center text-[#0f172a] mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0f172a] mb-3">{feature.title}</h3>
              <p className="text-[#1f2937] mb-4">{feature.description}</p>

              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-2 text-sm text-[#1f2937]">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}