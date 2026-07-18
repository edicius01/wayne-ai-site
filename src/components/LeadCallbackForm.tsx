import { useState } from 'react';

export const CRM_URL = 'https://wayne-crm-production.up.railway.app';

/*
 * SMS consent (A2P 10DLC): verbatim copy of the CRM consent registry's
 * 'wayneai-callback-2026-07' checkbox disclosure (wayne-crm lib/consent.ts).
 * Changing this text requires a NEW version in that registry first — never
 * edit in place. Checkbox must default to unchecked.
 */
const SMS_CONSENT_LABEL =
  'I agree to receive SMS text messages from Wayne AI at the number provided ' +
  '(call scheduling, appointment reminders, and replies to my inquiry). ' +
  'Message frequency varies. Message & data rates may apply. ' +
  'Reply STOP to unsubscribe or HELP for help. Consent is not a condition of purchase.';

type Props = {
  /** CRM attribution — lands as the contact's source + consent metadata. */
  slug: string;
  /** Extra context appended to the message payload (ROI numbers, page info). */
  context?: string;
  cta?: string;
};

export function LeadCallbackForm({ slug, context, cta = 'Request a call back' }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState('sending');
    try {
      const message = [fd.get('message'), context].filter(Boolean).join('\n\n');
      const res = await fetch(`${CRM_URL}/api/public/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          phone: fd.get('phone'),
          email: fd.get('email'),
          message,
          sms_consent: fd.get('sms_consent') === 'on',
          website2: fd.get('website2'), // honeypot
          slug,
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
  const honeypotId = `cb-web2-${slug}`;

  return (
    <form onSubmit={submit} className="space-y-4 text-left">
      <input name="name" aria-label="Your name" placeholder="Your name" className={field} />
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="phone" type="tel" required aria-label="Phone number" placeholder="Phone number" className={field} />
        <input name="email" type="email" aria-label="Email (optional)" placeholder="Email (optional)" className={field} />
      </div>
      <textarea name="message" rows={2} aria-label="What should we know?" placeholder="What should we know? (optional)" className={field} />
      {/* Honeypot — hidden from humans */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor={honeypotId}>Website</label>
        <input id={honeypotId} name="website2" tabIndex={-1} autoComplete="off" />
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
        {state === 'sending' ? 'Sending…' : cta}
      </button>
    </form>
  );
}
