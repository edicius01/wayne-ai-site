export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'How is this different from an answering service?',
    answer: 'An answering service answers your phone and that is the whole product. Ruby starts at $250 a month for 50 minutes, PATLive at $250 for 75 minutes, and neither one builds or runs your website. We build the site, put booking on it, answer the calls you miss by voice and by text, and keep the follow-up running, starting at $149 a month.',
  },
  {
    question: 'Do I have to use the website you build?',
    answer: "No. If you like the site you have, we install the booking and the call capture on it and leave the look alone. If your site is old or you don't have one, we build and host a new one, and it is included in the monthly price instead of a separate four-figure project.",
  },
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
    answer: "Absolutely. Start with The Front Door and upgrade to The AI Front Desk as you grow. Or go all in with The Whole Phone Line. You're in control.",
  },
  {
    question: 'What if I need help or have technical issues?',
    answer: "You get a dedicated support line. Since we are a local partner based here in Evansville, not a giant software corporation, we actually respond. You text us, we fix it.",
  },
];
