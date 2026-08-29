import { Helmet } from 'react-helmet-async';
import { LpGuarantee } from '../../components/LpGuarantee';
import { LpAnchor } from '../../components/LpAnchor';
import { Link } from 'react-router-dom';
import { LeadCallbackForm } from '../../components/LeadCallbackForm';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function PlumbingAutomationPage() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://wayneai.net/lp/plumbing-automation" />
        <title>Website + 24/7 Call Answering for Plumbers | Wayne AI</title>
        <meta
          name="description"
          content="We build the site your plumbing jobs come from and answer the calls you miss, day or night. Booking on every page, missed-call text-back in seconds, from $149 a month."
        />
        <meta property="og:title" content="Website + 24/7 Call Answering for Plumbers | Wayne AI" />
        <meta
          property="og:description"
          content="Your site, your phone, handled. We build the website, answer the calls you miss, and book the job before the homeowner dials the next plumber."
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
              For Plumbers
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Book More Plumbing Jobs While You're Under the Sink
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              A burst pipe at midnight. A backed-up drain on a Sunday. Plumbing emergencies
              don't wait, and neither do homeowners. We build the site those calls come from,
              then answer the ones you miss in seconds, so you capture the job before they
              dial the next plumber on the list.
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
              Every Missed Call Is a Job You're Handing to a Competitor
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '80%',
                  label: 'of callers hang up after reaching voicemail and immediately call another plumber',
                },
                {
                  stat: '2am',
                  label: 'plumbing emergencies happen around the clock, and most companies miss every after-hours call',
                },
                {
                  stat: '$350+',
                  label: 'average value of a single plumbing job lost to a faster-responding competitor',
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
                  title: 'A homeowner calls and you can\'t answer',
                  body: "You're mid-job with your hands full. The phone rings, then goes to voicemail. Under the old system, that homeowner calls the next plumber on the list.",
                },
                {
                  step: '02',
                  title: 'Wayne AI texts them back in seconds',
                  body: 'The moment the call is missed, Wayne AI fires an automatic text acknowledging the call and starting the conversation, before they dial anyone else.',
                },
                {
                  step: '03',
                  title: 'The AI captures the job details',
                  body: 'The system asks what they need, collects their address and contact info, and can book directly to your calendar or queue the lead for your callback.',
                },
                {
                  step: '04',
                  title: 'You finish the job, check the queue, show up',
                  body: 'No more cold callbacks at the end of the day hoping they still need you. The lead is held, the job is logged, and the next appointment is set.',
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
              Built for How Plumbing Businesses Actually Run
            </h2>
            <p className="text-[#475569] text-lg text-center mb-12 max-w-xl mx-auto">
              From 2am burst pipes to routine drain calls, the same system handles every
              missed call, automatically.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'After-hours emergencies',
                  body: 'Burst pipes, flooding, and backups don\'t wait for 8am. Wayne AI responds instantly overnight, so an emergency caller can book a time instead of leaving a voicemail.',
                },
                {
                  title: 'On-the-job missed calls',
                  body: 'You can\'t answer the phone while you\'re on a job. Now every call that rings through unanswered gets an instant text response that holds the lead until you\'re free.',
                },
                {
                  title: 'Website visitors after hours',
                  body: 'A homeowner lands on your website at 9pm with a leaking water heater. The chat widget captures their info and starts the booking process. No one needs to be awake.',
                },
                {
                  title: 'Estimate follow-up',
                  body: 'Plumbing quotes that don\'t get followed up die in the inbox. Automated sequences check in 24, 48, and 72 hours after an estimate. You do not have to remember.',
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

        <LpAnchor trade="plumbers" />

        {/* Proof + guarantee */}
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              We Put the Risk on Our Side
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              Instead of quoting you an industry average, here's something you can test in the
              next thirty seconds. Call{' '}
              <a href="tel:+18126123105" className="font-semibold text-[#f97316] hover:underline">
                (812) 612-3105
              </a>{' '}
              and an AI answers, talks, and books a time. Or call it and hang up, and watch it
              text you back with a real booking link. That's our live system, not a demo reel.
            </p>
            <LpGuarantee />
          </div>
        </section>

        {/* Form */}
        <section id="lp-form" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to stop losing plumbing jobs after hours?
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Tell us about your plumbing business and we'll show you exactly how automated
                lead response works. Free, no commitment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl sm:p-8">
              <LeadCallbackForm slug="wayneai-lp-plumbing" />
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
