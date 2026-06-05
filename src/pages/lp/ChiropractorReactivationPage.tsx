import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

export function ChiropractorReactivationPage() {
  const [searchParams] = useSearchParams();

  const utmSource = searchParams.get('utm_source') ?? '';
  const utmMedium = searchParams.get('utm_medium') ?? '';
  const utmCampaign = searchParams.get('utm_campaign') ?? '';
  const utmContent = searchParams.get('utm_content') ?? '';

  const utmQuery = new URLSearchParams(
    Object.fromEntries(
      Object.entries({ utm_source: utmSource, utm_medium: utmMedium, utm_campaign: utmCampaign, utm_content: utmContent })
        .filter(([, v]) => v !== '')
    )
  ).toString();

  const formSrc = `https://links.wayneai.net/widget/booking/oCbAHBErrW9HMYFe91aT${utmQuery ? `?${utmQuery}` : ''}`;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://links.wayneai.net/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  useEffect(() => {
    if (utmSource || utmCampaign) {
      (window as any).dataLayer = (window as any).dataLayer ?? [];
      (window as any).dataLayer.push({
        event: 'utm_captured',
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
      });
    }
  }, [utmSource, utmMedium, utmCampaign, utmContent]);

  // Listen for booking confirmation postMessage from GHL widget iframe
  useEffect(() => {
    function handleGhlMessage(event: MessageEvent) {
      const allowed = ['wayneai.net', 'msgsndr.com', 'gohighlevel.com', 'leadconnectorhq.com'];
      if (!allowed.some(d => event.origin.includes(d))) return;

      const data = event.data;
      if (!data) return;

      const booked =
        data?.type === 'APPOINTMENT_BOOKED' ||
        data?.type === 'booking_confirmed' ||
        data?.type === 'form_submitted' ||
        data?.event === 'appointmentBooked' ||
        data?.event === 'formSubmitted' ||
        data?.action === 'booking_confirmed' ||
        (typeof data === 'string' && /appoint|book|confirm/i.test(data));

      if (booked && typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Schedule');
      }
    }

    window.addEventListener('message', handleGhlMessage);
    return () => window.removeEventListener('message', handleGhlMessage);
  }, []);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
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
              Book a Free Demo
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-[#0f172a] pb-12 pt-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-4">
              For Chiropractors
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Win Back Lapsed Patients — Without Lifting a Finger
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Most chiropractic offices have hundreds of patients who came in once or twice and
              never returned. Wayne AI identifies them, sends a warm personalized message at
              exactly the right time, and books the appointment — automatically.
            </p>
            {/* Quick proof bullets */}
            <ul className="text-left max-w-md mx-auto space-y-2 mb-10">
              {[
                '60%+ of new patients never return after their first visit',
                'Reactivation costs 5–7× less than acquiring a new patient',
                'Set up once — runs on every patient you\'ve ever seen',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-[#cbd5e1] text-sm">
                  <span className="text-[#f97316] font-bold mt-0.5 flex-shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToForm}
              className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Book a Free Demo →
            </button>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-10 text-center">
              How it works
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'We identify your lapsed patients',
                  body: "You share a simple export of your patient list — names, last visit date, contact info. Wayne AI flags anyone who hasn't been in for 3, 6, or 12 months, whatever threshold fits your practice.",
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

            {/* Second CTA at the bottom */}
            <div className="text-center mt-14">
              <button
                onClick={scrollToForm}
                className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
              >
                Book a Free Demo →
              </button>
              <p className="text-[#94a3b8] text-sm mt-3">20 minutes. No commitment.</p>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-10">
              The numbers behind patient reactivation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-[#fff7ed] border border-[#f97316]/30 rounded-xl px-6 py-6 text-left">
                <p className="text-4xl font-bold text-[#f97316] mb-2">35%</p>
                <p className="text-[#1e293b] font-semibold mb-1">Reactivation rate</p>
                <p className="text-[#475569] text-sm">
                  Personalized, multi-touch campaigns reactivate up to 35% of lapsed patients
                  — vs. 1–3% from a single call.
                </p>
              </div>
              <div className="bg-[#fff7ed] border border-[#f97316]/30 rounded-xl px-6 py-6 text-left">
                <p className="text-4xl font-bold text-[#f97316] mb-2">10×</p>
                <p className="text-[#1e293b] font-semibold mb-1">More responses</p>
                <p className="text-[#475569] text-sm">
                  Multi-touch follow-up sequences generate 10x the response rate of a
                  one-time outreach — run automatically after setup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form section */}
        <section id="lp-form" className="bg-[#0f172a] py-12 px-6 border-t border-white/10">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                See it live in 20 minutes — free
              </h2>
              <p className="text-[#94a3b8]">
                Pick a time and we'll show you exactly how it works for your practice.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <iframe
                src={formSrc}
                style={{ width: '100%', height: '700px', border: 'none', borderRadius: '12px', overflow: 'hidden' }}
                scrolling="no"
                id="oCbAHBErrW9HMYFe91aT_1779408797999"
                title="Book a Call — Wayne AI"
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
          </p>
        </footer>
      </div>
    </>
  );
}
