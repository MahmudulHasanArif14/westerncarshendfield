'use client';
import { area_henfield } from '@/content';
import { Globe, Phone, MessageCircle, Plane, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { BOOKING_URL, PHONE_TEL, WHATSAPP_URL, SITE_URL } from '@/lib/site-constants';

const siteUrl = SITE_URL;
const pageUrl = `${siteUrl}/areas-we-cover/henfield`;

function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {area_henfield.faq.map((item) => (
        <div key={item.id} className="border border-border rounded-sm overflow-hidden">
          <button className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-foreground hover:bg-muted transition-colors text-sm md:text-base" onClick={() => setOpenId(openId === item.id ? null : item.id)} aria-expanded={openId === item.id}>
            <span>{item.question}</span>
            {openId === item.id ? <ChevronUp size={18} className="shrink-0 text-primary" /> : <ChevronDown size={18} className="shrink-0 text-primary" />}
          </button>
          {openId === item.id && <div className="px-5 pb-4 pt-3 text-sm text-muted-foreground leading-relaxed border-t border-border">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function AreaPage() {
  return (
    <>
      <>
        <title>Henfield Taxis | Taxi in Henfield | Henfield to Gatwick &amp; Brighton | Western Cars</title>
        <meta name="description" content="Henfield taxis — Western Cars. Taxi in Henfield available 24/7. Henfield to Gatwick, Henfield to Heathrow, Henfield to Brighton. Henfield taxis number: 01273 588080." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Henfield Taxis | Taxi in Henfield | Western Cars" />
        <meta property="og:description" content="Henfield taxis — Western Cars. Taxi in Henfield available 24/7. Henfield to Gatwick, Henfield to Heathrow, Henfield to Brighton. Henfield taxis number: 01273 588080." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-home-hero-fleet.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Henfield Taxis | Taxi in Henfield | Western Cars" />
        <meta name="twitter:description" content="Henfield taxis 24/7. Taxi in Henfield to Gatwick, Heathrow, Brighton &amp; beyond. Henfield taxis number: 01273 588080." />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-home-hero-fleet.jpg`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          name: 'Taxi in Henfield, West Sussex | Western Cars',
          url: pageUrl,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\\u003c')}</script>
      </>
      <main>
        <section className="relative py-xxl flex items-center overflow-hidden" style={{ background: 'hsl(var(--dark-bg))' }}>
          <img src="/images/site/pages-home-hero-fleet.jpg" alt="Western Cars taxi service Henfield" className="absolute inset-0 w-full h-full object-cover opacity-20" width={1440} height={500} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg) / 0.95) 50%, hsl(var(--dark-bg) / 0.7) 100%)' }} />
          <div className="relative z-10 max-w-content mx-auto px-4 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>Local Taxi Service</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{area_henfield.hero.heading}</h1>
            <p className="text-white/70 text-lg max-w-2xl mb-8">{area_henfield.hero.body}</p>
            <div className="flex flex-wrap gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm transition-opacity hover:opacity-90" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={16} /> Book Online</a>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-sm text-sm hover:opacity-90 transition-opacity"><Phone size={16} /> 01273 588080</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors"><MessageCircle size={16} /> WhatsApp</a>
            </div>
          </div>
        </section>
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 flex flex-col gap-10">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{area_henfield.intro.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{area_henfield.intro.body}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{area_henfield.airports.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{area_henfield.airports.body}</p>
                  <Link href="/airport-transfers" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline text-sm"><Plane size={16} /> View Airport Transfers →</Link>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Frequently Asked Questions</h2>
                  <FaqAccordion />
                </div>
              </div>
              <aside>
                <div className="rounded-sm border border-border p-6 bg-card shadow-sm sticky top-24">
                  <h3 className="font-bold text-foreground mb-4 text-base">Book a Taxi</h3>
                  <div className="flex flex-col gap-3">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-sm text-sm transition-opacity hover:opacity-90 w-full" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={16} /> Book Online</a>
                    <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-3 rounded-sm text-sm hover:opacity-90 transition-opacity w-full"><Phone size={16} /> 01273 588080</a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-sm text-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors w-full"><MessageCircle size={16} /> WhatsApp</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-xl bg-muted/40 border-y border-border">
          <div className="max-w-content mx-auto px-4">
            <h2 className="text-lg font-bold text-foreground mb-6 text-center">Explore More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/areas-we-cover" className="flex items-center gap-3 p-4 rounded-sm border border-border bg-card hover:border-primary hover:shadow-sm transition-all group">
                <Plane size={18} className="shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">All Areas We Cover</p>
                  <p className="text-xs text-muted-foreground">West Sussex &amp; beyond</p>
                </div>
              </Link>
              <Link href="/airport-transfers/gatwick" className="flex items-center gap-3 p-4 rounded-sm border border-border bg-card hover:border-primary hover:shadow-sm transition-all group">
                <Plane size={18} className="shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">Gatwick Airport Transfers</p>
                  <p className="text-xs text-muted-foreground">North &amp; South Terminals</p>
                </div>
              </Link>
              <Link href="/airport-transfers/heathrow" className="flex items-center gap-3 p-4 rounded-sm border border-border bg-card hover:border-primary hover:shadow-sm transition-all group">
                <Plane size={18} className="shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">Heathrow Airport Transfers</p>
                  <p className="text-xs text-muted-foreground">All Heathrow terminals (2, 3, 4 &amp; 5) covered</p>
                </div>
              </Link>
              <Link href="/airport-transfers/stansted" className="flex items-center gap-3 p-4 rounded-sm border border-border bg-card hover:border-primary hover:shadow-sm transition-all group">
                <Plane size={18} className="shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">Stansted Airport Transfers</p>
                  <p className="text-xs text-muted-foreground">From Henfield &amp; West Sussex</p>
                </div>
              </Link>
              <Link href="/airport-transfers/luton" className="flex items-center gap-3 p-4 rounded-sm border border-border bg-card hover:border-primary hover:shadow-sm transition-all group">
                <Plane size={18} className="shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">Luton Airport Transfers</p>
                  <p className="text-xs text-muted-foreground">From Henfield &amp; West Sussex</p>
                </div>
              </Link>
              <Link href="/services" className="flex items-center gap-3 p-4 rounded-sm border border-border bg-card hover:border-primary hover:shadow-sm transition-all group">
                <Plane size={18} className="shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">All Taxi Services</p>
                  <p className="text-xs text-muted-foreground">Local, airport &amp; more</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{area_henfield.cta.heading}</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{area_henfield.cta.body}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm transition-opacity hover:opacity-90" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={18} /> Book Online</a>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-sm hover:opacity-90 transition-opacity"><Phone size={18} /> Call 01273 588080</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
