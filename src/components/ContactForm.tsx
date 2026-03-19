"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to form handler (Formspree, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
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
          We&apos;ll get back to you within a few hours. For faster response,
          call or text us directly.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-[family-name:var(--font-heading)] text-2xl tracking-wider mb-6">
        SEND A MESSAGE
      </h3>
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
          <label className="text-sm text-text-muted block mb-2">Email</label>
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
          <label className="text-sm text-text-muted block mb-2">Message</label>
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
  );
}
