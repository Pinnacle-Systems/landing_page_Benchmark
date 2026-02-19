"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  { city: "Tiruppur", country: "India", role: "Headquarters & Production" },
  { city: "Istanbul", country: "Turkey", role: "Production & Sourcing" },
  { city: "Dhaka", country: "Bangladesh", role: "Production & QC" },
  { city: "Hamburg", country: "Germany", role: "Design & Sales" },
  { city: "Amsterdam", country: "Netherlands", role: "European Sales" },
  { city: "Hong Kong", country: "China", role: "Asian Operations" },
];

const clients = [
  "Premium European Brands",
  "Global Retail Chains",
  "Luxury Fashion Houses",
  "Sustainable Lifestyle Brands",
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function GlobalSection() {
  return (
    <section id="global" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Where We Are
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
            A Global Presence,
            <br />A Local Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/60">
            Explore our international offices to see where we&apos;re making a
            global impact, backed by strong, loyal partnerships.
          </p>
        </motion.div>

        {/* Office grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              variants={cardVariants}
              custom={i}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex items-start gap-4 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-colors hover:bg-primary-foreground/10"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground">
                  {office.city}
                  <span className="ml-2 text-sm font-normal text-primary-foreground/50">
                    {office.country}
                  </span>
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/50">
                  {office.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clients banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-8 lg:p-12"
        >
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/40">
            Trusted by Leading Brands Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/30"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
