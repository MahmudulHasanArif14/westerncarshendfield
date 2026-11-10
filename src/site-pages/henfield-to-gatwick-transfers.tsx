'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SITE_URL } from '@/lib/site-constants';

const siteUrl = SITE_URL;
const canonicalUrl = `${siteUrl}/airport-transfers/gatwick`;

export default function HenfieldGatwickRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/airport-transfers/gatwick');
  }, [router]);
  return (
    <>
      <>
        <title>Henfield to Gatwick Airport Transfers | Western Cars</title>
        <meta name="description" content="Pre-booked, fixed-price taxi transfers from Henfield to Gatwick Airport. Available 24/7. Call 01273 588080 or book online." />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Henfield to Gatwick Airport Transfers | Western Cars" />
        <meta property="og:description" content="Pre-booked, fixed-price taxi transfers from Henfield to Gatwick Airport. Available 24/7. Call 01273 588080 or book online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-gatwick-transfers-hero.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Henfield to Gatwick Airport Transfers | Western Cars" />
        <meta name="twitter:description" content="Pre-booked, fixed-price taxi transfers from Henfield to Gatwick Airport. Available 24/7." />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-gatwick-transfers-hero.jpg`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          name: 'Henfield to Gatwick Airport Transfers | Western Cars',
          url: canonicalUrl,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\u003c')}</script>
      </>
      <main>
        <h1 className="sr-only">Redirecting to Gatwick Airport Transfers</h1>
      </main>
    </>
  );
}
