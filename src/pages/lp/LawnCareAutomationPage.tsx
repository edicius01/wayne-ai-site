import { Helmet } from 'react-helmet-async';
import { LpGuarantee } from '../../components/LpGuarantee';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function LawnCareAutomationPage() {
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
        <meta name="robots" content="noindex, follow" />
        <title>AI Lead Response for Lawn Care Companies | Wayne AI</title>
        <meta
          name="description"
          content="Lawn care quote requests answered in minutes win the yard. Wayne AI responds to every call and quote request instantly — from the mower seat — and turns first cuts into season-long clients."
        />
        <meta property="og:title" content="AI Lead Response for Lawn Care Companies | Wayne AI" />
        <meta
          property="og:description"
          content="Stop losing yards to whoever quotes first. Wayne AI answers every missed call and quote request instantly, even mid-route, and follows up until the season is booked."
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
              For Lawn Care &amp; Landscaping
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Win the Yard While You're Still On the Mower
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              In spring, whoever responds first usually wins the yard for the whole season.
              Wayne AI answers every call and quote request instantly — even when you're
              mid-route with three lawns left to cut.
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
              Every Missed Quote Is a Season You're Handing to a Competitor
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '80%',
                  label: 'of callers hang up after reaching voicemail and immediately call another lawn company',
                },
                {
                  stat: '6 weeks',
                  label: 'the spring rush window when most of the year\'s recurring accounts get claimed',
                },
                {
                  stat: '$1,500+',
                  label: 'typical season value of a weekly mowing account lost to a faster quote',
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
                  title: 'A homeowner asks for a quote — you\'re mid-route',
                  body: "It's midday and you're on the mower or running a crew. The call or quote request comes in and goes unanswered. Under the old system, that homeowner is already calling the next lawn company.",
                },
                {
                  step: '02',
                  title: 'Wayne AI texts them back in seconds',
                  body: 'The moment the call is missed, Wayne AI fires an automatic text acknowledging the request and asking for the address and the service they want — before they dial anyone else.',
                },
                {
                  step: '03',
                  title: 'The AI books the estimate or queues it',
                  body: 'The system captures the property address, the service they\'re after, and their contact info, then books the estimate to your calendar or holds the lead in your queue.',
                },
                {
                  step: '04',
                  title: 'You quote at day\'s end with the lead still warm',
                  body: 'Instead of calling back a homeowner who signed with someone else at 2pm, you finish the route, open the queue, and send quotes to people who are still waiting on you.',
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
              Built for How Lawn Care Businesses Actually Run
            </h2>
            <p className="text-[#475569] text-lg text-center mb-12 max-w-xl mx-auto">
              From spring-rush quote requests to fall cleanups and re-signs, the same system
              handles every missed call and follow-up — automatically.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Spring-rush quote requests',
                  body: 'When the grass starts growing, quote requests pile up faster than anyone can answer. Wayne AI responds in seconds during the exact weeks when a season of recurring work is on the line.',
                },
                {
                  title: 'Mid-route missed calls',
                  body: 'You can\'t answer the phone over a mower deck. Now every call that rings through unanswered gets an instant text response that holds the lead until you\'re off the route.',
                },
                {
                  title: 'One-time mows → season contracts',
                  body: 'A single cut doesn\'t have to stay a single cut. Automated follow-up checks in after the first mow and offers a weekly or biweekly spot — converting one-timers into recurring accounts.',
                },
                {
                  title: 'Seasonal upsells & re-signs',
                  body: 'Mulch in spring, aeration in fall, leaf cleanup, spring re-sign reminders — timed to the calendar and sent automatically, so the extra revenue doesn\'t depend on you remembering.',
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
              What Lawn Care Companies See
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              Lawn care companies using automated lead response typically recover 20–30% of
              calls that would have gone to a competitor — without adding office staff or
              stepping off the mower.
            </p>
            <LpGuarantee />
          </div>
        </section>

        {/* Form */}
        <section id="lp-form" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to win the spring rush without leaving the mower?
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Tell us about your lawn care business and we'll show you exactly how automated
                lead response works — free, no commitment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <iframe
                src="https://links.wayneai.net/widget/form/mmDnjub0Cj9Hw1YZOrIc"
                style={{ width: '100%', height: '480px', border: 'none', borderRadius: '12px' }}
                id="inline-lawn-care-mmDnjub0Cj9Hw1YZOrIc"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Lawn Care Automation LP"
                data-height="480"
                data-layout-iframe-id="inline-lawn-care-mmDnjub0Cj9Hw1YZOrIc"
                data-form-id="mmDnjub0Cj9Hw1YZOrIc"
                title="Lawn Care Automation LP"
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
