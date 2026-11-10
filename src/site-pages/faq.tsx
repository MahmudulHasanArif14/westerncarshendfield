'use client';
import { faq as page } from '@/content';
import { Globe, Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { BOOKING_URL, PHONE_TEL, WHATSAPP_URL, SITE_URL } from '@/lib/site-constants';

const siteUrl = SITE_URL;
const pageUrl = `${siteUrl}/faq`;

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: page.items.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {page.items.map((item) => (
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

export default function FaqPage() {
  return (
    <>
      <>
        <title>Taxi FAQs | Western Cars Henfield — Booking, Airports &amp; More</title>
        <meta name="description" content="Answers to common questions about Western Cars Henfield. How to book a taxi, airport transfer prices, WhatsApp booking, our app, areas covered and more." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Taxi FAQs | Western Cars Henfield — Booking, Airports &amp; More" />
        <meta property="og:description" content="Answers to common questions about Western Cars Henfield. How to book a taxi, airport transfer prices, WhatsApp booking, our app, areas covered and more." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-home-hero-fleet.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taxi FAQs | Western Cars Henfield" />
        <meta name="twitter:description" content="Common questions about booking a taxi with Western Cars Henfield — airport transfers, WhatsApp, app download and areas covered." />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-home-hero-fleet.jpg`} />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd).replace(/</g, '\u003c')}</script>
      </>
      <main>
        <section className="relative py-xxl flex items-center overflow-hidden" style={{ background: 'hsl(var(--dark-bg))' }}>
          <img src="/images/site/pages-home-taxi-night.jpg" alt="Western Cars taxi at night in Henfield" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1440} height={500} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg) / 0.95) 45%, hsl(var(--dark-bg) / 0.65) 100%)' }} />
          <div className="relative z-10 max-w-content mx-auto px-4 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>Help & Information</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{page.hero.heading}</h1>
            <p className="text-white/70 text-lg max-w-2xl">{page.hero.body}</p>
          </div>
        </section>
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <FaqAccordion />
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
      </main>
    </>
  );
}
