import { useScrollAnimation } from '../hooks/useScrollAnimation';

const industries = [
  { icon: '🔧', name: 'Plumbers' },
  { icon: '☀️', name: 'HVAC' },
  { icon: '⚡', name: 'Electricians' },
  { icon: '🏠', name: 'Roofers' },
  { icon: '🍽️', name: 'Restaurants' },
  { icon: '🚪', name: 'Garage Doors' },
  { icon: '🌳', name: 'Landscaping' },
  { icon: '✨', name: 'Cleaning' },
  { icon: '🔨', name: 'General Contractors' },
];

export function Industries() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Built for local service businesses
          </h2>
          <p className="text-[#374151] max-w-xl mx-auto">
            If customers call or search for you online, we help you capture every one of them.
          </p>
        </div>

        <div className={`grid grid-cols-3 md:grid-cols-5 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:border-[#f97316]/30 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-2xl mb-2 block">{industry.icon}</span>
              <span className="text-[#0f172a] font-medium text-sm">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
