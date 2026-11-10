'use client';
import { areas as page } from '@/content';
import Link from 'next/link';
import { Globe, Phone, MessageCircle, MapPin } from 'lucide-react';
import { BOOKING_URL, PHONE_TEL, WHATSAPP_URL, SITE_URL } from '@/lib/site-constants';

const siteUrl = SITE_URL;
const pageUrl = `${siteUrl}/areas-we-cover`;

export default function AreasPage() {
  return (
    <>
      <>
        <title>Taxi Service Areas in West Sussex | Western Cars Henfield</title>
        <meta name="description" content="Western Cars Henfield covers Henfield, Steyning, Bramber, Burgess Hill, Haywards Heath, Brighton, Horsham, Shoreham and 18+ West Sussex locations. Available 24/7 — book online or call 01273 588080." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Taxi Service Areas in West Sussex | Western Cars Henfield" />
        <meta property="og:description" content="Western Cars Henfield covers Henfield, Steyning, Bramber, Burgess Hill, Brighton, Horsham, Shoreham and 18+ West Sussex locations. Available 24/7 — book online or call 01273 588080." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-home-why-choose-fleet.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taxi Service Areas in West Sussex | Western Cars Henfield" />
        <meta name="twitter:description" content="Western Cars Henfield covers Henfield, Steyning, Burgess Hill, Brighton, Horsham and all surrounding West Sussex areas. Available 24/7." />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-home-why-choose-fleet.jpg`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          name: 'Taxi Service Areas in West Sussex | Western Cars Henfield',
          url: pageUrl,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\\u003c')}</script>
      </>
      <main>
        <section className="relative py-xxl flex items-center overflow-hidden" style={{ background: 'hsl(var(--dark-bg))' }}>
          <img src="/images/site/pages-services-local-taxi.jpg" alt="Village road in West Sussex served by Western Cars" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1440} height={500} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg) / 0.95) 45%, hsl(var(--dark-bg) / 0.65) 100%)' }} />
          <div className="relative z-10 max-w-content mx-auto px-4 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>Coverage</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{page.hero.heading}</h1>
            <p className="text-white/70 text-lg max-w-2xl mb-8">{page.hero.body}</p>
            <div className="flex flex-wrap gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm transition-opacity hover:opacity-90" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={16} /> Book Online</a>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-sm text-sm hover:opacity-90 transition-opacity"><Phone size={16} /> 01273 588080</a>
            </div>
          </div>
        </section>
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-3xl">{page.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.locations.map((loc) => (
                <Link
                  key={loc.id}
                  href={loc.href as '/areas-we-cover/henfield' | '/areas-we-cover/steyning' | '/areas-we-cover/hurstpierpoint' | '/areas-we-cover/burgess-hill' | '/areas-we-cover/haywards-heath' | '/areas-we-cover/brighton' | '/areas-we-cover/horsham' | '/areas-we-cover/hassocks' | '/areas-we-cover/hove' | '/areas-we-cover/shoreham-by-sea' | '/areas-we-cover/worthing' | '/areas-we-cover/crawley' | '/areas-we-cover/billingshurst' | '/areas-we-cover/partridge-green' | '/areas-we-cover/cowfold' | '/areas-we-cover/albourne' | '/areas-we-cover/small-dole' | '/areas-we-cover/woodmancote'}
                  className="group flex gap-4 p-5 rounded-sm border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center text-primary-foreground" style={{ background: 'hsl(var(--primary))' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h2 className="font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors">{loc.name}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{loc.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Book Your Taxi Today</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Ready to travel? Book online, call us or send a WhatsApp message.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm transition-opacity hover:opacity-90" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={18} /> Book Online</a>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-sm hover:opacity-90 transition-opacity"><Phone size={18} /> Call 01273 588080</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors"><MessageCircle size={18} /> WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
