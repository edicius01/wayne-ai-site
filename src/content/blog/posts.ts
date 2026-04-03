import plumberChatWidget from './the-tool-plumbers-use-to-book-jobs-while-they-sleep.html?raw';
import hvacToolToBookMoreServiceCalls from './hvac-tool-to-book-more-service-calls.html?raw';
import rooferToolToCaptureStormLeads from './roofer-tool-to-capture-storm-leads.html?raw';
import electricianToolToBookMoreJobs from './electrician-tool-to-book-more-jobs.html?raw';
import restaurantQrCodeLoyaltySystem from './restaurant-qr-code-loyalty-system.html?raw';
import pestControlToolToBookMoreJobs from './pest-control-tool-to-book-more-jobs.html?raw';
import lawnCareToolToBookMoreCustomers from './lawn-care-tool-to-book-more-customers.html?raw';
import garageDoorRepairToolToBookMoreJobs from './garage-door-repair-tool-to-book-more-jobs.html?raw';
import howMuchMissedCallsCostServiceBusiness from './how-much-missed-calls-cost-service-business.html?raw';
import leadResponseTimeWhySpeedWinsTheJob from './lead-response-time-why-speed-wins-the-job.html?raw';

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
    featuredImage: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1200&auto=format&fit=crop&q=80',
    content: rooferToolToCaptureStormLeads,
  },
  {
    slug: 'electrician-tool-to-book-more-jobs',
    title: "The Tool Electricians Are Using to Book More Jobs Without Playing Phone Tag All Day",
    description: "Every missed call is a job that went to another electrician. Discover how busy electrical contractors are using AI to respond instantly, book service calls automatically, and stop losing work to whoever picks up faster.",
    metaTitle: "The Tool Electricians Use to Book More Jobs | Wayne AI",
    author: "Wayne AI",
    date: '2026-04-02',
    tags: ["electrician","lead generation","automation"],
    featuredImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&auto=format&fit=crop&q=80',
    content: electricianToolToBookMoreJobs,
  },
  {
    slug: 'restaurant-qr-code-loyalty-system',
    title: "The QR Code Trick Restaurants Are Using to Turn One-Time Diners Into Regulars",
    description: "A QR code on the table, a free dessert offer, and suddenly your restaurant has a direct line to every customer who ever sat down. Here's how smart restaurants are using AI to turn one-time diners into loyal regulars.",
    metaTitle: "The QR Code Trick Restaurants Use to Build Loyal Regulars | Wayne AI",
    author: "Wayne AI",
    date: '2026-04-02',
    tags: ["restaurant","loyalty","automation"],
    featuredImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80',
    content: restaurantQrCodeLoyaltySystem,
  },
  {
    slug: 'pest-control-tool-to-book-more-jobs',
    title: "The Tool Pest Control Companies Are Using to Book More Jobs Without Losing Customers to the First Company That Responds",
    description: "When bugs show up, homeowners call every pest control company they can find and go with whoever responds first. Discover how smart pest control companies are using AI to respond instantly, book repeat service plans automatically, and stop losing seasonal spikes to competitors who simply pick up faster.",
    metaTitle: "The Tool Pest Control Companies Use to Book More Jobs | Wayne AI",
    author: "Wayne AI",
    date: '2026-04-02',
    tags: ["pest control","lead generation","automation"],
    content: pestControlToolToBookMoreJobs,
  },
  {
    slug: 'lawn-care-tool-to-book-more-customers',
    title: "The Tool Lawn Care Companies Are Using to Book More Customers Without Losing the Spring Rush",
    description: "Every spring, 50 homeowners call in one week and the companies that respond first fill their routes. Discover how smart lawn care businesses are using AI to capture every lead, lock in recurring customers, and stop losing jobs to whoever picks up faster.",
    metaTitle: "The Tool Lawn Care Companies Use to Book More Customers | Wayne AI",
    author: "Wayne AI",
    date: '2026-04-02',
    tags: ["lawn care","lead generation","automation"],
    content: lawnCareToolToBookMoreCustomers,
  },
  {
    slug: 'garage-door-repair-tool-to-book-more-jobs',
    title: "The Tool Garage Door Companies Are Using to Book More Jobs Without Missing a Single Urgent Call",
    description: "Broken springs don't wait for business hours. See how garage door repair companies are capturing every urgent call — even at 6am — and booking more high-ticket jobs automatically.",
    metaTitle: "The Tool Garage Door Companies Are Using to Book More Jobs | Wayne AI",
    author: "Wayne AI",
    date: '2026-04-02',
    tags: ["garage door","lead generation","automation"],
    content: garageDoorRepairToolToBookMoreJobs,
  },
  {
    slug: 'how-much-missed-calls-cost-service-business',
    title: "How Much Are Missed Calls Actually Costing Your Service Business?",
    description: "Most service business owners think missed calls are a minor inconvenience. The math says otherwise. Here's what unanswered phones are really costing you.",
    metaTitle: "How Much Do Missed Calls Cost a Service Business? | Wayne AI",
    author: "Wayne AI",
    date: '2026-04-02',
    tags: ["lead generation","missed calls","revenue"],
    content: howMuchMissedCallsCostServiceBusiness,
  },
  {
    slug: 'lead-response-time-why-speed-wins-the-job',
    title: "The 5-Minute Lead Response Rule: Why Speed Wins or Loses the Job",
    description: "Leads contacted within 5 minutes are 9x more likely to convert. Here's why response speed is the single biggest factor in whether local service businesses win or lose jobs — and what to do about it.",
    metaTitle: "The 5-Minute Lead Response Rule: Why Speed Wins or Loses the Job | Wayne AI",
    author: "Wayne AI",
    date: '2026-04-02',
    tags: ["lead generation","response time","automation"],
    content: leadResponseTimeWhySpeedWinsTheJob,
  },
];
