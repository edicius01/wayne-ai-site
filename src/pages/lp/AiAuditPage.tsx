import { Helmet } from 'react-helmet-async';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { ChatWidget } from '../../components/ChatWidget';
import { BackToTop } from '../../components/BackToTop';
import { CrmBookingEmbed } from '../../components/CrmBookingEmbed';

export function AiAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Free AI Opportunity Audit for Service Businesses | Wayne AI</title>
        <meta
          name="description"
          content="Get a free, no-pitch AI Opportunity Audit. We show you exactly where your service business is losing leads and jobs, and which automations recover them."
        />
        <link rel="canonical" href="https://wayneai.net/lp/ai-audit" />
        <meta property="og:title" content="Free AI Opportunity Audit for Service Businesses | Wayne AI" />
        <meta
          property="og:description"
          content="Get a free, no-pitch AI Opportunity Audit. We show you exactly where your service business is losing leads and jobs, and which automations recover them."
        />
        <meta property="og:url" content="https://wayneai.net/lp/ai-audit" />
        <meta property="og:image" content="https://wayneai.net/og-image-1200x630.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] pt-32 pb-20 px-6">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'radial-gradient(#f97316 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f97316]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-4">
            Free AI Opportunity Audit
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            See exactly where your business is leaking jobs. Free.
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            A personalized walkthrough of where leads slip through the cracks in your
            service business, and which automations recover them. No pitch, no
            obligation. You leave with a plan you can keep and use.
          </p>
          <a
            href="#claim-audit"
            className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Claim Your Free Audit →
          </a>
        </div>
      </section>

      {/* What the audit uncovers */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4 text-center">
            What the Audit Uncovers
          </h2>
          <p className="text-[#475569] text-lg text-center mb-12 max-w-xl mx-auto">
            Most service businesses lose work in the same handful of places. Here's
            where we look first.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                ),
                title: 'Missed & after-hours calls',
                body: 'Calls that ring out while you\'re on a job, driving, or off the clock, and never get a callback before the caller dials someone else.',
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
                title: 'Slow lead follow-up',
                body: 'Speed-to-lead gaps where a new inquiry sits for hours before anyone responds, long enough for the prospect to book with a faster competitor.',
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                ),
                title: 'Reviews & reputation',
                body: 'Happy customers who would gladly leave a 5-star review but never get asked, so your reputation isn\'t earning you new work.',
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                ),
                title: 'Booking friction',
                body: 'Clunky steps between "I\'m interested" and "I\'m on the calendar" that make customers give up before they ever book.',
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                ),
                title: 'The website itself',
                body: 'Slow pages, no booking button, or a site that reads like a brochure. It is the first thing a caller checks and the last thing anyone updates.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="p-6 bg-[#f8fafc] rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-[#f97316]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </div>
                <h3 className="font-bold text-[#0f172a] text-lg mb-2">{title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-12 text-center">
            How It Works
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Quick 15-minute call about your business',
                body: 'We talk through your trade, where your leads come from, and your busiest days, so the audit is built around how you actually operate.',
              },
              {
                step: '2',
                title: 'We map your lead flow and show you the leaks live',
                body: 'Together we walk your current lead flow from first contact to booked job, and pinpoint exactly where work is slipping away.',
              },
              {
                step: '3',
                title: 'You leave with a prioritized action plan',
                body: 'You keep a clear, prioritized plan you can use whether or not you ever work with us. It\'s yours either way.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f97316] text-white font-bold flex items-center justify-center text-lg">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] text-lg mb-1">{title}</h3>
                  <p className="text-[#475569] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk reversal */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#fff7ed] border-l-4 border-[#f97316] rounded-r-xl px-8 py-6 text-center">
            <p className="text-[#1e293b] text-xl font-bold">
              Free. No pitch. No obligation. The audit is yours to keep.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / booking */}
      <section id="claim-audit" className="bg-[#0f172a] py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Claim Your Free AI Opportunity Audit
            </h2>
            <p className="text-[#94a3b8] text-lg">
              Pick a time below and we'll show you exactly where your business is
              losing jobs, and how to win them back.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">
              Pick a Time That Works
            </h3>
            <CrmBookingEmbed />
          </div>

          <p className="text-[#94a3b8] text-center mt-8">
            Or call/text{' '}
            <a href="tel:8884336516" className="text-[#f97316] font-semibold hover:text-[#fb923c] transition-colors">
              888-433-6516
            </a>
          </p>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
}
