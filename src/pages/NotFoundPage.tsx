import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Page Not Found | Wayne AI</title>
        <meta name="description" content="This page could not be found. Explore Wayne AI websites, booking, and call answering for local service businesses." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://wayneai.net/404/" />
        <meta property="og:title" content="Page Not Found | Wayne AI" />
        <meta property="og:description" content="Explore Wayne AI websites, booking, and call answering for local service businesses." />
        <meta property="og:url" content="https://wayneai.net/404/" />
        <meta property="og:image" content="https://wayneai.net/og-image-1200x630.png" />
      </Helmet>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pt-36 pb-24 text-center">
        <p className="text-[#f97316] font-semibold mb-4">404</p>
        <h1 className="text-4xl font-bold text-[#0f172a] mb-6">This page could not be found</h1>
        <p className="text-lg text-[#475569] mb-8">The link may be outdated or the address may have been mistyped.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="rounded-lg bg-[#f97316] px-6 py-3 font-semibold text-white">Go to the homepage</Link>
          <Link to="/blog/" className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-[#0f172a]">Browse the guides</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
