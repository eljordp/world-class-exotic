"use client";

// Drop real logo files into /public/logos/ to replace these.
// Naming: lamborghini.png, rolls-royce.png, ferrari.png, mclaren.png,
//         mercedes-benz.png, porsche.png, bmw.png, cadillac.png, chevrolet.png
// Any missing file falls back to the brand name text.

// Supports PNG, JPG, SVG — just match the filename below
const brands = [
  { name: "Lamborghini",   slug: "Lamborghini",   file: "lamborghini.svg" },
  { name: "Rolls-Royce",   slug: "Rolls-Royce",   file: "rolls-royce.svg" },
  { name: "Ferrari",       slug: "Ferrari",        file: "ferrari.svg" },
  { name: "McLaren",       slug: "McLaren",        file: "mclaren.svg" },
  { name: "Mercedes-Benz", slug: "Mercedes-Benz",  file: "mercedes.svg" },
  { name: "Porsche",       slug: "Porsche",        file: "porsche.svg" },
  { name: "BMW",           slug: "BMW",            file: "bmw.svg" },
  { name: "Cadillac",      slug: "Cadillac",       file: "cadillac.svg" },
  { name: "Chevrolet",     slug: "Chevrolet",      file: "chevrolet.svg" },
];

export default function BrandMarquee() {
  const items = [...brands, ...brands];

  return (
    <section className="section-dark py-10 sm:py-16 border-t border-dark-border overflow-hidden">
      <div className="relative group/marquee">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        {/* Pause on hover so clicks register cleanly */}
        <div className="marquee-track flex gap-12 sm:gap-20 items-center w-max group-hover/marquee:[animation-play-state:paused]">
          {items.map((brand, i) => (
            <a
              key={`${brand.name}-${i}`}
              href={`/fleet?brand=${encodeURIComponent(brand.slug)}`}
              className="shrink-0 opacity-25 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-10"
              aria-label={`View ${brand.name} fleet`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/logos/${brand.file}`}
                alt={brand.name}
                className="h-7 sm:h-9 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  // Fallback: hide broken img, show text
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const span = document.createElement("span");
                  span.textContent = brand.name.toUpperCase();
                  span.className = "font-[family-name:var(--font-heading)] text-white text-xs tracking-widest";
                  el.parentElement?.appendChild(span);
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
