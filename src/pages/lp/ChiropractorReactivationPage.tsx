import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function ChiropractorReactivationPage() {
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
        <title>Chiropractic Patient Reactivation | Wayne AI</title>
        <meta
          name="description"
          content="Automatically reactivate lapsed chiropractic patients with personalized text and email sequences. Set it up once, get booked appointments on autopilot."
        />
        <meta property="og:title" content="Chiropractic Patient Reactivation | Wayne AI" />
        <meta
          property="og:description"
          content="Automatically reactivate lapsed chiropractic patients with personalized text and email sequences."
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
              For Chiropractors
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Win Back Lapsed Patients — Without Lifting a Finger
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Most chiropractic offices have hundreds of patients who came in once or twice and
              never returned. Wayne AI identifies them, sends a warm personalized message at
              exactly the right time, and books the appointment — automatically.
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
              The Problem Every Chiropractic Office Has
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '60%+',
                  label: "of new patients don't return after their first visit",
                },
                {
                  stat: '5–7×',
                  label: 'more expensive to acquire a new patient than reactivate one',
                },
                {
                  stat: '0',
                  label: 'minutes most offices spend on systematic reactivation',
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
              How Automated Reactivation Works
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'We identify your lapsed patients',
                  body: "Wayne AI connects to your patient records and flags anyone who hasn't booked in 3, 6, or 12 months — whatever threshold makes sense for your practice.",
                },
                {
                  step: '02',
                  title: 'A personalized message goes out at the right time',
                  body: 'Each patient gets a short, human-sounding text or email that references their last visit and offers a simple reason to come back. No blasts, no generic "we miss you" copy.',
                },
                {
                  step: '03',
                  title: 'Replies get handled and appointments get booked',
                  body: 'When a patient responds, the system qualifies them and books directly to your calendar — or hands off to your front desk for high-touch cases.',
                },
                {
                  step: '04',
                  title: 'Every new patient feeds the same loop',
                  body: 'Once set up, every patient who completes a visit is automatically enrolled in a future reactivation sequence. You build the system once; it runs forever.',
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

        {/* Results / social proof */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              What to Expect
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              A warm reactivation list typically converts at 10–20%. For a practice with 300
              lapsed patients, that's 30–60 booked appointments from a list you already have.
            </p>
            <blockquote className="bg-[#fff7ed] border-l-4 border-[#f97316] rounded-r-xl px-8 py-6 text-left max-w-2xl mx-auto">
              <p className="text-[#1e293b] text-lg italic leading-relaxed mb-4">
                "We had 400 patients who hadn't been in over a year. We ran one reactivation
                campaign and filled two weeks of appointments. I didn't touch it after setup."
              </p>
              <p className="text-[#64748b] text-sm font-semibold">— Chiropractic office, Midwest</p>
            </blockquote>
          </div>
        </section>

        {/* Form section */}
        <section id="lp-form" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to reactivate your patient list?
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Tell us a bit about your practice and we'll show you exactly how it works — free,
                no commitment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <iframe
                src="https://links.wayneai.net/widget/form/mmDnjub0Cj9Hw1YZOrIc"
                style={{ width: '100%', height: '480px', border: 'none', borderRadius: '12px' }}
                id="inline-mmDnjub0Cj9Hw1YZOrIc"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Chiro Reactivation LP"
                data-height="480"
                data-layout-iframe-id="inline-mmDnjub0Cj9Hw1YZOrIc"
                data-form-id="mmDnjub0Cj9Hw1YZOrIc"
                title="Chiro Reactivation LP"
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
