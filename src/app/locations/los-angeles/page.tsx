import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { getCarsByLocation } from "@/data/cars";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Exotic Car Rental Los Angeles | Lamborghini, Rolls-Royce, Ferrari Rental LA",
  description:
    "Rent exotic and luxury cars in Los Angeles. Lamborghini Huracán, Rolls-Royce Cullinan, Ferrari 812, McLaren 720S, G-Wagon & more. Same-day delivery to Hollywood, Beverly Hills, Downtown LA, Huntington Beach. Book now.",
  keywords:
    "exotic car rental Los Angeles, luxury car rental LA, Lamborghini rental Los Angeles, Rolls Royce rental LA, Ferrari rental Los Angeles, G-Wagon rental LA, exotic car rental near me Los Angeles, supercar rental LA, luxury SUV rental Los Angeles",
  openGraph: {
    title: "Exotic Car Rental Los Angeles | World Class Exotic",
    description:
      "15+ exotic and luxury vehicles available for daily rental in Los Angeles. Same-day delivery.",
  },
};

const areas = [
  "Hollywood",
  "Beverly Hills",
  "Downtown LA",
  "Santa Monica",
  "Malibu",
  "Huntington Beach",
  "Long Beach",
  "Bel Air",
  "West Hollywood",
  "Calabasas",
  "Burbank",
  "Pasadena",
];

export default function LosAngelesPage() {
  const laCars = getCarsByLocation("los-angeles");

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-la.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="gold-line mb-6" />
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Exotic Car Rental
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-wider mb-6">
              LOS ANGELES
            </h1>
            <p className="text-text-muted text-lg max-w-2xl leading-relaxed mb-8">
              The home of exotic cars. From Hollywood premieres to Malibu
              cruises, our fleet of {laCars.length}+ luxury and exotic vehicles
              is ready to make every LA moment unforgettable. Same-day delivery
              available across Los Angeles County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="btn-gold">
                Book a Car in LA
              </Link>
              <a href="tel:+1XXXXXXXXXX" className="btn-outline">
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 border-b border-dark-border bg-dark-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-text-muted text-sm mb-4 tracking-wider uppercase">
              We deliver to:
            </p>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="text-sm px-4 py-2 bg-dark border border-dark-border text-white/70"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section className="py-16 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-8">
              LOS ANGELES <span className="text-gradient-gold">FLEET</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {laCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* LA SEO Content */}
        <section className="py-16 section-darker border-t border-dark-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-6">
              EXOTIC CAR RENTAL IN{" "}
              <span className="text-gradient-gold">LOS ANGELES</span>
            </h2>
            <div className="prose prose-invert prose-sm max-w-none space-y-4 text-text-muted">
              <p>
                Los Angeles is the exotic car capital of the world, and World
                Class Exotic is your premier source for luxury and exotic car
                rentals in LA. Whether you&apos;re visiting for business,
                celebrating a special occasion, or simply want to experience the
                thrill of driving a supercar down Sunset Boulevard, we have the
                perfect vehicle waiting for you.
              </p>
              <p>
                Our Los Angeles fleet includes over 15 hand-picked vehicles from
                the world&apos;s most prestigious brands: Lamborghini,
                Rolls-Royce, Ferrari, McLaren, Mercedes-Benz, Porsche, BMW, and
                more. Every car in our collection is meticulously maintained,
                detailed before each rental, and delivered directly to your
                location — whether that&apos;s your hotel in Beverly Hills, a
                venue in Hollywood, or your home in Calabasas.
              </p>
              <p>
                We specialize in making the impossible happen on short notice.
                Need three luxury SUVs for a Saturday event? A Rolls-Royce for a
                last-minute wedding? A Lamborghini delivered to LAX? We&apos;ve
                done it all, and we&apos;ll make it happen for you too.
              </p>
              <p>
                World Class Exotic serves all of Los Angeles County and beyond,
                including Hollywood, Beverly Hills, Downtown LA, Santa Monica,
                Malibu, Huntington Beach, Long Beach, Bel Air, West Hollywood,
                Calabasas, Burbank, and Pasadena. Same-day delivery is available
                for most vehicles.
              </p>
            </div>
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRental",
              name: "World Class Exotic - Los Angeles",
              description:
                "Premium exotic and luxury car rentals in Los Angeles. Lamborghini, Rolls-Royce, Ferrari, McLaren & more.",
              url: "https://worldclassexotic.com/locations/los-angeles",
              telephone: "+1-XXX-XXX-XXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "Los Angeles",
              },
              priceRange: "$$$",
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
