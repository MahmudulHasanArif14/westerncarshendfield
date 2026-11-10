'use client';
import { pages } from '@/content';

const home = pages.home;
import Link from 'next/link';
import {
  Phone, MessageCircle, Globe, CheckCircle2, Clock, Briefcase,
  Shield, Car, Plane, Map, MapPin, Smartphone, ChevronDown, ChevronUp,
  Users,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { BOOKING_URL, PHONE_TEL, WHATSAPP_URL, APP_STORE_URL, GOOGLE_PLAY_URL, SITE_URL } from '@/lib/site-constants';

const siteUrl = SITE_URL;

const iconMap: Record<string, React.ReactNode> = {
  clock: <Clock size={24} />,
  shield: <Shield size={24} />,
  plane: <Plane size={24} />,
  car: <Car size={24} />,
  map: <Map size={24} />,
  briefcase: <Briefcase size={24} />,
  'map-pin': <MapPin size={24} />,
  smartphone: <Smartphone size={24} />,
  phone: <Phone size={24} />,
  'message-circle': <MessageCircle size={24} />,
  globe: <Globe size={24} />,
  users: <Users size={24} />,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Western Cars Henfield',
      url: `${siteUrl}/`,
    },
    {
      '@type': ['LocalBusiness', 'TaxiService'],
      '@id': `${siteUrl}/#organization`,
      name: 'Western Cars Henfield',
      url: `${siteUrl}/`,
      telephone: '+441273588080',
      logo: `${siteUrl}/images/site/logo.png`,
      image: `${siteUrl}/images/site/pages-home-hero-fleet.jpg`,
      description: 'Western Cars Henfield — professional taxi and private hire service in Henfield and West Sussex, specialising in airport transfers to Gatwick, Heathrow, Luton and Stansted.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Henfield',
        addressRegion: 'West Sussex',
        addressCountry: 'GB',
      },
      areaServed: [
        { '@type': 'City', name: 'Henfield' },
        { '@type': 'City', name: 'Billingshurst' },
        { '@type': 'City', name: 'Horsham' },
        { '@type': 'City', name: 'Brighton' },
        { '@type': 'City', name: 'Burgess Hill' },
      ],
      openingHours: 'Mo-Su 00:00-23:59',
      sameAs: ['https://www.facebook.com/westerncarshenfield/'],
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: 'Henfield Taxi | Airport Transfers & Private Hire | Western Cars',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      datePublished: '2024-01-01',
      dateModified: '2026-10-01',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I book a taxi in Henfield?', acceptedAnswer: { '@type': 'Answer', text: 'You can book online at westerncars.webbooker.icabbi.com, call 01273 588080, or send a message on WhatsApp to 07722 489859.' } },
    { '@type': 'Question', name: 'Does Western Cars provide airport transfers from Henfield?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide pre-booked airport transfers from Henfield to Gatwick, Heathrow, Stansted, Luton and London City Airport.' } },
    { '@type': 'Question', name: 'Can I book a Gatwick taxi from Henfield?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We cover both the North and South Terminals at Gatwick Airport. Pre-book online or by phone.' } },
    { '@type': 'Question', name: 'Can I book via WhatsApp?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Send a message to 07722 489859 on WhatsApp to arrange your booking.' } },
    { '@type': 'Question', name: 'Is Western Cars available 24 hours?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Cars operates 24 hours a day, 7 days a week, including bank holidays.' } },
    { '@type': 'Question', name: 'What areas does Western Cars Henfield cover?', acceptedAnswer: { '@type': 'Answer', text: 'We serve Henfield and surrounding areas including Steyning, Hurstpierpoint, Burgess Hill, Haywards Heath, Brighton, Horsham and more.' } },
  ],
};

