"use client";

import { ShieldCheck, Handshake, Recycle, Droplets } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    name: "GOTS Certified",
    label: "Global Organic Textile Standard",
    description:
      "Our entire supply chain meets the highest international standards for organic fiber processing, including ecological and social criteria.",
  },
  {
    icon: Handshake,
    name: "Fair Trade",
    label: "Fair Trade Certified",
    description:
      "Every worker in our facility earns a living wage with safe working conditions, community premiums, and transparent governance.",
  },
  {
    icon: Recycle,
    name: "Zero Waste",
    label: "Zero Waste to Landfill",
    description:
      "100% of production waste is recycled, upcycled, or composted. We have achieved verified zero-waste-to-landfill certification since 2021.",
  },
  {
    icon: Droplets,
    name: "OEKO-TEX",
    label: "Standard 100 by OEKO-TEX",
    description:
      "Every product is tested for harmful substances and certified safe for human ecology, exceeding regulatory requirements worldwide.",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-primary">
            Trust & Transparency
          </span>
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Certified at every step
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our certifications are not just badges — they are commitments woven
            into every garment we produce.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                <cert.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {cert.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                {cert.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>

              {/* Subtle accent corner */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-300 group-hover:scale-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
