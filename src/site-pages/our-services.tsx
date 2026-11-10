'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SITE_URL } from '@/lib/site-constants';

const siteUrl = SITE_URL;
const canonicalUrl = `${siteUrl}/services`;

export default function OurServicesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/services');
  }, [router]);
  return (
    <>
      <>
        <title>Taxi Services in Henfield, West Sussex | Western Cars</title>
        <meta name="description" content="Western Cars Henfield offers local taxis, airport transfers, business travel, long-distance and more. Available 24/7. Call 01273 588080 or book online." />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Taxi Services in Henfield, West Sussex | Western Cars" />
        <meta property="og:description" content="Western Cars Henfield offers local taxis, airport transfers, business travel, long-distance and more. Available 24/7. Call 01273 588080 or book online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-our-services-hero.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taxi Services in Henfield, West Sussex | Western Cars" />
        <meta name="twitter:description" content="Western Cars Henfield — local taxis, airport transfers, business travel and more. Available 24/7." />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-our-services-hero.jpg`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          name: 'Taxi Services in Henfield, West Sussex | Western Cars',
          url: canonicalUrl,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\u003c')}</script>
      </>
      <main>
        <h1 className="sr-only">Redirecting to Services</h1>
      </main>
    </>
  );
}
