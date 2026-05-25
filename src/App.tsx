import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const BookingPage = lazy(() => import('./pages/BookingPage').then(m => ({ default: m.BookingPage })));
const DemoPage = lazy(() => import('./pages/DemoPage').then(m => ({ default: m.DemoPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const HvacAutomationPage = lazy(() => import('./pages/lp/HvacAutomationPage').then(m => ({ default: m.HvacAutomationPage })));
const PlumbingAutomationPage = lazy(() => import('./pages/lp/PlumbingAutomationPage').then(m => ({ default: m.PlumbingAutomationPage })));
const RoofingAutomationPage = lazy(() => import('./pages/lp/RoofingAutomationPage').then(m => ({ default: m.RoofingAutomationPage })));
const ChiropractorReactivationPage = lazy(() => import('./pages/lp/ChiropractorReactivationPage').then(m => ({ default: m.ChiropractorReactivationPage })));
const MedSpaReactivationPage = lazy(() => import('./pages/lp/MedSpaReactivationPage').then(m => ({ default: m.MedSpaReactivationPage })));
const DentalReactivationPage = lazy(() => import('./pages/lp/DentalReactivationPage').then(m => ({ default: m.DentalReactivationPage })));
const PhysicalTherapyReactivationPage = lazy(() => import('./pages/lp/PhysicalTherapyReactivationPage').then(m => ({ default: m.PhysicalTherapyReactivationPage })));
const ElectricianAutomationPage = lazy(() => import('./pages/lp/ElectricianAutomationPage').then(m => ({ default: m.ElectricianAutomationPage })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/lp/hvac-automation" element={<HvacAutomationPage />} />
        <Route path="/lp/plumbing-automation" element={<PlumbingAutomationPage />} />
        <Route path="/lp/roofing-automation" element={<RoofingAutomationPage />} />
        <Route path="/lp/chiropractor-reactivation" element={<ChiropractorReactivationPage />} />
        <Route path="/lp/med-spa-reactivation" element={<MedSpaReactivationPage />} />
        <Route path="/lp/dental-reactivation" element={<DentalReactivationPage />} />
        <Route path="/lp/physical-therapy-reactivation" element={<PhysicalTherapyReactivationPage />} />
        <Route path="/lp/electrician-automation" element={<ElectricianAutomationPage />} />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
