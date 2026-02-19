"use client";

import Image from "next/image";
import {
  Droplets,
  Sun,
  FlaskConical,
  Recycle,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  {
    icon: Droplets,
    value: "90-95%",
    label: "Water Recycled",
    description: "Carefully treated and reused through smart technology.",
  },
  {
    icon: Sun,
    value: "90%+",
    label: "Renewable Energy",
    description: "Production powered by solar and wind energy sources.",
  },
  {
    icon: FlaskConical,
    value: "100%",
    label: "Certified Chemicals",
    description: "All chemicals from certified, sustainable sources.",
  },
  {
    icon: Recycle,
    value: "80%",
    label: "Sustainable Fabrics",
    description: "Crafted through eco-conscious, sustainable methods.",
  },
  {
    icon: HeartHandshake,
    value: "Fair",
    label: "Ethical Trade",
    description: "Fair wages, safe conditions, and no child labor.",
  },
];

const metricVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent"
            >
              Sustainability
            </motion.p>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.1 },
                },
              }}
              className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-5xl text-balance"
            >
              Redefining What
              <br />
              Responsible Means
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              Around 80% of our products are made sustainably with green energy.
              We&apos;re constantly redefining sustainability, combining
              eco-friendly practices with innovative design. Our experts work
              closely with customers from the start, creating clothing that
              truly resonates.
            </motion.p>

            {/* Image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, delay: 0.3 },
                },
              }}
              className="mt-8 overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/sustainability.jpg"
                  alt="Solar panels on sustainable manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Metrics cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4"
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                variants={metricVariants}
                custom={i}
                whileHover={{ x: -6, transition: { duration: 0.2 } }}
                className="flex items-start gap-5 rounded-sm border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                  <metric.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl font-bold text-card-foreground">
                      {metric.value}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
