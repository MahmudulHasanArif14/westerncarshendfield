import type { MetadataRoute } from 'next';
import { area_locations, data } from '@/content';
import { SITE_URL } from '@/lib/site-constants';

const staticRoutes: [string, number][] = [
  ['/', 1],
  ['/services', 0.9],
  ['/airport-transfers', 0.9],
  ['/airport-transfers/gatwick', 0.9],
  ['/airport-transfers/heathrow', 0.9],
  ['/airport-transfers/stansted', 0.8],
  ['/airport-transfers/luton', 0.8],
  ['/airport-transfers/london-city', 0.8],
  ['/areas-we-cover', 0.8],
  ['/areas-we-cover/henfield', 0.9],
  ['/about-us', 0.6],
  ['/contact-us', 0.7],
  ['/faq', 0.7],
  ['/blog', 0.6],
  ['/lp/airport-transfers-offer', 0.5],
  ['/terms-conditions', 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogSlugs = (data.blog as { slug?: string }[]).map((p) => p.slug).filter(Boolean) as string[];
  return [
    ...staticRoutes.map(([path, priority]) => ({ url: `${SITE_URL}${path === '/' ? '/' : path}`, lastModified: now, priority })),
    ...area_locations.locations.map((l) => ({ url: `${SITE_URL}/areas-we-cover/${l.slug}`, lastModified: now, priority: 0.7 })),
    ...blogSlugs.map((slug) => ({ url: `${SITE_URL}/blog/${slug}`, lastModified: now, priority: 0.6 })),
  ];
}
