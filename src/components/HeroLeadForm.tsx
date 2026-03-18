"use client";

import { useState } from "react";
import { cars } from "@/data/cars";

export default function HeroLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      vehicle: (form.elements.namedItem("vehicle") as HTMLSelectElement).value,
    };

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-dark-card/80 backdrop-blur-md border border-dark-border p-6 sm:p-8 max-w-md w-full">
        <div className="text-center">
          <svg
            className="w-12 h-12 text-gold mx-auto mb-4"
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
            WE&apos;LL BE IN TOUCH
          </h3>
          <p className="text-text-muted text-sm">
            Expect a call or text shortly. For faster service:
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <a href="tel:+1XXXXXXXXXX" className="btn-gold text-sm py-2">
              Call Us Now
            </a>
            <a
              href="https://www.instagram.com/worldclassexotic/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm py-2"
            >
              DM on Instagram
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-card/80 backdrop-blur-md border border-dark-border p-6 sm:p-8 max-w-md w-full">
      <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mb-1">
        GET A QUOTE
      </h3>
      <p className="text-text-muted text-sm mb-5">
        Tell us what you want — we&apos;ll make it happen.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors placeholder:text-white/30"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone Number"
          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors placeholder:text-white/30"
        />
        <select
          name="vehicle"
          className="w-full bg-dark border border-dark-border text-white px-4 py-3 focus:border-gold outline-none transition-colors"
        >
          <option value="">What car are you interested in?</option>
          <optgroup label="Los Angeles">
            {cars
              .filter((c) => c.location === "los-angeles")
              .map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
          </optgroup>
          <optgroup label="Bay Area">
            {cars
              .filter((c) => c.location === "bay-area")
              .map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
          </optgroup>
          <option value="Not sure yet">Not sure yet — show me options</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full text-sm py-3 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Get My Quote"}
        </button>
      </form>

      <p className="text-text-muted text-xs mt-4 text-center">
        Or call/text us directly —{" "}
        <a href="tel:+1XXXXXXXXXX" className="text-gold hover:underline">
          tap here
        </a>
      </p>
    </div>
  );
}
