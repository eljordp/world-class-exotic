"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { cars, brands, categories } from "@/data/cars";

export default function FleetPage() {
  return (
    <Suspense>
      <FleetContent />
    </Suspense>
  );
}

function FleetContent() {
  const searchParams = useSearchParams();
  const brandParam = searchParams.get("brand");

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>(brandParam || "all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("price-low");

  // Sync brand filter when URL param changes
  useEffect(() => {
    if (brandParam) {
      // Match case-insensitively against known brands
      const matched = brands.find(
        (b) => b.toUpperCase() === brandParam.toUpperCase()
      );
      setSelectedBrand(matched || "all");
    }
  }, [brandParam]);

  const filteredCars = useMemo(() => {
    let result = [...cars];

    if (selectedCategory !== "all") {
      result = result.filter((c) => c.category === selectedCategory);
    }
    if (selectedBrand !== "all") {
      result = result.filter((c) => c.brand === selectedBrand);
    }
    if (selectedLocation !== "all") {
      result = result.filter((c) => c.location === selectedLocation);
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.dailyRate - b.dailyRate);
        break;
      case "price-high":
        result.sort((a, b) => b.dailyRate - a.dailyRate);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "hp":
        result.sort((a, b) => b.specs.horsepower - a.specs.horsepower);
        break;
    }

    return result;
  }, [selectedCategory, selectedBrand, selectedLocation, sortBy]);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 section-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="gold-line mx-auto mb-6" />
            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl tracking-wider mb-4">
              OUR <span className="text-gradient-gold">FLEET</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              Browse our complete collection of exotic, luxury, and sport
              vehicles. Available for daily rental in Los Angeles, Bay Area, and Miami.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-dark-border bg-dark-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <label className="text-text-muted text-sm">Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-dark border border-dark-border text-white px-4 py-2 text-sm focus:border-gold outline-none"
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div className="flex items-center gap-2">
                <label className="text-text-muted text-sm">Brand:</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-dark border border-dark-border text-white px-4 py-2 text-sm focus:border-gold outline-none"
                >
                  <option value="all">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { value: "all", label: "All Locations" },
                  { value: "los-angeles", label: "Los Angeles" },
                  { value: "miami", label: "Miami" },
                  { value: "bay-area", label: "Bay Area" },
                ].map((loc) => (
                  <button
                    key={loc.value}
                    onClick={() => setSelectedLocation(loc.value)}
                    className={`px-4 py-2 text-sm tracking-widest uppercase border transition-colors duration-200 ${
                      selectedLocation === loc.value
                        ? "border-gold text-gold bg-gold/10"
                        : "border-dark-border text-white/60 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <label className="text-text-muted text-sm">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-dark border border-dark-border text-white px-4 py-2 text-sm focus:border-gold outline-none"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="hp">Horsepower</option>
                </select>
              </div>
            </div>

            <p className="text-text-muted text-sm mt-4">
              Showing {filteredCars.length} vehicle
              {filteredCars.length !== 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-text-muted text-lg">
                  No vehicles match your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedBrand("all");
                    setSelectedLocation("all");
                  }}
                  className="btn-outline mt-4"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
