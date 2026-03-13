"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-dark/95 backdrop-blur-md border-t border-dark-border safe-area-bottom">
      <div className="flex gap-2 p-3">
        <a
          href="tel:+1XXXXXXXXXX"
          className="flex-1 bg-dark-card border border-dark-border text-white font-[family-name:var(--font-heading)] text-sm tracking-wider uppercase py-3 flex items-center justify-center gap-2 active:bg-dark-lighter transition-colors min-h-[48px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
        <a
          href="sms:+1XXXXXXXXXX"
          className="flex-1 bg-dark-card border border-dark-border text-white font-[family-name:var(--font-heading)] text-sm tracking-wider uppercase py-3 flex items-center justify-center gap-2 active:bg-dark-lighter transition-colors min-h-[48px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Text
        </a>
        <Link
          href="/booking"
          className="flex-[1.5] btn-gold text-sm py-3 min-h-[48px]"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
