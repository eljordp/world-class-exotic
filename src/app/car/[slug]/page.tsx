import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { cars, getCarBySlug } from "@/data/cars";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return {};

  const location =
    car.location === "los-angeles" ? "Los Angeles" : "Bay Area";
  return {
    title: `${car.name} Rental | World Class Exotic - ${location}`,
    description: `Rent a ${car.specs.year} ${car.name} in ${location}. ${car.specs.horsepower}hp, ${car.specs.engine}. Starting at $${car.dailyRate}/day. Book now at World Class Exotic.`,
    openGraph: {
      title: `${car.name} Rental | World Class Exotic`,
      description: `Rent a ${car.specs.year} ${car.name} starting at $${car.dailyRate}/day in ${location}.`,
    },
  };
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  const location =
    car.location === "los-angeles" ? "Los Angeles" : "Bay Area";

  // Get related cars (same category or brand, different car)
  const related = cars
    .filter(
      (c) =>
        c.id !== car.id &&
        (c.category === car.category || c.brand === car.brand)
    )
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-dark-card border-b border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/fleet"
                className="hover:text-white transition-colors"
              >
                Fleet
              </Link>
              <span>/</span>
              <span className="text-white">{car.name}</span>
            </div>
          </div>
        </div>

        {/* Car Hero */}
        <section className="section-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Image */}
              <div className="relative h-56 sm:h-80 lg:h-[500px] bg-dark-card border border-dark-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-lighter to-dark-border flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-[family-name:var(--font-heading)] text-4xl tracking-widest text-text-muted/30">
                      {car.brand}
                    </span>
                    <p className="text-text-muted/20 text-sm mt-2">
                      Image Coming Soon
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-medium tracking-widest uppercase bg-gold/90 text-black px-3 py-1">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">
                  {location}
                </p>
                <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider mb-4">
                  {car.name}
                </h1>
                <p className="text-text-muted leading-relaxed mb-8">
                  {car.description}
                </p>

                {/* Price */}
                <div className="bg-dark-card border border-dark-border p-4 sm:p-6 mb-6 sm:mb-8">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-gold tracking-wider">
                      ${car.dailyRate.toLocaleString()}
                    </span>
                    <span className="text-text-muted text-lg mb-1">/day</span>
                  </div>
                  <p className="text-text-muted text-sm">
                    Multi-day discounts available. Contact us for weekly rates.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/booking" className="btn-gold flex-1 text-center">
                    Book This Car
                  </Link>
                  <a
                    href="tel:+1XXXXXXXXXX"
                    className="btn-outline flex-1 text-center"
                  >
                    Call to Reserve
                  </a>
                </div>

                {/* Quick Contact */}
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/worldclassexotic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    DM on Instagram
                  </a>
                  <a
                    href="sms:+1XXXXXXXXXX"
                    className="text-sm text-text-muted hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Text Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="section-dark py-16 border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-8">
              SPECIFICATIONS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {[
                { label: "Year", value: car.specs.year.toString() },
                { label: "Engine", value: car.specs.engine },
                {
                  label: "Horsepower",
                  value: `${car.specs.horsepower} HP`,
                },
                { label: "Transmission", value: car.specs.transmission },
                { label: "Seats", value: car.specs.seats.toString() },
                { label: "Top Speed", value: car.specs.topSpeed },
                { label: "0-60 MPH", value: car.specs.zeroToSixty },
                {
                  label: "Location",
                  value: location,
                },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="bg-dark-card border border-dark-border p-3 sm:p-6"
                >
                  <p className="text-text-muted text-xs sm:text-sm mb-1">{spec.label}</p>
                  <p className="font-[family-name:var(--font-heading)] text-sm sm:text-xl tracking-wider text-gold">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-darker py-16 border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-8">
              FEATURES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {car.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: `${car.name} Rental`,
              description: car.description,
              brand: { "@type": "Brand", name: car.brand },
              offers: {
                "@type": "Offer",
                price: car.dailyRate,
                priceCurrency: "USD",
                availability: car.available
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
                priceValidUntil: "2027-12-31",
              },
              category: "Vehicle Rental",
            }),
          }}
        />

        {/* Related Cars */}
        {related.length > 0 && (
          <section className="section-dark py-16 border-t border-dark-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-8">
                YOU MAY ALSO{" "}
                <span className="text-gradient-gold">LIKE</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((c) => (
                  <CarCard key={c.id} car={c} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
