import { NextRequest, NextResponse } from 'next/server';
import { sendEnquiryEmail } from '@/lib/mailer';
import { ContactFormData } from '@/types';

// ── Rate limiting (in-memory — sufficient for low traffic, swap for Vercel KV at scale) ──
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_PER_WINDOW) return true;
  entry.count++;
  return false;
}

// ── Input length limits ──
const LIMITS = {
  name:    100,
  email:   200,
  product: 200,
  units:     5,
  message: 2000,
};

export async function POST(req: NextRequest) {
  try {
    // ── CSRF: reject requests from other origins ──
    const origin = req.headers.get('origin') ?? '';
    const host   = req.headers.get('host')   ?? '';
    if (origin && !origin.includes(host) && !origin.includes('localhost')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // ── Rate limiting ──
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      req.headers.get('x-real-ip') ??
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before trying again.' },
        { status: 429 }
      );
    }

    const body: ContactFormData = await req.json();
    const { name, email, product, units, message } = body;

    // ── Required fields ──
    if (!name || !email || !product || !units) {
      return NextResponse.json(
        { error: 'Name, email, product, and quantity are required.' },
        { status: 400 }
      );
    }

    // ── Length limits ──
    if (name.length    > LIMITS.name)    return NextResponse.json({ error: `Name must be under ${LIMITS.name} characters.` },    { status: 400 });
    if (email.length   > LIMITS.email)   return NextResponse.json({ error: `Email must be under ${LIMITS.email} characters.` },   { status: 400 });
    if (product.length > LIMITS.product) return NextResponse.json({ error: `Product field must be under ${LIMITS.product} characters.` }, { status: 400 });
    if (units.length   > LIMITS.units)   return NextResponse.json({ error: 'Please enter a valid quantity.' },                    { status: 400 });
    if (message && message.length > LIMITS.message) return NextResponse.json({ error: `Message must be under ${LIMITS.message} characters.` }, { status: 400 });

    // ── Email format ──
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // ── Units must be a positive integer ──
    const unitsNum = parseInt(units, 10);
    if (isNaN(unitsNum) || unitsNum < 1) {
      return NextResponse.json(
        { error: 'Please enter a valid number of units (minimum 1).' },
        { status: 400 }
      );
    }

    await sendEnquiryEmail({ name, email, product, units, message });

    return NextResponse.json(
      { success: true, message: 'Enquiry sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[/api/contact] Failed to send enquiry email:', msg);
    return NextResponse.json(
      { error: 'Failed to send enquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
