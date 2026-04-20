import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { posts, type BlogPost } from '../content/blog/posts';

type Category = {
  label: string;
  tags: string[];
};

const CATEGORIES: Category[] = [
  { label: 'All', tags: [] },
  { label: 'HVAC', tags: ['HVAC', 'hvac', 'tune-up'] },
  { label: 'Plumbing', tags: ['plumbing'] },
  { label: 'Roofing', tags: ['roofing'] },
  {
    label: 'Trades',
    tags: [
      'electrician', 'garage door', 'locksmith', 'handyman', 'painting contractor',
      'flooring contractor', 'window cleaning', 'fence installation', 'gutter cleaning',
      'appliance repair', 'tree service', 'pest control', 'lawn care', 'pool service',
      'pressure washing', 'auto repair', 'cleaning service',
    ],
  },
  { label: 'Restaurant', tags: ['restaurant', 'loyalty'] },
  { label: 'Reviews', tags: ['google reviews', 'Google reviews', 'reputation', 'reputation management'] },
  { label: 'Lead Gen', tags: ['lead generation', 'missed calls', 'lead response', 'response time'] },
  { label: 'Automation', tags: ['automation', 'AI automation', 'AI', 'how-to', 'appointment booking', 'booking'] },
  { label: 'Business', tags: ['marketing', 'sales', 'pricing', 'referrals', 'customer retention', 'recurring revenue', 'website', 'local SEO'] },
];

function matchesCategory(post: BlogPost, category: Category): boolean {
  if (category.tags.length === 0) return true;
  const postTagsLower = post.tags.map(t => t.toLowerCase());
  return category.tags.some(ct => postTagsLower.includes(ct.toLowerCase()));
}

export function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'All';

  const activeConfig = CATEGORIES.find(c => c.label === activeCategory) ?? CATEGORIES[0];
  const filteredPosts = posts.filter(p => matchesCategory(p, activeConfig));

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{activeCategory === 'All' ? 'Blog | Wayne AI — AI Automation for Local Service Businesses' : `${activeCategory} Articles | Wayne AI Blog`}</title>
        <meta name="description" content={activeCategory === 'All' ? 'Practical guides for local service businesses on AI, automation, and getting more leads. Plumbing, HVAC, restaurants, and more.' : `Practical AI automation guides for ${activeCategory} businesses — missed calls, lead gen, reviews, and more.`} />
        <meta property="og:title" content={activeCategory === 'All' ? 'Blog | Wayne AI' : `${activeCategory} | Wayne AI Blog`} />
        <meta property="og:description" content="Practical guides for local service businesses on AI, automation, and getting more leads." />
        <meta property="og:type" content="website" />
        {activeCategory !== 'All' && <link rel="canonical" href={`https://wayneai.net/blog?category=${encodeURIComponent(activeCategory)}`} />}
      </Helmet>
      <Navigation />

      {/* Header */}
      <section className="bg-[#0f172a] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The Wayne AI <span className="text-[#f97316]">Blog</span>
          </h1>
          <p className="text-[#94a3b8] text-lg">
            Practical guides for local service businesses on AI, automation, and getting more leads.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-100 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const count = cat.tags.length === 0 ? posts.length : posts.filter(p => matchesCategory(p, cat)).length;
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => {
                    if (cat.label === 'All') {
                      setSearchParams({});
                    } else {
                      setSearchParams({ category: cat.label });
                    }
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#f97316] text-white shadow-sm'
                      : 'bg-gray-100 text-[#374151] hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                  <span className={`ml-1.5 text-xs ${isActive ? 'text-orange-100' : 'text-[#94a3b8]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-[#64748b] py-16">No posts in this category yet.</p>
          ) : (
            <div className="space-y-10">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  {post.featuredImage && (
                    <Link to={`/blog/${post.slug}`}>
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-56 object-cover"
                      />
                    </Link>
                  )}
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium bg-[#f97316]/10 text-[#f97316] px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-[#f97316] transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-[#374151] mb-6">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#64748b]">
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-[#f97316] font-semibold text-sm hover:gap-2 transition-all"
                      >
                        Read more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
