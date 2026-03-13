import Link from "next/link";
import type { Car } from "@/data/cars";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Link href={`/car/${car.slug}`} className="car-card group block overflow-hidden">
      {/* Image */}
      <div className="relative h-48 sm:h-64 overflow-hidden bg-dark-lighter">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        {/* Placeholder gradient when no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-lighter to-dark-border flex items-center justify-center">
          <span className="text-text-muted text-sm font-[family-name:var(--font-heading)] tracking-widest uppercase">
            {car.brand}
          </span>
        </div>
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-xs font-medium tracking-widest uppercase bg-gold/90 text-black px-3 py-1">
            {car.category}
          </span>
        </div>
        {/* Location Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="text-xs font-medium tracking-widest uppercase bg-white/10 backdrop-blur-sm text-white px-3 py-1 border border-white/20">
            {car.location === "los-angeles" ? "LA" : "Bay Area"}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mb-1 group-hover:text-gold transition-colors">
          {car.name}
        </h3>
        <p className="text-text-muted text-sm mb-4">
          {car.specs.year} · {car.specs.engine} · {car.specs.horsepower}hp
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-gold font-[family-name:var(--font-heading)] text-2xl tracking-wider">
              ${car.dailyRate.toLocaleString()}
            </span>
            <span className="text-text-muted text-sm ml-1">/day</span>
          </div>
          <span className="text-sm text-gold/80 font-medium tracking-wider uppercase group-hover:text-gold transition-colors flex items-center gap-1">
            View Details
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