const heroSlides = [
  { src: '/images/site/pages-home-hero-fleet.jpg', alt: 'Western Cars Henfield professional taxi fleet' },
  { src: '/images/site/pages-home-hero-taxi-road.jpg', alt: 'Western Cars taxi on the road at night' },
  { src: '/images/site/pages-home-hero-airport-transfer.jpg', alt: 'Western Cars airport transfer service' },
  { src: '/images/site/pages-home-taxi-night.jpg', alt: 'Western Cars taxi at night' },
];

function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-3">
      {home.faq.items.map((item) => (
        <div key={item.id} className="border border-border rounded-sm overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-foreground hover:bg-muted transition-colors text-sm md:text-base"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            aria-expanded={openId === item.id}
          >
            <span>{item.question}</span>
            {openId === item.id
              ? <ChevronUp size={18} className="shrink-0 text-primary" />
              : <ChevronDown size={18} className="shrink-0 text-primary" />}
          </button>
          {openId === item.id && (
            <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));

  return (
    <>
      <>
        <title>Taxi in Henfield | Henfield Taxis &amp; Airport Transfers | Western Cars</title>
        <meta name="description" content="Western Cars — taxi in Henfield, West Sussex. Henfield taxis 24/7. Henfield to Gatwick, Henfield to Heathrow, Henfield to Brighton &amp; beyond. Call 01273 588080 — Henfield taxis number." />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:title" content="Taxi in Henfield | Henfield Taxis &amp; Airport Transfers | Western Cars" />
        <meta property="og:description" content="Western Cars — taxi in Henfield, West Sussex. Henfield taxis 24/7. Henfield to Gatwick, Henfield to Heathrow, Henfield to Brighton &amp; beyond. Call 01273 588080." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-home-hero-fleet.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-home-hero-fleet.jpg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd).replace(/</g, '\\u003c')}</script>
      </>

      <main>
        {/* ── 1. HERO ── */}
        <section
          className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
          style={{ background: 'hsl(var(--dark-bg))' }}
          aria-roledescription="carousel"
          aria-label="Western Cars Henfield — featured images"
        >
          <div className="absolute inset-0 pointer-events-none">
            <Carousel opts={{ loop: true }} plugins={[autoplay.current]} className="w-full h-full">
              <CarouselContent className="h-full ml-0">
                {heroSlides.map((slide, i) => (
                  <CarouselItem key={slide.src} className="pl-0 relative h-screen min-h-[600px]">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                      width={1440}
                      height={900}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg) / 0.55) 30%, hsl(var(--dark-bg) / 0.25) 100%)' }} />
          </div>

          <div className="relative z-10 max-w-content mx-auto px-4 py-xxxl w-full">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>
                Henfield, West Sussex
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {home.hero.heading}
              </h1>
              <p className="text-lg md:text-2xl font-semibold mb-3" style={{ color: 'hsl(var(--gold))' }}>
                {home.hero.subheading}
              </p>
              <p className="text-base text-white/80 mb-8 max-w-xl leading-relaxed">
                {home.hero.body}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 font-bold px-7 py-4 rounded-sm text-base transition-opacity hover:opacity-90"
                  style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
                >
                  <Globe size={18} /> Book Online
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-sm text-base hover:opacity-90 transition-opacity"
                >
                  <Phone size={18} /> Call 01273 588080
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 font-bold px-7 py-4 rounded-sm text-base border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {home.hero.trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-white/70">
                    <CheckCircle2 size={14} style={{ color: 'hsl(var(--gold))' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* ── 3. LOCAL INTRO ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-primary">
                  Serving West Sussex
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {home.intro.heading}
                </h2>
                <p className="text-lg font-medium text-primary mb-4">{home.intro.subheading}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{home.intro.body}</p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm text-base transition-opacity hover:opacity-90"
                  style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
                >
                  <Globe size={18} /> {home.intro.cta}
                </a>
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-xl">
                <img
                  src="/images/site/pages-home-why-choose-fleet.jpg"
                  alt="Western Cars Henfield fleet"
                  className="w-full h-72 md:h-96 object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, hsl(var(--dark-bg) / 0.4) 0%, transparent 60%)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. WHY CHOOSE US ── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--muted))' }}>
          <div className="max-w-content mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-primary">Our Promise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                {home.whyUs.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {home.whyUs.items.map((item) => (
                <div key={item.id} className="bg-card border border-border rounded-sm p-6 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-12 h-12 rounded-sm flex items-center justify-center text-primary-foreground" style={{ background: 'hsl(var(--primary))' }}>
                    {iconMap[item.icon] ?? <Car size={24} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-base">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. SERVICES ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-primary">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                {home.services.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {home.services.items.map((service) => (
                <div key={service.id} className="border border-border rounded-sm p-6 flex flex-col hover:shadow-md transition-shadow bg-card">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center text-primary-foreground mb-4 shrink-0" style={{ background: 'hsl(var(--primary))' }}>
                    {iconMap[service.icon] ?? <Car size={24} />}
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{service.body}</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-sm transition-opacity hover:opacity-90 self-start"
                    style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
                  >
                    {service.cta} →
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. AIRPORT TRANSFERS ── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'hsl(var(--gold))' }}>Pre-book Your Transfer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                {home.airports.heading}
              </h2>
              <p className="text-white/60 mt-3 max-w-xl mx-auto">{home.airports.subheading}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {home.airports.items.map((airport) => (
                <Link
                  key={airport.id}
                  href={airport.href as '/airport-transfers/gatwick' | '/airport-transfers/heathrow' | '/airport-transfers/stansted' | '/airport-transfers/luton' | '/airport-transfers/london-city'}
                  className="group block rounded-sm border p-6 hover:border-yellow-500 transition-colors"
                  style={{ borderColor: 'hsl(var(--gold) / 0.25)', background: 'hsl(var(--dark-bg-2) / 0.6)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: 'hsl(var(--gold) / 0.15)' }}>
                      <Plane size={20} style={{ color: 'hsl(var(--gold))' }} />
                    </div>
                    <h3 className="font-bold text-white text-base group-hover:text-yellow-400 transition-colors">{airport.name}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{airport.desc}</p>
                  <span className="text-sm font-semibold" style={{ color: 'hsl(var(--gold))' }}>Book Transfer →</span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/airport-transfers"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm transition-opacity hover:opacity-90"
                style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
              >
                <Plane size={18} /> All Airport Transfers
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. OUR VEHICLES ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-sm overflow-hidden shadow-xl order-2 lg:order-1">
                <img
                  src="/images/site/pages-home-vehicles-fleet.jpg"
                  alt="Western Cars Henfield vehicles"
                  className="w-full h-72 md:h-96 object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-primary">Fleet</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {home.vehicles.heading}
                </h2>
                <p className="text-muted-foreground mb-8">{home.vehicles.subheading}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {home.vehicles.items.map((v) => (
                    <div key={v.id} className="border border-border rounded-sm p-4 bg-card">
                      <div className="flex items-center gap-2 mb-2">
                        <Car size={18} className="text-primary shrink-0" />
                        <span className="font-bold text-foreground">{v.category}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{v.passengers}</p>
                      <p className="text-xs text-muted-foreground mb-2">{v.luggage}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. OUR DRIVERS ── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>Our Team</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {home.team.heading}
                </h2>
                <p className="text-lg font-medium mb-4" style={{ color: 'hsl(var(--gold))' }}>{home.team.subheading}</p>
                <p className="text-white/70 leading-relaxed mb-8">{home.team.body}</p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm transition-opacity hover:opacity-90"
                  style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
                >
                  <Globe size={18} /> Book Your Taxi
                </a>
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-xl">
                <img
                  src="/images/site/pages-home-drivers-team.jpg"
                  alt="Western Cars professional drivers"
                  className="w-full h-72 md:h-96 object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, hsl(var(--dark-bg) / 0.5) 0%, transparent 60%)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. ABOUT STRIP ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-primary">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                {home.about.heading}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">{home.about.body}</p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {home.about.cta} →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 10. AREAS WE COVER ── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--muted))' }}>
          <div className="max-w-content mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-primary">Coverage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                {home.areas.heading}
              </h2>
              <p className="text-muted-foreground mt-3">{home.areas.subheading}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {home.areas.locations.map((loc) => (
                <span
                  key={loc}
                  className="px-4 py-2 rounded-sm text-sm font-medium border border-border bg-card text-foreground"
                >
                  {loc}
                </span>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/areas-we-cover"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
              >
                View All Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. APP DOWNLOAD ── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>Mobile App</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {home.app.heading}
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">{home.app.body}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]">
                    <img src="/images/site/appstore.jpg" alt="Download the Western Cars app on the App Store" className="block h-12 w-auto rounded-md" width={160} height={48} loading="lazy" />
                  </a>
                  <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]">
                    <img src="/images/site/googleplay.jpg" alt="Get the Western Cars app on Google Play" className="block h-12 w-auto rounded-md" width={160} height={48} loading="lazy" />
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/site/pages-home-app-mockup.jpg"
                  alt="Western Cars taxi booking app"
                  className="max-h-80 w-auto object-contain"
                  width={300}
                  height={320}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. FAQ ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-primary">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                {home.faq.heading}
              </h2>
            </div>
            <FaqAccordion />
            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline text-sm"
              >
                View all FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 13. FINAL BOOKING CTA ── */}
        <section className="py-xxxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>
              Ready to Travel?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {home.finalCta.heading}
            </h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">{home.finalCta.body}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={PHONE_TEL}
                className="inline-flex flex-col items-center gap-1 bg-primary text-primary-foreground font-bold px-8 py-5 rounded-sm hover:opacity-90 transition-opacity min-w-[160px]"
              >
                <Phone size={22} />
                <span className="text-base">Call Us</span>
                <span className="text-xs font-normal opacity-80">01273 588080</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-1 font-bold px-8 py-5 rounded-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors min-w-[160px]"
              >
                <MessageCircle size={22} />
                <span className="text-base">WhatsApp</span>
                <span className="text-xs font-normal opacity-80">07722 489859</span>
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-1 font-bold px-8 py-5 rounded-sm transition-opacity hover:opacity-90 min-w-[160px]"
                style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
              >
                <Globe size={22} />
                <span className="text-base">Book Online</span>
                <span className="text-xs font-normal opacity-70">westerncars.webbooker</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 14. CONTACT / MAP ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-primary">Find Us</p>
                <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Contact Western Cars Henfield
                </h2>
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Based in</p>
                      <p className="text-muted-foreground text-sm">Henfield, West Sussex. Serving Henfield and the surrounding area 24/7.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Phone</p>
                      <a href={PHONE_TEL} className="text-primary hover:underline text-sm font-medium">01273 588080</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={20} className="text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium">07722 489859</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-sm text-sm transition-opacity hover:opacity-90"
                    style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
                  >
                    <Globe size={16} /> Book Online
                  </a>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-sm text-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
              <div className="rounded-sm overflow-hidden shadow-md border border-border h-80">
                <img
                  src="/images/site/pages-home-hero-airport-transfer.jpg"
                  alt="Western Cars Henfield airport transfer"
                  className="w-full h-full object-cover"
                  width={600}
                  height={320}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── MOBILE STICKY BAR ── */}
        <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-border shadow-lg" style={{ background: 'hsl(var(--dark-bg))' }}>
          <a href={PHONE_TEL} className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-white hover:bg-white/10 transition-colors">
            <Phone size={20} />
            <span className="text-xs font-semibold">Call</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-green-400 hover:bg-white/10 transition-colors border-x border-white/10">
            <MessageCircle size={20} />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-3 gap-1 font-bold" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}>
            <Globe size={20} />
            <span className="text-xs font-semibold">Book</span>
          </a>
        </div>
      </main>
    </>
  );
}
