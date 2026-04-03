export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  featuredImage?: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'the-tool-plumbers-use-to-book-jobs-while-they-sleep',
    title: 'The One Tool Plumbers Are Quietly Adding to Their Websites That Books Jobs While They Sleep',
    description: 'Discover the AI webchat tool top plumbers are adding to their websites to capture leads 24/7 and book jobs automatically — even at 2am.',
    author: 'Wayne AI',
    date: '2025-03-15',
    tags: ['plumbing', 'lead generation', 'automation'],
    featuredImage: 'https://assets.cdn.filesafe.space/qn3C6gimURSVaujVaKiz/media/6d888242-568e-45a7-9e9c-1f93971e97c2.png',
    content: `<h2>Most Plumbing Websites Are Open Signs That Turn Off at 5pm</h2><p>Most plumbing websites look fine. Logo, phone number, maybe a contact form. The problem is a contact form isn't a conversation — it's a waiting room. And at 11pm, nobody's waiting.</p><p>The homeowner with the leaking water heater isn't filling out a form and hoping someone calls back in the morning. They're clicking to the next result. Whoever captures them wins the job.</p><h2>What the Busiest Plumbers Are Adding to Their Sites</h2><p>The tool is an AI webchat widget — a small chat bubble that lives in the corner of your website, responds to visitors instantly at any hour, and books them into your calendar before they leave.</p><p>Not a chatbot that says <em>"Thanks for reaching out! We'll be in touch."</em> Those are useless.</p><p>A properly configured AI chat widget:</p><ul><li>Greets the visitor and asks what's going on</li><li>Qualifies the job (emergency or scheduled?)</li><li>Captures their name, number, and address</li><li>Books them directly into your calendar — or flags it urgent for a callback</li><li>Sends a confirmation text so they feel taken care of</li></ul><p>All of this happens while you're at another job, at dinner, or asleep.</p><blockquote><strong>The average home service business misses 35–40% of inbound calls.</strong> Most of those leads don't leave a voicemail — they just call the next plumber on the list.</blockquote><h2>"But I Already Have a Contact Form"</h2><p>Contact forms and AI chat serve completely different moments. A form is for someone who's already decided to reach out and is willing to wait. Chat captures the person who's still on the fence — browsing at midnight, not sure if their issue is urgent, not ready to call.</p><p>That second person is exactly who you're currently losing.</p><h2>How Fast Can This Go Live?</h2><p>This isn't a months-long website rebuild. The widget installs with a single line of code. Configuration — your service area, your hours, your booking calendar — takes less than an hour.</p><p>Most plumbers see their first after-hours lead within the first week.</p><h2>The Bottom Line</h2><p>Your website is already getting traffic. The question is whether it's capturing that traffic or letting it walk out the door at 5pm. An AI chat widget for plumbers is the smallest change with the biggest difference in after-hours lead capture — and it takes less than an hour to turn on.</p>`,
  },
];
