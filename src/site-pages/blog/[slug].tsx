'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug } from '@/lib/blog';
import type { HubBlogPost } from '@/lib/blog-hub';
import { SITE_URL } from '@/lib/site-constants';
import { blog_listing as c } from '@/content';

export default function BlogPostPage({ hubPost }: { hubPost?: HubBlogPost | null }) {
  const { slug } = useParams<{ slug: string }>();
  const post = hubPost ?? (slug ? getPostBySlug(slug) : undefined);
  const hub = hubPost ?? undefined;

  if (!post) {
    return (
      <main className="py-24 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--secondary))' }}>Post not found</h1>
        <Link href="/blog" className="font-semibold hover:underline" style={{ color: 'hsl(var(--primary))' }}>{c.backToBlog}</Link>
      </main>
    );
  }

  const pageTitle = post.seoTitle || `${post.title} | Western Cars Henfield`;
  const pageDesc  = post.seoDescription || post.excerpt;
  const pageUrl   = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        {post.featuredImage && <meta name="twitter:image" content={post.featuredImage} />}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: hub?.updatedAt ?? post.publishedAt,
          mainEntityOfPage: pageUrl,
          keywords: post.tags?.join(', '),
          inLanguage: 'en-GB',
          ...(hub?.sources.length ? { citation: hub.sources } : {}),
          image: post.featuredImage,
          url: pageUrl,
          author: { '@type': 'Organization', name: post.author || 'Western Cars Henfield' },
          publisher: { '@id': `${SITE_URL}/#organization`, '@type': 'Organization', name: 'Western Cars Henfield', url: SITE_URL, logo: `${SITE_URL}/images/site/logo.png` },
        }).replace(/</g, '\\u003c')}</script>
      </>

      <main>
        {post.featuredImage && (
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img src={post.featuredImage} alt={hub?.imageAlt || post.title} className="w-full h-full object-cover" loading="eager" fetchPriority="high" width={1200} height={600} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(11,18,32,0.3), rgba(11,18,32,0.65))' }} />
          </div>
        )}

        <article className="max-w-3xl mx-auto px-4 py-12">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold mb-6 hover:underline" style={{ color: 'hsl(var(--primary))' }}>
            <ArrowLeft className="w-4 h-4" /> <span>{c.backToBlog}</span>
          </Link>

          <header className="mb-8">
            {post.category && (
              <div className="flex items-center gap-1 text-xs font-semibold mb-3" style={{ color: 'hsl(var(--primary))' }}>
                <Tag className="w-3 h-3" /><span>{post.category}</span>
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: 'hsl(var(--secondary))' }}>{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
              </span>
              {post.author && <span>{post.author}</span>}
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:underline"
            style={{ '--tw-prose-headings': 'hsl(var(--secondary))', '--tw-prose-links': 'hsl(var(--primary))' } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {hub?.imageCredit && (
            <p className="mt-10 text-xs text-muted-foreground">
              Image: {hub.imageSourceUrl ? <a href={hub.imageSourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline">{hub.imageCredit}</a> : hub.imageCredit}
              {hub.imageLicense && <> · {hub.imageLicenseUrl ? <a href={hub.imageLicenseUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline">{hub.imageLicense}</a> : hub.imageLicense}</>}
            </p>
          )}

          {hub && hub.sources.length > 0 && (
            <aside className="mt-8 border-t border-border pt-6">
              <h2 className="text-base font-bold mb-3" style={{ color: 'hsl(var(--secondary))' }}>Sources</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {hub.sources.map((u) => (
                  <li key={u}><a href={u} target="_blank" rel="noopener noreferrer" className="hover:underline break-all" style={{ color: 'hsl(var(--primary))' }}>{u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</a></li>
                ))}
              </ul>
            </aside>
          )}
        </article>
      </main>
    </>
  );
}
