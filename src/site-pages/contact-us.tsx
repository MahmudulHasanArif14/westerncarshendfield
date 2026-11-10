'use client';
import { contact } from '@/content';
import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, Globe, MapPin, Mail, Facebook, CheckCircle2 } from 'lucide-react';
import {
  BOOKING_URL, PHONE_TEL, PHONE_DISPLAY,
  WHATSAPP_URL,
  FACEBOOK_URL, GOOGLE_MAPS_URL, TRUSTPILOT_URL, SITE_URL } from
'@/lib/site-constants';

const siteUrl = SITE_URL;
const pageUrl = `${siteUrl}/contact-us`;

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get('_gotcha')) return;

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    setStatus('sending');
    setErrorMsg('');

    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body.
      // All other fields (dropdowns, radios, checkboxes) must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: message || 'New enquiry from website contact form' }],
            data: {
              __gd_contact_form_title: 'Contact Western Cars Henfield',
              'Phone Number': phone || 'Not provided',
              'Subject': subject || 'General Enquiry'
            }
          },
          user: { email, name },
          website: String(formData.get('website') ?? '')
        })
      });

      const json = await res.json().catch(() => ({ success: false }));
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error(json.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
          <CheckCircle2 size={28} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>Message Sent!</h3>
        <p className="text-muted-foreground max-w-sm">Thank you for getting in touch. We will get back to you as soon as possible.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-semibold text-primary hover:underline">
          
          Send another message
        </button>
      </div>);

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {/* Honeypot — positioned off-screen, never included in POST body */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-sm font-semibold text-foreground">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id="cf-name" name="name" type="text" required autoComplete="name"
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition" />
          
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="text-sm font-semibold text-foreground">
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            id="cf-email" name="email" type="email" required autoComplete="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition" />
          
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-phone" className="text-sm font-semibold text-foreground">Phone Number</label>
          <input
            id="cf-phone" name="phone" type="tel" autoComplete="tel"
            placeholder="07700 000000"
            className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition" />
          
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-subject" className="text-sm font-semibold text-foreground">Subject</label>
          <select
            id="cf-subject" name="subject"
            className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition">
            
            <option value="General Enquiry">General Enquiry</option>
            <option value="Booking">Booking</option>
            <option value="Airport Transfer">Airport Transfer</option>
            <option value="Account Query">Account Query</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-sm font-semibold text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="cf-message" name="message" rows={5} required
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none" />
        
      </div>

      {status === 'error' &&
      <p role="alert" className="text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-sm">{errorMsg}</p>
      }

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-sm text-sm transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed self-start"
        style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}>
        
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>);

}

