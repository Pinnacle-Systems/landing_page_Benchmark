"use client";

import Image from "next/image";
import {
  Layers,
  Paintbrush,
  Scissors,
  Globe,
  Truck,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Layers,
    title: "Fabrics",
    description:
      "We develop fabrics from fiber to yarn, achieving the highest quality, like the world's best recycled cotton.",
  },
  {
    icon: Paintbrush,
    title: "Design",
    description:
      "Top designers across all our offices, merging modern aesthetics with sustainability for full design service.",
  },
  {
    icon: Scissors,
    title: "Sourcing",
    description:
      "Global reach with local expertise, supported by in-house specialists who source innovative materials.",
  },
  {
    icon: Globe,
    title: "Conception",
    description:
      "Crafting powerful collection concepts and strategically building collections aligned with brand identity.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "We deliver on time with precision and consistency, supported by proactive merchandising and digitalized systems.",
  },
  {
    icon: Camera,
    title: "Photo Studio",
    description:
      "In-house photo studio creates high-quality product images and captivating stills for your brand.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
            Full-Service Fashion Innovation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/60">
            From concept to delivery, we offer a comprehensive range of services
            tailored to bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-8 transition-colors hover:bg-primary-foreground/10"
            >
              <service.icon className="mb-5 h-8 w-8 text-accent" />
              <h3 className="mb-3 text-lg font-semibold text-primary-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/60">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 overflow-hidden rounded-sm"
        >
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/fabric-detail.jpg"
              alt="Premium fabric swatches in earthy tones"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
