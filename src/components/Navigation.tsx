import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to scroll to sections smoothly (only on home page)
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto pl-5 pr-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/og-image-1200x630_upscayl_4x_upscayl-standard-4x.png"
              alt="Wayne AI"
              className="w-[160px] md:w-[200px] h-auto"
            />
          </Link>

          {/* 2. CENTER LINKS (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection('features')} className="text-[#334155] hover:text-[#f97316] font-medium transition-colors">How It Works</button>
                <button onClick={() => scrollToSection('pricing')} className="text-[#334155] hover:text-[#f97316] font-medium transition-colors">Pricing</button>
              </>
            ) : (
              <>
                <Link to="/" className="text-[#334155] hover:text-[#f97316] font-medium transition-colors">Home</Link>
              </>
            )}
            <Link to="/demo" className="text-[#334155] hover:text-[#f97316] font-medium transition-colors">Demo</Link>
            <Link to="/about" className="text-[#334155] hover:text-[#f97316] font-medium transition-colors">About</Link>
          </div>

          {/* 3. CTA BUTTON (Desktop) */}
          <a
            href="https://book.wayneai.net/home"
            className="hidden md:inline-flex bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Book a Demo
          </a>

          {/* 4. MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection('features')} className="text-left text-[#334155] font-medium py-2">How It Works</button>
                <button onClick={() => scrollToSection('pricing')} className="text-left text-[#334155] font-medium py-2">Pricing</button>
              </>
            ) : (
              <Link to="/" className="text-left text-[#334155] font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            )}
            <Link to="/demo" className="text-left text-[#334155] font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Demo</Link>
            <Link to="/about" className="text-left text-[#334155] font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            
            <a
              href="https://book.wayneai.net/home"
              className="block w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-6 py-3 rounded-lg text-center transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}