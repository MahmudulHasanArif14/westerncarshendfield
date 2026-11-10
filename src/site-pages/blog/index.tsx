'use client';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';
import { getBlogPosts, type BlogPost } from '@/lib/blog';
import { SITE_URL } from '@/lib/site-constants';
import { blog_listing as c } from '@/content';

export default function BlogPage({ hubPosts = [] }: { hubPosts?: BlogPost[] }) {
  const posts = [...hubPosts, ...getBlogPosts().filter((l) => !hubPosts.some((h) => h.slug === l.slug))]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  const pageTitle = 'Blog | Western Cars Henfield';
  const pageDesc  = 'Tips, guides and news from Western Cars Henfield — your local taxi and airport transfer service in West Sussex.';
  const pageUrl   = `${SITE_URL}/blog`;

  return (
    <>
      <>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          '@id': `${pageUrl}#blog`,
          url: pageUrl,
          name: pageTitle,
          publisher: { '@id': `${SITE_URL}/#organization` },
          blogPost: posts.slice(0, 20).map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE_URL}/blog/${p.slug}`, datePublished: p.publishedAt })),
        }).replace(/</g, '\u003c')}</script>
      </>

      <main>
        <section className="py-16 px-4 text-center" style={{ background: 'hsl(var(--secondary))' }}>
          <h1 className="text-4xl font-bold text-white mb-3">{c.heading}</h1>
          <p className="text-white/70 max-w-xl mx-auto">{c.subheading}</p>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground py-16">{c.emptyMessage}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article key={post.slug} className="rounded-xl border border-border bg-card overflow-hidden flex flex-col">
                    {post.featuredImage && (
                      <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={(post as { imageAlt?: string }).imageAlt || post.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          loading="lazy"
                          width={600}
                          height={338}
                        />
                      </Link>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      {post.category && (
                        <div className="flex items-center gap-1 text-xs font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>
                          <Tag className="w-3 h-3" />
                          <span>{post.category}</span>
                        </div>
                      )}
                      <h2 className="font-bold text-lg mb-2 leading-snug" style={{ color: 'hsl(var(--secondary))' }}>
                        <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                      </h2>
                      <p className="text-sm text-muted-foreground flex-1 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <Link href={`/blog/${post.slug}`} className="font-semibold hover:underline" style={{ color: 'hsl(var(--primary))' }}>{c.readMore}</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
