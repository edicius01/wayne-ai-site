export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0f172a] pt-24">
      {/* Background radial glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f97316]/8 rounded-full blur-3xl" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
          AI Automation for Local Service Businesses
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up leading-tight">
          Never Miss Another{' '}
          <span className="text-[#f97316]">Lead Again</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#94a3b8] max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-100">
          Your <span className="font-semibold text-white">24/7 Front Office System</span> that responds instantly, books appointments automatically,
          and turns every missed call into <span className="font-semibold text-[#f97316]">scheduled revenue</span> — while you focus on the work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-200">
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

        <p className="text-sm text-[#64748b] mt-4 animate-fade-in-up animation-delay-300">
          Serving plumbers, HVAC, electricians, roofers, restaurants & more
        </p>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg className="w-6 h-6 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
