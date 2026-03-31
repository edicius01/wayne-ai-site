import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'Do I need a new phone number?',
    answer: 'No! Wayne AI works with your existing phone number. When you miss a call, we automatically send a text from your number within seconds.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: "No long-term contracts. We operate month-to-month because we believe you should stay because the system makes you money, not because you're locked in. Just give us 30 days' notice so we can cleanly offboard your data.",
  },
  {
    question: 'How long does setup take?',
    answer: 'Most setups are complete within 5-7 business days after you provide access to your accounts.',
  },
  {
    question: 'Does this work with my existing calendar system?',
    answer: 'Yes! We integrate with Google Calendar, Outlook, and most scheduling systems.',
  },
  {
    question: 'What happens to my existing phone calls?',
    answer: "Nothing changes. You still answer calls when you can. Wayne AI only steps in when you miss a call or can't respond immediately.",
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer: "Absolutely. Start with The Solo Shield and upgrade to The Growth Engine as you grow. Or start big with The AI Front Desk. You're in control.",
  },
  {
    question: 'What if I need help or have technical issues?',
    answer: "You get a dedicated support line. Since we are a local partner based here in Evansville—not a giant software corporation—we actually respond. You text us, we fix it.",
  },
];

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" ref={ref} className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#0f172a]">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#f97316] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-[#1f2937]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
