import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About World Class Exotic | Contact Us | LA & Bay Area Car Rentals",
  description:
    "Learn about World Class Exotic and get in touch. Premium exotic car rentals in Los Angeles and the Bay Area.",
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

        {/* GET IN TOUCH */}
        <section className="py-20 section-dark border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-wider mb-4">
                GET IN <span className="text-gradient-gold">TOUCH</span>
              </h2>
              <p className="text-text-muted max-w-xl mx-auto text-lg">
                Ready to book? Have questions? Reach out and we&apos;ll get back
                to you fast.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-dark-card border border-dark-border p-8">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl tracking-wider mb-6">
                    CONTACT INFO
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Call or Text</p>
                        <a
                          href="tel:+1XXXXXXXXXX"
                          className="text-gold hover:text-gold-light transition-colors"
                        >
                          (XXX) XXX-XXXX
                        </a>
                        <p className="text-text-muted text-sm mt-1">
                          Available 24/7 — calls and texts get the fastest
                          response
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Instagram DM</p>
                        <a
                          href="https://instagram.com/worldclassexotic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:text-gold-light transition-colors"
                        >
                          @worldclassexotic
                        </a>
                        <p className="text-text-muted text-sm mt-1">
                          DMs are open — send us a message anytime
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Locations</p>
                        <p className="text-text-muted text-sm">
                          Los Angeles, CA
                          <br />
                          San Francisco Bay Area, CA
                        </p>
                        <p className="text-text-muted text-sm mt-1">
                          Delivery available across both regions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Hours</p>
                        <p className="text-text-muted text-sm">
                          Open 7 days a week
                          <br />
                          8:00 AM – 10:00 PM
                        </p>
                        <p className="text-text-muted text-sm mt-1">
                          After-hours requests? Just reach out — we make it work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-dark-card border border-dark-border p-8">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mb-4">
                    PAYMENT METHODS
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {["Zelle", "Credit Card", "Cash"].map((method) => (
                      <div
                        key={method}
                        className="text-center p-4 border border-dark-border"
                      >
                        <p className="text-sm text-white/80">{method}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-text-muted text-sm mt-4">
                    Deposits secured via credit card. Contracts signed digitally
                    with DocuSign.
                  </p>
                </div>
              </div>

              {/* Contact Form (client island) */}
              <div className="bg-dark-card border border-dark-border p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
