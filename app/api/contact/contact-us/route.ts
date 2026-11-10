import { NextResponse } from 'next/server';

/**
 * Contact form delivery via Microsoft Graph (client-credentials flow).
 * Requires an Entra app registration with the Mail.Send *application*
 * permission (admin-consented). Configure in the deployment secret store:
 *   GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET,
 *   GRAPH_SENDER_MAILBOX, GRAPH_RECIPIENT_MAILBOX (optional)
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DEFAULT_RECIPIENT = 'info@westerncars.co.uk';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  conversation?: {
    messages_attributes?: { body?: unknown }[];
    data?: Record<string, unknown>;
  };
  user?: { email?: unknown; name?: unknown };
  website?: unknown; // honeypot
};

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

let cachedToken: { value: string; expires: number } | null = null;

async function getToken(tenant: string, clientId: string, secret: string): Promise<string> {
  if (cachedToken && cachedToken.expires > Date.now() + 60_000) return cachedToken.value;
  const res = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenant)}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: secret,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
  });
  if (!res.ok) throw new Error(`Token request failed (${res.status})`);
  const json = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = { value: json.access_token, expires: Date.now() + json.expires_in * 1000 };
  return json.access_token;
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Silently accept bot submissions that fill the honeypot.
  if (str(body.website, 200)) return NextResponse.json({ success: true });

  const name = str(body.user?.name, 120);
  const email = str(body.user?.email, 200);
  const message = str(body.conversation?.messages_attributes?.[0]?.body, 5000);
  const extra = Object.entries(body.conversation?.data ?? {})
    .filter(([k]) => !k.startsWith('__'))
    .slice(0, 10)
    .map(([k, v]) => [str(k, 60), str(v, 300)] as const);

  if (!name || !EMAIL_RE.test(email) || !message) {
    return NextResponse.json({ success: false, error: 'Please provide your name, a valid email and a message.' }, { status: 400 });
  }

  const { GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET, GRAPH_SENDER_MAILBOX } = process.env;
  const recipient = process.env.GRAPH_RECIPIENT_MAILBOX || DEFAULT_RECIPIENT;
  if (!GRAPH_TENANT_ID || !GRAPH_CLIENT_ID || !GRAPH_CLIENT_SECRET || !GRAPH_SENDER_MAILBOX) {
    console.error('[contact] Microsoft Graph is not configured (GRAPH_* env vars missing).');
    return NextResponse.json(
      { success: false, error: 'Our contact form is temporarily unavailable. Please call 01273 588080 or email info@westerncars.co.uk.' },
      { status: 503 },
    );
  }

  const subjectField = extra.find(([k]) => k.toLowerCase() === 'subject')?.[1] || 'General Enquiry';
  const rows = [['Name', name], ['Email', email], ...extra]
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555"><strong>${esc(k)}</strong></td><td>${esc(v)}</td></tr>`)
    .join('');
  const html = `<h2>New website enquiry</h2><table>${rows}</table><h3>Message</h3><p style="white-space:pre-wrap">${esc(message)}</p>`;

  try {
    const token = await getToken(GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET);
    const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(GRAPH_SENDER_MAILBOX)}/sendMail`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: {
          subject: `Website enquiry: ${subjectField} — ${name}`.slice(0, 200),
          body: { contentType: 'HTML', content: html },
          toRecipients: [{ emailAddress: { address: recipient } }],
          replyTo: [{ emailAddress: { address: email, name } }],
        },
        saveToSentItems: false,
      }),
    });
    if (res.status !== 202) {
      console.error('[contact] Graph sendMail failed', res.status, await res.text().catch(() => ''));
      throw new Error('send failed');
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] delivery error', err);
    return NextResponse.json(
      { success: false, error: 'Sorry, your message could not be sent. Please call 01273 588080 or email info@westerncars.co.uk.' },
      { status: 502 },
    );
  }
}
