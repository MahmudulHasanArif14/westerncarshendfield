import { data } from '@/content';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author?: string;
  publishedAt: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  published: boolean;
  content: string;
}

type RawPost = Partial<BlogPost>;

export function getBlogPosts(): BlogPost[] {
  const now = new Date();
  const posts = (data as unknown as { blog?: RawPost[] }).blog ?? [];
  return posts
    .filter((p): p is RawPost & { title: string; publishedAt: string } =>
      Boolean(p.title && p.publishedAt && p.published && new Date(p.publishedAt) <= now)
    )
    .map((p) => ({
      id: p.id ?? p.slug ?? '',
      slug: p.slug ?? '',
      title: p.title,
      excerpt: p.excerpt ?? '',
      author: p.author,
      publishedAt: p.publishedAt,
      category: p.category,
      tags: p.tags,
      featuredImage: p.featuredImage,
      seoTitle: p.seoTitle,
      seoDescription: p.seoDescription,
      published: true,
      content: p.content ?? '',
    }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}
