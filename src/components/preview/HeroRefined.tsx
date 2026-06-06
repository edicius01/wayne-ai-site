import { useEffect, useState } from 'react';

const ACTIVITY = [
  { t: 'Missed call — Sarah J.', s: 'Auto-text sent in 11s', tone: 'orange' },
  { t: 'Lead qualified — clogged sink', s: 'Asked for preferred time', tone: 'orange' },
  { t: 'Calendar checked', s: 'Opening found: Thu 2:00 PM', tone: 'orange' },
  { t: 'Job booked — $650', s: 'Confirmation + reminder sent', tone: 'green' },
];

export function HeroRefined() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % (ACTIVITY.length + 1)), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b1120] pt-28 pb-20 lg:pt-24">
      {/* Layered gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[640px] w-[640px] rounded-full bg-[#f97316]/15 blur-[120px] animate-glow-drift" />
        <div className="absolute top-1/4 -right-32 h-[520px] w-[520px] rounded-full bg-[#6366f1]/10 blur-[120px]" />
        <div className="absolute -bottom-48 left-0 h-[480px] w-[480px] rounded-full bg-[#f97316]/[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(ellipse at 50% 35%, black 30%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 30%, transparent 90%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#f97316]/20 bg-[#f97316]/10 px-4 py-2 text-sm font-medium text-[#fdba74]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#f97316]" />
              AI Front Office for Local Service Businesses
            </div>

            <h1 className="mb-6 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
              Never miss
              <br />
              another{' '}
              <span className="relative whitespace-nowrap text-[#f97316]">
                lead
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                  <path d="M2 7C50 2 150 2 198 7" stroke="#f97316" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>{' '}
              again
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[#94a3b8] lg:mx-0 sm:text-xl">
              A <span className="font-semibold text-white">24/7 system</span> that answers instantly, books the
              job, and turns missed calls into <span className="font-semibold text-[#f97316]">scheduled revenue</span> —
              while you stay on the tools.
            </p>

            <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://book.wayneai.net"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f97316] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#f97316]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl hover:shadow-[#f97316]/30"
              >
                Book a Free Demo
              </a>
              <a
                href="tel:8884336516"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-200 hover:border-white/30 hover:bg-white/10"
              >
                Call/Text: 888-433-6516
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">Trusted by pros in</span>
              <div className="flex flex-wrap gap-2">
                {['Plumbing', 'HVAC', 'Electrical', 'Roofing'].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[#cbd5e1]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Live activity card */}
          <div className="relative mx-auto w-full max-w-md lg:mr-0 lg:ml-auto">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#f97316]/10 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1424]/90 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#10b981]" />
                  <span className="text-xs font-bold tracking-wider text-[#10b981]">LIVE — WAYNE AI</span>
                </div>
                <span className="text-[11px] text-[#64748b]">Avg response &lt; 15s</span>
              </div>

              <div className="space-y-3 p-5">
                {ACTIVITY.map((a, i) => {
                  const active = i < step;
                  const isGreen = a.tone === 'green';
                  return (
                    <div
                      key={a.t}
                      className={`flex items-start gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-500 ${
                        active
                          ? isGreen
                            ? 'border-[#10b981]/30 bg-[#10b981]/[0.08] opacity-100'
                            : 'border-[#f97316]/25 bg-[#f97316]/[0.06] opacity-100'
                          : 'border-white/5 bg-white/[0.02] opacity-40'
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-sm ${
                          isGreen ? 'bg-[#10b981]/20 text-[#10b981]' : 'bg-[#f97316]/20 text-[#f97316]'
                        }`}
                      >
                        {active ? (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-[#64748b]">{i + 1}</span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">{a.t}</p>
                        <p className={`text-xs ${isGreen ? 'text-[#6ee7b7]' : 'text-[#fdba74]'}`}>{a.s}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.06] bg-white/[0.02] px-5 py-4">
                <span className="text-xs text-[#94a3b8]">This week</span>
                <span className="text-sm font-bold text-white">
                  <span className="text-[#10b981]">+$8,450</span> recovered revenue
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
