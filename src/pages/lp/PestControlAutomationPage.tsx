import { Helmet } from 'react-helmet-async';
import { LpGuarantee } from '../../components/LpGuarantee';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function PestControlAutomationPage() {
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
        <title>AI Lead Response for Pest Control Companies | Wayne AI</title>
        <meta
          name="description"
          content="Pest emergencies go to whoever answers first. Wayne AI texts back missed calls in seconds and books treatments automatically — turning panicked callers into recurring plans."
        />
        <meta property="og:title" content="AI Lead Response for Pest Control Companies | Wayne AI" />
        <meta
          property="og:description"
          content="Stop losing pest control jobs to faster competitors. Wayne AI responds to missed calls instantly and books treatments — plus the recurring plans behind them."
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
              For Pest Control Companies
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Win the "Handle It Now" Call Every Time
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Someone who just found a wasp nest by the back door isn't shopping around —
              they hire whoever answers first. Wayne AI texts back every missed call in
              seconds so that company is yours.
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
              Every Missed Call Is a Treatment You're Handing to a Competitor
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '80%',
                  label: 'of callers hang up after reaching voicemail and immediately call another pest control company',
                },
                {
                  stat: 'Minutes',
                  label: 'how long a panicked homeowner waits before dialing the next company on the list',
                },
                {
                  stat: '$300+',
                  label: 'average first treatment lost to a faster competitor — before counting the recurring plan behind it',
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
                  title: 'A panicked homeowner calls — you can\'t answer',
                  body: "You're in a crawlspace or suited up mid-treatment. The phone rings, then goes to voicemail. Under the old system, that homeowner calls the next pest control company on the list.",
                },
                {
                  step: '02',
                  title: 'Wayne AI texts them back in seconds',
                  body: 'The moment the call is missed, Wayne AI fires an automatic text acknowledging the call and starting the conversation — before they dial anyone else.',
                },
                {
                  step: '03',
                  title: 'The AI qualifies the pest and books the treatment',
                  body: 'The system asks what they\'re dealing with, collects the address and contact info, and can book the treatment directly to your calendar or queue the lead for your callback.',
                },
                {
                  step: '04',
                  title: 'You show up to a scheduled job — not a cold voicemail',
                  body: 'No more end-of-day callbacks hoping they haven\'t hired someone else. The lead is held, the job is logged, and the appointment is already on your schedule.',
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
              Built for How Pest Control Businesses Actually Run
            </h2>
            <p className="text-[#475569] text-lg text-center mb-12 max-w-xl mx-auto">
              From wasp-nest emergencies to quarterly plans and win-backs, the same system
              handles every missed call — automatically.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Emergency pest calls',
                  body: 'Wasp nests, bed bugs, roaches the week guests arrive — these callers hire whoever responds first. Wayne AI answers in seconds, even after hours, so the panicked call becomes your booked job.',
                },
                {
                  title: 'In-the-field missed calls',
                  body: 'Crawlspaces and attics don\'t have good reception, and you can\'t pick up mid-treatment anyway. Every call that rings through unanswered gets an instant text that holds the lead until you\'re free.',
                },
                {
                  title: 'First treatments → quarterly plans',
                  body: 'The real money in pest control is the recurring plan behind the first visit. Automated follow-up after every one-off treatment converts more of them into quarterly customers — without you chasing.',
                },
                {
                  title: 'Re-service reminders & win-backs',
                  body: 'Quarterly reminders go out on schedule, and lapsed customers get an "it\'s been 6 months" reactivation text — sequences that run themselves and keep your route full.',
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
              What Pest Control Companies See
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              Pest control companies using automated lead response typically recover 20–30% of
              calls that would have gone to a competitor — without adding office staff or
              changing how they run their routes.
            </p>
            <LpGuarantee />
          </div>
        </section>

        {/* Form */}
        <section id="lp-form" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to be the company that answers first?
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Tell us about your pest control business and we'll show you exactly how automated
                lead response works — free, no commitment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <iframe
                src="https://links.wayneai.net/widget/form/mmDnjub0Cj9Hw1YZOrIc"
                style={{ width: '100%', height: '480px', border: 'none', borderRadius: '12px' }}
                id="inline-pest-control-mmDnjub0Cj9Hw1YZOrIc"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Pest Control Automation LP"
                data-height="480"
                data-layout-iframe-id="inline-pest-control-mmDnjub0Cj9Hw1YZOrIc"
                data-form-id="mmDnjub0Cj9Hw1YZOrIc"
                title="Pest Control Automation LP"
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
