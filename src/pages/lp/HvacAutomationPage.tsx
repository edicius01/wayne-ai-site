import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function HvacAutomationPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://links.wayneai.net/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Lead Response for HVAC Companies | Wayne AI</title>
        <meta
          name="description"
          content="HVAC companies lose jobs every day to competitors who respond faster. Wayne AI texts back missed calls in seconds — so you capture leads even when you're on a job."
        />
        <meta property="og:title" content="AI Lead Response for HVAC Companies | Wayne AI" />
        <meta
          property="og:description"
          content="Stop losing HVAC jobs to faster competitors. Wayne AI responds to missed calls instantly and books service appointments automatically."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Minimal nav */}
        <header className="bg-[#0f172a] py-4 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <svg className="w-7 h-7 text-[#f97316]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.83-3.4 9.36-7 10.5-3.6-1.14-7-5.67-7-10.5V6.3l7-3.12z" />
              </svg>
              <span className="text-white font-bold text-lg">Wayne AI</span>
            </Link>
            <button
              onClick={scrollToForm}
              className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
            >
              Get Started Free
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-[#0f172a] pb-20 pt-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-4">
              For HVAC Companies
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Stop Losing HVAC Jobs to Whoever Picks Up First
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              When an AC goes out at 6pm, homeowners call two or three companies and book the
              first one that responds. Wayne AI texts back your missed calls in seconds — so
              you stay in the running even when you're finishing up a job.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              See How It Works →
            </button>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">
              The Missed Call Problem Is Costing You Real Jobs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '78%',
                  label: 'of service calls go to the first company that responds — not the cheapest',
                },
                {
                  stat: '5 min',
                  label: 'lead response window — after that, conversion rates drop by over 80%',
                },
                {
                  stat: '$400+',
                  label: 'average value of a single HVAC service call lost to a faster competitor',
                },
              ].map(({ stat, label }) => (
                <div key={stat} className="text-center p-6 bg-[#f8fafc] rounded-xl border border-gray-100">
                  <div className="text-4xl font-extrabold text-[#f97316] mb-2">{stat}</div>
                  <p className="text-[#475569] text-sm leading-relaxed">{label}</p>
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
                  step: '01',
                  title: 'A lead calls — you miss it',
                  body: "You're on a job. The phone rings. You can't answer. Under the old system, that lead calls your competitor next.",
                },
                {
                  step: '02',
                  title: 'Wayne AI texts them back in seconds',
                  body: 'The moment the call goes unanswered, Wayne AI fires an automatic text that acknowledges the missed call and keeps the conversation alive — before they dial anyone else.',
                },
                {
                  step: '03',
                  title: 'The AI qualifies and books the appointment',
                  body: 'The system asks what they need, collects their info, and can book directly to your calendar — or hand the conversation to you when you\'re free.',
                },
                {
                  step: '04',
                  title: 'You show up to a booked job, not a cold callback',
                  body: 'No more end-of-day callback roulette. Leads are captured, qualified, and scheduled while you\'re still on the current job.',
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f97316] text-white font-bold flex items-center justify-center text-sm">
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

        {/* Use cases */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4 text-center">
              Built for How HVAC Businesses Actually Operate
            </h2>
            <p className="text-[#475569] text-lg text-center mb-12 max-w-xl mx-auto">
              Whether it's an emergency call at 9pm or a tune-up inquiry during your busiest week,
              the same system handles it.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'After-hours emergencies',
                  body: 'AC failures and heating outages don\'t respect business hours. Wayne AI responds instantly at 11pm so you wake up to a booked appointment, not a missed opportunity.',
                },
                {
                  title: 'Spring & fall tune-up rushes',
                  body: 'When calls stack up faster than you can answer, the system queues every lead and keeps them engaged — so you don\'t lose the seasonal surge to whoever answered their phone.',
                },
                {
                  title: 'On-the-job missed calls',
                  body: 'You can\'t stop a service call to answer the phone. Now you don\'t have to — every missed call gets an instant text response that holds the lead until you\'re free.',
                },
                {
                  title: 'Estimate follow-up',
                  body: 'Quotes that don\'t get a follow-up die. Automated sequences check in 24, 48, and 72 hours after an estimate — without you remembering to do it.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="p-6 bg-[#f8fafc] rounded-xl border border-gray-100">
                  <h3 className="font-bold text-[#0f172a] text-lg mb-2">{title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              What HVAC Companies See
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              HVAC companies using automated lead response typically recover 20–30% of calls
              that would have otherwise gone to a competitor — without adding staff or changing
              how they run their day.
            </p>
            <blockquote className="bg-[#fff7ed] border-l-4 border-[#f97316] rounded-r-xl px-8 py-6 text-left max-w-2xl mx-auto">
              <p className="text-[#1e293b] text-lg italic leading-relaxed mb-4">
                "We were losing after-hours calls every night. Now the system texts back immediately
                and I wake up with appointments already on the calendar. It paid for itself in the
                first week."
              </p>
              <p className="text-[#64748b] text-sm font-semibold">— HVAC company owner, Midwest</p>
            </blockquote>
          </div>
        </section>

        {/* Form */}
        <section id="lp-form" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to stop losing jobs to faster competitors?
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Tell us about your HVAC business and we'll show you exactly how automated
                lead response works — free, no commitment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <iframe
                src="https://links.wayneai.net/widget/form/mmDnjub0Cj9Hw1YZOrIc"
                style={{ width: '100%', height: '480px', border: 'none', borderRadius: '12px' }}
                id="inline-hvac-mmDnjub0Cj9Hw1YZOrIc"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="HVAC Automation LP"
                data-height="480"
                data-layout-iframe-id="inline-hvac-mmDnjub0Cj9Hw1YZOrIc"
                data-form-id="mmDnjub0Cj9Hw1YZOrIc"
                title="HVAC Automation LP"
              />
            </div>
            <p className="text-[#475569] text-sm text-center mt-4">No commitment. No sales pressure.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0f172a] border-t border-gray-800 py-8 px-6 text-center">
          <p className="text-[#475569] text-sm">
            &copy; 2026 Wayne AI.{' '}
            <Link to="/privacy" className="hover:text-[#f97316] transition-colors">
              Privacy Policy
            </Link>
            {' · '}
            <Link to="/" className="hover:text-[#f97316] transition-colors">
              Back to wayneai.net
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
