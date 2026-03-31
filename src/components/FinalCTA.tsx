import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} id="contact" className="py-20 bg-[#1F2937]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want this installed for your business?
          </h2>
          <p className="text-lg text-[#D1D5DB] mb-10 max-w-2xl mx-auto">
            Book a <span className="font-bold text-[#f97316]">15-minute call</span>. We'll walk you through exactly how it works for your specific trade and answer any questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://book.wayneai.net"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-xl"
            >
              Book a Quick Fit Call
            </a>
            <a
              href="tel:8884336516"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#0f172a] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call/Text: 888-433-6516
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
