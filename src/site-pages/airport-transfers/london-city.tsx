'use client';
import { airport_london_city } from '@/content';
import { Plane, Globe, Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { BOOKING_URL, PHONE_TEL, WHATSAPP_URL, SITE_URL } from '@/lib/site-constants';

const siteUrl = SITE_URL;
const pageUrl = `${siteUrl}/airport-transfers/london-city`;
const coverage = ['Henfield','Steyning','Hurstpierpoint','Hassocks','Burgess Hill','Haywards Heath','Brighton','Hove','Shoreham-by-Sea','Horsham','Worthing','Crawley','Billingshurst','Partridge Green','Cowfold'];

function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto">
      {airport_london_city.faq.map((item) => (
        <div key={item.id} className="border border-border rounded-sm overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-foreground hover:bg-muted transition-colors text-sm md:text-base"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            aria-expanded={openId === item.id}
          >
            <span>{item.question}</span>
            {openId === item.id ? <ChevronUp size={18} className="shrink-0 text-primary" /> : <ChevronDown size={18} className="shrink-0 text-primary" />}
          </button>
          {openId === item.id && (
            <div className="px-5 pb-4 pt-3 text-sm text-muted-foreground leading-relaxed border-t border-border">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AirportTransferPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'London City Airport Taxi from Henfield & West Sussex | Western Cars',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'TaxiService',
        '@id': `${pageUrl}#service`,
        name: 'London City Airport Taxi from Henfield & West Sussex | Western Cars',
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: { '@type': 'Place', name: 'West Sussex, United Kingdom' },
        url: pageUrl,
      },
    ],
  };
  return (
    <>
      <>
        <title>London City Airport Taxi from Henfield &amp; West Sussex | Western Cars</title>
        <meta name="description" content="Pre-book your London City Airport taxi from Henfield and West Sussex with Western Cars. Fixed prices, professional drivers, 24/7 availability. Call 01273 588080." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="London City Airport Taxi from Henfield &amp; West Sussex | Western Cars" />
        <meta property="og:description" content="Pre-book your London City Airport taxi from Henfield and West Sussex with Western Cars. Fixed prices, professional drivers, 24/7 availability. Call 01273 588080." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-airport-transfers-london-city-hero.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Henfield to London City Airport Taxi | Western Cars" />
        <meta name="twitter:description" content="Pre-book your taxi from Henfield to London City Airport with Western Cars. Call 01273 588080 or book online." />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-airport-transfers-london-city-hero.jpg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, '\u003c')}</script>
      </>
      <main>
        {/* Hero */}
        <section className="relative py-xxl flex items-center overflow-hidden" style={{ background: 'hsl(var(--dark-bg))' }}>
          <img src="/images/site/pages-airport-transfers-london-city-hero.jpg" alt="London City Airport terminal" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1440} height={500} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg) / 0.95) 50%, hsl(var(--dark-bg) / 0.7) 100%)' }} />
          <div className="relative z-10 max-w-content mx-auto px-4 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>Airport Transfers</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{airport_london_city.hero.heading}</h1>
            <p className="text-white/70 text-lg max-w-2xl mb-8">{airport_london_city.hero.body}</p>
            <div className="flex flex-wrap gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm transition-opacity hover:opacity-90" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={16} /> Book Transfer</a>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-sm text-sm hover:opacity-90 transition-opacity"><Phone size={16} /> 01273 588080</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors"><MessageCircle size={16} /> WhatsApp</a>
            </div>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 flex flex-col gap-10">
                {airport_london_city.sections.map((sec) => (
                  <div key={sec.id}>
                    <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{sec.heading}</h2>
                    <p className="text-muted-foreground leading-relaxed">{sec.body}</p>
                  </div>
                ))}
              </div>
              <aside className="flex flex-col gap-4">
                <div className="rounded-sm border border-border p-6 bg-card shadow-sm">
                  <h3 className="font-bold text-foreground mb-4 text-base">Book Your Transfer</h3>
                  <div className="flex flex-col gap-3">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-sm text-sm transition-opacity hover:opacity-90 w-full" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={16} /> Book Online</a>
                    <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-3 rounded-sm text-sm hover:opacity-90 transition-opacity w-full"><Phone size={16} /> 01273 588080</a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-sm text-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors w-full"><MessageCircle size={16} /> WhatsApp</a>
                  </div>
                </div>
                <div className="rounded-sm border border-border p-6 bg-card shadow-sm">
                  <h3 className="font-bold text-foreground mb-4 text-base">Areas We Cover</h3>
                  <div className="flex flex-wrap gap-2">
                    {coverage.map((area) => (
                      <span key={area} className="px-3 py-1 text-xs font-medium rounded-sm border border-border bg-muted text-foreground">{area}</span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-xxl" style={{ background: 'hsl(var(--muted))' }}>
          <div className="max-w-content mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>Frequently Asked Questions</h2>
            </div>
            <FaqAccordion />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>Ready to Travel?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{airport_london_city.cta.heading}</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{airport_london_city.cta.body}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm transition-opacity hover:opacity-90" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Plane size={18} /> Book Transfer</a>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-sm hover:opacity-90 transition-opacity"><Phone size={18} /> Call 01273 588080</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
