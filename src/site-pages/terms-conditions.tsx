'use client';
import { terms_conditions } from '@/content';

const siteUrl = 'https://westerncarshenfield.co.uk';
const pageUrl = `${siteUrl}/terms-conditions`;
const pageTitle = 'Terms & Conditions | Western Cars Henfield';
const pageDescription = 'Read the Terms & Conditions for Western Cars Henfield Ltd — licensed private hire and taxi services in Henfield, West Sussex.';

export default function TermsConditionsPage() {
  return (
    <>
      <>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-home-hero-fleet.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-home-hero-fleet.jpg`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="robots" content="noindex, follow" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          name: pageTitle,
          url: pageUrl,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\\u003c')}</script>
      </>

      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-xl">
          <div className="max-w-content mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {terms_conditions.hero.heading}
            </h1>
            <p className="text-primary-foreground/80 text-base max-w-xl mx-auto">
              {terms_conditions.hero.subheading}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-xxl bg-background">
          <div className="max-w-3xl mx-auto px-4">

            {/* Meta info */}
            <div className="mb-10 p-4 border border-border rounded-sm bg-muted text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span>
                <span className="font-semibold text-foreground">{terms_conditions.companyName}</span>
                {' '}— Company No. {terms_conditions.companyNumber}
              </span>
              <span>Last updated: {terms_conditions.lastUpdated}</span>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-10">
              {terms_conditions.sections.map((section) => (
                <div key={section.id}>
                  <h2 className="text-lg font-bold text-foreground mb-3 pb-2 border-b border-border">
                    {section.heading}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {section.body.map((para) => (
                      <p key={para.id} className="text-muted-foreground text-sm leading-relaxed">
                        {para.text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact strip */}
            <div className="mt-14 p-6 border border-border rounded-sm bg-muted text-center">
              <p className="text-foreground font-semibold mb-1">Questions about these terms?</p>
              <p className="text-muted-foreground text-sm mb-4">
                Contact us and we'll be happy to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a
                  href="tel:01273588080"
                  className="font-semibold text-primary hover:underline"
                >
                  {terms_conditions.phone}
                </a>
                <span className="hidden sm:inline text-border">|</span>
                <a
                  href="mailto:info@westerncars.co.uk"
                  className="font-semibold text-primary hover:underline"
                >
                  {terms_conditions.email}
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
