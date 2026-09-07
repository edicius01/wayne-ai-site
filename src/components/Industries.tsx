import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const industries = [
  { icon: '🔧', name: 'Plumbers', href: '/industries/plumbers/' },
  { icon: '☀️', name: 'HVAC', href: '/lp/hvac-automation/' },
  { icon: '⚡', name: 'Electricians', href: '/industries/electricians/' },
  { icon: '🏠', name: 'Roofers', href: '/industries/roofers/' },
  { icon: '🍽️', name: 'Restaurants' },
  { icon: '🚪', name: 'Garage Doors' },
  { icon: '🌳', name: 'Landscaping' },
  { icon: '✨', name: 'Cleaning' },
  { icon: '🔨', name: 'General Contractors' },
];

export function Industries() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="industries" ref={ref} className="scroll-mt-24 py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Built for local service businesses
          </h2>
          <p className="text-[#374151] max-w-xl mx-auto">
            Explore the website, booking, and call follow-up setup for your trade.
          </p>
        </div>

        <div className={`grid grid-cols-3 md:grid-cols-5 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {industries.map((industry) => industry.href ? (
            <Link
              key={industry.name}
              to={industry.href}
              className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:border-[#f97316] hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#f97316]"
            >
              <span aria-hidden="true" className="text-2xl mb-2 block">{industry.icon}</span>
              <span className="text-[#0f172a] font-medium text-sm">{industry.name}</span>
              <span className="mt-2 block text-xs font-semibold text-[#f97316]">See how it works →</span>
            </Link>
          ) : (
            <div
              key={industry.name}
              className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:border-[#f97316]/30 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-2xl mb-2 block">{industry.icon}</span>
              <span className="text-[#0f172a] font-medium text-sm">{industry.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#374151] mb-3">Unsure where to start? Review your website, missed calls, and booking steps with Wayne.</p>
          <Link to="/lp/ai-audit/" className="inline-block py-3 font-semibold text-[#0f172a] underline decoration-[#f97316] underline-offset-4">
            Get your free AI opportunity audit →
          </Link>
        </div>
      </div>
    </section>
  );
}
