/**
 * Server-only client for the Western Cars central content hub
 * (https://github.com/MahmudulHasanArif14/AiBlogPosterAPi).
 *
 * Hub articles are rendered as native pages on this domain. Per the hub docs,
 * the canonical / OG / sitemap URL must be OUR /blog/{slug}, never the hub's
 * canonical_url. `content` is plain text, so it is escaped before rendering.
 */
import type { BlogPost } from './blog';

const HUB_URL = (process.env.BLOG_HUB_URL || 'https://content.westerncars.com').replace(/\/$/, '');
/** Comma-separated hub location slugs to show on this site. */
const LOCATIONS = (process.env.BLOG_HUB_LOCATIONS || 'henfield')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const REVALIDATE = 3600;

type HubPost = {
  slug: string;
  title: string;
  excerpt: string;
  meta_description: string;
  published_at: string | null;
  updated_at?: string | null;
  location?: { slug: string; name: string } | null;
  author: string | null;
  category?: string | null;
  tags: string[];
  reading_minutes?: number;
  sources?: string[];
  content?: string;
  image_url: string | null;
  image_alt: string | null;
  image_credit: string | null;
  image_source_url: string | null;
  image_license: string | null;
  image_license_url: string | null;
  image_width: number | null;
  image_height: number | null;
};

export type HubBlogPost = BlogPost & {
  source: 'hub';
  updatedAt?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageSourceUrl?: string;
  imageLicense?: string;
  imageLicenseUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  readingMinutes?: number;
  sources: string[];
  locationName?: string;
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const safeUrl = (u: string | null | undefined) => (u && /^https:\/\//i.test(u) ? u : undefined);

/**
 * The hub docs promise blank-line paragraphs, but some articles arrive as one
 * unbroken block. In that case, group sentences into short paragraphs.
 */
function toParagraphs(text: string): string[] {
  if (/\n\s*\n/.test(text)) return text.split(/\n\s*\n/);
  const sentences = text.match(/[^.!?]+(?:[.!?]+["')\]]*|$)\s*/g) ?? [text];
  const out: string[] = [];
  let buf = '';
  for (const s of sentences) {
    buf += s;
    if (buf.length > 380 || (buf.match(/[.!?]\s/g)?.length ?? 0) >= 3) {
      out.push(buf.trim());
      buf = '';
    }
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}

function toHtml(text: string): string {
  return toParagraphs(text)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${esc(p).replace(/\n/g, '<br />')}</p>`)
    .join('\n');
}

function map(p: HubPost): HubBlogPost | null {
  if (!p.slug || !p.title || !p.published_at) return null;
  return {
    source: 'hub',
    id: `hub-${p.slug}`,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt ?? '',
    author: p.author ?? undefined,
    publishedAt: p.published_at,
    updatedAt: p.updated_at ?? undefined,
    category: p.category ?? undefined,
    tags: Array.isArray(p.tags) ? p.tags : [],
    featuredImage: safeUrl(p.image_url),
    imageAlt: p.image_alt ?? undefined,
    imageCredit: p.image_credit ?? undefined,
    imageSourceUrl: safeUrl(p.image_source_url),
    imageLicense: p.image_license ?? undefined,
    imageLicenseUrl: safeUrl(p.image_license_url),
    imageWidth: p.image_width ?? undefined,
    imageHeight: p.image_height ?? undefined,
    seoTitle: `${p.title} | Western Cars Henfield`,
    seoDescription: p.meta_description || p.excerpt,
    readingMinutes: p.reading_minutes,
    sources: (p.sources ?? []).map(safeUrl).filter(Boolean) as string[],
    locationName: p.location?.name,
    published: true,
    content: p.content ? toHtml(p.content) : '',
  };
}

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${HUB_URL}${path}`, { next: { revalidate: REVALIDATE, tags: ['blog'] } });
    if (!res.ok) {
      if (res.status !== 404) console.error(`[blog-hub] ${path} -> HTTP ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error('[blog-hub] request failed', path, err);
    return null;
  }
}

/** Listing (summaries) for all configured locations, newest first. Never throws. */
export async function getHubPosts(limit = 50): Promise<HubBlogPost[]> {
  const pages = await Promise.all(
    LOCATIONS.map((loc) =>
      getJson<{ data: HubPost[] }>(`/api/posts?location=${encodeURIComponent(loc)}&page=1&limit=${Math.min(limit, 50)}`),
    ),
  );
  const seen = new Set<string>();
  return pages
    .flatMap((r) => r?.data ?? [])
    .map(map)
    .filter((p): p is HubBlogPost => !!p && !seen.has(p.slug) && !!seen.add(p.slug))
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

/** One full article, only if it belongs to a configured location. */
export async function getHubPost(slug: string): Promise<HubBlogPost | null> {
  if (!/^[a-z0-9-]{1,200}$/.test(slug)) return null;
  const res = await getJson<{ data: HubPost }>(`/api/posts/${slug}`);
  const post = res?.data;
  if (!post || !post.location || !LOCATIONS.includes(post.location.slug)) return null;
  return map(post);
}
