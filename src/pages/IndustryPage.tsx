import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LpGuarantee } from '../components/LpGuarantee';

const industries = {
  plumbers: {
    name: 'Plumbers',
    title: 'Plumber Websites & Missed-Call Text-Back | Wayne AI',
    description: 'A plumbing website with online booking and missed-call text-back, built and managed by Wayne AI. From $149/month. Based in Evansville, Indiana.',
    heading: 'A plumbing website that connects the next call to the next appointment',
    intro: 'Drain calls, water-heater estimates, and service requests arrive while your hands are full. We build and host your plumbing website, add booking, and set up a text response for calls you miss. You keep working while the customer gets a next step.',
    cases: [
      ['Service calls during a job', 'Ask what needs attention, capture the address, and give the caller a booking link. Keep the details together for your callback instead of piecing them together from voicemail.'],
      ['Water-heater and repiping estimates', 'Give higher-value work its own place on your website. Show the services and areas you actually cover, then make requesting an estimate straightforward.'],
      ['After-hours inquiries', 'Acknowledge the request and collect the details when the shop is closed. Set expectations around your real availability; a booking request is not a promise of emergency dispatch.'],
    ],
    guide: 'plumbing-estimate-follow-up-automation',
    guideLabel: 'How to follow up on plumbing estimates',
  },
  electricians: {
    name: 'Electricians',
    title: 'Electrician Websites & Missed-Call Text-Back | Wayne AI',
    description: 'An electrician website with booking and missed-call text-back for service calls, panel upgrades, and EV charger inquiries. Managed by Wayne AI from $149/month.',
    heading: 'Your electrical website and missed-call follow-up, handled',
    intro: 'When you are in a panel or on a ladder, answering the next inquiry has to wait. We build and host your electrical website and connect booking with missed-call text-back, so homeowners can explain the job and take the next step while you finish yours.',
    cases: [
      ['Panel upgrades and EV chargers', 'Give each service a clear explanation and an estimate request path. Collect the project type and property details so your first conversation starts with useful context.'],
      ['Calls while you are on site', 'A missed-call text can ask what the homeowner needs and point them to booking. You review the details when it is safe to stop working.'],
      ['Quotes awaiting a decision', 'Set up follow-up messages for estimates that have gone quiet. Keep the conversation attached to the inquiry so the next reply is easy to pick up.'],
    ],
    guide: 'how-electricians-win-panel-upgrade-ev-charger-jobs',
    guideLabel: 'Following up on panel upgrade and EV charger inquiries',
  },
  roofers: {
    name: 'Roofers',
    title: 'Roofing Websites & Missed-Call Text-Back | Wayne AI',
    description: 'A roofing website with inspection booking and missed-call text-back, built and managed by Wayne AI. Keep roof repair and replacement inquiries organized. From $149/month.',
    heading: 'A roofing website with a clear path from inquiry to inspection',
    intro: 'Repair requests, replacement estimates, and post-storm calls need an organized response. We build and host your roofing website, add inspection booking, and connect missed-call text-back so inquiries have somewhere useful to go when your team is on a roof.',
    cases: [
      ['Storm-related call surges', 'Collect the property address and the work being requested when several inquiries arrive together. Offer your actual inspection availability instead of leaving callers without a next step.'],
      ['Replacement and repair estimates', 'Explain your roofing services on the website and let homeowners request an inspection. Keep the initial details available for the person preparing the estimate.'],
      ['Longer buying decisions', 'Roof replacements may need more than one conversation. Set up estimate follow-up and appointment reminders so the next contact does not depend on remembering a separate task.'],
    ],
    guide: 'roofing-referrals-google-reviews-automated-follow-up',
    guideLabel: 'Roofing referrals, reviews, and follow-up',
  },
};

export function IndustryPage({ industry }: { industry: keyof typeof industries }) {
  const page = industries[industry];
  const url = `https://wayneai.net/industries/${industry}/`;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://wayneai.net/og-image-1200x630.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.description} />
      </Helmet>
      <Navigation />
      <main>
        <section className="bg-[#F8F9FA] px-4 pt-28 pb-14 sm:px-6 sm:pt-36">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-[#475569] mb-5">
              <Link to="/" className="underline underline-offset-4">Wayne AI</Link> / {page.name}
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#0f172a] leading-tight mb-6">{page.heading}</h1>
            <p className="text-lg text-[#374151] leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/booking/" className="inline-flex justify-center rounded-lg bg-[#f97316] px-6 py-4 font-semibold text-white hover:bg-[#ea580c]">Book a Free Demo</a>
              <a href="tel:8126123105" className="inline-flex justify-center rounded-lg border border-gray-300 px-6 py-4 font-semibold text-[#0f172a] hover:bg-white">Call the live demo: (812) 612-3105</a>
            </div>
            <p className="mt-5 text-sm text-[#475569]">Built and run by Wayne Dewig in Evansville, Indiana. Website plans start at $149/month, with no setup fee.</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Built around the work you actually book</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {page.cases.map(([heading, text]) => (
              <div key={heading} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{heading}</h3>
                <p className="text-[#475569] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0f172a] px-4 py-14 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">What is included, and what changes by plan?</h2>
            <p className="text-[#cbd5e1] leading-relaxed mb-5">Every plan includes a website built and hosted by us, or booking added to the site you already have. The $149/month Front Door plan includes online booking, missed-call text-back, and standard review requests.</p>
            <p className="text-[#cbd5e1] leading-relaxed mb-5">Voice answering on your own line is offered as early access: the $297/month AI Front Desk includes 250 voice minutes; the $497/month Whole Phone Line includes 600 minutes and booking on your real calendar. Additional voice minutes cost $0.35 each.</p>
            <p className="text-[#cbd5e1] leading-relaxed mb-6">An answering service or AI receptionist addresses the phone. We install and manage the website, booking, and follow-up around it too. We confirm the phone and calendar setup with you before launch.</p>
            <a href="/#pricing" className="inline-block py-2 font-semibold text-white underline decoration-[#f97316] underline-offset-4">Compare the full plans →</a>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Hear the system before you decide</h2>
          <p className="text-[#475569] leading-relaxed mb-8">Call our live line at <a href="tel:8126123105" className="font-semibold underline underline-offset-4">(812) 612-3105</a> to hear the AI answer and offer booking. Bring your questions to a free 15-minute walkthrough with Wayne, where we can discuss how it would fit your business.</p>
          <LpGuarantee />
        </section>

        <section className="bg-[#F8F9FA] px-4 py-14 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-5">Start with a review of your current setup</h2>
            <p className="text-[#475569] leading-relaxed mb-6">The free AI opportunity audit is a 15-minute walkthrough of your website, missed calls, follow-up, and booking steps. You leave with a prioritized action plan you can use whether or not you work with us.</p>
            <Link to="/lp/ai-audit/" className="inline-block rounded-lg bg-[#f97316] px-6 py-4 font-semibold text-white hover:bg-[#ea580c]">Get your free audit</Link>
            <p className="mt-8 text-[#475569]">Read next: <Link to={`/blog/${page.guide}/`} className="font-semibold text-[#0f172a] underline decoration-[#f97316] underline-offset-4">{page.guideLabel}</Link>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
