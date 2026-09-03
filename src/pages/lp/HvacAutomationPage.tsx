import { Helmet } from 'react-helmet-async';
import { LpGuarantee } from '../../components/LpGuarantee';
import { LpAnchor } from '../../components/LpAnchor';
import { Link } from 'react-router-dom';
import { LeadCallbackForm } from '../../components/LeadCallbackForm';
import { JsonLd } from '../../components/JsonLd';

function scrollToForm() {
  document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' });
}

// This is the one LP indexed for organic search (SEO test, Aug 2026). The rest
// stay noindex as paid-traffic destinations — see the canonical fix in PR #23.
// "AI receptionist" appears here as the SEO term people actually search; per the
// positioning canon the body must reframe to "front office" in the first
// paragraph, which the hero subhead does. Do not let it become our identity.
const faqs = [
  {
    question: 'How much does an AI receptionist cost for an HVAC company?',
    answer:
      'Wayne AI runs $149 to $497 a month depending on how much of the phone you want handled, with no setup fee and no long-term contract. The $149 Front Door tier catches every missed call by text. The $297 AI Front Desk adds a managed AI phone line, unified inbox, and review automation. The $497 tier books straight onto your real calendar and sends you a monthly call log. Self-serve apps run $49 to $299, but you build and maintain those yourself.',
  },
  {
    question: 'Does it actually answer the phone, or does it only send texts?',
    answer:
      'Both. Missed-call text-back is live on every tier: the moment a call goes unanswered, the caller gets a text from the same number they dialed, with a real booking link. Voice AI that answers, holds a conversation, and books an appointment is live on our own line right now. Call (812) 612-3105 and hear it. On your own business number, voice is early access, with 250 or 600 included minutes depending on tier.',
  },
  {
    question: 'What happens when the AI cannot answer a question?',
    answer:
      'It hands the caller to a person. When someone asks for a human or the AI hits something it cannot help with, it takes a message, logs the conversation, and escalates to you instead of guessing. You see the full thread in one inbox, so nothing is lost between the AI and your team.',
  },
  {
    question: 'Will the text messages actually get delivered?',
    answer:
      'This is the part most HVAC owners find out about the hard way. US carriers block business texting from numbers that are not registered, and a DIY setup will send messages that silently never arrive. We register your business and your texting campaign with the carriers as part of onboarding, so your texts land instead of disappearing.',
  },
  {
    question: 'Will it book jobs on the calendar we already use?',
    answer:
      'Yes. The booking link in the text writes to your real calendar, so a captured lead becomes a scheduled appointment without anyone rekeying it. Every caught call is logged, which means recovered jobs are a number you can count at the end of the month rather than a feeling.',
  },
  {
    question: 'How long does setup take, and what do we have to do?',
    answer:
      'Seven days or less, and the build is on us: calendar sync, SMS templates, review automation, and website integration. This is done-for-you rather than a login and a tutorial. If the system does not catch at least 2 new jobs in your first 30 days, we refund your first month.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const relatedPosts = [
  {
    slug: 'hvac-tool-to-book-more-service-calls',
    title: 'How HVAC Companies Book More Service Calls Without Answering Every Phone',
  },
  {
    slug: 'hvac-tune-up-season-leads',
    title: 'Why HVAC Companies Lose Tune-Up Season Leads (And the Fix That Runs Itself)',
  },
  {
    slug: 'hvac-winter-emergency-calls-automated-response',
    title: 'No Heat at Midnight: Capturing Winter Emergency Calls Without Being On Call 24/7',
  },
];

export function HvacAutomationPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://wayneai.net/lp/hvac-automation/" />
        {/* Title, description and H1 are FROZEN until the SEO test reads ~2026-10-05.
            This is the one indexed /lp/* page (PR #24, noindex removed 08-10), so the
            ranked surface must not move mid-test. That includes the em dash below: it
            stays despite the no-em-dash rule, deliberately, until the test result is in.
            Body copy was repositioned 08-21; the ranked surface was not. */}
        <title>AI Receptionist for HVAC Companies — Answers &amp; Books 24/7 | Wayne AI</title>
        <meta
          name="description"
          content="Looking for an AI receptionist for your HVAC company? Wayne AI is a done-for-you front office: missed calls texted back in seconds, jobs booked on your real calendar, texts that actually deliver. Built in 7 days. 2 jobs in 30 days or your money back."
        />
        <meta
          property="og:title"
          content="AI Receptionist for HVAC Companies — Answers & Books 24/7 | Wayne AI"
        />
        <meta
          property="og:description"
          content="A done-for-you AI front office for HVAC companies. Missed calls texted back in seconds, jobs booked on your calendar, and texts registered to actually deliver."
        />
        <meta property="og:url" content="https://wayneai.net/lp/hvac-automation/" />
        <meta property="og:image" content="https://wayneai.net/og-image-1200x630.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      <JsonLd data={faqSchema} />

      <div className="min-h-screen bg-white">
        {/* Minimal nav */}
        <header className="bg-[#0f172a] py-4 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <svg className="w-7 h-7 text-[#f97316]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v5.7c0 4.83-3.4 9.36-7 10.5-3.6-1.14-7-5.67-7-10.5V6.3l7-3.12z" />
              </svg>
              <span className="text-white font-bold text-lg">Wayne AI</span>
            </Link>
            <button
              onClick={scrollToForm}
              className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
            >
              Get Started Free
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-[#0f172a] pb-20 pt-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-4">
              For HVAC Companies
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Looking for an AI Receptionist for Your HVAC Company?
            </h1>
            <p className="text-[#94a3b8] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              What most HVAC owners actually need isn't a receptionist app. It's a front office
              that runs without them. Wayne AI installs and runs the whole thing: missed calls
              texted back in seconds, jobs booked on your real calendar, and follow-up that
              happens whether or not anyone remembers. When an AC dies at 6pm, homeowners call
              two or three companies and book the first one that responds. This keeps you in
              that running while you're still under a house.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              See How It Works →
            </button>
          </div>
        </section>

        {/* Proof line — the canon's proof-over-promises move */}
        <section className="bg-[#f97316] py-8 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white text-lg font-semibold mb-2">
              Don't take our word for it. Test it on our own line.
            </p>
            <p className="text-white/90 leading-relaxed">
              Call{' '}
              <a href="tel:+18126123105" className="font-bold underline hover:text-[#0f172a] transition-colors">
                (812) 612-3105
              </a>{' '}
              and an AI answers, talks, and books you a time. Or call it and hang up, and watch
              it text you back with a real booking link. That's our production system, not a
              recording.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-6 text-center">
              The Missed Call Problem Is Costing You Real Jobs
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              Roughly <span className="font-bold text-[#0f172a]">62% of calls to local service
              businesses go unanswered</span>. For an HVAC company that number isn't a
              statistic, it's a Tuesday: you're in an attic with a meter in your hand, the phone
              rings, and by the time you climb down and call back the homeowner has already
              booked whoever picked up.
            </p>
            <p className="text-[#475569] text-lg leading-relaxed">
              The job doesn't go to the cheapest company or the best-reviewed one. It goes to
              whoever responded first. That's the whole contest, and it's decided in the minutes
              after a call you couldn't take, which is exactly the window an automated front
              office is built to cover.
            </p>
          </div>
        </section>

        {/* Category escape */}
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-6 text-center">
              Why a $49 AI Receptionist App Usually Doesn't Stick
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              There are plenty of cheap AI receptionist apps. They work the way any tool works:
              you sign up, and then you're the one who has to make it work. You write the
              scripts, connect the calendar, figure out why the texts aren't arriving, and tune
              it when it says something wrong to a customer. For most HVAC owners that's a
              second job layered on top of the first one.
            </p>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              The real alternative to hiring someone isn't buying software. It's becoming your
              own systems integrator. We'd rather do that part. We build the system, connect it
              to your calendar and your website, register your texting with the carriers, run
              it, and fix it when it needs fixing. You get a working front office in seven days
              or less, not a login and a tutorial.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="font-bold text-[#0f172a] mb-2">A $49 app gives you</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  A dashboard, a free trial, and a list of things you now have to configure,
                  monitor, and repair yourself. Your website stays exactly as it was, because
                  answering apps answer the phone and nothing else.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-[#f97316]">
                <h3 className="font-bold text-[#0f172a] mb-2">Wayne AI gives you</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Your website built and run, plus an installed, integrated, carrier-registered
                  front office behind it, with a guarantee attached to whether it books jobs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LpAnchor trade="HVAC companies" />

        {/* How it works */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-12 text-center">How It Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'A lead calls and you miss it',
                  body: "You're on a job. The phone rings. You can't answer. Under the old system, that lead calls your competitor next and you never even learn the job existed.",
                },
                {
                  step: '02',
                  title: 'Wayne AI responds in seconds',
                  body: 'The moment a call goes unanswered, an automatic text goes out from the same number the homeowner dialed, so it reads as you, not as a stranger. On the AI Front Desk tier, the phone gets answered by a voice AI that can hold the conversation instead of letting it go to voicemail.',
                },
                {
                  step: '03',
                  title: 'It qualifies the job and books the time',
                  body: "The system asks what's wrong, collects the address and contact details, and books onto your real calendar. If the caller asks for a person, or it hits a question it can't handle, it takes a message and hands the conversation to you rather than guessing.",
                },
                {
                  step: '04',
                  title: 'You show up to a booked job, not a callback list',
                  body: "No more end-of-day callback roulette. Every caught call is logged, so at the end of the month the jobs you recovered are a number you can count, not a feeling about whether the thing is working.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f97316] text-white font-bold flex items-center justify-center text-sm">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-lg mb-1">{title}</h3>
                    <p className="text-[#475569] leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4 text-center">
              Built for How HVAC Businesses Actually Operate
            </h2>
            <p className="text-[#475569] text-lg text-center mb-12 max-w-xl mx-auto">
              Whether it's an emergency call at 9pm or a tune-up inquiry during your busiest
              week, the same system handles it.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'After-hours calls',
                  body: "AC failures and heating outages don't respect business hours, and a voicemail box at 11pm is the same as a closed door. The system responds immediately, at any hour, so the conversation is already started when you pick it up in the morning.",
                },
                {
                  title: 'Spring and fall tune-up rushes',
                  body: "When calls stack up faster than anyone can answer them, the ones you don't get to are pure loss. Every caller gets a response and a booking link, so the seasonal surge doesn't quietly go to the company with a spare person at a desk.",
                },
                {
                  title: 'On-the-job missed calls',
                  body: "You can't stop a service call to answer the phone, and you shouldn't have to. Every missed call gets an instant response that holds the lead until you're free, sent from your number so it doesn't read as spam.",
                },
                {
                  title: 'Estimate follow-up',
                  body: 'Quotes that never get a follow-up die quietly. Automated sequences check in after an estimate on their own schedule, which means the follow-up happens on the weeks when you are far too busy to remember it.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="p-6 bg-white rounded-xl border border-gray-100">
                  <h3 className="font-bold text-[#0f172a] text-lg mb-2">{title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The A2P moat */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-6 text-center">
              The Part Nobody Tells You About Business Texting
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              US carriers block business texting from numbers that aren't registered. Not
              flagged. Not delayed, blocked. The messages leave your system, the dashboard
              shows them as sent, and they never reach anyone's phone. Most owners who set this
              up themselves discover it weeks later, after wondering why an automation that
              "works" isn't producing a single reply.
            </p>
            <p className="text-[#475569] text-lg leading-relaxed">
              We register your business and your texting campaign with the carriers as part of
              onboarding, because a missed-call text that doesn't deliver is worse than no
              system at all. It's the same lost job plus a monthly bill. This is unglamorous,
              genuinely annoying work, and it's the difference between a front office that
              books jobs and one that just looks busy.
            </p>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              We Put the Risk on Our Side
            </h2>
            <p className="text-[#475569] text-lg mb-12 max-w-xl mx-auto">
              We don't have a wall of HVAC testimonials, because we'd rather show you something
              you can verify than something you have to take on faith. So here's the promise
              instead, and the live line above, which you can test right now.
            </p>
            <LpGuarantee />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-12 text-center">
              Common Questions from HVAC Owners
            </h2>
            <div className="space-y-6">
              {faqs.map(({ question, answer }) => (
                <div key={question} className="p-6 bg-[#f8fafc] rounded-xl border border-gray-100">
                  <h3 className="font-bold text-[#0f172a] text-lg mb-2">{question}</h3>
                  <p className="text-[#475569] leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related reading — hub-and-spoke, now bidirectional */}
        <section className="py-16 px-6 bg-[#f8fafc]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-6 text-center">
              More on Capturing HVAC Leads
            </h2>
            <ul className="space-y-3">
              {relatedPosts.map(({ slug, title }) => (
                <li key={slug}>
                  <Link
                    to={`/blog/${slug}`}
                    className="text-[#0f172a] hover:text-[#f97316] transition-colors font-medium underline decoration-gray-300 underline-offset-4"
                  >
                    {title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/blog/complete-guide-ai-automation-local-service-businesses"
                  className="text-[#0f172a] hover:text-[#f97316] transition-colors font-medium underline decoration-gray-300 underline-offset-4"
                >
                  The complete guide to AI automation for local service businesses
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Form */}
        <section id="lp-form" className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to stop losing jobs to faster competitors?
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Tell us about your HVAC business and we'll show you exactly how the front office
                works. Free, no commitment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl sm:p-8">
              <LeadCallbackForm slug="wayneai-lp-hvac" />
            </div>
            <p className="text-[#475569] text-sm text-center mt-4">No commitment. No sales pressure.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0f172a] border-t border-gray-800 py-8 px-6 text-center">
          <p className="text-[#475569] text-sm">
            &copy; 2026 Wayne AI.{' '}
            <Link to="/privacy" className="hover:text-[#f97316] transition-colors">
              Privacy Policy
            </Link>
            {' · '}
            <Link to="/" className="hover:text-[#f97316] transition-colors">
              Back to wayneai.net
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
