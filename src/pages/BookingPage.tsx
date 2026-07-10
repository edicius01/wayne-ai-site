import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { BackToTop } from '../components/BackToTop';

const CRM_URL = 'https://wayne-crm-production.up.railway.app';

/*
 * SMS consent (A2P 10DLC): this page is the public opt-in CTA cited in the
 * Twilio campaign MessageFlow. The disclosures below must stay verbatim,
 * inline (NOT inside the iframe — reviewers read the prerendered HTML), and
 * the checkbox must default to unchecked. Route must stay in prerender.mjs.
 */
const SMS_CONSENT_LABEL =
  'I agree to receive SMS text messages from Wayne AI at the number provided ' +
  '(call scheduling, appointment reminders, and replies to my inquiry). ' +
  'Message frequency varies. Message & data rates may apply. ' +
  'Reply STOP to unsubscribe or HELP for help. Consent is not a condition of purchase.';

function CallbackForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState('sending');
    try {
      const res = await fetch(`${CRM_URL}/api/public/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          phone: fd.get('phone'),
          email: fd.get('email'),
          message: fd.get('message'),
          sms_consent: fd.get('sms_consent') === 'on',
          website2: fd.get('website2'), // honeypot
          slug: 'wayneai-booking',
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState('done');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-900 font-semibold mb-1">Got it — we'll reach out shortly.</p>
        <p className="text-green-800 text-sm">Usually the same business day.</p>
      </div>
    );
  }

  const field =
    'w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-[#0f172a] outline-none transition-colors focus:border-[#f97316] placeholder:text-gray-400';

  return (
    <form onSubmit={submit} className="space-y-4">
      <input name="name" aria-label="Your name" placeholder="Your name" className={field} />
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="phone" type="tel" required aria-label="Phone number" placeholder="Phone number" className={field} />
        <input name="email" type="email" aria-label="Email (optional)" placeholder="Email (optional)" className={field} />
      </div>
      <textarea name="message" rows={2} aria-label="What should we know?" placeholder="What should we know? (optional)" className={field} />
      {/* Honeypot — hidden from humans */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor="cb-web2">Website</label>
        <input id="cb-web2" name="website2" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" name="sms_consent" className="mt-1 h-4 w-4 accent-[#f97316]" />
        <span className="text-sm text-[#374151] leading-relaxed">{SMS_CONSENT_LABEL}</span>
      </label>
      <p className="text-xs text-gray-500">
        See our <a href="/privacy" className="underline text-[#374151]">Privacy Policy</a> and{' '}
        <a href="/terms" className="underline text-[#374151]">Terms of Service</a>.
      </p>
      {state === 'error' && (
        <p className="text-sm font-semibold text-red-700">
          Something went wrong — please try again, or call us directly.
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'sending'}
        className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-6 py-3.5 rounded-lg transition-colors disabled:opacity-50"
      >
        {state === 'sending' ? 'Sending…' : 'Request a call back'}
      </button>
    </form>
  );
}

export function BookingPage() {
  const calRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.type !== 'crm-widget-height') return;
      const f = calRef.current;
      if (f && f.contentWindow === e.source) f.style.height = `${e.data.height + 8}px`;
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Book a 15-Minute Strategy Call | Wayne AI</title>
        <meta name="description" content="Book a free 15-minute call. We'll show you live how Wayne AI turns your missed calls into booked revenue — no pitch, no contract." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navigation />
      
      <div className="pt-32 pb-20 bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
              Book Your 15-Minute Strategy Call
            </h1>
            <p className="text-xl text-[#374151] max-w-3xl mx-auto">
              Let's talk about how Wayne AI can turn your missed calls into booked revenue. 
              No sales pitch - just a quick walkthrough of exactly how it works for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                  What Happens on the Call
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#f97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#f97316] font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-2">We ask about your business</h3>
                      <p className="text-[#374151]">How many trucks? What's your busiest day? Where do leads come from?</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#f97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#f97316] font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-2">We show you the system live</h3>
                      <p className="text-[#374151]">You call your number, we "miss" it, and you watch the text-back happen in real-time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#f97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#f97316] font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-2">You decide if it's a fit</h3>
                      <p className="text-[#374151]">If it blows you away, we move forward. If not, we shake hands and you keep the demo as a free audit</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <p className="text-green-900 font-semibold mb-2">No pressure. No hard sell. Just proof.</p>
                  <p className="text-green-800">We'd rather spend 15 minutes showing you how it works than waste your time with a sales pitch.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-2xl shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Or Call/Text Right Now</h2>
                <p className="mb-6 text-white/90">
                  Prefer to talk immediately? We're here.
                </p>
                <a
                  href="tel:8884336516"
                  className="inline-flex items-center gap-3 bg-white text-[#f97316] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  888-433-6516
                </a>
              </div>
            </div>

            {/* Right Column - Calendar + SMS opt-in call-back form */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">
                  Pick a Time That Works
                </h2>
                <iframe
                  ref={calRef}
                  src={`${CRM_URL}/widget/booking?slug=wayneai-site&accent=f97316`}
                  style={{ width: '100%', border: 'none', minHeight: '520px' }}
                  id="crm-booking"
                  title="Book a Strategy Call"
                  className="rounded-lg"
                />
                <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                  By providing your phone number when booking, you agree to receive
                  appointment-related SMS text messages from Wayne AI (booking
                  confirmations and scheduling updates). Message frequency varies.
                  Message &amp; data rates may apply. Reply STOP to unsubscribe or
                  HELP for help. See our{' '}
                  <a href="/privacy" className="underline">Privacy Policy</a> and{' '}
                  <a href="/terms" className="underline">Terms of Service</a>.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-[#0f172a] mb-2 text-center">
                  Prefer We Reach Out?
                </h2>
                <p className="text-[#374151] mb-6 text-center">
                  Leave your number and we'll call or text you back.
                </p>
                <CallbackForm />
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2">15 Minutes, Max</h3>
              <p className="text-[#374151]">We respect your time. Quick call, straight to the point.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2">No Pressure</h3>
              <p className="text-[#374151]">See it work. If it's not a fit, no worries.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2">Live Demo</h3>
              <p className="text-[#374151]">Watch the system work with your actual phone number.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
}
