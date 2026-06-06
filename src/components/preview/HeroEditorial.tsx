import { useEffect, useState } from 'react';

type Msg = { from: 'ai' | 'cust' | 'sys'; text: string };

const CONVO: Msg[] = [
  { from: 'sys', text: 'Missed call · Sarah J. · 2:47 PM' },
  { from: 'ai', text: "Hi Sarah! Sorry we missed you — this is River City Plumbing. What's going on?" },
  { from: 'cust', text: 'Kitchen sink won’t drain. Need someone this week.' },
  { from: 'ai', text: 'I can get you in Thursday at 2:00 PM. Want me to lock it in?' },
  { from: 'cust', text: 'Yes please!' },
  { from: 'ai', text: '✅ Booked Thu 2:00 PM. Confirmation + reminder sent.' },
];

export function HeroEditorial() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const id = setInterval(() => setN((v) => (v >= CONVO.length ? 1 : v + 1)), 1300);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a] pt-28 pb-20">
      {/* Warm gradient wash */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1206] via-[#0a0e1a] to-[#0a0e1a]" />
        <div className="absolute -left-32 top-0 h-[700px] w-[700px] rounded-full bg-[#f97316]/20 blur-[130px] animate-glow-drift" />
        <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-[#fbbf24]/10 blur-[130px]" />
        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8">
        {/* Editorial copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#fb923c]">
            <span className="h-px w-8 bg-[#fb923c]" />
            Wayne AI
          </div>

          <h1 className="text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
            Every call
            <br />
            answered.
            <br />
            <span className="font-serif italic font-normal text-[#f97316]">Every job</span> booked.
          </h1>

          <p className="mt-8 max-w-lg text-xl leading-relaxed text-[#a3acc2]">
            While you’re under a sink or up on a roof, Wayne AI is answering every missed call, texting
            back in seconds, and filling your calendar.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://book.wayneai.net"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f97316] px-9 py-4 text-lg font-semibold text-white shadow-xl shadow-[#f97316]/30 transition-all duration-200 hover:bg-[#ea580c]"
            >
              Book a Free Demo
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="tel:8884336516" className="inline-flex items-center justify-center gap-2 px-4 py-4 text-lg font-semibold text-white underline-offset-4 hover:underline">
              or call 888-433-6516
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-[#64748b]">
            <span>Plumbing</span>
            <span className="h-1 w-1 rounded-full bg-[#475569]" />
            <span>HVAC</span>
            <span className="h-1 w-1 rounded-full bg-[#475569]" />
            <span>Electrical</span>
            <span className="h-1 w-1 rounded-full bg-[#475569]" />
            <span>Roofing</span>
          </div>
        </div>

        {/* Floating phone */}
        <div className="relative mx-auto w-full max-w-[330px]">
          <div className="absolute -inset-8 rounded-full bg-[#f97316]/15 blur-3xl" aria-hidden="true" />
          <div className="relative animate-float rounded-[2.8rem] border border-white/10 bg-[#111827] p-3 shadow-2xl shadow-black/60">
            <div className="overflow-hidden rounded-[2.2rem] bg-[#0f172a]">
              <div className="flex items-center gap-3 border-b border-white/10 px-5 pb-4 pt-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f97316] font-black text-white">W</div>
                <div>
                  <div className="text-sm font-bold text-white">Wayne AI</div>
                  <div className="text-[11px] text-[#10b981]">● Responding now</div>
                </div>
              </div>
              <div className="h-[420px] space-y-2.5 overflow-hidden p-4">
                {CONVO.slice(0, n).map((m, idx) => {
                  if (m.from === 'sys') {
                    return (
                      <div key={idx} className="text-center">
                        <span className="inline-block rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium text-[#64748b]">{m.text}</span>
                      </div>
                    );
                  }
                  const ai = m.from === 'ai';
                  return (
                    <div key={idx} className={`flex animate-typing ${ai ? 'justify-start' : 'justify-end'}`}>
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                          ai ? 'rounded-bl-sm bg-[#1e293b] text-[#e2e8f0]' : 'rounded-br-sm bg-[#f97316] text-white'
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
