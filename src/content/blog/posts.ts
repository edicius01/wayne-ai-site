import plumberChatWidget from './the-tool-plumbers-use-to-book-jobs-while-they-sleep.html?raw';

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
];
