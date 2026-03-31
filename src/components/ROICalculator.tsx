import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ROICalculator() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-white border-t-4 border-[#f97316]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6 text-center">
            What's One Missed Call Worth to You?
          </h2>
          
          <div className="bg-gradient-to-br from-[#FFF8F5] to-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-[#f97316]/20">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Column 1 */}
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#f97316] mb-2 tracking-tight leading-none">$500</div>
                <p className="text-[#374151] font-medium">Average plumbing job</p>
              </div>
              
              {/* Column 2 */}
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#f97316] mb-2 tracking-tight leading-none">3-5</div>
                <p className="text-[#374151] font-medium">Jobs you miss per month<br/><span className="text-sm text-gray-500 font-normal">(industry average)</span></p>
              </div>
              
              {/* Column 3 - The Fix: Reduced size slightly to prevent crowding */}
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#f97316] mb-2 tracking-tight leading-none">$1,500-$2,500</div>
                <p className="text-[#374151] font-medium">Revenue walking out the door</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-[#f97316]">
              <p className="text-xl text-center text-[#0f172a] mb-4">
                <span className="font-bold text-[#f97316]">If our system catches just 2 jobs per month, it pays for itself.</span>
              </p>
              <p className="text-center text-[#374151]">
                Everything after that? Pure profit in your pocket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
