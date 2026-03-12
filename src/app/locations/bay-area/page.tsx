import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { getCarsByLocation } from "@/data/cars";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Exotic Car Rental Bay Area | Luxury Car Rental San Francisco, Oakland, San Jose",
  description:
    "Rent exotic and luxury cars in the San Francisco Bay Area. Lamborghini, Rolls-Royce, Mercedes G-Wagon, BMW M3 & more. Delivery to SF, Oakland, San Jose, Silicon Valley. Book now.",
  keywords:
    "exotic car rental Bay Area, luxury car rental San Francisco, exotic car rental SF, Lamborghini rental Bay Area, G-Wagon rental San Francisco, luxury car rental Silicon Valley, exotic car rental Oakland, supercar rental Bay Area",
  openGraph: {
    title: "Exotic Car Rental Bay Area | World Class Exotic",
    description:
      "Exotic and luxury vehicles available for daily rental in the Bay Area. Delivery to SF, Oakland, San Jose.",
  },
};

const areas = [
  "San Francisco",
  "Oakland",
  "San Jose",
  "Silicon Valley",
  "Palo Alto",
  "Fremont",
  "Berkeley",
  "Walnut Creek",
  "Daly City",
  "Hayward",
  "Sunnyvale",
  "Mountain View",
];

export default function BayAreaPage() {
  const baCars = getCarsByLocation("bay-area");

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 section-darker overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="gold-line mb-6" />
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Exotic Car Rental
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-wider mb-6">
              BAY AREA
            </h1>
            <p className="text-text-muted text-lg max-w-2xl leading-relaxed mb-8">
              Exotic and luxury car rentals in the San Francisco Bay Area. From
              the Golden Gate to Silicon Valley, our fleet of {baCars.length}{" "}
              premium vehicles is ready to elevate any occasion. Delivery
              available across the entire Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="btn-gold">
                Book a Car in the Bay
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
              BAY AREA <span className="text-gradient-gold">FLEET</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {baCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 section-darker border-t border-dark-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-6">
              EXOTIC CAR RENTAL IN THE{" "}
              <span className="text-gradient-gold">BAY AREA</span>
            </h2>
            <div className="prose prose-invert prose-sm max-w-none space-y-4 text-text-muted">
              <p>
                The San Francisco Bay Area is home to some of the most
                successful and discerning people in the world. World Class
                Exotic brings the same level of excellence to exotic car rentals
                in the Bay Area — premium vehicles, impeccable service, and
                delivery to your door.
              </p>
              <p>
                Our Bay Area fleet features hand-selected vehicles from
                Lamborghini, Rolls-Royce, Mercedes-Benz, BMW, and Chevrolet.
                Whether you need a Lamborghini Huracán for a weekend in Napa, a
                Rolls-Royce Cullinan for a corporate event in Silicon Valley, or
                a G-Wagon for a night out in SF, we have the perfect car for
                you.
              </p>
              <p>
                We serve all major Bay Area cities including San Francisco,
                Oakland, San Jose, Silicon Valley, Palo Alto, Fremont, Berkeley,
                Walnut Creek, and more. Same-day delivery is available for most
                vehicles. Contact us to book your dream car today.
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
              name: "World Class Exotic - Bay Area",
              description:
                "Premium exotic and luxury car rentals in the San Francisco Bay Area.",
              url: "https://worldclassexotic.com/locations/bay-area",
              telephone: "+1-XXX-XXX-XXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "Place",
                name: "San Francisco Bay Area",
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
