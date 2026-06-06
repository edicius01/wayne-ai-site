import { useEffect, useState } from 'react';

const TICKER = [
  'Missed call recovered — booked Thu 2:00 PM · $650',
  'After-hours lead answered in 9s — HVAC repair booked',
  'Reminder sent — no-show avoided · Med Spa',
  'New patient booked while you were on a job · Dental',
];

const STATS = [
  { value: '< 15s', label: 'Avg response time' },
  { value: '24/7', label: 'Always answering' },
  { value: '$8.4k', label: 'Recovered / mo' },
  { value: '5×', label: 'Faster follow-up' },
];

export function HeroSpotlight() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TICKER.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0f172a] pt-28 pb-16">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#f97316]/12 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '34px 34px',
            maskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#f97316]/25 bg-[#f97316]/10 px-4 py-2 text-sm font-medium text-[#fdba74]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#f97316]" />
          AI Automation for Local Service Businesses
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.0] tracking-tight text-white sm:text-7xl md:text-[5.5rem]">
          Turn missed calls into
          <br />
          <span className="bg-gradient-to-r from-[#fb923c] via-[#f97316] to-[#fbbf24] bg-clip-text text-transparent">
            booked revenue
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#94a3b8] sm:text-xl">
          Wayne AI answers every call and text in seconds, qualifies the lead, and books the job on your
          calendar — 24/7, while you stay focused on the work.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://book.wayneai.net"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f97316] px-9 py-4 text-lg font-semibold text-white shadow-lg shadow-[#f97316]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ea580c]"
          >
            Book a Free Demo
          </a>
          <a
            href="tel:8884336516"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-9 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-200 hover:border-white/30 hover:bg-white/10"
          >
            Call/Text: 888-433-6516
          </a>
        </div>

        {/* Live ticker */}
        <div className="mx-auto mt-12 flex max-w-xl items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-[#10b981] opacity-75" />
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#10b981]" />
          </span>
          <p key={i} className="animate-typing truncate text-left text-sm font-medium text-[#cbd5e1]">
            {TICKER[i]}
          </p>
        </div>

        {/* Stats band */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#0f172a] px-5 py-6">
              <div className="text-3xl font-black text-[#f97316]">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-[#94a3b8]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
