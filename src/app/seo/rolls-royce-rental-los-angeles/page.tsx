import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Rolls-Royce Rental Los Angeles | Cullinan & Ghost | World Class Exotic",
  description:
    "Rent a Rolls-Royce in Los Angeles. Cullinan Black Badge from $2,195/day, Ghost from $1,495/day. Weddings, events, airport transfers. Book now.",
};

const vehicles = [
  { name: "Rolls-Royce Cullinan Black Badge", price: "$2,195/day", slug: "rolls-royce-cullinan-black-badge" },
  { name: "Rolls-Royce Ghost", price: "$1,495/day", slug: "rolls-royce-ghost" },
];

const faqs = [
  {
    q: "What Rolls-Royce models are available in Los Angeles?",
    a: "We offer the Rolls-Royce Cullinan Black Badge starting at $2,195/day and the Rolls-Royce Ghost from $1,495/day. Both are available for delivery throughout LA County.",
  },
  {
    q: "Can I rent a Rolls-Royce for a wedding in LA?",
    a: "Absolutely. Our Rolls-Royce fleet is perfect for weddings, ceremonies, receptions, and events. We coordinate delivery timing to match your schedule.",
  },
  {
    q: "Do you offer Rolls-Royce airport transfers from LAX?",
    a: "Yes. We provide curbside delivery at LAX and all major LA-area airports, with flight tracking to ensure on-time arrivals.",
  },
  {
    q: "Is a chauffeur available with the Rolls-Royce rental?",
    a: "Yes. We offer a chauffeur service for events and transfers. Contact us at booking to add a professional driver to your reservation.",
  },
];

export default function RollsRoyceRentalLosAngeles() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-darker pt-32 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
              ROLLS-ROYCE RENTAL{" "}
              <span className="text-gradient-gold">LOS ANGELES</span>
            </h1>
            <div className="gold-line mx-auto my-6" />
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Arrive in unmatched elegance with a Rolls-Royce delivered to your
              door across Los Angeles. Perfect for weddings, events, airport
              transfers, and occasions that demand the finest.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
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
                  desc: "We deliver your Rolls-Royce to any address in LA County — Beverly Hills, Bel Air, Calabasas, Santa Monica, and beyond. A $150 delivery fee applies.",
                },
                {
                  title: "Transparent Pricing",
                  desc: "Full pricing is given upfront with no hidden fees. Deposit is 50% at booking, with the balance collected at delivery.",
                },
                {
                  title: "Bay Area Available Too",
                  desc: "Our Rolls-Royce fleet is also available in the San Francisco Bay Area — San Jose, Palo Alto, Oakland, and surrounding cities.",
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
              RESERVE YOUR ROLLS-ROYCE
            </h2>
            <p className="text-text-muted mb-8">
              Book online or call/text us. Same-day delivery available across
              Los Angeles and the Bay Area.
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
