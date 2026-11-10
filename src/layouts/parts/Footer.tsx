'use client';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Globe, Facebook } from 'lucide-react';
import {
  BOOKING_URL, PHONE_TEL, PHONE_DISPLAY,
  WHATSAPP_URL, WHATSAPP_DISPLAY,
  FACEBOOK_URL,
  TRUSTPILOT_URL,
  APP_STORE_URL, GOOGLE_PLAY_URL,
} from '@/lib/site-constants';

const quickLinks = [
  { to: '/',               label: 'Home' },
  { to: '/services',       label: 'Services' },
  { to: '/airport-transfers', label: 'Airport Transfers' },
  { to: '/areas-we-cover', label: 'Areas We Cover' },
  { to: '/about-us',       label: 'About Us' },
  { to: '/faq',            label: 'FAQ' },
  { to: '/contact-us',     label: 'Contact Us' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'hsl(var(--dark-bg))' }} aria-label="Site footer">
      {/* Main columns */}
      <div className="max-w-content mx-auto px-4 py-xxl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — About + address */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Western Cars Henfield home">
              <img
                src="/images/site/logo.png"
                alt="Western Cars Henfield logo"
                className="block h-auto max-h-10 w-auto max-w-full object-contain"
                width={160}
                height={40}
                loading="lazy"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional taxi and private-hire service based in Henfield, West Sussex. Available 24 hours a day, 7 days a week.
            </p>
            <address className="not-italic flex flex-col gap-2">
              <span className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={15} className="shrink-0 mt-0.5 text-white/60" />
                2 Coopers Way, Henfield, West Sussex, BN5 9EQ
              </span>
              <a href={PHONE_TEL} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <Phone size={15} className="shrink-0 text-white/60" />
                {PHONE_DISPLAY}
              </a>
            </address>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Western Cars Henfield on Facebook"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors w-fit"
            >
              <Facebook size={16} className="text-blue-400" />
              Facebook
            </a>
            <a
              href={TRUSTPILOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Western Cars Henfield reviews on Trustpilot"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors w-fit"
            >
              <span className="text-[#00b67a]" aria-hidden="true">★</span>
              Trustpilot reviews
            </a>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Quick Links</h3>
            <nav aria-label="Footer quick links">
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      href={link.to}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Book */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Book a Taxi</h3>
            <div className="flex flex-col gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-sm text-sm font-semibold text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-colors"
              >
                <Phone size={15} className="shrink-0" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-sm text-sm font-semibold text-green-400 border border-green-500/40 hover:border-green-500 hover:bg-green-600/10 transition-colors"
              >
                <MessageCircle size={15} className="shrink-0" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-3 rounded-sm text-sm font-bold transition-opacity hover:opacity-90"
                style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}
              >
                <Globe size={15} className="shrink-0" />
                Book Online
              </a>
            </div>
          </div>

          {/* Col 4 — Download App */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Download Our App</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Book your taxi on the go with the Western Cars app — available on iOS and Android.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-sm border border-white/20 hover:border-white/50 hover:bg-white/5 transition-colors"
                aria-label="Download on the App Store"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-white" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-white/65 text-xs leading-none mb-0.5">Download on the</p>
                  <p className="text-white text-sm font-semibold leading-none">App Store</p>
                </div>
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-sm border border-white/20 hover:border-white/50 hover:bg-white/5 transition-colors"
                aria-label="Get it on Google Play"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-white" aria-hidden="true">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.79-2.79-10.8 9.86zM.54 1.18C.2 1.54 0 2.1 0 2.82v18.36c0 .72.2 1.28.55 1.64l.09.08 10.28-10.28v-.24L.63 1.1l-.09.08zM20.1 10.4l-2.93-1.69-3.1 3.1 3.1 3.1 2.95-1.7c.84-.49.84-1.28-.02-1.81zM3.18.24L15.78 7.5l-2.79 2.79L2.19.43c.3-.37.66-.37.99-.19z" />
                </svg>
                <div>
                  <p className="text-white/65 text-xs leading-none mb-0.5">Get it on</p>
                  <p className="text-white text-sm font-semibold leading-none">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-xs text-center sm:text-left">
            &copy; {year} Western Cars Henfield. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms-conditions" className="text-white/60 hover:text-white text-xs transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
