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
    label: "Sustainable Materials",
    description:
      "Explore a wide range of sustainable materials including organic cotton, recycled polyester, hemp, bamboo, and eco-friendly finishes.",
  },
  {
    icon: Sun,
    value: "90%+",
    label: "Sustainability At Benchmaark",
    description:
      "We promote responsible fashion by supplying sustainable products globally and introducing eco-friendly initiatives.",
  },
  {
    icon: FlaskConical,
    value: "100%",
    label: "Sustainable Clothing",
    description: "Our sustainable cotton and viscose are eco-friendly, with upcycling initiatives and eco-certified finishes.",
  },
  {
    icon: Recycle,
    value: "80%",
    label: "Sustainable Fashion At Benchmaark",
    description: "We collaborate with leading sustainable viscose producers, including ECOVERO and LIVAECO, providing traceable, eco-friendly fabrics.",
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
    <section id="sustainability" className="bg-orange-100 py-24 lg:py-32">
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
              Our Commitment
              <br />
              to Sustainability
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
              At Benchmaark, Sustainability Is At The Core Of Everything We Do.
              We Offer A Diverse Range Of Eco-Friendly And Responsibly Sourced
              Fabric Options Across All Product Divisions. Our Commitment To
              Sustainable Fashion Includes Materials That Reduce Environmental
              Impact While Maintaining The Highest Quality And Durability. From
              Organic Cotton And Recycled Polyester To Innovative Fabrics Like
              Tencel And Hemp, We Provide Sustainable Solutions That Cater To
              The Growing Demand For Ethical And Conscious Fashion. Explore Our
              Collection Of Sustainable Fabrics Designed To Support A Greener
              And More Responsible Future.
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
            className="flex flex-col gap-4 mt-12"
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                variants={metricVariants}
                custom={i}
                whileHover={{ x: -6, transition: { duration: 0.2 } }}
                className="bg-orange-50 flex items-start gap-5 rounded-sm border border-border  p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                  <metric.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    {/* <span className="font-serif text-2xl font-bold text-card-foreground">
                      {metric.value}
                    </span> */}
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
