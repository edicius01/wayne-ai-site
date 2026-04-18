import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function RoofingAutomationPage() {
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
        <title>AI Lead Response for Roofing Companies | Wayne AI</title>
        <meta
          name="description"
          content="Roofing companies lose storm jobs every day to whoever responds first. Wayne AI texts back missed calls in seconds and books inspections automatically — storm season or slow season."
        />
        <meta property="og:title" content="AI Lead Response for Roofing Companies | Wayne AI" />
        <meta
          property="og:description"
          content="Stop losing roofing jobs to faster competitors. Wayne AI captures every lead the moment it comes in — storms, slow season, and everything in between."
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
              After a storm, every homeowner in your market is calling at once — and they book
              the first company that responds. Wayne AI texts back missed calls in seconds and
              books inspections automatically, so you're scheduled before your competitors
              finish their callbacks.
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
                  label: 'window after a storm when most homeowners commit to a roofer — first inspection usually wins the job',
                },
                {
                  stat: '40–60%',
                  label: 'of inbound storm contacts the average roofing company misses due to volume and after-hours timing',
                },
                {
                  stat: '$8–15K',
                  label: 'average value of a full roof replacement — each missed inspection is a job that went to a competitor',
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
                  title: 'A homeowner calls — you miss it',
                  body: "Storm just hit. Your phone is ringing off the hook. You're already on the line, your crew is in the field, and a new lead hits voicemail. Under the old system, they call the next roofer.",
                },
                {
                  step: '02',
                  title: 'Wayne AI texts them back in seconds',
                  body: 'The moment the call goes unanswered, an automatic text goes out — acknowledging the call and asking what\'s going on. They\'re engaged before they even think about dialing someone else.',
                },
                {
                  step: '03',
                  title: 'The AI qualifies the lead and books the inspection',
                  body: 'The system captures their address, asks about the damage, confirms their availability, and books directly to your inspection calendar — or queues the lead for your office to confirm.',
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
              Storm Season and Slow Season — Same System
            </h2>
            <p className="text-[#475569] text-lg text-center mb-12 max-w-xl mx-auto">
              The same automation that handles storm surge captures the leads most roofers
              quietly lose during the other 48 weeks of the year.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Storm surge response',
                  body: 'When 50 leads hit in 48 hours, the system handles every one simultaneously — no hold times, no voicemail, no leads falling through the cracks while your team is overwhelmed.',
                },
                {
                  title: 'After-hours and weekend calls',
                  body: 'Homeowners notice roof damage on Saturday evening and call right then. Wayne AI responds instantly so you\'re scheduled before Monday morning — before your competitors even know the lead existed.',
                },
                {
                  title: 'Off-season lead capture',
                  body: 'Slow months still have leads — they just don\'t raise their hands as loudly. Automated follow-up on website inquiries and missed calls keeps your pipeline from going cold between storms.',
                },
                {
                  title: 'Cold estimate follow-up',
                  body: 'Quotes that went quiet don\'t have to stay that way. Automated sequences check in 48 hours, one week, and 30 days after an estimate — recovering jobs you\'d otherwise write off.',
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
              What Roofing Companies See
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              Roofing companies using automated lead response book 20–30% more inspections
              during storm events — and maintain a steadier pipeline in the months between them.
            </p>
            <blockquote className="bg-[#fff7ed] border-l-4 border-[#f97316] rounded-r-xl px-8 py-6 text-left max-w-2xl mx-auto">
              <p className="text-[#1e293b] text-lg italic leading-relaxed mb-4">
                "After the last hailstorm I woke up with 14 inspections already on the calendar.
                My competitor called me two days later asking if I was slammed — he was still
                working through his callback list. That's the difference."
              </p>
              <p className="text-[#64748b] text-sm font-semibold">— Roofing company owner, Midwest</p>
            </blockquote>
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
                lead response works — free, no commitment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <iframe
                src="https://links.wayneai.net/widget/form/mmDnjub0Cj9Hw1YZOrIc"
                style={{ width: '100%', height: '480px', border: 'none', borderRadius: '12px' }}
                id="inline-roofing-mmDnjub0Cj9Hw1YZOrIc"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Roofing Automation LP"
                data-height="480"
                data-layout-iframe-id="inline-roofing-mmDnjub0Cj9Hw1YZOrIc"
                data-form-id="mmDnjub0Cj9Hw1YZOrIc"
                title="Roofing Automation LP"
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
