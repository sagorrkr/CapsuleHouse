import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// TEMPORARY diagnostic endpoint — remove after fixing the email issue
export async function GET() {
  const vars = {
    SMTP_HOST: process.env.SMTP_HOST || '(not set — defaulting to smtp.gmail.com)',
    SMTP_PORT: process.env.SMTP_PORT || '(not set — defaulting to 587)',
    SMTP_USER: process.env.SMTP_USER ? `✓ set (${process.env.SMTP_USER})` : '✗ MISSING',
    SMTP_PASS: process.env.SMTP_PASS ? `✓ set (length: ${process.env.SMTP_PASS.length} chars)` : '✗ MISSING',
    SMTP_FROM: process.env.SMTP_FROM ? `✓ set (${process.env.SMTP_FROM})` : '✗ MISSING',
    SMTP_TO:   process.env.SMTP_TO   ? `✓ set (${process.env.SMTP_TO})`   : '✗ MISSING',
  };

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json({ status: 'error', reason: 'Missing credentials', vars }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.verify();
    return NextResponse.json({ status: 'ok', message: 'SMTP connection verified successfully', vars });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ status: 'error', reason: msg, vars }, { status: 500 });
  }
}
