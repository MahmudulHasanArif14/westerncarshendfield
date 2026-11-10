'use client';
import { services as page } from '@/content';
import type { ReactNode } from 'react';
import { Car, Plane, Train, MapPin, Briefcase, Users, Star, Globe, Phone, MessageCircle } from 'lucide-react';
import { BOOKING_URL, PHONE_TEL, WHATSAPP_URL, SITE_URL } from '@/lib/site-constants';

const siteUrl = SITE_URL;
const pageUrl = `${siteUrl}/services`;

const iconMap: Record<string, ReactNode> = {
  car: <Car size={28} />,
  plane: <Plane size={28} />,
  train: <Train size={28} />,
  'map-pin': <MapPin size={28} />,
  globe: <Globe size={28} />,
  briefcase: <Briefcase size={28} />,
  users: <Users size={28} />,
  star: <Star size={28} />,
};

const googleBusinessServices = [
  'Airport transfers',
  'Corporate travel',
  'MVP Hire',
  'Wheelchair accessible taxis',
  'Long-distance taxi service',
  'Courier service',
  'Airport shuttle service',
  'Chauffeur service',
  'Transportation service',
  'Meet and greet service',
  'Local taxi service',
  'Corporate account service',
  'Executive service',
  'Event hire car service',
  'Pet-friendly taxi service',
  '6-8 seater minibus taxi',
  'Large capacity taxi',
  'Wedding car service',
  'Wedding taxi transport',
  'Event hire taxi transport',
  'VIP transport escort',
  'Security escort transport',
  'Chauffeur escort service',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Taxi Services in Henfield | Western Cars',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'ItemList',
      '@id': `${pageUrl}#services`,
      name: 'Western Cars Henfield taxi services',
      itemListElement: googleBusinessServices.map((name, position) => ({
        '@type': 'ListItem',
        position: position + 1,
        item: {
          '@type': 'Service',
          name,
          provider: { '@id': `${siteUrl}/#organization` },
          areaServed: { '@type': 'AdministrativeArea', name: 'West Sussex' },
        },
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <>
        <title>Taxi Services in Henfield, West Sussex | Western Cars</title>
        <meta name="description" content="Western Cars Henfield offers local taxi, airport transfers to all 5 London airports, station pickups, business travel and private hire across West Sussex. Available 24/7 — book online or call 01273 588080." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Taxi Services in Henfield, West Sussex | Western Cars" />
        <meta property="og:description" content="Local taxi, airport transfers to all 5 London airports, station pickups and private hire from Western Cars Henfield. Available 24/7." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-our-services-hero.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taxi Services in Henfield, West Sussex | Western Cars" />
        <meta name="twitter:description" content="Local taxi, airport transfers to all 5 London airports, station pickups and private hire from Western Cars Henfield. Available 24/7." />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-our-services-hero.jpg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, '\u003c')}</script>
      </>

      <main>
        {/* Hero */}
        <section className="relative py-xxl flex items-center overflow-hidden" style={{ background: 'hsl(var(--dark-bg))' }}>
          <img
            src="/images/site/pages-our-services-hero.jpg"
            alt="Western Cars taxi services Henfield"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            width={1440} height={500} loading="eager" fetchPriority="high"
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg) / 0.95) 50%, hsl(var(--dark-bg) / 0.7) 100%)' }} />
          <div className="relative z-10 max-w-content mx-auto px-4 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>What We Offer</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {page.hero.heading}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mb-8">
              {page.hero.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm transition-opacity hover:opacity-90"
                style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}>
                <Globe size={16} /> Book Online
              </a>
              <a href={PHONE_TEL}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-sm text-sm hover:opacity-90 transition-opacity">
                <Phone size={16} /> 01273 588080
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="flex flex-col gap-16">
              {page.services.map((service, i) => (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover rounded-sm shadow-lg"
                      width={600} height={320} loading="lazy"
                    />
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-12 h-12 rounded-sm flex items-center justify-center text-primary-foreground mb-4" style={{ background: 'hsl(var(--primary))' }}>
                      {iconMap[service.icon] ?? <Car size={28} />}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-sm text-sm transition-opacity hover:opacity-90"
                      style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}>
                      <Globe size={16} /> Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-xxl bg-muted/30" aria-labelledby="additional-services-heading">
          <div className="max-w-content mx-auto px-4">
            <h2 id="additional-services-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Taxi services we provide
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Choose the service that best matches your journey. Contact us for availability and booking details.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {googleBusinessServices.map((service) => (
                <li key={service} className="rounded-sm border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {page.cta.heading}
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{page.cta.body}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm transition-opacity hover:opacity-90"
                style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}>
                <Globe size={18} /> Book Online
              </a>
              <a href={PHONE_TEL}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-sm hover:opacity-90 transition-opacity">
                <Phone size={18} /> Call 01273 588080
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
