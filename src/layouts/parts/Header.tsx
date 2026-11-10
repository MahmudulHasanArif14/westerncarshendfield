 'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, MessageCircle, Globe } from 'lucide-react';
import { BOOKING_URL } from '@/lib/site-constants';

const transfersLinks = [
  { href: '/airport-transfers', label: 'All Airport Transfers' },
  { href: '/airport-transfers/gatwick', label: 'Gatwick Airport' },
  { href: '/airport-transfers/heathrow', label: 'Heathrow Airport' },
  { href: '/airport-transfers/stansted', label: 'Stansted Airport' },
  { href: '/airport-transfers/luton', label: 'Luton Airport' },
  { href: '/airport-transfers/london-city', label: 'London City Airport' },
];

const areasLinks = [
  { href: '/areas-we-cover', label: 'All Areas' },
  { href: '/areas-we-cover/henfield', label: 'Henfield' },
  { href: '/areas-we-cover/brighton', label: 'Brighton' },
  { href: '/areas-we-cover/horsham', label: 'Horsham' },
  { href: '/areas-we-cover/burgess-hill', label: 'Burgess Hill' },
  { href: '/areas-we-cover/haywards-heath', label: 'Haywards Heath' },
  { href: '/areas-we-cover/steyning', label: 'Steyning' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-1.5 px-4">
        <div className="max-w-content mx-auto flex justify-between items-center gap-2 text-sm">
          <span className="hidden sm:block text-primary-foreground/80 text-xs">
            Professional Taxi &amp; Private Hire — Henfield, West Sussex
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <Phone size={13} />
            <span className="font-semibold">Call Us 24/7: 01273 588080</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background border-b border-border" aria-label="Main navigation">
        <div className="max-w-content mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <img
                src="/images/site/logo.png"
                alt="Western Cars Henfield"
                className="block h-auto max-h-12 w-auto max-w-[180px] object-contain"
                width={180}
                height={48}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : 'text-foreground'}`}
              >
                Home
              </Link>

              {/* Taxi Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('transfers')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/services') ? 'text-primary' : 'text-foreground'}`}
                >
                  Services <ChevronDown size={13} />
                </Link>
                {openDropdown === 'transfers' && (
                  <div className="absolute top-full left-0 bg-background border border-border shadow-lg rounded-sm min-w-[250px] py-1 z-50">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm font-semibold text-primary border-b border-border mb-1"
                      onClick={() => setOpenDropdown(null)}
                    >
                      All Services
                    </Link>
                    {transfersLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Airport Transfers link */}
              <Link
                href="/airport-transfers"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/airport-transfers') ? 'text-primary' : 'text-foreground'}`}
              >
                Airport Transfers
              </Link>

              {/* Areas dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('locations')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href="/areas-we-cover" className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/areas-we-cover') ? 'text-primary' : 'text-foreground'}`}>
                  Areas We Cover <ChevronDown size={13} />
                </Link>
                {openDropdown === 'locations' && (
                  <div className="absolute top-full left-0 bg-background border border-border shadow-lg rounded-sm min-w-[220px] py-1 z-50">
                    {areasLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/blog') ? 'text-primary' : 'text-foreground'}`}
              >
                Blog
              </Link>
              <Link
                href="/about-us"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/about-us') ? 'text-primary' : 'text-foreground'}`}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive('/contact-us') ? 'text-primary' : 'text-foreground'}`}
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href="tel:+441273588080"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-sm hover:opacity-90 transition-opacity"
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Globe size={14} />
                Book Online
              </a>
            </div>

            {/* Mobile: call + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+441273588080"
                className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-sm font-semibold px-3 py-2 rounded-sm"
                aria-label="Call 01273 588080"
              >
                <Phone size={15} />
                <span className="hidden sm:inline">Call</span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:text-primary"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-1">
            <Link
              href="/"
              className="py-2.5 text-sm font-medium text-foreground hover:text-primary border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Taxi Services */}
            <div className="border-b border-border">
              <button
                className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-foreground hover:text-primary"
                onClick={() => setMobileExpanded(mobileExpanded === 'transfers' ? null : 'transfers')}
              >
                Services <ChevronDown size={14} className={mobileExpanded === 'transfers' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {mobileExpanded === 'transfers' && (
                <div className="pl-4 flex flex-col gap-1 pb-2">
                  <Link
                    href="/services"
                    className="py-1.5 text-sm font-semibold text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  {transfersLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-1.5 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/airport-transfers"
              className="py-2.5 text-sm font-medium text-foreground hover:text-primary border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Airport Transfers
            </Link>

            {/* Mobile Locations */}
            <div className="border-b border-border">
              <button
                className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-foreground hover:text-primary"
                onClick={() => setMobileExpanded(mobileExpanded === 'locations' ? null : 'locations')}
              >
                Areas We Cover <ChevronDown size={14} className={mobileExpanded === 'locations' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {mobileExpanded === 'locations' && (
                <div className="pl-4 flex flex-col gap-1 pb-2">
                  {areasLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-1.5 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="py-2.5 text-sm font-medium text-foreground hover:text-primary border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about-us"
              className="py-2.5 text-sm font-medium text-foreground hover:text-primary border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="py-2.5 text-sm font-medium text-foreground hover:text-primary border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/terms-conditions"
              className="py-2.5 text-sm font-medium text-foreground hover:text-primary border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terms &amp; Conditions
            </Link>

            {/* Mobile booking CTAs */}
            <div className="flex flex-col gap-2 pt-3">
              <a
                href="tel:+441273588080"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-sm text-sm"
              >
                <Phone size={16} /> Call 01273 588080
              </a>
              <a
                href="https://wa.me/447722489859"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-semibold py-3 rounded-sm text-sm border-2 border-green-600 text-green-700"
              >
                <MessageCircle size={16} /> Book on WhatsApp
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-semibold py-3 rounded-sm text-sm border-2 border-primary text-primary"
              >
                <Globe size={16} /> Book Online
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
