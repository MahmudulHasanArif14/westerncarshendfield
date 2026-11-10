'use client';
import { Phone, Clock, Shield, PoundSterling, Plane, Car, Map } from 'lucide-react';
import { airport_transfers } from '@/content';
import { PHONE_TEL } from '@/lib/site-constants';

const iconMap: Record<string, React.ReactNode> = {
  clock: <Clock size={28} />,
  shield: <Shield size={28} />,
  pound: <PoundSterling size={28} />,
  plane: <Plane size={28} />,
  car: <Car size={28} />,
  map: <Map size={28} />,
};

const siteUrl = 'https://westerncarshenfield.co.uk';
const pageUrl = `${siteUrl}/airport-transfers`;
const pageTitle = 'Heathrow Airport Transfers from Henfield | Western Cars';
const pageDescription = 'Specialist Heathrow Airport transfers from Henfield and West Sussex. Fixed rates, 24/7 availability, flight monitoring. Call 01273 588080.';

export default function AirportTransfersPage() {
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
        <meta property="og:image" content={`${siteUrl}/images/site/pages-airport-transfers-hero.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-airport-transfers-hero.jpg`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: 'Heathrow Airport Transfers from Henfield',
          description: pageDescription,
          provider: { '@id': `${siteUrl}/#organization` },
          areaServed: 'West Sussex, UK',
          url: pageUrl,
        }).replace(/</g, '\\u003c')}</script>
      </>

      <main>
        {/* Hero */}
        <section className="relative min-h-[340px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/site/pages-airport-transfers-hero.jpg"
            alt="Heathrow Airport terminal"
            className="absolute inset-0 w-full h-full object-cover"
            width={1440}
            height={500}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/80 pointer-events-none" />
          <div className="relative z-10 text-center px-4 py-xxl max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-3">
              {airport_transfers.hero.eyebrow}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {airport_transfers.hero.heading}
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              {airport_transfers.hero.subheading}
            </p>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-sm hover:opacity-90 transition-opacity text-lg"
            >
              <Phone size={20} />
              <span>Call 01273 588080</span>
            </a>
          </div>
        </section>

        {/* Intro */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {airport_transfers.intro.heading}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                {airport_transfers.intro.paragraphs[0]}
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                {airport_transfers.intro.paragraphs[1]}
              </p>
            </div>
          </div>
        </section>

        {/* Terminals */}
        <section className="py-xxl" style={{ background: 'hsl(var(--muted))' }}>
          <div className="max-w-content mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {airport_transfers.terminals.heading}
              </h2>
              <p className="text-muted-foreground">
                {airport_transfers.terminals.subheading}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {airport_transfers.terminals.items.map((item) => (
                <div key={item.id} className="bg-background rounded-sm p-6 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Plane size={18} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              {airport_transfers.whyUs.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {airport_transfers.whyUs.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-sm bg-primary flex items-center justify-center text-primary-foreground">
                    {iconMap[item.icon] ?? <Car size={28} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Cover */}
        <section className="py-xxl" style={{ background: 'hsl(var(--muted))' }}>
          <div className="max-w-content mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {airport_transfers.areas.heading}
              </h2>
              <p className="text-muted-foreground">
                {airport_transfers.areas.subheading}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {airport_transfers.areas.locations.map((loc) => (
                <span
                  key={loc}
                  className="bg-background border border-border text-foreground text-sm font-medium px-4 py-2 rounded-sm"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-xxl bg-primary text-primary-foreground">
          <div className="max-w-content mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {airport_transfers.cta.heading}
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              {airport_transfers.cta.subheading}
            </p>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone size={20} />
              <span>{airport_transfers.cta.buttonLabel}</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
