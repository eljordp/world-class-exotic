import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { getFeaturedCars, cars, brands } from "@/data/cars";

/**
 * TEMPLATE V2 — "BOLD & IMMERSIVE"
 * Giant typography, full-bleed sections, scroll-driven feel
 * Inspired by Peacock Rentals — multi-location prominent, social proof, IG integration
 */

export default function TemplateV2() {
  const featured = getFeaturedCars();
  const laCars = cars.filter((c) => c.location === "los-angeles");
  const baCars = cars.filter((c) => c.location === "bay-area");

  return (
    <>
      <Header />
      <main>
        {/* HERO — Full Bleed Giant Type */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
          {/* Background texture */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold/[0.02] rounded-full blur-[80px] sm:blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gold/[0.03] rounded-full blur-[60px] sm:blur-[100px]" />
          </div>

          {/* Giant watermark */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span className="font-[family-name:var(--font-heading)] text-[20vw] leading-none text-white/[0.02] tracking-[0.2em] whitespace-nowrap">
              WORLD CLASS
            </span>
          </div>

          <div className="relative z-10 text-center px-4 pt-20">
            {/* Location Selector */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link
                href="/locations/los-angeles"
                className="group flex items-center gap-2 px-4 sm:px-6 py-3 border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all min-h-[48px]"
              >
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/70 group-hover:text-gold transition-colors">
                  Los Angeles
                </span>
              </Link>
              <Link
                href="/locations/bay-area"
                className="group flex items-center gap-2 px-4 sm:px-6 py-3 border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all min-h-[48px]"
              >
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/70 group-hover:text-gold transition-colors">
                  Bay Area
                </span>
              </Link>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-[3.5rem] sm:text-8xl md:text-9xl lg:text-[10rem] tracking-wider leading-[0.85] mb-6 sm:mb-8">
              WORLD
              <br />
              CLASS
              <br />
              <span className="text-gradient-gold">EXOTIC</span>
            </h1>

            <p className="text-white/40 text-base sm:text-lg max-w-lg mx-auto mb-8 sm:mb-12">
              California&apos;s premier exotic and luxury car rental.
              Lamborghini · Rolls-Royce · Ferrari · McLaren · Mercedes
            </p>

            <Link
              href="/fleet"
              className="inline-flex items-center gap-3 btn-gold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5"
            >
              View Our Fleet
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Bottom bar — hidden on mobile */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-dark-border hidden sm:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-center gap-x-12 gap-y-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="font-[family-name:var(--font-heading)] text-sm tracking-[0.3em] text-white/20 uppercase"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK NUMBERS */}
        <section className="bg-gold/5 border-y border-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              {[
                { n: `${cars.length}+`, l: "Vehicles" },
                { n: "2", l: "Markets" },
                { n: "1K+", l: "Clients Served" },
                { n: "Same Day", l: "Delivery" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-gold tracking-wider">
                    {s.n}
                  </p>
                  <p className="text-text-muted text-xs sm:text-sm mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FLEET — LA */}
        <section className="py-12 sm:py-20 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8 sm:mb-10">
              <div>
                <p className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-2">
                  {laCars.length} vehicles
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl tracking-wider">
                  LOS ANGELES
                </h2>
              </div>
              <Link
                href="/locations/los-angeles"
                className="hidden sm:block btn-outline text-sm py-2 px-6"
              >
                See All LA Cars
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {laCars.slice(0, 6).map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            <div className="sm:hidden text-center mt-8">
              <Link href="/locations/los-angeles" className="btn-outline w-full">
                See All LA Cars
              </Link>
            </div>
          </div>
        </section>

        {/* FLEET — BAY AREA */}
        <section className="py-12 sm:py-20 bg-[#050505] border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8 sm:mb-10">
              <div>
                <p className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-2">
                  {baCars.length} vehicles
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl tracking-wider">
                  BAY AREA
                </h2>
              </div>
              <Link
                href="/locations/bay-area"
                className="hidden sm:block btn-outline text-sm py-2 px-6"
              >
                See All Bay Area Cars
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {baCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* WHY US — Big blocks */}
        <section className="bg-dark border-t border-dark-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dark-border">
              {[
                {
                  title: "PERSONAL SERVICE",
                  desc: "No call centers. You deal directly with us. Call, text, or DM — we respond fast and handle everything personally.",
                },
                {
                  title: "PRISTINE FLEET",
                  desc: "Every car is detailed and inspected before each rental. We don't hand you keys to anything we wouldn't drive ourselves.",
                },
                {
                  title: "WE MAKE IT HAPPEN",
                  desc: "3 cars on Saturday for a funeral? A Rolls-Royce for a last-minute wedding? We've done it all. No request is too fast.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 sm:p-10 md:p-12">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider text-gold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES — Horizontal */}
        <section className="py-12 sm:py-20 bg-[#050505] border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl tracking-wider mb-8 sm:mb-12 text-center">
              FULL-SERVICE <span className="text-gradient-gold">LUXURY</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                "Self-Drive",
                "Chauffeur",
                "Weddings",
                "Airport",
                "Corporate",
                "Photo & Film",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="group bg-dark-card border border-dark-border p-4 sm:p-6 text-center hover:border-gold hover:bg-gold/5 transition-all min-h-[48px] flex items-center justify-center"
                >
                  <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm tracking-wider group-hover:text-gold transition-colors">
                    {service.toUpperCase()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-12 sm:py-20 bg-dark border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl tracking-wider mb-8 sm:mb-12 text-center">
              WHAT CLIENTS SAY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  name: "Marcus D.",
                  text: "Rented a Rolls-Royce Cullinan for my sister's wedding. Spotless car, on-time delivery, world class experience.",
                },
                {
                  name: "Jason T.",
                  text: "Best exotic car rental in LA. The G63 Brabus was insane. Customer service was responsive and professional.",
                },
                {
                  name: "Priya M.",
                  text: "Booked 3 cars for a Saturday event with very short notice. They made it happen seamlessly. Can't recommend enough.",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="border border-dark-border p-6 sm:p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-gold text-sm font-medium">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — Massive */}
        <section className="py-16 sm:py-32 bg-[#050505] border-t border-dark-border relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-[family-name:var(--font-heading)] text-[15vw] leading-none text-white/[0.015] tracking-[0.3em]">
              BOOK NOW
            </span>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-7xl tracking-wider mb-6">
              YOUR CAR IS
              <br />
              <span className="text-gradient-gold">WAITING</span>
            </h2>
            <p className="text-text-muted text-base sm:text-lg mb-8 sm:mb-10">
              Same-day delivery. Zelle, card, or cash. DocuSign contracts.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Call, text, or DM — we close 90% of warm leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/booking" className="btn-gold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto">
                Book Your Ride
              </Link>
              <a
                href="tel:+1XXXXXXXXXX"
                className="btn-outline text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto"
              >
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
