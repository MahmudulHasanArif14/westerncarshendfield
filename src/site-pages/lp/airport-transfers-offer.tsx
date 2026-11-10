'use client';
import { useState, useEffect } from 'react';
import { Plane, Clock, Shield, Star, Phone, MessageCircle, CheckCircle, MapPin } from 'lucide-react';
import { BOOKING_URL, PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL, WHATSAPP_DISPLAY, SITE_URL } from '@/lib/site-constants';
import { lp_airport_transfers_offer as c } from '@/content';

const SALE_START = '2026-10-12T00:00:00Z';
const SALE_END   = '2026-10-26T23:59:59Z';

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
}

const airports = [
  { name: 'Gatwick',     code: 'LGW', time: '~45 min', note: 'North & South Terminal' },
  { name: 'Heathrow',    code: 'LHR', time: '~75 min', note: 'All Heathrow terminals (2, 3, 4 & 5)' },
  { name: 'Stansted',    code: 'STN', time: '~90 min', note: 'Single Terminal' },
  { name: 'Luton',       code: 'LTN', time: '~80 min', note: 'Direct to terminal' },
  { name: 'London City', code: 'LCY', time: '~70 min', note: 'City & Docklands' },
];

const featureList = [
  { icon: Shield,      title: 'Fixed Prices',      desc: 'Agreed upfront — no meter, no surprises' },
  { icon: Clock,       title: '24/7 Availability', desc: 'Early mornings, late nights, any day' },
  { icon: Plane,       title: 'Flight Monitoring', desc: "We track your flight so we're always on time" },
  { icon: Star,        title: 'Meet & Greet',      desc: 'Driver waiting at arrivals with name board' },
  { icon: CheckCircle, title: 'Clean Vehicles',    desc: 'Comfortable, well-maintained fleet' },
  { icon: MapPin,      title: 'Local Experts',     desc: 'Serving Henfield & West Sussex since 2007' },
];

export default function AirportTransfersOfferPage() {
  const now        = Date.now();
  const start      = new Date(SALE_START).getTime();
  const end        = new Date(SALE_END).getTime();
  const isActive   = now >= start && now <= end;
  const isUpcoming = now < start;
  const countdown  = useCountdown(isUpcoming ? SALE_START : SALE_END);

  const pad = (n: number) => String(n).padStart(2, '0');

  const pageTitle = 'Airport Transfers from Henfield | Western Cars Henfield';
  const pageDesc  = 'Pre-book your airport transfer from Henfield to Gatwick, Heathrow, Stansted, Luton or London City. Fixed prices, 24/7 service, professional drivers.';
  const pageUrl   = `${SITE_URL}/lp/airport-transfers-offer`;

  return (
    <>
      <>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/site/pages-lp-airport-transfers-offer-hero.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={`${SITE_URL}/images/site/pages-lp-airport-transfers-offer-hero.jpg`} />
      </>

      <main className="min-h-screen" style={{ background: 'hsl(var(--background))' }}>

        {/* HERO */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '85vh' }}>
          <img
            src="/images/site/pages-lp-airport-transfers-offer-hero.jpg"
            alt="Luxury private hire car at airport terminal"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={900}
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(11,18,32,0.72) 0%, rgba(11,18,32,0.45) 60%, rgba(11,18,32,0.75) 100%)' }} />
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 pointer-events-auto" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--secondary))' }}>
              <Plane className="w-4 h-4" />
              <span>{c.hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              <span>{c.hero.heading}</span><br />
              <span style={{ color: 'hsl(var(--accent))' }}>{c.hero.headingAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl mx-auto">{c.hero.subheading}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-bold transition-opacity hover:opacity-90"
                style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--secondary))' }}
              >
                <Plane className="w-5 h-5" />
                <span>{c.hero.ctaBook}</span>
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold border-2 border-white text-white transition-colors hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                <span>{c.hero.ctaCall} {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </section>

        {/* COUNTDOWN — active */}
        {isActive && (
          <section className="py-6 px-4" style={{ background: 'hsl(var(--accent))' }}>
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-bold text-lg mb-3" style={{ color: 'hsl(var(--secondary))' }}>{c.countdown.activeLabel}</p>
              <div className="flex justify-center gap-6">
                {[
                  { label: 'Days',    val: countdown.days },
                  { label: 'Hours',   val: countdown.hours },
                  { label: 'Minutes', val: countdown.minutes },
                  { label: 'Seconds', val: countdown.seconds },
                ].map(({ label, val }) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-bold tabular-nums" style={{ color: 'hsl(var(--secondary))' }}>{pad(val)}</div>
                    <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'hsl(var(--secondary))', opacity: 0.7 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COUNTDOWN — upcoming */}
        {isUpcoming && (
          <section className="py-6 px-4" style={{ background: 'hsl(var(--secondary))' }}>
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-bold text-lg text-white mb-3">{c.countdown.upcomingLabel}</p>
              <div className="flex justify-center gap-6">
                {[
                  { label: 'Days',    val: countdown.days },
                  { label: 'Hours',   val: countdown.hours },
                  { label: 'Minutes', val: countdown.minutes },
                  { label: 'Seconds', val: countdown.seconds },
                ].map(({ label, val }) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-bold tabular-nums" style={{ color: 'hsl(var(--accent))' }}>{pad(val)}</div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/70">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* EXPIRED */}
        {!isActive && !isUpcoming && (
          <section className="py-6 px-4 bg-muted">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground font-medium">{c.countdown.expiredText}</p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 font-bold underline" style={{ color: 'hsl(var(--primary))' }}>{c.countdown.expiredCta}</a>
            </div>
          </section>
        )}

        {/* AIRPORTS GRID */}
        <section className="py-16 px-4" style={{ background: 'hsl(var(--secondary))' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-3">{c.airports.heading}</h2>
            <p className="text-white/70 text-center mb-10 max-w-xl mx-auto">{c.airports.subheading}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {airports.map((ap) => (
                <div key={ap.code} className="rounded-xl p-5 flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--secondary))' }}>
                    {ap.code}
                  </div>
                  <div>
                    <div className="font-bold text-white">{ap.name} Airport</div>
                    <div className="text-sm" style={{ color: 'hsl(var(--accent))' }}>{ap.time} from Henfield</div>
                    <div className="text-xs text-white/60 mt-1">{ap.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3" style={{ color: 'hsl(var(--secondary))' }}>{c.features.heading}</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">{c.features.subheading}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureList.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl p-6 border border-border bg-card">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                    <Icon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
                  </div>
                  <h3 className="font-bold mb-1" style={{ color: 'hsl(var(--secondary))' }}>{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING CTA */}
        <section className="py-16 px-4" style={{ background: 'hsl(var(--primary))' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{c.cta.heading}</h2>
            <p className="text-white/80 mb-8">{c.cta.subheading}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-base transition-opacity hover:opacity-90"
                style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--secondary))' }}
              >
                <Plane className="w-5 h-5" />
                <span>{c.cta.ctaBook}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base border-2 border-white text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{c.cta.ctaWhatsapp} {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
            <p className="text-white/60 text-sm mt-6">
              <span>{c.cta.callPrefix} </span>
              <a href={PHONE_TEL} className="text-white font-semibold hover:underline">{PHONE_DISPLAY}</a>
            </p>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="py-10 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
            {c.trust.map((item) => (
              <div key={item.id}>
                <div className="text-2xl font-bold" style={{ color: 'hsl(var(--primary))' }}>{item.val}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
