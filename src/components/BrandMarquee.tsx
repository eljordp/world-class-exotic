"use client";

import { useRouter } from "next/navigation";
import { type ReactNode } from "react";

interface BrandItem {
  name: string;
  filterName: string;
  logo: ReactNode;
}

// Simplified, recognizable SVG logos — monochrome white
const brandLogos: BrandItem[] = [
  {
    name: "Lamborghini",
    filterName: "Lamborghini",
    logo: (
      <svg viewBox="0 0 200 40" fill="currentColor" className="h-6 sm:h-8">
        {/* Shield shape with bull silhouette */}
        <path d="M20 2C14 2 8 8 8 16c0 10 12 22 12 22s12-12 12-22c0-8-6-14-12-14zm0 4c1.5 0 3 .5 4 1.5-1 .5-2.5 1-4 1s-3-.5-4-1c1-1 2.5-1.5 4-1.5zm-6 4c1.5 1 3.5 1.5 6 1.5s4.5-.5 6-1.5c.5 1.5.5 3 0 4.5-1.5 1-3.5 1.5-6 1.5s-4.5-.5-6-1.5c-.5-1.5-.5-3 0-4.5z" />
        <text x="44" y="28" fontFamily="var(--font-heading)" fontSize="18" letterSpacing="3">LAMBORGHINI</text>
      </svg>
    ),
  },
  {
    name: "Rolls-Royce",
    filterName: "Rolls-Royce",
    logo: (
      <svg viewBox="0 0 180 40" fill="currentColor" className="h-6 sm:h-8">
        {/* Double R emblem */}
        <rect x="6" y="4" width="28" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="10" y="28" fontFamily="serif" fontSize="22" fontWeight="bold">RR</text>
        <text x="42" y="28" fontFamily="var(--font-heading)" fontSize="17" letterSpacing="2">ROLLS-ROYCE</text>
      </svg>
    ),
  },
  {
    name: "Ferrari",
    filterName: "Ferrari",
    logo: (
      <svg viewBox="0 0 140 40" fill="currentColor" className="h-6 sm:h-8">
        {/* Prancing horse shield */}
        <path d="M16 2l-12 6v16l12 14 12-14V8L16 2zm0 4l8 4v12l-8 10-8-10V10l8-4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 14c1-2 3-4 5-4 1 0 2 1 2 2 0 2-2 3-3 5-1 1 0 3 1 4l-1 1c-2-1-3-3-2-5 0-1 1-2 1-3 0 0-1-1-1 0-1 1-2 2-2 3v-3z" />
        <text x="36" y="28" fontFamily="var(--font-heading)" fontSize="19" letterSpacing="3">FERRARI</text>
      </svg>
    ),
  },
  {
    name: "McLaren",
    filterName: "McLaren",
    logo: (
      <svg viewBox="0 0 150 40" fill="currentColor" className="h-6 sm:h-8">
        {/* Swoosh mark */}
        <path d="M4 28C8 12 16 6 28 6c6 0 10 3 10 3s-8 1-14 8c-4 5-6 11-6 11H4z" />
        <text x="42" y="28" fontFamily="var(--font-heading)" fontSize="18" letterSpacing="3">McLAREN</text>
      </svg>
    ),
  },
  {
    name: "Mercedes-Benz",
    filterName: "Mercedes-Benz",
    logo: (
      <svg viewBox="0 0 200 40" fill="currentColor" className="h-6 sm:h-8">
        {/* Three-pointed star in circle */}
        <circle cx="18" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 6l-10 21h20L18 6zM18 8l3 10h-6l3-10z" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <line x1="18" y1="6" x2="18" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="20" x2="6" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="20" x2="30" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <text x="40" y="28" fontFamily="var(--font-heading)" fontSize="15" letterSpacing="2">MERCEDES-BENZ</text>
      </svg>
    ),
  },
  {
    name: "Porsche",
    filterName: "Porsche",
    logo: (
      <svg viewBox="0 0 140 40" fill="currentColor" className="h-6 sm:h-8">
        {/* Shield crest */}
        <path d="M16 4h-8c-2 0-4 2-4 4v20c0 2 4 8 12 8s12-6 12-8V8c0-2-2-4-4-4h-8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1" />
        <line x1="16" y1="4" x2="16" y2="36" stroke="currentColor" strokeWidth="1" />
        <text x="36" y="28" fontFamily="var(--font-heading)" fontSize="19" letterSpacing="3">PORSCHE</text>
      </svg>
    ),
  },
  {
    name: "BMW",
    filterName: "BMW",
    logo: (
      <svg viewBox="0 0 100 40" fill="currentColor" className="h-6 sm:h-8">
        {/* BMW roundel */}
        <circle cx="18" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="18" y1="6" x2="18" y2="34" stroke="currentColor" strokeWidth="0.8" />
        <line x1="4" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="0.8" />
        <text x="38" y="28" fontFamily="var(--font-heading)" fontSize="20" letterSpacing="3">BMW</text>
      </svg>
    ),
  },
  {
    name: "Cadillac",
    filterName: "Cadillac",
    logo: (
      <svg viewBox="0 0 150 40" fill="currentColor" className="h-6 sm:h-8">
        {/* Cadillac crest */}
        <path d="M16 4L8 10v16l8 10 8-10V10L16 4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="0.8" />
        <line x1="8" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="0.8" />
        <path d="M4 18h-2v4h2M28 18h2v4h-2" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="36" y="28" fontFamily="var(--font-heading)" fontSize="17" letterSpacing="3">CADILLAC</text>
      </svg>
    ),
  },
  {
    name: "Chevrolet",
    filterName: "Chevrolet",
    logo: (
      <svg viewBox="0 0 160 40" fill="currentColor" className="h-6 sm:h-8">
        {/* Bowtie */}
        <path d="M4 14l12 6-12 6V14z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M28 14l-12 6 12 6V14z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="36" y="28" fontFamily="var(--font-heading)" fontSize="16" letterSpacing="2">CHEVROLET</text>
      </svg>
    ),
  },
];

export default function BrandMarquee() {
  const router = useRouter();

  // Duplicate for seamless loop
  const items = [...brandLogos, ...brandLogos];

  return (
    <section className="section-dark py-10 sm:py-16 border-t border-dark-border overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-10 sm:gap-16 items-center w-max">
          {items.map((brand, i) => (
            <button
              key={`${brand.name}-${i}`}
              onClick={() =>
                router.push(
                  `/fleet?brand=${encodeURIComponent(brand.filterName)}`
                )
              }
              className="text-white/25 hover:text-gold transition-colors duration-300 cursor-pointer shrink-0"
              aria-label={`View ${brand.name} fleet`}
            >
              {brand.logo}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
