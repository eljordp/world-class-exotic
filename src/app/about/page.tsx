import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About World Class Exotic | Luxury Car Rental Company in California",
  description:
    "World Class Exotic is a premium exotic and luxury car rental company serving Los Angeles and the Bay Area. Learn about our story, our fleet, and why we're the top choice for exotic car rentals in California.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 section-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="gold-line mx-auto mb-6" />
            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-wider mb-4">
              ABOUT <span className="text-gradient-gold">US</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              World Class service. World Class cars. That&apos;s not just our name
              — it&apos;s our standard.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 section-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <div className="gold-line mb-6" />
                <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-6">
                  OUR STORY
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    World Class Exotic was born from a simple belief: everyone
                    deserves to experience the thrill of driving an extraordinary
                    car. What started as a passion for exotic vehicles has grown
                    into California&apos;s most trusted luxury car rental service,
                    operating across Los Angeles and the San Francisco Bay Area.
                  </p>
                  <p>
                    We&apos;re not a corporate rental chain. We&apos;re car
                    enthusiasts who treat every vehicle like it&apos;s our own and
                    every client like they&apos;re family. When you rent from us,
                    you get a personal experience — not a ticket number.
                  </p>
                  <p>
                    Our fleet of 20+ exotic and luxury vehicles is rented out
                    every single day. From Lamborghinis and Rolls-Royces to
                    G-Wagons and Ferraris, every car is meticulously maintained,
                    detailed before every rental, and delivered directly to your
                    door.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-dark-card border border-dark-border p-6 text-center">
                  <p className="font-[family-name:var(--font-heading)] text-4xl text-gold tracking-wider">
                    20+
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Luxury Vehicles
                  </p>
                </div>
                <div className="bg-dark-card border border-dark-border p-6 text-center">
                  <p className="font-[family-name:var(--font-heading)] text-4xl text-gold tracking-wider">
                    2
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    California Markets
                  </p>
                </div>
                <div className="bg-dark-card border border-dark-border p-6 text-center">
                  <p className="font-[family-name:var(--font-heading)] text-4xl text-gold tracking-wider">
                    7
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Days a Week
                  </p>
                </div>
                <div className="bg-dark-card border border-dark-border p-6 text-center">
                  <p className="font-[family-name:var(--font-heading)] text-4xl text-gold tracking-wider">
                    1000+
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 section-darker border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl tracking-wider">
                WHAT SETS US{" "}
                <span className="text-gradient-gold">APART</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Service",
                  desc: "No call centers, no ticket systems. You deal directly with real people who care about your experience. Call, text, or DM — we respond fast.",
                },
                {
                  title: "Pristine Fleet",
                  desc: "Every car is detailed and inspected before each rental. We don't hand you keys to anything we wouldn't drive ourselves. No exceptions.",
                },
                {
                  title: "We Make It Happen",
                  desc: "Last-minute wedding? Saturday funeral? Corporate event tomorrow? We've heard it all, and we've made it all happen. No request is too big or too fast.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-dark-card border border-dark-border p-8"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mb-3 text-gold">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-dark border-t border-dark-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl tracking-wider mb-4">
              READY TO EXPERIENCE{" "}
              <span className="text-gradient-gold">WORLD CLASS?</span>
            </h2>
            <p className="text-text-muted mb-8">
              Browse our fleet, pick your dream car, and let us handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fleet" className="btn-gold">
                View Our Fleet
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
