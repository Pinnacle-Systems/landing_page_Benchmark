
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Home Textiles",
    description:
      "Our Home Textiles Portfolio Features Premium Organic Cotton Products, Including Sheet Sets, Duvets, Shams, And Pillowcases Offered In Thread Counts From 200 To 600, Alongside Plush Towels Ranging From 400 To 800 GSM.Our Capabilities Extend To Jersey Sheet Sets, Duvets, And Shams, Along With Premium Flannel Bedding Collections.In Addition, We Produce Luxurious Robes In Terry, Waffle, And Interlock Constructions, Complemented By An Elegant Selection Of Throws And Blankets Crafted In A Variety Of Refined Weaves.",
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

export function HomeSection() {
  return (
    <section id="home-textiles" className="bg-orange-100 py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
         
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Home Textiles
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
                className="group flex gap-6 rounded-sm border border-border bg-orange-50 p-6 transition-colors hover:border-accent/40"
              >
                <span className=" text-4xl font-bold text-accent/30 transition-colors group-hover:text-accent">
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
