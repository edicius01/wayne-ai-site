import { Helmet } from 'react-helmet-async';
import { LpGuarantee } from '../../components/LpGuarantee';
import { LpAnchor } from '../../components/LpAnchor';
import { Link } from 'react-router-dom';
import { LeadCallbackForm } from '../../components/LeadCallbackForm';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function RoofingAutomationPage() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://wayneai.net/lp/roofing-automation" />
        <title>Website + 24/7 Call Answering for Roofing Companies | Wayne AI</title>
        <meta
          name="description"
          content="We build the site your roofing leads land on and answer the calls you miss, storm season or slow season. Booking on every page, missed-call text-back in seconds, from $149 a month."
        />
        <meta property="og:title" content="Website + 24/7 Call Answering for Roofing Companies | Wayne AI" />
        <meta
          property="og:description"
          content="Your site, your phone, handled. We build the website, answer the calls you miss, and book the inspection while your competitors are still returning voicemails."
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
              For Roofing Companies
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Be the First Roofer on the Roof After Every Storm
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              After a storm, every homeowner in your market is calling at once, and they book
              the first company that responds. We build the site those calls land on, then
              answer the ones you miss in seconds and book the inspection, so you're scheduled
              before your competitors finish their callbacks.
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
              The Window Is Shorter Than You Think
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '48 hrs',
                  label: 'window after a storm when most homeowners commit to a roofer, and the first inspection usually wins the job',
                },
                {
                  stat: '40–60%',
                  label: 'of inbound storm contacts the average roofing company misses due to volume and after-hours timing',
                },
                {
                  stat: '$8–15K',
                  label: 'average value of a full roof replacement, so each missed inspection is a job that went to a competitor',
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
                  title: 'A homeowner calls and you miss it',
                  body: "Storm just hit. Your phone is ringing off the hook. You're already on the line, your crew is in the field, and a new lead hits voicemail. Under the old system, they call the next roofer.",
                },
                {
                  step: '02',
                  title: 'Wayne AI texts them back in seconds',
                  body: 'The moment the call goes unanswered, an automatic text goes out, acknowledging the call and asking what\'s going on. They\'re engaged before they even think about dialing someone else.',
                },
                {
                  step: '03',
                  title: 'The AI qualifies the lead and books the inspection',
                  body: 'The system captures their address, asks about the damage, confirms their availability, and books directly to your inspection calendar, or queues the lead for your office to confirm.',
                },
                {
                  step: '04',
                  title: 'You wake up with a full inspection schedule',
                  body: 'While competitors are still working through their callback list at 8am, your calendar is already full. First on the roof wins the replacement.',
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
              Storm Season and Slow Season, Same System
            </h2>
            <p className="text-[#475569] text-lg text-center mb-12 max-w-xl mx-auto">
              The same automation that handles storm surge captures the leads most roofers
              quietly lose during the other 48 weeks of the year.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Storm surge response',
                  body: 'When 50 leads hit in 48 hours, the system handles every one simultaneously. No hold times, no voicemail, no leads falling through the cracks while your team is overwhelmed.',
                },
                {
                  title: 'After-hours and weekend calls',
                  body: 'Homeowners notice roof damage on Saturday evening and call right then. Wayne AI responds instantly so you\'re scheduled before Monday morning, before your competitors even know the lead existed.',
                },
                {
                  title: 'Off-season lead capture',
                  body: 'Slow months still have leads. They just don\'t raise their hands as loudly. Automated follow-up on website inquiries and missed calls keeps your pipeline from going cold between storms.',
                },
                {
                  title: 'Cold estimate follow-up',
                  body: 'Quotes that went quiet don\'t have to stay that way. Automated sequences check in 48 hours, one week, and 30 days after an estimate, recovering jobs you\'d otherwise write off.',
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

        <LpAnchor trade="roofing companies" />

        {/* Proof + guarantee */}
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              We Put the Risk on Our Side
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              We'd rather hand you something you can check than a number you have to take on
              faith. Call{' '}
              <a href="tel:+18126123105" className="font-semibold text-[#f97316] hover:underline">
                (812) 612-3105
              </a>{' '}
              and an AI answers, talks, and books a time. Or call it and hang up, and watch it
              text you back with a real booking link. That's the production system, running
              today. Here's the promise that comes with it.
            </p>
            <LpGuarantee />
          </div>
        </section>

        {/* Form */}
        <section id="lp-form" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to be first on the roof after the next storm?
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Tell us about your roofing business and we'll show you exactly how automated
                lead response works. Free, no commitment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl sm:p-8">
              <LeadCallbackForm slug="wayneai-lp-roofing" />
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
