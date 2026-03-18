import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Luxury Car Rental Services | Chauffeur, Weddings, Transfers | World Class Exotic",
  description:
    "Full-service exotic car rental in LA and Bay Area. Chauffeur service, wedding car rental, airport transfers. Book now.",
};

const services = [
  {
    title: "Drive It Yourself",
    description:
      "Get behind the wheel and experience the thrill yourself. Every rental includes full insurance coverage, and we deliver directly to your location — hotel, home, office, or airport. Multi-day discounts available.",
    features: [
      "Full insurance included",
      "Door-to-door delivery & pickup",
      "Flexible rental periods (daily, weekly, monthly)",
      "24/7 roadside assistance",
      "No hidden fees",
    ],
  },
  {
    title: "Chauffeur Service",
    description:
      "Sit back and enjoy the ride in any vehicle from our fleet. Our professional chauffeurs are experienced, discreet, and always on time. Perfect for business meetings, date nights, or when you want to arrive in style without the stress of driving.",
    features: [
      "Professional, vetted drivers",
      "Hourly or full-day booking",
      "Airport pickup & drop-off",
      "Event transportation",
      "Flexible scheduling",
    ],
  },
  {
    title: "Wedding & Special Events",
    description:
      "Make your special day truly unforgettable. From a Rolls-Royce Cullinan for the bride to a Lamborghini for the groom's exit, we handle all the logistics so you can focus on the moment. Multi-car packages available.",
    features: [
      "Rolls-Royce, Lamborghini, Ferrari & more",
      "Multi-car fleet packages",
      "Decorated vehicle options",
      "On-time guaranteed arrival",
      "Last-minute bookings welcome",
    ],
  },
  {
    title: "Airport Transfers",
    description:
      "Start or end your trip in luxury. We pick you up from LAX, SFO, OAK, SJC, or any private terminal in the exotic or luxury vehicle of your choice. Skip the rental counter — your car is waiting at the curb.",
    features: [
      "All major airports (LAX, SFO, OAK, SJC)",
      "Private terminal service",
      "Flight tracking — we adjust for delays",
      "Meet & greet service",
      "Luggage assistance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-services.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="gold-line mx-auto mb-6" />
            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-wider mb-4">
              OUR <span className="text-gradient-gold">SERVICES</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              More than just car rentals. We provide a complete luxury
              transportation experience for every need and occasion.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="section-dark">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`py-20 border-b border-dark-border ${
                index % 2 === 1 ? "bg-dark-card/30" : ""
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="gold-line mb-4" />
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl tracking-wider mb-4">
                      {service.title.toUpperCase()}
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link href="/booking" className="btn-gold inline-block">
                      Book This Service
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-dark-card border border-dark-border p-8">
                      <h3 className="font-[family-name:var(--font-heading)] text-lg tracking-wider text-gold mb-4">
                        WHAT&apos;S INCLUDED
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <svg
                              className="w-5 h-5 text-gold flex-shrink-0"
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
                            <span className="text-white/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-20 section-darker">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl tracking-wider mb-4">
              NEED SOMETHING{" "}
              <span className="text-gradient-gold">CUSTOM?</span>
            </h2>
            <p className="text-text-muted mb-8">
              Don&apos;t see exactly what you need? Contact us. We specialize in
              making the impossible happen — on any timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold">
                Contact Us
              </Link>
              <a href="tel:+1XXXXXXXXXX" className="btn-outline">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
