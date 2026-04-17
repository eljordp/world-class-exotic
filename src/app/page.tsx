import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import BrandMarquee from "@/components/BrandMarquee";
import InstagramFeed from "@/components/InstagramFeed";
import { getFeaturedCars } from "@/data/cars";

const services = [
  {
    title: "Drive It Yourself",
    description:
      "Get behind the wheel of your dream car. Full insurance, unlimited miles, and door-to-door delivery.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "Chauffeur Service",
    description:
      "Sit back and enjoy the ride. Professional drivers for any occasion — arrivals, events, and everything in between.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Weddings & Events",
    description:
      "Make your special day unforgettable. Rolls-Royce for the ceremony, Lamborghini for the exit. We handle the logistics.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Airport Transfers",
    description:
      "Arrive in style. We pick you up from LAX, SFO, OAK, or SJC in the luxury vehicle of your choice.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Marcus D.",
    text: "Rented a Rolls-Royce Cullinan for my sister's wedding. The car was spotless, delivery was on time, and the whole experience was world class. Will be back.",
    rating: 5,
  },
  {
    name: "Jason T.",
    text: "Best exotic car rental in LA. The G63 Brabus was insane. Customer service was responsive and professional. These guys are the real deal.",
    rating: 5,
  },
  {
    name: "Priya M.",
    text: "Booked 3 cars for a Saturday funeral procession with very short notice. They made it happen seamlessly. Can't recommend enough.",
    rating: 5,
  },
  {
    name: "Alex R.",
    text: "The Huracán EVO Spyder was pristine. The whole process from DM to driving off was smooth. Already planning my next rental.",
    rating: 5,
  },
];

const stats = [
  { value: "20+", label: "Luxury Vehicles" },
  { value: "3", label: "Locations" },
  { value: "1000+", label: "Happy Clients" },
  { value: "24/7", label: "Availability" },
];

