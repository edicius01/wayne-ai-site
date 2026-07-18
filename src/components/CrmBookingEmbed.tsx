import { useEffect, useRef } from 'react';
import { CRM_URL } from './LeadCallbackForm';

/*
 * CRM booking widget + the verbatim registered SMS notice
 * ('wayneai-booking-notice-2026-07' in wayne-crm lib/consent.ts). Consent-by-
 * action evidence is stamped CRM-side when a phone number is provided under
 * this notice — which is why the widget slug stays 'wayneai-site' (the
 * registered mapping) rather than a per-page slug. Changing the notice text
 * requires a NEW registry version first — never edit in place.
 */
export function CrmBookingEmbed({ title = 'Book a Strategy Call' }: { title?: string }) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.type !== 'crm-widget-height') return;
      const f = ref.current;
      if (f && f.contentWindow === e.source) f.style.height = `${e.data.height + 8}px`;
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <>
      <iframe
        ref={ref}
        src={`${CRM_URL}/widget/booking?slug=wayneai-site&accent=f97316`}
        style={{ width: '100%', border: 'none', minHeight: '520px' }}
        title={title}
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
    </>
  );
}
