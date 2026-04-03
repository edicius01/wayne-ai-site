import plumberChatWidget from './the-tool-plumbers-use-to-book-jobs-while-they-sleep.html?raw';
import hvacToolToBookMoreServiceCalls from './hvac-tool-to-book-more-service-calls.html?raw';
import rooferToolToCaptureStormLeads from './roofer-tool-to-capture-storm-leads.html?raw';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  featuredImage?: string;
  metaTitle?: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'the-tool-plumbers-use-to-book-jobs-while-they-sleep',
    title: 'The One Tool Plumbers Are Quietly Adding to Their Websites That Books Jobs While They Sleep',
    description: 'Discover the AI webchat tool top plumbers are adding to their websites to capture leads 24/7 and book jobs automatically — even at 2am.',
    metaTitle: 'The Tool Plumbers Use to Book Jobs While They Sleep | Wayne AI',
    author: 'Wayne AI',
    date: '2025-03-15',
    tags: ['plumbing', 'lead generation', 'automation'],
    featuredImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&auto=format&fit=crop&q=80',
    content: plumberChatWidget,
  },
  {
    slug: 'hvac-tool-to-book-more-service-calls',
    title: "The Tool HVAC Companies Are Using to Book More Service Calls Without Answering Every Phone",
    description: "Discover how smart HVAC companies are using AI to respond to leads instantly, book service calls automatically, and stop losing jobs to competitors who pick up faster.",
    metaTitle: "The Tool HVAC Companies Use to Book More Service Calls | Wayne AI",
    author: "Wayne AI",
    date: '2026-04-03',
    tags: ["HVAC","lead generation","automation"],
    featuredImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&auto=format&fit=crop&q=80',
    content: hvacToolToBookMoreServiceCalls,
  },
  {
    slug: 'roofer-tool-to-capture-storm-leads',
    title: "The Tool Roofers Are Using to Capture Storm Leads Before the Competition Gets There",
    description: "When a storm rolls through, every roofer in town is chasing the same leads. Discover how smart roofing companies are using AI to respond first, book inspections automatically, and close more jobs during peak season.",
    metaTitle: "The Tool Roofers Use to Capture Storm Leads First | Wayne AI",
    author: "Wayne AI",
    date: '2026-04-02',
    tags: ["roofing","lead generation","automation"],
    content: rooferToolToCaptureStormLeads,
  },
];
