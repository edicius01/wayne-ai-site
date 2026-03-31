import { useScrollAnimation } from '../hooks/useScrollAnimation';

const industries = [
  { icon: '🔧', name: 'Plumbers' },
  { icon: '☀️', name: 'HVAC' },
  { icon: '⚡', name: 'Electricians' },
  { icon: '🏠', name: 'Roofers' },
  { icon: '🚪', name: 'Garage Doors' },
  { icon: '🌳', name: 'Landscaping' },
  { icon: '✨', name: 'Cleaning' },
  { icon: '🔨', name: 'General Home Services' },
];

export function Industries() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Built specifically for:
          </h2>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:bg-[#f97316]/5 hover:border-[#f97316]/20 hover:shadow-md"
            >
              <span className="text-2xl mb-2 block">{industry.icon}</span>
              <span className="text-[#0f172a] font-medium">{industry.name}</span>
            </div>
          ))}
        </div>

        <p className={`text-center text-[#374151] transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Serving businesses in{' '}
          <span className="font-semibold text-[#0f172a]">Evansville</span> •{' '}
          <span className="font-semibold text-[#0f172a]">Henderson</span> •{' '}
          <span className="font-semibold text-[#0f172a]">Owensboro</span>
        </p>
      </div>
    </section>
  );
}
