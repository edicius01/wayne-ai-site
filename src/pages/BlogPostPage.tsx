import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { posts } from '../content/blog/posts';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.metaTitle || `${post.title} | Wayne AI`}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.description} />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle || post.title} />
        <meta name="twitter:description" content={post.description} />
        {post.featuredImage && <meta name="twitter:image" content={post.featuredImage} />}
      </Helmet>
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-10 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium bg-[#f97316]/10 text-[#f97316] px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-5 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[#64748b] text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Featured image */}
      {post.featuredImage && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="prose prose-lg max-w-none prose-headings:text-[#0f172a] prose-headings:font-bold prose-p:text-[#374151] prose-a:text-[#f97316] prose-strong:text-[#0f172a] prose-blockquote:border-[#f97316] prose-blockquote:text-[#374151] prose-li:text-[#374151]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 bg-[#0f172a] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Want to see this in action for your business?
          </h3>
          <p className="text-[#94a3b8] mb-6">
            Book a free 15-minute demo — no pitch, just a live walkthrough.
          </p>
          <a
            href="https://book.wayneai.net"
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#f97316]/25"
          >
            Book a Free Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="mt-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#f97316] transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
