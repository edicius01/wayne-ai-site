import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { Solution } from '../components/Solution';
import { InteractiveDemo } from '../components/InteractiveDemo';
import { Features } from '../components/Features';
import { Industries } from '../components/Industries';
import { ROICalculator } from '../components/ROICalculator';
import { Pricing } from '../components/Pricing';
import { WhoThisIsFor } from '../components/WhoThisIsFor';
import { Tier3Callout } from '../components/Tier3Callout';
import { ObjectionCrusher } from '../components/ObjectionCrusher';
import { Process } from '../components/Process';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { MobileStickyCTA } from '../components/MobileStickyCTA';
import { BackToTop } from '../components/BackToTop';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <InteractiveDemo />
      <Features />
      <Industries />
      <ROICalculator />
      <Pricing />
      <WhoThisIsFor />
      <Tier3Callout />
      <ObjectionCrusher />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ChatWidget />
      <MobileStickyCTA />
      <BackToTop />
    </div>
  );
}
