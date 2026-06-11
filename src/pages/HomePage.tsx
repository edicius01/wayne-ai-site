import { Helmet } from 'react-helmet-async';
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
import { faqs } from '../content/faq';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { MobileStickyCTA } from '../components/MobileStickyCTA';
import { BackToTop } from '../components/BackToTop';
import { JsonLd } from '../components/JsonLd';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Wayne AI',
  url: 'https://wayneai.net',
  logo: 'https://wayneai.net/og-image-1200x630.png',
  telephone: '+1-888-433-6516',
  sameAs: ['https://www.facebook.com/wayneaiagency'],
  description:
    'AI automation for local service businesses. Capture leads 24/7, book jobs automatically, and never miss another call.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Wayne AI | Never Miss Another Lead Again</title>
        <meta name="description" content="Wayne AI — AI automation for local service businesses. Capture leads 24/7, book jobs automatically, and never miss another call." />
        <link rel="icon" href="/favicon.ico?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=3" />
        <link rel="canonical" href="https://wayneai.net" />
        <meta property="og:url" content="https://wayneai.net" />
      </Helmet>
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
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
