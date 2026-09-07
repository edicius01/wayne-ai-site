import { Helmet } from 'react-helmet-async';
import { LpGuarantee } from '../../components/LpGuarantee';
import { Link } from 'react-router-dom';
import { LeadCallbackForm } from '../../components/LeadCallbackForm';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function PhysicalTherapyReactivationPage() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://wayneai.net/lp/physical-therapy-reactivation/" />
        <title>Physical Therapy Patient Reactivation | Wayne AI</title>
        <meta
          name="description"
          content="Automatically reactivate lapsed physical therapy patients with personalized follow-up sequences. Re-engage discharged patients before they end up back at square one."
        />
        <meta property="og:title" content="Physical Therapy Patient Reactivation | Wayne AI" />
        <meta
          property="og:description"
          content="Automatically reactivate lapsed physical therapy patients with personalized follow-up sequences."
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
              For Physical Therapy Practices
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Re-Engage Discharged Patients Before They End Up Back at Square One
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Most PT patients discharge with the best intentions, and then stop doing their
              exercises. Wayne AI follows up automatically, keeps them engaged, and brings them
              back for maintenance visits before small setbacks become big problems.
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
              The Post-Discharge Drop-Off Problem
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stat: '70%',
                  label: 'of discharged PT patients report symptom recurrence within a year',
                },
                {
                  stat: '0',
                  label: 'follow-up touchpoints sent by most practices after discharge',
                },
                {
                  stat: '3–5×',
                  label: 'easier to rebook a past patient than convert a new referral',
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
              How Automated Patient Follow-Up Works
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'We track discharged and lapsed patients',
                  body: 'Wayne AI flags patients who completed a care plan and haven\'t returned, segmented by diagnosis type, discharge date, and time elapsed.',
                },
                {
                  step: '02',
                  title: 'A personal check-in goes out at the right time',
                  body: 'Each patient receives a warm, helpful message: a home exercise reminder at 2 weeks, a maintenance visit offer at 3 months, a check-in at 6 months. Timed to their specific discharge date.',
                },
                {
                  step: '03',
                  title: 'Responses are handled and visits are scheduled',
                  body: 'When a patient responds, the system qualifies their needs and books a maintenance or re-evaluation visit directly to your schedule.',
                },
                {
                  step: '04',
                  title: 'Every new discharge feeds the same system',
                  body: 'Each patient who completes treatment is automatically enrolled in a post-discharge sequence. You set it up once; it runs on every future discharge.',
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

        {/* Proof + guarantee */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              We Put the Risk on Our Side
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              We're not going to quote you a return rate for a patient list we've never seen.
              What we can do is let you test the system first. Call{' '}
              <a href="tel:+18126123105" className="font-semibold text-[#f97316] hover:underline">
                (812) 612-3105
              </a>{' '}
              and an AI answers, talks, and books a time. Or call it and hang up, and watch it
              text you back with a real booking link. Then judge it on that.
            </p>
            <LpGuarantee />
          </div>
        </section>

        {/* Form */}
        <section id="lp-form" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to re-engage your discharged patients?
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Tell us about your practice and we'll show you exactly how post-discharge
                automation works. Free, no commitment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl sm:p-8">
              <LeadCallbackForm slug="wayneai-lp-pt" />
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
