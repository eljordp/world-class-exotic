"use client";

import { useRouter } from "next/navigation";

const brandList = [
  "LAMBORGHINI",
  "ROLLS-ROYCE",
  "FERRARI",
  "MCLAREN",
  "MERCEDES-BENZ",
  "PORSCHE",
  "BMW",
  "CADILLAC",
  "CHEVROLET",
];

export default function BrandMarquee() {
  const router = useRouter();

  // Duplicate the list for seamless loop
  const items = [...brandList, ...brandList];

  return (
    <section className="section-dark py-10 sm:py-16 border-t border-dark-border overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-8 sm:gap-14 items-center w-max">
          {items.map((brand, i) => (
            <button
              key={`${brand}-${i}`}
              onClick={() => router.push(`/fleet?brand=${encodeURIComponent(brand)}`)}
              className="font-[family-name:var(--font-heading)] text-lg sm:text-2xl tracking-[0.15em] sm:tracking-[0.25em] text-white/30 hover:text-gold transition-colors duration-300 cursor-pointer whitespace-nowrap shrink-0"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
