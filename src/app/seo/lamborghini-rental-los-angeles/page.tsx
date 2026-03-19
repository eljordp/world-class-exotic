import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Lamborghini Rental Los Angeles | Huracán & Urus | World Class Exotic",
  description:
    "Rent a Lamborghini in Los Angeles. Huracán EVO Spyder from $995/day, Urus from $695/day. Door-to-door delivery to Beverly Hills, Hollywood, Malibu. Book now.",
};

const vehicles = [
  { name: "Lamborghini Huracán EVO Spyder", price: "$995/day", slug: "lamborghini-huracan-evo-spyder" },
  { name: "Lamborghini Urus", price: "$695/day", slug: "lamborghini-urus" },
  { name: "Lamborghini Urus Widebody", price: "$795/day", slug: "lamborghini-urus-widebody" },
];

const faqs = [
  {
    q: "What Lamborghinis are available in Los Angeles?",
    a: "We currently offer the Huracán EVO Spyder from $995/day, the Urus from $695/day, and the Urus Widebody from $795/day. Availability varies — contact us to confirm.",
  },
  {
    q: "Do you deliver to Beverly Hills and Malibu?",
    a: "Yes. We deliver throughout all of LA County including Beverly Hills, Malibu, Hollywood, Santa Monica, and Calabasas. A $150 delivery fee applies.",
  },
  {
    q: "How old do I need to be to rent a Lamborghini?",
    a: "Drivers must be 25 or older. Drivers aged 21–24 may qualify for select vehicles with an additional fee.",
  },
  {
    q: "Is insurance included?",
    a: "Insurance is not included in the base rate. You must provide your own full-coverage policy or add our rental protection at booking.",
  },
];

export default function LamborghiniRentalLosAngeles() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-darker pt-32 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
              LAMBORGHINI RENTAL{" "}
              <span className="text-gradient-gold">LOS ANGELES</span>
            </h1>
            <div className="gold-line mx-auto my-6" />
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Experience the raw power of a Lamborghini delivered directly to
              your door anywhere in LA County. From Beverly Hills to Malibu,
              World Class Exotic brings the supercar to you.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
                  desc: "We bring your Lamborghini directly to your hotel, home, airport, or event — anywhere in LA County for a flat $150 delivery fee.",
                },
                {
                  title: "Transparent Pricing",
                  desc: "No hidden fees. We quote you the full cost upfront: vehicle rate, delivery, and any add-ons. What you see is what you pay.",
                },
                {
                  title: "Bay Area Available Too",
                  desc: "Heading to San Francisco or Silicon Valley? We serve the Bay Area as well — same service, same standards.",
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
              READY TO DRIVE A LAMBORGHINI?
            </h2>
            <p className="text-text-muted mb-8">
              Book online in minutes or call/text us for same-day availability.
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
