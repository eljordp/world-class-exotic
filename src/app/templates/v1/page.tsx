import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { getFeaturedCars, cars } from "@/data/cars";

/**
 * TEMPLATE V1 — "CINEMATIC"
 * Full-screen hero with split layout, editorial feel
 * Inspired by Monza Exotics — clean, dark, red accent option
 */

const stats = [
  { value: "20+", label: "Vehicles" },
  { value: "LA", label: "& Bay Area" },
  { value: "24/7", label: "Service" },
  { value: "5★", label: "Rated" },
];

export default function TemplateV1() {
  const featured = getFeaturedCars();
  const laCars = cars.filter((c) => c.location === "los-angeles").slice(0, 6);
  const baCars = cars.filter((c) => c.location === "bay-area").slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* HERO — Split Screen */}
        <section className="relative min-h-screen flex items-stretch">
          {/* Left Side — Content */}
          <div className="relative z-10 w-full lg:w-1/2 flex items-center bg-[#050505] px-5 sm:px-12 lg:px-20 pt-24 pb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-gold" />
                <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
                  Premium Exotic Rentals
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl lg:text-8xl tracking-wider leading-[0.9] mb-6 sm:mb-8">
                DRIVE
                <br />
                <span className="text-gradient-gold">ICONIC.</span>
              </h1>

              <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
                Lamborghini. Rolls-Royce. Ferrari. McLaren. The world&apos;s
                most extraordinary cars, delivered to your door in Los Angeles
                and the Bay Area.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link href="/fleet" className="btn-gold">
                  Explore Fleet
                </Link>
                <a href="tel:+1XXXXXXXXXX" className="btn-outline">
                  Call Now
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-dark-border pt-6 sm:pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-[family-name:var(--font-heading)] text-2xl text-gold tracking-wider">
                      {s.value}
                    </p>
                    <p className="text-white/30 text-xs mt-1 tracking-wider uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side — Visual */}
          <div className="hidden lg:block w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-card via-dark-lighter to-[#1a1510]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="font-[family-name:var(--font-heading)] text-[200px] leading-none text-gold/[0.03] tracking-widest">
                  WCE
                </span>
              </div>
            </div>
            {/* Floating Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 transform rotate-[-5deg]">
                {["LAMBORGHINI", "ROLLS-ROYCE", "FERRARI"].map(
                  (brand, i) => (
                    <div
                      key={brand}
                      className="bg-dark-card/60 backdrop-blur border border-dark-border px-8 py-5"
                      style={{
                        transform: `translateX(${i * 20 - 20}px)`,
                      }}
                    >
                      <p className="font-[family-name:var(--font-heading)] text-xl tracking-[0.3em] text-white/40">
                        {brand}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FLEET PREVIEW — Horizontal Scroll */}
        <section className="py-20 bg-dark border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-[1px] bg-gold" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">
                    Featured
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider">
                  THE FLEET
                </h2>
              </div>
              <Link
                href="/fleet"
                className="hidden sm:flex items-center gap-2 text-gold text-sm tracking-wider uppercase hover:gap-3 transition-all"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS — Minimal */}
        <section className="py-20 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-dark-border">
              <Link
                href="/locations/los-angeles"
                className="group p-8 sm:p-12 md:p-16 border-b md:border-b-0 md:border-r border-dark-border hover:bg-gold/5 transition-all duration-500"
              >
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
                  {laCars.length}+ vehicles
                </p>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl md:text-6xl tracking-wider mb-4 group-hover:text-gold transition-colors">
                  LOS ANGELES
                </h3>
                <p className="text-text-muted mb-6 max-w-sm">
                  Hollywood · Beverly Hills · Downtown · Santa Monica · Malibu
                  · Huntington Beach
                </p>
                <span className="text-gold text-sm tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  View LA Fleet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/locations/bay-area"
                className="group p-8 sm:p-12 md:p-16 hover:bg-gold/5 transition-all duration-500"
              >
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
                  {baCars.length} vehicles
                </p>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl md:text-6xl tracking-wider mb-4 group-hover:text-gold transition-colors">
                  BAY AREA
                </h3>
                <p className="text-text-muted mb-6 max-w-sm">
                  San Francisco · Oakland · San Jose · Silicon Valley · Palo
                  Alto
                </p>
                <span className="text-gold text-sm tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Bay Area Fleet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES — Icon Grid */}
        <section className="py-20 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                What We Offer
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl tracking-wider mb-12">
              SERVICES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-dark-border">
              {[
                { title: "Self-Drive", desc: "Full insurance, unlimited miles, door-to-door delivery." },
                { title: "Chauffeur", desc: "Professional drivers for any occasion. Hourly or full-day." },
                { title: "Weddings", desc: "Multi-car packages. Rolls-Royce, Lamborghini, and more." },
                { title: "Airport", desc: "Pickup from LAX, SFO, OAK, SJC. Car waiting at the curb." },
                { title: "Corporate", desc: "Fleet packages for events, launches, and client entertainment." },
                { title: "Photo & Film", desc: "Cars for music videos, shoots, and commercial productions." },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-dark p-8 hover:bg-dark-card transition-colors group"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — Full Width */}
        <section className="py-24 bg-[#050505] border-t border-dark-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl tracking-wider mb-6">
              READY TO{" "}
              <span className="text-gradient-gold">RIDE?</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
              Book your dream car today. Same-day delivery available across Los
              Angeles and the Bay Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-gold">
                Book Now
              </Link>
              <a href="tel:+1XXXXXXXXXX" className="btn-outline">
                Call or Text
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
        </section>
      </main>
      <Footer />
    </>
  );
}
