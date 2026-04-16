import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { getCarsByLocation } from "@/data/cars";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Exotic Car Rental Miami | Lamborghini, Rolls-Royce, Ferrari Rental Miami | World Class Exotic",
  description:
    "Rent exotic and luxury cars in Miami. Lamborghini Huracán, Urus, Rolls-Royce Cullinan Black Badge, Ferrari 812 GTS, McLaren 720S, G-Wagon & more. Same-day delivery to South Beach, Brickell, Wynwood & more. Book now.",
  keywords:
    "exotic car rental Miami, luxury car rental Miami, Lamborghini rental Miami, Rolls Royce rental Miami, Ferrari rental Miami, G-Wagon rental Miami, exotic car rental South Beach, supercar rental Miami, McLaren rental Miami",
  openGraph: {
    title: "Exotic Car Rental Miami | World Class Exotic",
    description:
      "6+ exotic and luxury vehicles available for daily rental in Miami. Same-day delivery.",
  },
};

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
  "Miami Airport (MIA)",
  "Fort Lauderdale",
  "Key Biscayne",
];

export default function MiamiPage() {
  const miamiCars = getCarsByLocation("miami");

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
              MIAMI
            </h1>
            <p className="text-text-muted text-lg max-w-2xl leading-relaxed mb-8">
              The city that never stops. From South Beach to Brickell, our fleet
              of {miamiCars.length}+ luxury and exotic vehicles is ready to make
              every Miami moment unforgettable. Same-day delivery available
              across Miami-Dade and Broward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="btn-gold">
                Book a Car in Miami
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
              MIAMI <span className="text-gradient-gold">FLEET</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miamiCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* Miami SEO Content */}
        <section className="py-16 section-darker border-t border-dark-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-6">
              EXOTIC CAR RENTAL IN{" "}
              <span className="text-gradient-gold">MIAMI</span>
            </h2>
            <div className="prose prose-invert prose-sm max-w-none space-y-4 text-text-muted">
              <p>
                Miami is one of the most exciting cities in the world for exotic
                cars, and World Class Exotic is your premier source for luxury
                and exotic car rentals in Miami. Whether you&apos;re visiting
                for Art Basel, celebrating a milestone, or simply want to cruise
                Ocean Drive in something unforgettable, we have the perfect
                vehicle waiting for you.
              </p>
              <p>
                Our Miami fleet includes hand-picked vehicles from the
                world&apos;s most prestigious brands: Lamborghini, Rolls-Royce,
                Ferrari, McLaren, and Mercedes-Benz. Every car in our collection
                is meticulously maintained, detailed before each rental, and
                delivered directly to your location — whether that&apos;s your
                hotel on South Beach, a venue in Wynwood, or your suite in
                Brickell.
              </p>
              <p>
                We specialize in making the impossible happen on short notice.
                Need a Rolls-Royce Cullinan Black Badge for a Saturday night?
                A Lamborghini delivered to MIA or FLL? A McLaren 720S for a
                weekend down to the Keys? We&apos;ve done it all, and we&apos;ll
                make it happen for you too.
              </p>
              <p>
                World Class Exotic serves all of Miami-Dade and Broward County,
                including South Beach, Brickell, Wynwood, Downtown Miami,
                Coconut Grove, Coral Gables, Miami Beach, Aventura, Doral, and
                Key Biscayne. Same-day delivery is available for most vehicles.
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
              name: "World Class Exotic - Miami",
              description:
                "Premium exotic and luxury car rentals in Miami. Lamborghini, Rolls-Royce, Ferrari, McLaren & more.",
              url: "https://worldclassexotic.com/locations/miami",
              telephone: "+1-XXX-XXX-XXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Miami",
                addressRegion: "FL",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "Miami",
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
