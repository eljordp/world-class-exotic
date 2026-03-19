import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ferrari Rental Los Angeles | Ferrari 812 GTS | World Class Exotic",
  description:
    "Rent a Ferrari in Los Angeles. Ferrari 812 GTS Convertible from $1,195/day. Door-to-door delivery across LA County. Book online or call/text.",
};

const vehicles = [
  { name: "Ferrari 812 GTS Convertible", price: "$1,195/day", slug: "ferrari-812-gts-convertible" },
];

const faqs = [
  {
    q: "What Ferrari models are available in Los Angeles?",
    a: "We currently offer the Ferrari 812 GTS Convertible starting at $1,195/day. Contact us to confirm availability for your dates.",
  },
  {
    q: "Do you deliver the Ferrari to my hotel in LA?",
    a: "Yes. We deliver to hotels, private residences, airports, and events throughout all of LA County. A flat $150 delivery fee applies.",
  },
  {
    q: "What's the age requirement to rent a Ferrari?",
    a: "Drivers must be 25 or older for our Ferrari inventory. Proof of a valid driver's license and full-coverage insurance is required.",
  },
  {
    q: "How do I book a Ferrari rental in Los Angeles?",
    a: "Submit the booking form on our site or call/text us directly. We confirm your reservation within 1 hour.",
  },
];

export default function FerrariRentalLosAngeles() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-darker pt-32 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
              FERRARI RENTAL{" "}
              <span className="text-gradient-gold">LOS ANGELES</span>
            </h1>
            <div className="gold-line mx-auto my-6" />
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Rent the iconic Ferrari 812 GTS Convertible and feel 789
              horsepower roar through the streets of Los Angeles. World Class
              Exotic delivers the Prancing Horse directly to your door.
            </p>
          </div>
        </section>

        {/* Available Vehicles */}
        <section className="section-dark py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-center mb-2">
              AVAILABLE VEHICLES
            </h2>
            <div className="gold-line mx-auto my-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-2xl mx-auto">
              {vehicles.map((v) => (
                <Link
                  key={v.slug}
                  href={`/car/${v.slug}`}
                  className="bg-dark-card border border-dark-border p-6 hover:border-gold transition-colors group"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-lg tracking-wider group-hover:text-gold transition-colors mb-2">
                    {v.name}
                  </h3>
                  <p className="text-gold font-semibold text-xl">{v.price}</p>
                  <p className="text-text-muted text-sm mt-3">
                    Door-to-door delivery · Roadside assistance included
                  </p>
                  <span className="inline-block mt-4 text-sm text-gold underline underline-offset-2">
                    View Details →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why WCE */}
        <section className="section-darker py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-center mb-2">
              WHY WORLD CLASS EXOTIC
            </h2>
            <div className="gold-line mx-auto my-6" />
            <div className="max-w-2xl mx-auto mt-10 space-y-6">
              {[
                {
                  title: "Door-to-Door Delivery",
                  desc: "We bring your Ferrari to you — hotel, home, airport, or event anywhere in LA County. No need to arrange pickup.",
                },
                {
                  title: "Transparent Pricing",
                  desc: "Your full quote is given upfront. Vehicle rate, delivery fee, and any add-ons are clearly stated — no surprises at delivery.",
                },
                {
                  title: "Bay Area Available Too",
                  desc: "We serve San Francisco, San Jose, Palo Alto, and the greater Bay Area with the same white-glove delivery experience.",
                },
              ].map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-text-muted">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-dark py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-center mb-2">
              COMMON QUESTIONS
            </h2>
            <div className="gold-line mx-auto my-6" />
            <div className="mt-10 space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <p className="font-semibold text-white mb-2">{faq.q}</p>
                  <p className="text-text-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-darker py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-4">
              BOOK YOUR FERRARI TODAY
            </h2>
            <p className="text-text-muted mb-8">
              Reserve online or call/text us for same-day availability across
              Los Angeles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-gold">
                Book Now
              </Link>
              <Link href="/fleet" className="btn-outline">
                View Full Fleet
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
