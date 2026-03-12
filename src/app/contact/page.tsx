"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to form handler (Formspree, etc.)
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 section-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="gold-line mx-auto mb-6" />
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-wider mb-4">
                CONTACT <span className="text-gradient-gold">US</span>
              </h1>
              <p className="text-text-muted max-w-xl mx-auto text-lg">
                Ready to book? Have questions? Reach out and we&apos;ll get back
                to you fast.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-dark-card border border-dark-border p-8">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl tracking-wider mb-6">
                    GET IN TOUCH
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Call or Text</p>
                        <a
                          href="tel:+1XXXXXXXXXX"
                          className="text-gold hover:text-gold-light transition-colors"
                        >
                          (XXX) XXX-XXXX
                        </a>
                        <p className="text-text-muted text-sm mt-1">
                          Available 24/7 — calls and texts get the fastest
                          response
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Instagram DM</p>
                        <a
                          href="https://instagram.com/worldclassexotic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:text-gold-light transition-colors"
                        >
                          @worldclassexotic
                        </a>
                        <p className="text-text-muted text-sm mt-1">
                          DMs are open — send us a message anytime
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Locations</p>
                        <p className="text-text-muted text-sm">
                          Los Angeles, CA
                          <br />
                          San Francisco Bay Area, CA
                        </p>
                        <p className="text-text-muted text-sm mt-1">
                          Delivery available across both regions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Hours</p>
                        <p className="text-text-muted text-sm">
                          Open 7 days a week
                          <br />
                          8:00 AM – 10:00 PM
                        </p>
                        <p className="text-text-muted text-sm mt-1">
                          After-hours requests? Just reach out — we make it work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-dark-card border border-dark-border p-8">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mb-4">
                    PAYMENT METHODS
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {["Zelle", "Credit Card", "Cash"].map((method) => (
                      <div
                        key={method}
                        className="text-center p-4 border border-dark-border"
                      >
                        <p className="text-sm text-white/80">{method}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-text-muted text-sm mt-4">
                    Deposits secured via credit card. Contracts signed digitally
                    with DocuSign.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-dark-card border border-dark-border p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <svg
                      className="w-16 h-16 text-gold mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl tracking-wider mb-2">
                      MESSAGE SENT
                    </h3>
                    <p className="text-text-muted">
                      We&apos;ll get back to you within a few hours. For faster
                      response, call or text us directly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl tracking-wider mb-6">
                      SEND A MESSAGE
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-text-muted block mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-text-muted block mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Vehicle Interest
                        </label>
                        <select className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors">
                          <option>Select a vehicle (optional)</option>
                          <option>Lamborghini Huracán</option>
                          <option>Lamborghini Urus</option>
                          <option>Rolls-Royce Cullinan</option>
                          <option>Ferrari 812 GTS</option>
                          <option>McLaren 720S</option>
                          <option>Mercedes G63 AMG</option>
                          <option>Porsche 911</option>
                          <option>Corvette</option>
                          <option>BMW M3/M5</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Rental Dates
                        </label>
                        <input
                          type="text"
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                          placeholder="e.g. March 15-17"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors resize-none"
                          placeholder="Tell us about your event or rental needs..."
                        />
                      </div>

                      <button type="submit" className="btn-gold w-full">
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
