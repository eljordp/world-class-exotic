"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cars } from "@/data/cars";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to booking software / form handler
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 section-darker min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="gold-line mx-auto mb-6" />
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-wider mb-4">
                BOOK YOUR <span className="text-gradient-gold">RIDE</span>
              </h1>
              <p className="text-text-muted max-w-xl mx-auto text-lg">
                Fill out the form below to reserve your vehicle. We&apos;ll
                confirm availability and send you a contract within hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-dark-card border border-dark-border p-12 text-center">
                <svg
                  className="w-20 h-20 text-gold mx-auto mb-6"
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
                <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-4">
                  BOOKING REQUEST SENT
                </h2>
                <p className="text-text-muted mb-2">
                  We&apos;ve received your request and will confirm availability
                  shortly.
                </p>
                <p className="text-text-muted mb-8">
                  For faster confirmation, call or text us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+1XXXXXXXXXX" className="btn-gold">
                    Call Us Now
                  </a>
                  <a
                    href="https://instagram.com/worldclassexotic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    DM on Instagram
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-dark-card border border-dark-border p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Info */}
                  <div>
                    <h2 className="font-[family-name:var(--font-heading)] text-xl tracking-wider text-gold mb-4">
                      YOUR INFORMATION
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Age *
                        </label>
                        <input
                          type="number"
                          required
                          min="21"
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                          placeholder="Must be 21+"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Rental Details */}
                  <div>
                    <h2 className="font-[family-name:var(--font-heading)] text-xl tracking-wider text-gold mb-4">
                      RENTAL DETAILS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="text-sm text-text-muted block mb-2">
                          Vehicle *
                        </label>
                        <select
                          required
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                        >
                          <option value="">Select a vehicle</option>
                          <optgroup label="Los Angeles">
                            {cars
                              .filter((c) => c.location === "los-angeles")
                              .map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.name} — ${c.dailyRate}/day
                                </option>
                              ))}
                          </optgroup>
                          <optgroup label="Bay Area">
                            {cars
                              .filter((c) => c.location === "bay-area")
                              .map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.name} — ${c.dailyRate}/day
                                </option>
                              ))}
                          </optgroup>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Pickup Date *
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Return Date *
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Pickup Location
                        </label>
                        <input
                          type="text"
                          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
                          placeholder="Address, hotel, airport, etc."
                        />
                      </div>
                      <div>
                        <label className="text-sm text-text-muted block mb-2">
                          Service Type
                        </label>
                        <select className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors">
                          <option>Self-Drive</option>
                          <option>Chauffeur</option>
                          <option>Wedding</option>
                          <option>Airport Transfer</option>
                          <option>Corporate Event</option>
                          <option>Photo/Film Shoot</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="text-sm text-text-muted block mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors resize-none"
                      placeholder="Special requests, event details, multiple cars needed, etc."
                    />
                  </div>

                  {/* Payment Info */}
                  <div className="bg-dark border border-dark-border p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg tracking-wider mb-2">
                      HOW IT WORKS
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-text-muted text-sm">
                      <li>Submit this form — we&apos;ll confirm availability</li>
                      <li>
                        Pay a deposit (credit card) to secure your booking
                      </li>
                      <li>Sign the rental contract via DocuSign</li>
                      <li>
                        We deliver the car to your location at the scheduled
                        time
                      </li>
                    </ol>
                    <p className="text-text-muted text-sm mt-4">
                      We accept <strong className="text-white">Zelle</strong>,{" "}
                      <strong className="text-white">credit cards</strong>, and{" "}
                      <strong className="text-white">cash</strong>. Deposits are
                      held via credit card.
                    </p>
                  </div>

                  <button type="submit" className="btn-gold w-full text-lg">
                    Submit Booking Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
