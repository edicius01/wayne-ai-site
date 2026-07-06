import { Helmet } from 'react-helmet-async';
import { LpGuarantee } from '../../components/LpGuarantee';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function AutoRepairAutomationPage() {
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
        <title>AI Lead Response for Auto Repair Shops | Wayne AI</title>
        <meta
          name="description"
          content="Hands in an engine can't answer the phone. Wayne AI texts back missed calls in seconds so callers don't dial the next shop — and your bays stay booked."
        />
        <meta property="og:title" content="AI Lead Response for Auto Repair Shops | Wayne AI" />
        <meta
          property="og:description"
          content="Stop losing repair orders to the next shop on the list. Wayne AI responds to missed calls instantly and keeps your bays booked."
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
              For Auto Repair Shops
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Keep Your Bays Full While Your Hands Are Under the Hood
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              The busiest shops miss the most calls — full bays mean an unanswered phone.
              Wayne AI texts every missed caller back in seconds so they don't dial the
              next shop on the list.
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
              Every Missed Call Is a Repair Order Rolling Into Someone Else's Bay
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '80%',
                  label: 'of callers hang up after reaching voicemail and immediately call another shop',
                },
                {
                  stat: '10am',
                  label: 'calls peak exactly when every tech is elbow-deep in a job and the front desk is slammed',
                },
                {
                  stat: '$450+',
                  label: 'average repair order lost when a caller books with a competitor instead',
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
                  title: 'A driver with car trouble calls — nobody can pick up',
                  body: "Every tech is under a hood and the front desk is juggling two customers. The phone rings out, and under the old system that driver is already dialing the next shop.",
                },
                {
                  step: '02',
                  title: 'Wayne AI texts them back in seconds',
                  body: 'The moment the call is missed, Wayne AI fires an automatic text acknowledging the call and starting the conversation — before they reach anyone else.',
                },
                {
                  step: '03',
                  title: 'The AI captures the vehicle and the problem',
                  body: 'The system collects year, make, and model, asks what the car is doing, and can book the appointment directly or queue the lead for your callback.',
                },
                {
                  step: '04',
                  title: 'You batch callbacks between jobs',
                  body: "No more dropping a wrench to chase the phone. Leads are held with all the details logged, so you or your service writer work through them between jobs — and the bays never stop.",
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
              Built for How Independent Shops Actually Run
            </h2>
            <p className="text-[#475569] text-lg text-center mb-12 max-w-xl mx-auto">
              From slammed mornings to slow Tuesdays, the same system captures every missed
              call and keeps work flowing into your bays — automatically.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Full-bays missed calls',
                  body: 'When every lift is occupied and every tech is working, the phone rings out. Now every unanswered call gets an instant text response that holds the customer until someone is free.',
                },
                {
                  title: 'Quote-by-text',
                  body: 'The AI captures the vehicle and the problem over text, so you can respond with a quote between jobs — without stopping the bay or playing phone tag all afternoon.',
                },
                {
                  title: 'Service reminders that refill bays',
                  body: 'Oil change, seasonal, and inspection reminders go out to past customers automatically — steady, predictable work that fills the slow weeks without you lifting a finger.',
                },
                {
                  title: 'Winning back dealership drifters',
                  body: "Customers who drifted to the dealership or stopped coming in get a simple reactivation message. Many just need a reason to come back — and a text is often all it takes.",
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
              What Shop Owners See
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              Repair shops using automated lead response typically recover 20–30% of
              calls that would have gone to a competitor — without adding front-desk staff
              or changing how the shop runs.
            </p>
            <LpGuarantee />
          </div>
        </section>

        {/* Form */}
        <section id="lp-form" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to stop losing customers to the next shop on the list?
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Tell us about your shop and we'll show you exactly how automated
                lead response works — free, no commitment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <iframe
                src="https://links.wayneai.net/widget/form/mmDnjub0Cj9Hw1YZOrIc"
                style={{ width: '100%', height: '480px', border: 'none', borderRadius: '12px' }}
                id="inline-auto-repair-mmDnjub0Cj9Hw1YZOrIc"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Auto Repair Automation LP"
                data-height="480"
                data-layout-iframe-id="inline-auto-repair-mmDnjub0Cj9Hw1YZOrIc"
                data-form-id="mmDnjub0Cj9Hw1YZOrIc"
                title="Auto Repair Automation LP"
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
