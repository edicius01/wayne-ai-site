import { useState, useEffect } from 'react';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <a
        href="#contact"
        className="block w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3 rounded-lg text-center shadow-lg transition-all duration-200"
      >
        Book Now
      </a>
    </div>
  );
}