export default function Home() {
  const featuredCars = getFeaturedCars();

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Static hero image (always visible) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
          {/* Video overlay — plays on top of image */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay to darken */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 hero-gradient" />
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex flex-col items-center">
              {/* Hero Copy */}
              <div className="text-center">
                <div className="gold-line mx-auto mb-6 sm:mb-8" />
                <p className="text-gold font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 sm:mb-6">
                  Los Angeles · Miami · Bay Area
                </p>
                <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl md:text-8xl lg:text-8xl tracking-wider leading-none mb-4 sm:mb-6">
                  WORLD CLASS
                  <br />
                  <span className="text-gradient-gold">EXOTIC</span>
                </h1>
                <p className="text-white/60 text-base sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                  Premium exotic and luxury car rentals. Lamborghini, Rolls-Royce,
                  Ferrari, McLaren, and more. Delivered to your door.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="/fleet" className="btn-gold w-full sm:w-auto">
                    View Our Fleet
                  </Link>
                  <Link href="/booking" className="btn-outline w-full sm:w-auto">
                    Book Now
                  </Link>
                </div>

                {/* Stats */}
                <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-gold tracking-wider">
                        {stat.value}
                      </p>
                      <p className="text-text-muted text-xs sm:text-sm mt-1 tracking-wider uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-gold/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* TRUST BAR */}
        <div className="bg-[#0A0A0A] border-y border-gold/20 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* 1,000+ Happy Clients */}
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-white/80">1,000+ Happy Clients</span>
              </div>
              {/* 20+ Premium Vehicles */}
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM1 3h2l2.5 10h11L19 7H6" />
                </svg>
                <span className="text-sm text-white/80">20+ Premium Vehicles</span>
              </div>
              {/* LA & Bay Area Delivery */}
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/80">LA · Miami · Bay Area Delivery</span>
              </div>
              {/* Same-Day Available */}
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-white/80">Same-Day Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED FLEET */}
        <section className="section-darker py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider mb-4">
                FEATURED <span className="text-gradient-gold">VEHICLES</span>
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                Hand-picked from our fleet. The most requested exotic and luxury
                vehicles in Los Angeles, Miami, and the Bay Area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/fleet" className="btn-outline">
                View All Vehicles
              </Link>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="section-dark py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider mb-4">
                THREE <span className="text-gradient-gold">LOCATIONS</span>
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                Serving Los Angeles, Miami, and the Bay Area with the finest
                exotic and luxury vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/locations/los-angeles"
                className="group relative h-80 overflow-hidden border border-dark-border hover:border-gold transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-dark-lighter" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
                    15+ Vehicles
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl tracking-wider mb-3 group-hover:text-gold transition-colors">
                    LOS ANGELES
                  </h3>
                  <p className="text-text-muted text-sm mb-6">
                    Hollywood, Beverly Hills, Malibu, Downtown LA & more
                  </p>
                  <span className="btn-outline text-sm py-2 px-6">
                    Explore LA Fleet
                  </span>
                </div>
              </Link>

              <Link
                href="/locations/miami"
                className="group relative h-80 overflow-hidden border border-dark-border hover:border-gold transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-dark-lighter" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
                    6 Vehicles
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl tracking-wider mb-3 group-hover:text-gold transition-colors">
                    MIAMI
                  </h3>
                  <p className="text-text-muted text-sm mb-6">
                    South Beach, Brickell, Wynwood, Coral Gables & more
                  </p>
                  <span className="btn-outline text-sm py-2 px-6">
                    Explore Miami Fleet
                  </span>
                </div>
              </Link>

              <Link
                href="/locations/bay-area"
                className="group relative h-80 overflow-hidden border border-dark-border hover:border-gold transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-dark-card to-dark-lighter" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
                    6 Vehicles
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl tracking-wider mb-3 group-hover:text-gold transition-colors">
                    BAY AREA
                  </h3>
                  <p className="text-text-muted text-sm mb-6">
                    San Francisco, Oakland, San Jose, Silicon Valley & more
                  </p>
                  <span className="btn-outline text-sm py-2 px-6">
                    Explore Bay Area Fleet
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-darker py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider mb-4">
                OUR <span className="text-gradient-gold">SERVICES</span>
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                More than just car rentals. We provide a complete luxury
                experience for every occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-dark-card border border-dark-border p-8 hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section-dark py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="gold-line mb-6" />
                <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider mb-6">
                  WHY <span className="text-gradient-gold">WORLD CLASS?</span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Same-Day Delivery",
                      desc: "Need a car today? We can make it happen. Door-to-door delivery across LA and the Bay Area.",
                    },
                    {
                      title: "Pristine Fleet",
                      desc: "Every vehicle is detailed and inspected before each rental. We don't cut corners.",
                    },
                    {
                      title: "Flexible Booking",
                      desc: "Pay with Zelle, card, or cash. Secure your booking with a deposit and sign digitally with DocuSign.",
                    },
                    {
                      title: "24/7 Support",
                      desc: "Call, text, or DM us anytime. We respond fast and handle everything personally.",
                    },
                    {
                      title: "Event Specialists",
                      desc: "3 cars for a Saturday funeral? A fleet for a wedding? We've done it all and we make it seamless.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 mt-1">
                        <svg
                          className="w-6 h-6 text-gold"
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
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-text-muted text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-dark-card border border-dark-border p-6 sm:p-10">
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl tracking-wider mb-2">
                    READY TO RIDE?
                  </h3>
                  <p className="text-text-muted mb-8">
                    Contact us to reserve your vehicle. Same-day bookings
                    available.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+1XXXXXXXXXX"
                      className="btn-gold w-full block text-center"
                    >
                      Call or Text Us
                    </a>
                    <Link
                      href="/booking"
                      className="btn-outline w-full block text-center"
                    >
                      Book Online
                    </Link>
                    <a
                      href="https://instagram.com/worldclassexotic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full block text-center"
                    >
                      DM Us on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-darker py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl tracking-wider mb-4">
                WHAT CLIENTS{" "}
                <span className="text-gradient-gold">SAY</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-dark-card border border-dark-border p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-gold font-medium">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <InstagramFeed />

        {/* BRANDS — Looping Marquee */}
        <BrandMarquee />
      </main>
      <Footer />
    </>
  );
}
