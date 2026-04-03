import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { posts } from '../content/blog/posts';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog | Wayne AI — AI Automation for Local Service Businesses</title>
        <meta name="description" content="Practical guides for local service businesses on AI, automation, and getting more leads. Plumbing, HVAC, restaurants, and more." />
        <meta property="og:title" content="Blog | Wayne AI" />
        <meta property="og:description" content="Practical guides for local service businesses on AI, automation, and getting more leads." />
        <meta property="og:type" content="website" />
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

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-[#64748b] py-16">No posts yet — check back soon.</p>
          ) : (
            <div className="space-y-10">
              {posts.map((post) => (
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
