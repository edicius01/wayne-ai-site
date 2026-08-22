import { Globe, PhoneCall, CalendarCheck, MessageSquareText } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Positioning anchor, 2026-08-21. The competitor set that matters is HUMAN
// answering services, not the $19-59 self-serve AI apps. Two reasons: their
// published rates are 2-5x ours for answering alone, and not one of them
// builds or runs the website the call came from. Rates below are from each
// vendor's own public pricing page, verified 2026-08-21 — re-check before
// changing them, and keep the "as published" framing.
const services = [
  {
    name: 'Ruby',
    plan: 'Starter plan',
    price: '$250',
    unit: '50 receptionist minutes',
    perMinute: '$5.00 / minute',
    site: false,
    href: 'https://www.ruby.com/pricing/',
  },
  {
    name: 'PATLive',
    plan: 'Starter plan',
    price: '$250',
    unit: '75 answering minutes',
    perMinute: '$3.33 / minute',
    site: false,
    href: 'https://patlive.com/pricing/',
  },
];

const included = [
  { icon: <Globe className="h-5 w-5" strokeWidth={2} />, text: 'A site built to book jobs, or booking installed on the one you have' },
  { icon: <PhoneCall className="h-5 w-5" strokeWidth={2} />, text: 'Your line answered around the clock, by voice and by text' },
  { icon: <CalendarCheck className="h-5 w-5" strokeWidth={2} />, text: 'Booking straight onto your real calendar' },
  { icon: <MessageSquareText className="h-5 w-5" strokeWidth={2} />, text: 'Follow-up, reminders, and review requests that keep running' },
];

export function AnsweringComparison() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="mb-4 text-3xl font-bold text-[#0f172a] sm:text-4xl">
            Compare it to what answering the phone already costs
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#1f2937]">
            The real alternative is an answering service. Here is what the big ones charge, straight off their own pricing pages.
          </p>
        </div>

        <div className={`grid gap-6 md:grid-cols-3 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl border-2 border-gray-300 bg-[#F8F9FA] p-6">
              <h3 className="text-xl font-bold text-[#0f172a]">{s.name}</h3>
              <p className="text-sm text-[#6b7280]">{s.plan}</p>
              <div className="mt-4 text-4xl font-bold text-[#0f172a]">
                {s.price}<span className="text-lg font-normal text-[#374151]">/mo</span>
              </div>
              <p className="mt-2 text-[#374151]">{s.unit}</p>
              <p className="mt-1 text-sm font-semibold text-[#0f172a]">{s.perMinute}</p>
              <div className="mt-5 border-t border-gray-300 pt-4">
                <p className="flex items-start gap-2 text-sm text-[#374151]">
                  <span className="mt-0.5 flex-shrink-0 text-red-500">✗</span>
                  No website. They answer the phone, and that is the whole product.
                </p>
              </div>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-semibold text-[#6b7280] underline underline-offset-2 hover:text-[#f97316]"
              >
                Their published pricing
              </a>
            </div>
          ))}

          <div className="rounded-2xl border-2 border-[#f97316] bg-[#FFF8F5] p-6">
            <h3 className="text-xl font-bold text-[#0f172a]">Wayne AI</h3>
            <p className="text-sm text-[#6b7280]">The AI Front Desk</p>
            <div className="mt-4 text-4xl font-bold text-[#0f172a]">
              $297<span className="text-lg font-normal text-[#374151]">/mo</span>
            </div>
            <p className="mt-2 text-[#374151]">250 voice minutes, plus unlimited missed-call text-back</p>
            <p className="mt-1 text-sm font-semibold text-[#0f172a]">$0.35 / minute after that</p>
            <div className="mt-5 border-t border-[#f97316]/30 pt-4">
              <p className="flex items-start gap-2 text-sm font-semibold text-[#0f172a]">
                <span className="mt-0.5 flex-shrink-0 text-[#16a34a]">✓</span>
                Your website is part of it, built and run by us.
              </p>
            </div>
            <a
              href="#pricing"
              className="mt-4 inline-block text-xs font-semibold text-[#6b7280] underline underline-offset-2 hover:text-[#f97316]"
            >
              See all three plans
            </a>
          </div>
        </div>

        <div className={`mt-12 rounded-2xl bg-[#0f172a] px-6 py-8 sm:px-10 transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white">
            An answering service answers the phone. Nobody builds the site the call came from.
          </h3>
          <p className="mt-3 text-[#cbd5e1]">
            That is the gap we fill. You are not choosing between us and a cheaper way to pick up the phone. You are choosing between paying one company to answer calls, another to build a site, and a third to chase the follow-up, or paying us once for all of it:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-[#f97316]">{item.icon}</span>
                <span className="text-[#e2e8f0]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#6b7280]">
          Ruby and PATLive rates are their published starter plans as of August 2026, linked above. Per-minute figures are their plan price divided by the minutes the plan includes. Prices change, so check theirs before you decide.
        </p>
      </div>
    </section>
  );
}