export default function ContactPage() {
  return (
    <>
      <>
        <title>Contact Western Cars Henfield | Taxi &amp; Private Hire 01273 588080</title>
        <meta name="description" content="Contact Western Cars Henfield. Call 01273 588080, WhatsApp 07722 489859, or book online 24/7. Based at 2 Coopers Way, Henfield, West Sussex BN5 9EQ." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Contact Western Cars Henfield | Taxi &amp; Private Hire" />
        <meta property="og:description" content="Get in touch with Western Cars Henfield. Call, WhatsApp, book online or send us a message." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/images/site/pages-home-taxi-night.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Western Cars Henfield | Taxi &amp; Private Hire" />
        <meta name="twitter:description" content="Get in touch with Western Cars Henfield. Call 01273 588080, WhatsApp 07722 489859, or book online 24/7." />
        <meta name="twitter:image" content={`${siteUrl}/images/site/pages-home-taxi-night.jpg`} />
        <script type="application/ld+json">{JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            '@id': `${pageUrl}#webpage`,
            name: 'Contact Western Cars Henfield',
            url: pageUrl,
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#organization` }
          }).replace(/</g, '\\u003c')}</script>
      </>

      <main>
        {/* Hero */}
        <section className="relative py-xxl flex items-center overflow-hidden" style={{ background: 'hsl(var(--dark-bg))' }}>
          <img src="/images/site/pages-home-hero-taxi-road.jpg" alt="Western Cars taxi on the road in West Sussex" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1440} height={500} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--dark-bg) / 0.95) 45%, hsl(var(--dark-bg) / 0.65) 100%)' }} />
          <div className="relative z-10 max-w-content mx-auto px-4 w-full">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {contact.hero.heading}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">{contact.hero.body}</p>
          </div>
        </section>

        {/* Contact info + form */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Left: contact details */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Our Contact Details</h2>

                <div className="flex gap-4 items-start p-5 rounded-sm border border-border bg-card shadow-sm">
                  <div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center text-primary-foreground" style={{ background: 'hsl(var(--primary))' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Address</p>
                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {contact.details.address}
                    </a>
                  </div>
                </div>

                <a href={PHONE_TEL} className="flex gap-4 items-start p-5 rounded-sm border border-border bg-card shadow-sm hover:shadow-md transition-shadow group">
                  <div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center text-primary-foreground" style={{ background: 'hsl(var(--primary))' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Phone</p>
                    <p className="text-sm font-semibold group-hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--gold))' }}>{contact.details.phone}</p>
                  </div>
                </a>

                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start p-5 rounded-sm border border-border bg-card shadow-sm hover:shadow-md transition-shadow group">
                  <div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center bg-green-600 text-white">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">WhatsApp</p>
                    <p className="text-sm font-semibold text-green-600 group-hover:text-green-700 transition-colors">{contact.details.whatsapp}</p>
                  </div>
                </a>

                <a href={`mailto:${contact.details.email}`} className="flex gap-4 items-start p-5 rounded-sm border border-border bg-card shadow-sm hover:shadow-md transition-shadow group">
                  <div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center text-primary-foreground" style={{ background: 'hsl(var(--primary))' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Email</p>
                    <p className="text-sm font-semibold group-hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--gold))' }}>{contact.details.email}</p>
                  </div>
                </a>

                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start p-5 rounded-sm border border-border bg-card shadow-sm hover:shadow-md transition-shadow group">
                  <div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: 'hsl(var(--gold))' }}>
                    <Globe size={18} style={{ color: 'hsl(var(--dark-bg))' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Book Online</p>
                    <p className="text-sm text-muted-foreground">westerncars.webbooker.icabbi.com</p>
                  </div>
                </a>

                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start p-5 rounded-sm border border-border bg-card shadow-sm hover:shadow-md transition-shadow group">
                  <div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center bg-blue-600 text-white">
                    <Facebook size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Facebook</p>
                    <p className="text-sm text-muted-foreground group-hover:text-blue-600 transition-colors">Western Cars Henfield</p>
                  </div>
                </a>

                <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start p-5 rounded-sm border border-border bg-card shadow-sm hover:shadow-md transition-shadow group">
                  <div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center bg-[#00b67a] text-white font-bold" aria-hidden="true">
                    ★
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Trustpilot</p>
                    <p className="text-sm text-muted-foreground group-hover:text-[#00a878] transition-colors">Read our customer reviews</p>
                  </div>
                </a>
              </div>

              {/* Right: enquiry form */}
              <div className="lg:col-span-3">
                <div className="rounded-sm border border-border bg-card p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{contact.form.heading}</h2>
                  <p className="text-muted-foreground text-sm mb-6">{contact.form.body}</p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="bg-background pb-xxl">
          <div className="max-w-content mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Find Us</h2>
            <div className="rounded-sm overflow-hidden border border-border shadow-sm" style={{ height: '400px' }}>
              <iframe
                title="Western Cars Henfield location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8!2d-0.2735!3d50.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2+Coopers+Way%2C+Henfield%2C+West+Sussex+BN5+9EQ!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
              
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-xxl" style={{ background: 'hsl(var(--dark-bg))' }}>
          <div className="max-w-content mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--gold))' }}>Ready to Travel?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{contact.cta.heading}</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{contact.cta.body}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm transition-opacity hover:opacity-90"
              style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--dark-bg))' }}>
                <Globe size={18} /> Book Online
              </a>
              <a href={PHONE_TEL}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-sm hover:opacity-90 transition-opacity">
                <Phone size={18} /> Call {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-sm border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white transition-colors">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>);

}