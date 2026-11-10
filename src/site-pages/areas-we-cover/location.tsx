'use client';
import { area_locations } from '@/content';
import { Globe, Phone, MessageCircle, Plane, MapPin, Train, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { BOOKING_URL, PHONE_TEL, WHATSAPP_URL, WHATSAPP_DISPLAY, PHONE_DISPLAY, SITE_URL } from '@/lib/site-constants';

export type AreaLocation = (typeof area_locations.locations)[number];


function buildFaq(l: AreaLocation) {
  return [
    {
      q: `How do I book a taxi in ${l.name}?`,
      a: `Book online at westerncars.webbooker.icabbi.com, call ${PHONE_DISPLAY} or send a WhatsApp message to ${WHATSAPP_DISPLAY}. Western Cars takes bookings for ${l.name} 24 hours a day, 7 days a week.`,
    },
    {
      q: `How far is ${l.name} from Henfield?`,
      a: `${l.name} (${l.postcode}) is about ${l.milesFromHenfield} miles by road from our base in Henfield, so a car can usually reach you quickly. Pre-booking is recommended for early mornings and airport runs.`,
    },
    {
      q: `How long is a taxi from ${l.name} to Gatwick Airport?`,
      a: `A taxi from ${l.name} to Gatwick usually takes around ${l.gatwickMins} minutes, depending on traffic. We cover both the North and South Terminals.`,
    },
    {
      q: `How long is a taxi from ${l.name} to Heathrow Airport?`,
      a: `Allow around ${l.heathrowMins} minutes from ${l.name} to Heathrow in normal traffic, longer at peak times. We serve all Heathrow terminals (2, 3, 4 & 5).`,
    },
    {
      q: `Can you take me to ${l.station} station?`,
      a: `Yes. We run station transfers to and from ${l.station} station and other local stations. Book ahead so your car is waiting when you need it.`,
    },
    {
      q: `How much is a taxi from ${l.name}?`,
      a: `Fares depend on distance, time of day and vehicle size. Call ${PHONE_DISPLAY} or book online for a quote before you travel.`,
    },
  ];
}

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div key={item.q} className="border border-border rounded-sm overflow-hidden">
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground hover:bg-muted transition-colors text-sm md:text-base"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            {open === i ? <ChevronUp size={18} className="shrink-0 text-primary" /> : <ChevronDown size={18} className="shrink-0 text-primary" />}
          </button>
          {open === i && <div className="px-5 pb-4 pt-3 text-sm text-muted-foreground leading-relaxed border-t border-border">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

export default function AreaLocationPage({ location: l }: { location: AreaLocation }) {
  const pageUrl = `${SITE_URL}/areas-we-cover/${l.slug}`;
  const title = `Taxi in ${l.name} | ${l.name} Taxis & Airport Transfers | Western Cars`;
  const description = `Local taxi in ${l.name} (${l.postcode}), ${l.county}, 24/7. Airport transfers to Gatwick and Heathrow, ${l.station} station runs and private hire. Call ${PHONE_DISPLAY}.`;
  const faq = buildFaq(l);
  const others = area_locations.locations.filter((o) => o.slug !== l.slug).slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Areas We Cover', item: `${SITE_URL}/areas-we-cover` },
          { '@type': 'ListItem', position: 3, name: `Taxi in ${l.name}`, item: pageUrl },
        ],
      },
      {
        '@type': 'TaxiService',
        '@id': `${pageUrl}#service`,
        name: `Taxi service in ${l.name}`,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Place', name: `${l.name}, ${l.county}`, address: { '@type': 'PostalAddress', addressLocality: l.name, addressRegion: l.county, postalCode: l.postcode, addressCountry: 'GB' } },
        availableChannel: { '@type': 'ServiceChannel', servicePhone: { '@type': 'ContactPoint', telephone: '+441273588080' }, serviceUrl: BOOKING_URL },
        hoursAvailable: 'Mo-Su 00:00-23:59',
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  const facts: { icon: React.ReactNode; label: string; value: string }[] = [
    { icon: <MapPin size={18} />, label: 'Distance from Henfield', value: `About ${l.milesFromHenfield} miles` },
    { icon: <Plane size={18} />, label: 'To Gatwick', value: `${l.gatwickMins} min` },
    { icon: <Plane size={18} />, label: 'To Heathrow', value: `${l.heathrowMins} min` },
    { icon: <Train size={18} />, label: 'Nearest station', value: l.station },
    { icon: <Clock size={18} />, label: 'Availability', value: '24/7, every day' },
  ];

  return (
    <>
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content={`${SITE_URL}/images/site/pages-home-hero-fleet.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/images/site/pages-home-hero-fleet.jpg`} />
        <meta name="geo.region" content={l.county === "East Sussex" ? "GB-BNH" : "GB-WSX"} />
        <meta name="geo.placename" content={l.name} />
        <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>
      </>
      <main>
        <section className="relative py-xxl flex items-center overflow-hidden" style={{ background: 'hsl(var(--dark-bg))' }}>
          <img src="/images/site/pages-home-hero-fleet.jpg" alt={`Western Cars taxi serving ${l.name}`} className="absolute inset-0 w-full h-full object-cover opacity-20" width={1440} height={500} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg) / 0.95) 50%, hsl(var(--dark-bg) / 0.7) 100%)' }} />
          <div className="relative z-10 max-w-content mx-auto px-4 w-full">
            <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-4">
              <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden>/</span>{' '}
              <Link href="/areas-we-cover" className="hover:text-white">Areas We Cover</Link> <span aria-hidden>/</span>{' '}
              <span className="text-white/90">{l.name}</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>{l.district} · {l.postcode}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Taxi in {l.name}, {l.county}</h1>
            <p className="text-white/80 text-lg max-w-2xl mb-8 leading-relaxed">
              Western Cars provides 24/7 taxis and private hire in {l.name}: local journeys, {l.station} station runs and fixed-quote airport transfers to Gatwick, Heathrow and beyond. We're based in Henfield, about {l.milesFromHenfield} miles away.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm transition-opacity hover:opacity-90" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={16} /> Book Online</a>
              <a href={PHONE_TEL} className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-sm text-sm hover:opacity-90 transition-opacity"><Phone size={16} /> {PHONE_DISPLAY}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors"><MessageCircle size={16} /> WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="bg-card border-b border-border">
          <dl className="max-w-content mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-5">
            {facts.map((f) => (
              <div key={f.label} className="flex items-start gap-3">
                <span className="text-primary mt-0.5 shrink-0">{f.icon}</span>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                  <dd className="font-semibold text-foreground text-sm">{f.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 flex flex-col gap-10">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Your local {l.name} taxi service</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Need a taxi in {l.name}? Western Cars covers the whole {l.postcode} area, including {l.nearby.join(', ')}. Our local drivers know {l.local}, so you get the most direct route every time.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We handle everyday journeys, hospital and medical appointments, school runs, nights out and business travel. Book online, call {PHONE_DISPLAY} or message us on WhatsApp, day or night.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Airport transfers from {l.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Pre-book your airport taxi from {l.name}. Gatwick is usually {l.gatwickMins} minutes away and Heathrow {l.heathrowMins} minutes, traffic permitting. We also cover Stansted, Luton and London City. Your price is agreed when you book.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <Link href="/airport-transfers/gatwick" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline text-sm"><Plane size={16} /> {l.name} to Gatwick →</Link>
                    <Link href="/airport-transfers/heathrow" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline text-sm"><Plane size={16} /> {l.name} to Heathrow →</Link>
                    <Link href="/airport-transfers" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline text-sm"><Plane size={16} /> All airports →</Link>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{l.name} taxi FAQs</h2>
                  <FaqAccordion items={faq} />
                </div>
              </div>
              <aside>
                <div className="rounded-sm border border-border p-6 bg-card shadow-sm lg:sticky lg:top-28">
                  <h2 className="font-bold text-foreground mb-1 text-base">Book a taxi in {l.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">Available 24 hours a day, 7 days a week.</p>
                  <div className="flex flex-col gap-3">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-sm text-sm transition-opacity hover:opacity-90 w-full" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={16} /> Book Online</a>
                    <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-3 rounded-sm text-sm hover:opacity-90 transition-opacity w-full"><Phone size={16} /> {PHONE_DISPLAY}</a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-sm text-sm border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-colors w-full"><MessageCircle size={16} /> WhatsApp {WHATSAPP_DISPLAY}</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-xl bg-muted/40 border-y border-border">
          <div className="max-w-content mx-auto px-4">
            <h2 className="text-lg font-bold text-foreground mb-6 text-center">Other areas we cover</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/areas-we-cover/henfield" className="px-4 py-2 rounded-sm text-sm font-medium border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors">Henfield</Link>
              {others.map((o) => (
                <Link key={o.slug} href={`/areas-we-cover/${o.slug}`} className="px-4 py-2 rounded-sm text-sm font-medium border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors">{o.name}</Link>
              ))}
              <Link href="/areas-we-cover" className="px-4 py-2 rounded-sm text-sm font-semibold text-primary hover:underline">All areas →</Link>
            </div>
          </div>
        </section>

        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Book your {l.name} taxi</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Book online, call {PHONE_DISPLAY} or send a WhatsApp message. Western Cars is available 24/7.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm transition-opacity hover:opacity-90" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}><Globe size={18} /> Book Online</a>
              <a href={PHONE_TEL} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-sm hover:opacity-90 transition-opacity"><Phone size={18} /> Call {PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
