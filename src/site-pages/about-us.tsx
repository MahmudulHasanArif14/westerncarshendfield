'use client';
import { about } from '@/content';
import { Phone, MessageCircle, Globe, Clock, MapPin, ShieldCheck, Car, Star } from 'lucide-react';
import {
  BOOKING_URL, PHONE_TEL, PHONE_DISPLAY,
  WHATSAPP_URL, SITE_URL,
} from '@/lib/site-constants';

const siteUrl = SITE_URL;
const pageUrl = `${siteUrl}/about-us`;

const icons = [Clock, MapPin, Globe, Star, Car, ShieldCheck];

export default function AboutPage() {
  return (
    <>
      <>
        <title>About Western Cars Henfield | Licensed Taxi &amp; Private Hire</title>
        <meta name="description" content="Western Cars is a licensed taxi and private-hire operator based in Henfield, West Sussex. DBS-checked drivers, 24/7 availability, local knowledge and airport transfers to all 5 London airports." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="About Western Cars Henfield | Licensed Taxi &amp; Private Hire" />
        <meta property="og:description" content="Licensed taxi and private-hire operator in Henfield, West Sussex. DBS-checked drivers available 24/7 for local journeys and airport transfers." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-home-drivers-team.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Western Cars Henfield | Licensed Taxi &amp; Private Hire" />
        <meta name="twitter:description" content="Licensed taxi and private-hire operator in Henfield, West Sussex. DBS-checked drivers available 24/7." />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-home-drivers-team.jpg`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': `${pageUrl}#webpage`,
          name: 'About Western Cars Henfield',
          url: pageUrl,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\u003c')}</script>
      </>

      <main>
        {/* Hero */}
        <section
          className="relative py-xxl flex items-center overflow-hidden"
          style={{ background: 'hsl(var(--dark-bg))' }}
        >
          <img src="/images/site/pages-home-drivers-team.jpg" alt="Western Cars professional drivers in Henfield" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1440} height={500} loading="eager" fetchPriority="high" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg) / 0.95) 45%, hsl(var(--dark-bg) / 0.65) 100%)' }}
          />
          <div className="relative z-10 max-w-content mx-auto px-4 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>
              About Us
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {about.hero.heading}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mb-8">{about.hero.body}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm transition-opacity hover:opacity-90"
                style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
              >
                <Globe size={16} /> Book Online
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-sm text-sm hover:opacity-90 transition-opacity"
              >
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* Overview + Approach + Booking */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Who We Are */}
              <div className="flex flex-col gap-4">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center text-primary-foreground shrink-0"
                  style={{ background: 'hsl(var(--primary))' }}
                >
                  <MapPin size={22} />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  {about.overview.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{about.overview.body}</p>
              </div>

              {/* Our Approach */}
              <div className="flex flex-col gap-4">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center text-primary-foreground shrink-0"
                  style={{ background: 'hsl(var(--primary))' }}
                >
                  <ShieldCheck size={22} />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  {about.approach.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{about.approach.body}</p>
              </div>

              {/* Easy to Book */}
              <div className="flex flex-col gap-4">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0"
                  style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
                >
                  <Star size={22} />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  {about.booking.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{about.booking.body}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-xxl" style={{ background: 'hsl(var(--secondary) / 0.05)' }}>
          <div className="max-w-content mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>
                Why Choose Us
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Why Choose Western Cars Henfield?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {about.whyUs.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div
                    key={item.id}
                    className="flex gap-4 p-6 rounded-sm border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className="shrink-0 w-11 h-11 rounded-sm flex items-center justify-center text-primary-foreground"
                      style={{ background: 'hsl(var(--primary))' }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking methods strip */}
        <section className="py-xl bg-background border-y border-border">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-3 p-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
                >
                  <Globe size={22} />
                </div>
                <h3 className="font-bold text-foreground">Book Online</h3>
                <p className="text-muted-foreground text-sm">Use our online booking system any time of day.</p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Book now →
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 border-x border-border">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground"
                  style={{ background: 'hsl(var(--primary))' }}
                >
                  <Phone size={22} />
                </div>
                <h3 className="font-bold text-foreground">Call Us</h3>
                <p className="text-muted-foreground text-sm">Speak to us directly — available 24/7.</p>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {PHONE_DISPLAY} →
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 p-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600 text-white">
                  <MessageCircle size={22} />
                </div>
                <h3 className="font-bold text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">Send us a message on WhatsApp to arrange your journey.</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:underline"
                >
                  Message us →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>
              Ready to Travel?
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {about.cta.heading}
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{about.cta.body}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm transition-opacity hover:opacity-90"
                style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
              >
                <Globe size={18} /> Book Online
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-sm hover:opacity-90 transition-opacity"
              >
                <Phone size={18} /> Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
