"use client";

import { useRouter } from "next/navigation";
import { type ReactNode } from "react";

interface BrandItem {
  name: string;
  filterName: string;
  logo: ReactNode;
}

const brandLogos: BrandItem[] = [
  {
    name: "Lamborghini",
    filterName: "Lamborghini",
    logo: (
      <svg viewBox="0 0 240 48" fill="currentColor" className="h-7 sm:h-9">
        {/* Lamborghini shield + bull */}
        <path d="M20 4L6 10v14c0 10 7 18 14 22 7-4 14-12 14-22V10L20 4zm0 3l11 5v12c0 8-5 14-11 18-6-4-11-10-11-18V12l11-5z" />
        {/* Bull silhouette */}
        <path d="M14 17c0-1 .5-2 1.5-2.5 0 1 .5 2 1.5 2.5-1 .5-2 1.5-2 3 0 2 1.5 3 3 3s3-1 3-3c0-1.5-1-2.5-2-3 1-.5 1.5-1.5 1.5-2.5 1 .5 1.5 1.5 1.5 2.5 1 .5 1.5 1.5 1.5 2.5 0 3-2.5 5-5 5s-5-2-5-5c0-1 .5-2 1.5-2.5z" />
        <text x="46" y="33" fontFamily="var(--font-heading), sans-serif" fontSize="17" letterSpacing="4" fontWeight="400">LAMBORGHINI</text>
      </svg>
    ),
  },
  {
    name: "Rolls-Royce",
    filterName: "Rolls-Royce",
    logo: (
      <svg viewBox="0 0 210 48" fill="currentColor" className="h-7 sm:h-9">
        {/* RR badge outer rect */}
        <rect x="4" y="6" width="36" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* R left */}
        <path d="M10 12h8c3 0 5 2 5 4.5S21 21 18 21l6 9h-3.5l-5.5-9H13v9H10V12zm3 3v4h5c1.5 0 2-.8 2-2s-.5-2-2-2h-5z" />
        {/* R right */}
        <path d="M23 12h8c3 0 5 2 5 4.5S34 21 31 21l6 9h-3.5l-5.5-9H26v9H23V12zm3 3v4h5c1.5 0 2-.8 2-2s-.5-2-2-2h-5z" />
        <text x="50" y="33" fontFamily="var(--font-heading), sans-serif" fontSize="16" letterSpacing="3" fontWeight="400">ROLLS-ROYCE</text>
      </svg>
    ),
  },
  {
    name: "Ferrari",
    filterName: "Ferrari",
    logo: (
      <svg viewBox="0 0 160 48" fill="currentColor" className="h-7 sm:h-9">
        {/* Shield outline */}
        <path d="M20 4l-14 7v16c0 9 6 16 14 20 8-4 14-11 14-20V11L20 4zm0 3l11 5.5V27c0 7-5 13-11 16.5C14 40 9 34 9 27V12.5L20 7z" />
        {/* Prancing horse */}
        <path d="M16 15c.5-2 2-3.5 3.5-3.5 0 1.5-.5 3-1.5 4 1 .5 2 1.5 2 3 0 2-1.5 3.5-2 5.5-.5-1.5-.5-3 0-4.5-1-.5-2-1.5-2-2.5 0-.5.5-1.5 1-2.5-.5 0-1 .5-1 .5zm4-1c.5 1 1 2 1 3.5 1-.5 2.5-.5 3 0-.5 1-1.5 1.5-2.5 1.5 1 1 1.5 2.5 1 4-.5-1-1.5-2-2.5-2.5.5 1.5.5 3 0 4.5h-1c-.5-1.5-.5-3 0-4.5-1 .5-2 1.5-2.5 2.5-.5-1.5 0-3 1-4-1 0-2-.5-2.5-1.5.5-.5 2-.5 3 0 0-1.5.5-2.5 1-3.5z" />
        <text x="42" y="33" fontFamily="var(--font-heading), sans-serif" fontSize="18" letterSpacing="4" fontWeight="400">FERRARI</text>
      </svg>
    ),
  },
  {
    name: "McLaren",
    filterName: "McLaren",
    logo: (
      <svg viewBox="0 0 170 48" fill="currentColor" className="h-7 sm:h-9">
        {/* McLaren speedmark — swept wing */}
        <path d="M4 32C8 16 18 8 32 8c8 0 13 3.5 13 3.5S34 13 26 22c-5 6-8 14-8 14H4z" />
        <path d="M21 36c1-4 4-10 8-15 6-7 14-9 14-9s-3 5-6 12c-2 5-3 10-3 12h-13z" opacity="0.4" />
        <text x="50" y="33" fontFamily="var(--font-heading), sans-serif" fontSize="18" letterSpacing="3" fontWeight="400">McLAREN</text>
      </svg>
    ),
  },
  {
    name: "Mercedes-Benz",
    filterName: "Mercedes-Benz",
    logo: (
      <svg viewBox="0 0 225 48" fill="currentColor" className="h-7 sm:h-9">
        {/* Outer circle */}
        <circle cx="22" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Inner circle ring */}
        <circle cx="22" cy="24" r="13" fill="none" stroke="currentColor" strokeWidth="0.75" />
        {/* Three-pointed star */}
        <line x1="22" y1="7" x2="22" y2="24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <line x1="22" y1="24" x2="8" y2="33" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <line x1="22" y1="24" x2="36" y2="33" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        {/* Star tips circle dots */}
        <circle cx="22" cy="7" r="1.5" />
        <circle cx="8" cy="33" r="1.5" />
        <circle cx="36" cy="33" r="1.5" />
        <text x="47" y="33" fontFamily="var(--font-heading), sans-serif" fontSize="14.5" letterSpacing="2.5" fontWeight="400">MERCEDES-BENZ</text>
      </svg>
    ),
  },
  {
    name: "Porsche",
    filterName: "Porsche",
    logo: (
      <svg viewBox="0 0 160 48" fill="currentColor" className="h-7 sm:h-9">
        {/* Outer shield */}
        <path d="M22 4L8 8v20c0 8 6 14 14 18 8-4 14-10 14-18V8L22 4zm0 3l11 3.5v17c0 6.5-5 11-11 14.5C16 38.5 11 34 11 27.5v-17L22 7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Horizontal divider */}
        <line x1="8" y1="22" x2="36" y2="22" stroke="currentColor" strokeWidth="1" />
        {/* Vertical divider */}
        <line x1="22" y1="7" x2="22" y2="42" stroke="currentColor" strokeWidth="1" />
        {/* Stuttgart horse (simplified) */}
        <path d="M15 14c.5-1.5 1.5-2.5 2.5-2.5 0 1-.5 2-1 2.5.5.5 1 1.5 1 2.5 0 1.5-1 2.5-1.5 4-.5-1-.5-2.5 0-3.5-.5-.5-1-1-1-2 0-.5.5-1 .5-1zm4.5-.5c.5.5.5 1.5.5 2.5.5-.5 1.5-.5 2 0-.5.5-1 1-2 1 .5 1 1 2 .5 3-.5-.5-1-1.5-1.5-2 .5 1.5.5 2.5 0 3.5h-1c-.5-1-.5-2 0-3.5-.5.5-1 1.5-1.5 2-.5-1 0-2 .5-3-.5 0-1.5-.5-2-1 .5-.5 1.5-.5 2 0 0-1 0-2 .5-2.5z" />
        <text x="44" y="33" fontFamily="var(--font-heading), sans-serif" fontSize="18" letterSpacing="4" fontWeight="400">PORSCHE</text>
      </svg>
    ),
  },
  {
    name: "BMW",
    filterName: "BMW",
    logo: (
      <svg viewBox="0 0 120 48" fill="currentColor" className="h-7 sm:h-9">
        {/* Outer ring */}
        <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Inner ring */}
        <circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
        {/* Vertical split */}
        <line x1="24" y1="5" x2="24" y2="43" stroke="currentColor" strokeWidth="1" />
        {/* Horizontal split */}
        <line x1="5" y1="24" x2="43" y2="24" stroke="currentColor" strokeWidth="1" />
        {/* Top-left quadrant filled (blue in real logo) */}
        <path d="M10 24A14 14 0 0124 10v14H10z" opacity="0.6" />
        {/* Bottom-right quadrant filled */}
        <path d="M38 24A14 14 0 0124 38V24h14z" opacity="0.6" />
        <text x="52" y="31" fontFamily="var(--font-heading), sans-serif" fontSize="21" letterSpacing="4" fontWeight="400">BMW</text>
      </svg>
    ),
  },
  {
    name: "Cadillac",
    filterName: "Cadillac",
    logo: (
      <svg viewBox="0 0 175 48" fill="currentColor" className="h-7 sm:h-9">
        {/* Wreath left */}
        <path d="M8 24c0-8 4-14 8-16-2 4-3 9-3 16s1 12 3 16c-4-2-8-8-8-16z" fill="none" stroke="currentColor" strokeWidth="1.2" />
        {/* Wreath right */}
        <path d="M38 24c0 8-4 14-8 16 2-4 3-9 3-16s-1-12-3-16c4 2 8 8 8 16z" fill="none" stroke="currentColor" strokeWidth="1.2" />
        {/* Crest outer rect */}
        <rect x="12" y="10" width="22" height="28" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Horizontal bands */}
        <line x1="12" y1="18" x2="34" y2="18" stroke="currentColor" strokeWidth="1" />
        <line x1="12" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="12" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="1" />
        {/* Vertical center */}
        <line x1="23" y1="10" x2="23" y2="38" stroke="currentColor" strokeWidth="1" />
        {/* Duck/crest marks top */}
        <path d="M14 11l2 4M20 11l2 4M26 11l2 4M32 11l2 4" stroke="currentColor" strokeWidth="0.75" fill="none" />
        <text x="46" y="33" fontFamily="var(--font-heading), sans-serif" fontSize="17" letterSpacing="3.5" fontWeight="400">CADILLAC</text>
      </svg>
    ),
  },
  {
    name: "Chevrolet",
    filterName: "Chevrolet",
    logo: (
      <svg viewBox="0 0 185 48" fill="currentColor" className="h-7 sm:h-9">
        {/* Bowtie — the actual Chevy shape */}
        <path d="M4 19h16v4H4V19zm0 0v-3l8-3 4 6H4zm0 4v3l8 3 4-6H4z" fill="none" stroke="currentColor" strokeWidth="0" />
        {/* Clean bowtie */}
        <polygon points="4,17 20,17 20,31 4,31" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="26,17 42,17 42,31 26,31" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Center gap */}
        <rect x="19" y="20" width="8" height="8" fill="currentColor" opacity="0" />
        {/* Bowtie wings inward taper */}
        <path d="M4 20h13l3-6-3 0-13 6zm0 8h13l3 6-3 0-13-6z" opacity="0.4" />
        <path d="M42 20H29l-3-6 3 0 13 6zm0 8H29l-3 6 3 0 13-6z" opacity="0.4" />
        <text x="52" y="33" fontFamily="var(--font-heading), sans-serif" fontSize="15.5" letterSpacing="3" fontWeight="400">CHEVROLET</text>
      </svg>
    ),
  },
];

export default function BrandMarquee() {
  const router = useRouter();

  const items = [...brandLogos, ...brandLogos];

  return (
    <section className="section-dark py-10 sm:py-16 border-t border-dark-border overflow-hidden">
      <div className="relative">
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
