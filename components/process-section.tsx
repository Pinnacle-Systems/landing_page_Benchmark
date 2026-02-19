"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Design & Sketch",
    description:
      "Crafting innovative designs with trend research, mood boards, and detailed technical sketches tailored to your brand.",
  },
  {
    number: "02",
    title: "Fabric Development",
    description:
      "Developing premium fabrics from fiber to yarn with sustainable methods and cutting-edge textile technology.",
  },
  {
    number: "03",
    title: "Sample Making",
    description:
      "Creating precise fabric samples and prototypes to match design specifications with complete accuracy.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Expert manufacturing with advanced machinery, skilled artisans, and rigorous quality controls at every step.",
  },
  {
    number: "05",
    title: "Quality & Delivery",
    description:
      "Thorough inspection to guarantee exceptional standards, followed by polished finishing, packing, and global logistics.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ProcessSection() {
  return (
    <section id="process" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our Process
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            From Concept to Collection
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                custom={i}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group flex gap-6 rounded-sm border border-border bg-card p-6 transition-colors hover:border-accent/40"
              >
                <span className="font-serif text-4xl font-bold text-accent/30 transition-colors group-hover:text-accent">
                  {step.number}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Side image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden overflow-hidden rounded-sm lg:block"
          >
            <Image
              src="/images/design-studio.jpg"
              alt="Fashion design studio workspace"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
