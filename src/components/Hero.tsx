import { useEffect, useState } from 'react';

const STATUS_LINES = [
  'AI replies: "Hey Sarah! Sorry we missed your call…"',
  'AI qualifies: "Sink clogged? We can get someone out tomorrow."',
  'AI checks calendar: found an opening Thurs @ 2:00 PM',
  'Booking confirmation sent by text — job locked in.',
];

export function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setSyncing(true);
      const swap = setTimeout(() => {
        setLineIndex((i) => (i + 1) % STATUS_LINES.length);
        setSyncing(false);
      }, 900);
      return () => clearTimeout(swap);
    }, 5200);
    return () => clearInterval(cycle);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#0f172a] pt-28 pb-20 lg:pt-24">
      {/* Background glow + dot grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#f97316]/10 rounded-full blur-3xl animate-glow-drift" />
        <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-[#f97316]/[0.06] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-[#f97316]/[0.05] rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse at 50% 40%, black 35%, transparent 92%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 35%, transparent 92%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
              AI Automation for Local Service Businesses
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up leading-[1.05]">
              Never Miss Another{' '}
              <span className="text-[#f97316]">Lead Again</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#94a3b8] max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up animation-delay-100">
              Your <span className="font-semibold text-white">24/7 Front Office System</span> that responds instantly, books appointments automatically,
              and turns every missed call into <span className="font-semibold text-[#f97316]">scheduled revenue</span> — while you focus on the work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up animation-delay-200">
              <a
                href="https://book.wayneai.net"
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#f97316]/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Free Demo
              </a>

              <a
                href="tel:8884336516"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/20 hover:border-white/40 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call/Text: 888-433-6516
              </a>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <p className="text-xs font-semibold tracking-wider text-[#64748b] uppercase mb-3">
                Trusted by local pros in
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['Plumbing', 'HVAC', 'Electrical', 'Roofing'].map((trade) => (
                  <span
                    key={trade}
                    className="text-sm text-[#cbd5e1] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    {trade}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: network status card */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="relative max-w-md mx-auto lg:mr-0 lg:ml-auto">
              <div className="absolute -inset-4 bg-[#f97316]/10 rounded-3xl blur-2xl" aria-hidden="true" />
              <div className="relative rounded-2xl border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
                {/* Card header */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                  <span
                    className={`ml-3 text-[11px] font-bold tracking-wider transition-colors duration-300 ${
                      syncing ? 'text-[#f59e0b]' : 'text-[#10b981]'
                    }`}
                  >
                    {syncing ? 'NETWORK STATUS: SYNCHRONIZING…' : 'NETWORK STATUS: ACTIVE'}
                  </span>
                </div>

                {/* Nodes */}
                <div className="p-5 space-y-2">
                  {/* Node 1: missed call */}
                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#ef4444]/15 text-[#ef4444] flex items-center justify-center animate-pulse-custom">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold tracking-wider text-[#64748b]">INCOMING CALL</p>
                      <p className="text-sm font-semibold text-[#ef4444]">Missed — line busy</p>
                    </div>
                    <span className="flex-shrink-0 text-[11px] text-[#94a3b8] bg-[#ef4444]/10 px-2 py-1 rounded-md">2:47 PM</span>
                  </div>

                  {/* Connector */}
                  <div className="relative h-6 ml-9">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#ef4444]/40 to-[#f97316]/40" />
                    <div className="absolute left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_8px_2px_rgba(249,115,22,0.6)] animate-spark" />
                  </div>

                  {/* Node 2: AI text-back (active) */}
                  <div className="flex items-center gap-3 rounded-xl border border-[#f97316]/30 bg-[#f97316]/[0.07] px-4 py-3.5 shadow-[0_0_20px_-6px_rgba(249,115,22,0.4)]">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f97316]/20 text-[#f97316] flex items-center justify-center animate-float">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold tracking-wider text-[#64748b]">AI TEXT-BACK</p>
                      <p key={lineIndex} className="text-sm font-medium text-[#fdba74] animate-typing leading-snug">
                        {STATUS_LINES[lineIndex]}
                      </p>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="relative h-6 ml-9">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#f97316]/40 to-[#10b981]/40" />
                    <div className="absolute left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_2px_rgba(16,185,129,0.6)] animate-spark" style={{ animationDelay: '1.2s' }} />
                  </div>

                  {/* Node 3: booked */}
                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#10b981]/15 text-[#10b981] flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold tracking-wider text-[#64748b]">CALENDAR SYNC</p>
                      <p className="text-sm font-semibold text-[#10b981]">Job booked — Thurs @ 2 PM</p>
                    </div>
                    <span className="flex-shrink-0 text-[11px] font-semibold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-md">$650</span>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-3.5 border-t border-white/[0.06] text-[11px] text-[#94a3b8]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    Calendar · CRM · VoIP
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                    Avg response &lt; 15 seconds
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow hidden lg:block">
        <svg className="w-6 h-6 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
