import Image from "next/image";

const metrics = [
  {
    value: "72%",
    label: "Lower Carbon Footprint",
    sublabel: "vs. conventional manufacturing",
  },
  { value: "95%", label: "Water Recycled", sublabel: "closed-loop systems" },
  {
    value: "3,200+",
    label: "Fair Wage Jobs",
    sublabel: "across 4 communities",
  },
  {
    value: "100%",
    label: "Renewable Energy",
    sublabel: "solar + wind powered",
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/fabric-rolls.jpg"
                alt="Stacked rolls of organic fabric in earthy natural tones"
                width={600}
                height={800}
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-96"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <Image
                src="/images/garment-detail.jpg"
                alt="Detailed view of a sustainably crafted organic cotton garment"
                width={600}
                height={800}
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-96"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-primary">
              Our Impact
            </span>
            <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Measurable change, not greenwashing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We publish our full environmental and social impact data annually.
              Transparency is not a marketing strategy — it is our operating
              principle.
            </p>

            {/* Metrics */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-l-2 border-primary/30 pl-4"
                >
                  <p className="font-serif text-3xl font-semibold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {metric.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {metric.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
