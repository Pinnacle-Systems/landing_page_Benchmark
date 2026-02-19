"use client";

const brands = [
  "Patagonia",
  "Reformation",
  "Eileen Fisher",
  "Stella McCartney",
  "Veja",
  "Organic Basics",
  "People Tree",
  "Kotn",
];

export function BrandsMarquee() {
  return (
    <section className="border-y border-border bg-muted/30 py-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by the world&apos;s most conscious brands
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-12 px-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="whitespace-nowrap text-lg font-semibold text-foreground/20"
            >
              {brand}
            </span>
          ))}
        </div>
        <div
          className="animate-marquee flex shrink-0 items-center gap-12 px-6"
          aria-hidden="true"
        >
          {brands.map((brand) => (
            <span
              key={brand}
              className="whitespace-nowrap text-lg font-semibold text-foreground/20"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
