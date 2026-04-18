import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-[#f97316]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.83-3.4 9.36-7 10.5-3.6-1.14-7-5.67-7-10.5V6.3l7-3.12z"/>
                <path d="M12 6.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="font-bold text-xl text-white">Wayne AI</span>
            </div>
            <p className="text-[#9CA3AF] text-sm">
              AI automation for local service businesses — capture leads, book jobs, and grow on autopilot.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-[#9CA3AF] text-sm">
              <a href="tel:8884336516" className="flex items-center gap-2 hover:text-[#f97316] transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                888-433-6516
              </a>
              <a href="mailto:wayne@wayneai.net" className="flex items-center gap-2 hover:text-[#f97316] transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                wayne@wayneai.net
              </a>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Evansville, IN
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <div className="space-y-2 text-sm">
              <Link to="/lp/electrician-automation" className="block text-[#9CA3AF] hover:text-[#f97316] transition-colors">
                Electrician Automation
              </Link>
              <Link to="/lp/chiropractor-reactivation" className="block text-[#9CA3AF] hover:text-[#f97316] transition-colors">
                Chiropractic Reactivation
              </Link>
              <Link to="/lp/med-spa-reactivation" className="block text-[#9CA3AF] hover:text-[#f97316] transition-colors">
                Med Spa Reactivation
              </Link>
              <Link to="/lp/dental-reactivation" className="block text-[#9CA3AF] hover:text-[#f97316] transition-colors">
                Dental Patient Reactivation
              </Link>
              <Link to="/lp/physical-therapy-reactivation" className="block text-[#9CA3AF] hover:text-[#f97316] transition-colors">
                Physical Therapy Reactivation
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/privacy" className="block text-[#9CA3AF] hover:text-[#f97316] transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="block text-[#9CA3AF] hover:text-[#f97316] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-[#9CA3AF] text-sm">
            &copy; 2026 Wayne AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
  