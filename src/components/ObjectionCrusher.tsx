import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const objections = [
  {
    question: "What if I already have a website?",
    answer: (
      <>
        <p className="mb-4">No problem. You've got two options:</p>
        <div className="space-y-4">
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-bold text-[#0f172a] mb-2">Option 1: Keep Yours</h4>
            <p className="text-[#374151]">
              We install our booking widget and chat system on your existing site. You keep your look; we add the horsepower.
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-bold text-[#0f172a] mb-2">Option 2: Let Us Build You a New One</h4>
            <p className="text-[#374151]">
              We build you a fast, mobile-first site for your trades and your service area, with a booking button on every screen. We host it, we keep it updated, and it is included in the monthly price rather than a four-figure project on the side.
            </p>
          </div>
        </div>
        <p className="mt-4 font-semibold text-[#f97316]">
          Your choice. Either way, you're up and running in 7 days.
        </p>
      </>
    ),
  },
  {
    question: "There are $39 apps that answer the phone. Why pay more?",
    answer: (
      <>
        <p className="mb-4">There are, and they work. Here is what you are still holding afterward:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">✗</span>
            <span className="text-[#374151]"><span className="font-semibold">Your website is still whatever it was.</span> Answering apps answer the phone. Not one of them builds you a site.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">✗</span>
            <span className="text-[#374151]"><span className="font-semibold">You wire it up.</span> Calendar, booking flow, message templates, and the site it all points at are your evening project.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">✗</span>
            <span className="text-[#374151]"><span className="font-semibold">Your texts may never arrive.</span> US carriers filter business texting that isn't registered. We register yours so the messages actually land.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">✗</span>
            <span className="text-[#374151]"><span className="font-semibold">No one is on the hook.</span> When it breaks at 6pm on a Friday, you are the support team.</span>
          </li>
        </ul>
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <p className="text-[#0f172a] mb-2">
            We build and run this system ourselves. <span className="font-bold text-green-700">It answers our own business line</span> before it ever touches yours. You get the site and the phone installed in 7 days, with a human on the hook when something needs fixing.
          </p>
          <p className="text-lg font-bold text-green-700">
            The real question: who is building the site those calls come from?
          </p>
        </div>
      </>
    ),
  },
  {
    question: "What if it doesn't work for me?",
    answer: (
      <>
        <p className="mb-4">Fair concern. Here's our deal:</p>
        <div className="bg-[#f97316]/10 border-2 border-[#f97316] rounded-lg p-6">
          <p className="text-[#0f172a] mb-4">
            We don't lock you into a year-long contract. If the system doesn't catch at least{' '}
            <span className="font-bold text-[#f97316]">2 jobs in the first 30 days</span>, we'll refund your first month's payment and part ways as friends.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="font-bold text-[#0f172a] mb-2">Why we're confident:</p>
            <p className="text-[#374151]">
              The jobs this catches are calls you're <span className="font-bold">already getting and already losing</span>. The system answers them in seconds instead of never. If your phone rings and we're set up correctly, this works. That's why we can afford to put a refund behind it.
            </p>
          </div>
        </div>
      </>
    ),
  },
];

export function ObjectionCrusher() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section ref={ref} className="py-20 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-[#1f2937]">
            Let's address the elephants in the room
          </p>
        </div>

        <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {objections.map((objection, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-[#0f172a] pr-4">{objection.question}</span>
                <svg
                  className={`w-6 h-6 text-[#f97316] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[800px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 bg-gray-50">
                  <div className="text-[#1f2937]">
                    {objection.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
