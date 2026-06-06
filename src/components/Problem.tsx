import { PhoneOff, Clock, TrendingDown, PhoneIncoming, MailQuestion, FileX, StarOff, Frown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ value, label, icon, isVisible }: { value: number; label: string; icon: React.ReactNode; isVisible: boolean }) {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="text-center px-6 py-8">
      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-4xl font-black text-[#f97316] mb-2">
        {value === 62 ? `${count}%` : value === 5 ? `${count} min` : `$${count.toLocaleString()}s`}
      </div>
      <p className="text-[#94a3b8] text-sm">{label}</p>
    </div>
  );
}

export function Problem() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const stats = [
    {
      value: 62,
      label: 'Calls go unanswered',
      icon: <PhoneOff className="w-6 h-6 text-[#94a3b8]" strokeWidth={2} />,
    },
    {
      value: 5,
      label: 'Before they call someone else',
      icon: <Clock className="w-6 h-6 text-[#94a3b8]" strokeWidth={2} />,
    },
    {
      value: 1000,
      label: 'Lost to faster competitors monthly',
      icon: <TrendingDown className="w-6 h-6 text-[#94a3b8]" strokeWidth={2} />,
    },
  ];

  const painPointsLeft = [
    { Icon: PhoneIncoming, text: "Calls come in while you're on a job, driving, or after hours" },
    { Icon: MailQuestion, text: 'Web leads sit unanswered for hours or days' },
    { Icon: FileX, text: 'Estimates go cold because nobody follows up consistently' },
  ];

  const painPointsRight = [
    { Icon: StarOff, text: 'Reviews are random, so Google rankings stay stuck' },
    { Icon: TrendingDown, text: "You're losing thousands monthly to competitors who respond faster" },
    { Icon: Frown, text: 'Your team forgets to follow up, and opportunities slip away' },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            If you miss the call, you usually lose the job
          </h2>
          <p className="text-lg text-[#1f2937] max-w-2xl mx-auto">
            <span className="font-bold text-[#f97316]">62% of calls</span> to local service businesses go unanswered. When customers hit voicemail or don't hear back in minutes, they move on to your competitor.
          </p>
        </div>

        {/* Dark stats band */}
        <div className={`bg-[#0f172a] rounded-2xl mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} isVisible={isVisible} />
            ))}
          </div>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-4">
            {painPointsLeft.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#64748b] flex-shrink-0">
                  <point.Icon className="w-6 h-6" strokeWidth={2} />
                </span>
                <span className="text-[#1f2937]">{point.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {painPointsRight.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#64748b] flex-shrink-0">
                  <point.Icon className="w-6 h-6" strokeWidth={2} />
                </span>
                <span className="text-[#1f2937]">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
