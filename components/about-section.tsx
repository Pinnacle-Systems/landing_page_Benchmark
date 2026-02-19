"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "2005", label: "Established" },
  { value: "500+", label: "Team Members" },
  { value: "30+", label: "Global Clients" },
  { value: "6", label: "International Offices" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent"
          >
            Who We Are
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance"
          >
            Recognized as the No. 1<br />
            Innovators in Circular Knit
          </motion.h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <Image
              src="/images/about-factory.jpg"
              alt="Modern textile manufacturing facility"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text + Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              We are a fast-growing organization led by experienced partners and
              skilled professionals for the production of all types of knitted
              garments. From perfecting circular knit fabrics, we have evolved
              into leading suppliers, continuously developing new fabrics,
              finishes, and products tailored to our clients&apos; needs.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-lg leading-relaxed text-muted-foreground"
            >
              Our commitment to quality, reliability, and sustainability drives
              every decision we make, ensuring we deliver exceptional value from
              concept to final product.
            </motion.p>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i + 2}
                  className="border-l-2 border-accent pl-4"
                >
                  <p className="font-serif text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
