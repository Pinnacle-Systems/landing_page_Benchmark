"use client";

import { Sprout, Factory, Scissors, PackageCheck, Truck } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: Sprout,
    title: "Sourcing",
    description:
      "We partner directly with certified organic farms in India and Turkey, ensuring fair wages and regenerative agricultural practices from the first seed.",
  },
  {
    number: "02",
    icon: Factory,
    title: "Spinning & Weaving",
    description:
      "Raw fibers are processed in our solar-powered facilities using closed-loop water systems that recycle 95% of all water used in production.",
  },
  {
    number: "03",
    icon: Scissors,
    title: "Cutting & Sewing",
    description:
      "Precision pattern-making minimizes material waste while our skilled artisans bring each design to life with meticulous craftsmanship.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Quality & Compliance",
    description:
      "Every batch undergoes rigorous testing for durability, colorfastness, and chemical safety before earning our seal of approval.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Packaging & Delivery",
    description:
      "Carbon-neutral shipping in 100% compostable packaging, with full traceability from origin to doorstep via our digital supply-chain platform.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-primary">
            Seed to Stitch
          </span>
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Transparent from field to finished garment
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Follow the journey of every garment we create — every step visible,
            every choice intentional.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative mb-12 flex flex-col gap-6 last:mb-0 md:flex-row md:items-start ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div
                  className={`flex-1 ${
                    idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md">
                    <div
                      className={`flex items-center gap-3 ${
                        idx % 2 === 0
                          ? "md:flex-row-reverse md:justify-start"
                          : ""
                      }`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                        <step.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-6 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block" />

                {/* Spacer */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Process image */}
        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-3xl">
          <Image
            src="/images/process-weaving.jpg"
            alt="Artisan carefully weaving organic cotton on a traditional loom"
            width={1200}
            height={600}
            className="h-64 w-full object-cover md:h-96"
          />
        </div>
      </div>
    </section>
  );
}
