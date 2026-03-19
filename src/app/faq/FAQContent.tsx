"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    category: "BOOKING & RESERVATIONS",
    items: [
      {
        q: "How do I book?",
        a: "Submit the online booking form or call/text us directly. We confirm within 1 hour.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend 24 hours in advance to guarantee your preferred vehicle. Same-day bookings are available subject to fleet availability.",
      },
      {
        q: "Can I book same-day?",
        a: "Yes. Same-day rentals are subject to availability. Call or text us for the fastest response.",
      },
      {
        q: "What is the cancellation policy?",
        a: "48 hours or more before pickup: full refund. 24–48 hours: 50% refund. Under 24 hours: no refund.",
      },
    ],
  },
  {
    category: "REQUIREMENTS",
    items: [
      {
        q: "What are the age requirements?",
        a: "Drivers must be 25 or older for most vehicles. Drivers aged 21–24 may qualify for select vehicles with an additional fee.",
      },
      {
        q: "What documents do I need?",
        a: "A valid driver's license plus proof of full-coverage insurance, or you can purchase our rental protection coverage at the time of booking.",
      },
      {
        q: "Do I need my own insurance?",
        a: "Yes. You must bring a full-coverage auto insurance policy or add our rental protection at booking. Insurance is NOT included in the base rental rate.",
      },
      {
        q: "Is there a security deposit?",
        a: "Yes. A refundable security hold of $500–$2,500 is placed depending on the vehicle. The hold is released within 5 business days after the vehicle is returned in good condition.",
      },
    ],
  },
  {
    category: "DELIVERY & PICKUP",
    items: [
      {
        q: "Do you offer delivery?",
        a: "Yes. We offer door-to-door delivery to hotels, private residences, airports, and events. A $150 delivery fee applies.",
      },
      {
        q: "Where do you deliver in Los Angeles?",
        a: "All of LA County — including Hollywood, Beverly Hills, Malibu, Santa Monica, Downtown LA, Calabasas, Huntington Beach, and surrounding areas.",
      },
      {
        q: "Where do you deliver in the Bay Area?",
        a: "San Francisco, Oakland, San Jose, Palo Alto, Silicon Valley, Berkeley, and surrounding cities.",
      },
      {
        q: "Can you deliver to LAX or SFO?",
        a: "Yes. We offer curbside delivery at all major airports with flight tracking included so we're always on time.",
      },
    ],
  },
  {
    category: "VEHICLES & PRICING",
    items: [
      {
        q: "Are prices per day or per hour?",
        a: "Prices are per day, based on a 24-hour rental period from the time of pickup.",
      },
      {
        q: "What's included in the rental price?",
        a: "The vehicle, roadside assistance, and a standard mileage allowance. Delivery and insurance coverage are available add-ons.",
      },
      {
        q: "Is there a mileage limit?",
        a: "Yes, mileage limits vary by vehicle. Overages are charged per mile. Ask us at booking for the specific limit on your chosen vehicle.",
      },
      {
        q: "Can I take the car out of California?",
        a: "No. All vehicles must remain within California at all times.",
      },
      {
        q: "What happens if there's an accident?",
        a: "Contact us immediately. We will guide you through the entire process from start to finish.",
      },
    ],
  },
  {
    category: "PAYMENTS",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept credit card, debit card, Zelle, and cash. A 50% deposit is collected at booking and the remaining balance is due at delivery.",
      },
      {
        q: "When is payment due?",
        a: "Your deposit is collected when we confirm your booking. The remaining balance is collected at the time of vehicle delivery.",
      },
    ],
  },
];

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-darker pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
              FREQUENTLY ASKED{" "}
              <span className="text-gradient-gold">QUESTIONS</span>
            </h1>
            <div className="gold-line mx-auto my-6" />
            <p className="text-text-muted text-lg">
              Everything you need to know about booking, insurance, delivery,
              and our vehicles. Still have questions?{" "}
              <a href="/contact" className="text-gold hover:underline">
                Contact us.
              </a>
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-dark py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] text-gold mb-6">
                  {cat.category}
                </h2>
                <div className="divide-y divide-dark-border border-t border-dark-border">
                  {cat.items.map((item, i) => {
                    const key = `${cat.category}-${i}`;
                    const isOpen = !!openItems[key];
                    return (
                      <div key={key}>
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between py-5 text-left group"
                          aria-expanded={isOpen}
                        >
                          <span className="font-medium text-white group-hover:text-gold transition-colors pr-4">
                            {item.q}
                          </span>
                          <svg
                            className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="pb-5 text-text-muted leading-relaxed">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-darker py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-4">
              READY TO BOOK?
            </h2>
            <p className="text-text-muted mb-8">
              Reserve your exotic or luxury vehicle today. Same-day delivery
              available across LA and the Bay Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="btn-gold">
                Book Now
              </a>
              <a href="/fleet" className="btn-outline">
                View Fleet
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
