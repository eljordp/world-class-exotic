import type { Metadata } from "next";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import { getCarsByLocation } from "@/data/cars";

export const metadata: Metadata = {
  title: "Exotic Car Rental Miami | Lamborghini, Ferrari, Rolls-Royce | World Class Exotic",
  description:
    "Rent exotic cars in Miami. Lamborghini, Ferrari, Rolls-Royce, G-Wagon delivered to South Beach, Brickell, Wynwood & more. Book now.",
  robots: {
    index: false,
    follow: false,
  },
};

const trustStats = [
  { value: "20+", label: "Premium Vehicles" },
  { value: "Same-Day", label: "Delivery" },
  { value: "1,000+", label: "Happy Clients" },
  { value: "24/7", label: "Available" },
];

const areas = [
  "South Beach",
  "Brickell",
  "Wynwood",
  "Downtown Miami",
  "Coconut Grove",
  "Coral Gables",
  "Miami Beach",
  "Aventura",
  "Doral",
  "MIA Airport",
  "Fort Lauderdale",
  "Key Biscayne",
];

const testimonials = [
  {
    text: "Rented the Huracán Spyder for a weekend in South Beach. They delivered it straight to my hotel. Flawless experience.",
    name: "Marcus T.",
  },
  {
    text: "The Cullinan Black Badge for Art Basel. Showed up on time, immaculate condition. These guys are the real deal.",
    name: "Priya K.",
  },
];

export default function MiamiAdPage() {
  const cars = getCarsByLocation("miami");

  return (
    <>
      {/* Minimal Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-[family-name:var(--font-heading)] text-xl tracking-widest text-white hover:text-gold transition-colors">
              WORLD CLASS EXOTIC
            </Link>
            <Link href="/booking" className="btn-gold text-sm py-2 px-5">
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="gold-line mx-auto mb-6" />
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
              Miami, FL
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl md:text-8xl tracking-wider leading-none mb-6">
              EXOTIC CAR RENTAL<br />
              <span className="text-gradient-gold">IN MIAMI</span>
            </h1>
            <p className="text-white/70 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Lamborghini, Ferrari, Rolls-Royce &amp; more. Delivered to your hotel, Airbnb, or anywhere in Miami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#fleet" className="btn-gold w-full sm:w-auto">
                View Fleet
              </a>
              <Link href="/booking" className="btn-outline w-full sm:w-auto">
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <div className="bg-[#0A0A0A] border-y border-gold/20 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-center gap-3">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-white/80">
                    <span className="text-gold font-semibold">{stat.value}</span> {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fleet Section */}
        <section id="fleet" className="section-darker py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider mb-4">
                MIAMI <span className="text-gradient-gold">FLEET</span>
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                Every vehicle is detailed, inspected, and delivered to you. Same-day bookings available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Areas */}
        <section className="section-dark py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider mb-4">
                DELIVERY <span className="text-gradient-gold">AREAS</span>
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                We deliver across all of Miami-Dade and Broward County. Just tell us where.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 border border-dark-border bg-dark-card text-white/70 text-sm tracking-wider hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-darker py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider mb-4">
                WHAT CLIENTS <span className="text-gradient-gold">SAY</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-dark-card border border-dark-border p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-gold font-medium">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-dark py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl tracking-wider mb-4">
              READY TO RIDE <span className="text-gradient-gold">MIAMI?</span>
            </h2>
            <p className="text-text-muted mb-10 text-lg">
              Same-day delivery available. Reserve your exotic now.
            </p>
            <Link href="/booking" className="btn-gold text-lg px-10 py-4">
              Book Your Miami Rental
            </Link>
            <p className="mt-6 text-text-muted text-sm tracking-wider">
              Call or text:{" "}
              <a href="tel:+1XXXXXXXXXX" className="text-gold hover:text-gold-light transition-colors">
                (XXX) XXX-XXXX
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
