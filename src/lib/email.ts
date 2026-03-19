import { Resend } from 'resend';

// Lazy singleton — instantiated on first use so the build succeeds without RESEND_API_KEY set
let _resend: Resend | null = null;

export function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder');
  }
  return _resend;
}
