import { useState, useEffect } from 'react';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const roi = document.getElementById('roi')?.getBoundingClientRect();
      const isUsingCalculator = roi && roi.top < window.innerHeight && roi.bottom > 0;
      setIsVisible(window.scrollY > window.innerHeight && !isUsingCalculator);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <a
        href="/booking/"
        className="block w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3 rounded-lg text-center shadow-lg transition-all duration-200"
      >
        Book Now
      </a>
    </div>
  );
}
