import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { BookingPage } from './pages/BookingPage';
import { DemoPage } from './pages/DemoPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { HvacAutomationPage } from './pages/lp/HvacAutomationPage';
import { ChiropractorReactivationPage } from './pages/lp/ChiropractorReactivationPage';
import { MedSpaReactivationPage } from './pages/lp/MedSpaReactivationPage';
import { DentalReactivationPage } from './pages/lp/DentalReactivationPage';
import { PhysicalTherapyReactivationPage } from './pages/lp/PhysicalTherapyReactivationPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/lp/hvac-automation" element={<HvacAutomationPage />} />
        <Route path="/lp/chiropractor-reactivation" element={<ChiropractorReactivationPage />} />
        <Route path="/lp/med-spa-reactivation" element={<MedSpaReactivationPage />} />
        <Route path="/lp/dental-reactivation" element={<DentalReactivationPage />} />
        <Route path="/lp/physical-therapy-reactivation" element={<PhysicalTherapyReactivationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
