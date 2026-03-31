export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#F8F9FA] to-white pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f97316]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f97316]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] mb-6 animate-fade-in-up">
          Never Miss Another Lead Again
        </h1>

        <p className="text-lg sm:text-xl text-[#1f2937] max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-100">
          Your <span className="font-bold text-[#f97316]">24/7 Front Office System</span> that texts back instantly, books appointments automatically,
          and turns every missed call into <span className="font-bold text-[#f97316]">scheduled revenue</span> for your home service business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-200">
          <a
            href="tel:8884336516"
            className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-xl animate-float"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call/Text: 888-433-6516
          </a>

          <a
            href="https://book.wayneai.net"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0f172a] font-semibold px-8 py-4 rounded-lg text-lg border-2 border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-[#f97316]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a 15-Minute Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <p className="text-sm text-[#334155] animate-fade-in-up animation-delay-300">
          Trusted by plumbers, HVAC techs, electricians & contractors across{' '}
          <span className="font-bold">Evansville, Henderson & Owensboro</span>
        </p>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg className="w-6 h-6 text-[#374151]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
