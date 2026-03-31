import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ value, label, icon, isVisible }: { value: number; label: string; icon: React.ReactNode; isVisible: boolean }) {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
      <div className="w-12 h-12 bg-[#f97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-[#0f172a] mb-2">
        {value === 62 ? `${count}%` : value === 5 ? `${count} minutes` : `$${count.toLocaleString()}s`}
      </div>
      <p className="text-[#374151]">{label}</p>
    </div>
  );
}

export function Problem() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const stats = [
    {
      value: 62,
      label: 'Calls go unanswered',
      icon: (
        <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6" />
        </svg>
      ),
    },
    {
      value: 5,
      label: 'Before they call someone else',
      icon: (
        <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: 1000,
      label: 'Lost to faster competitors monthly',
      icon: (
        <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 12l-4 4m0-4l4 4" />
        </svg>
      ),
    },
  ];

  const painPointsLeft = [
    { icon: 'phone', text: "Calls come in while you're on a job, driving, or after hours" },
    { icon: 'user', text: 'Web leads sit unanswered for hours or days' },
    { icon: 'clipboard', text: 'Estimates go cold because nobody follows up consistently' },
  ];

  const painPointsRight = [
    { icon: 'star', text: 'Reviews are random, so Google rankings stay stuck' },
    { icon: 'phone', text: "You're losing thousands monthly to competitors who respond faster" },
    { icon: 'sad', text: 'Your team forgets to follow up, and opportunities slip away' },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            If you miss the call, you usually lose the job
          </h2>
          <p className="text-lg text-[#1f2937] max-w-2xl mx-auto">
            <span className="font-bold text-[#f97316]">62% of calls</span> to home service businesses go unanswered. When customers hit voicemail or don't hear back in minutes, they move on to your competitor.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} isVisible={isVisible} />
          ))}
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-4">
            {painPointsLeft.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#f97316] text-xl flex-shrink-0">
                  {point.icon === 'phone' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {point.icon === 'user' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  {point.icon === 'clipboard' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )}
                </span>
                <span className="text-[#1f2937]">{point.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {painPointsRight.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#f97316] text-xl flex-shrink-0">
                  {point.icon === 'star' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  )}
                  {point.icon === 'phone' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )}
                  {point.icon === 'sad' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
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
