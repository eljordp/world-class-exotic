"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/fleet", label: "Fleet" },
  { href: "/locations/los-angeles", label: "Los Angeles" },
  { href: "/locations/bay-area", label: "Bay Area" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="World Class Exotic"
              width={160}
              height={160}
              className="h-12 sm:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+1XXXXXXXXXX"
              className="text-sm text-white/70 hover:text-gold transition-colors"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call or Text
              </span>
            </a>
            <Link href="/booking" className="btn-gold text-sm py-3 px-6">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-3 -mr-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu — Full Screen */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-dark z-50 overflow-y-auto">
          <div className="px-6 py-8 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-2xl font-[family-name:var(--font-heading)] tracking-widest uppercase text-white/70 active:text-gold transition-colors py-4 border-b border-dark-border"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 space-y-4">
              <a
                href="tel:+1XXXXXXXXXX"
                className="flex items-center justify-center gap-3 bg-dark-card border border-dark-border text-gold text-xl font-[family-name:var(--font-heading)] tracking-wider py-4 min-h-[56px]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call or Text Us
              </a>
              <a
                href="https://instagram.com/worldclassexotic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-dark-card border border-dark-border text-white text-xl font-[family-name:var(--font-heading)] tracking-wider py-4 min-h-[56px]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                DM on Instagram
              </a>
              <Link
                href="/booking"
                onClick={() => setMobileOpen(false)}
                className="btn-gold w-full text-xl py-4 min-h-[56px]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
