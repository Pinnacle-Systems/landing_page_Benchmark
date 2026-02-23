"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Leather",
    description:
      "Timeless, Durable, And Effortlessly Stylish—Leather Remains A Fashion Essential Season After Season.Alongside Premium Leather Craftsmanship From India, We Also Provide High-Quality Leather Production From Bangladesh, Ensuring Versatility And Excellence Across Our Supply Base.Our Range Spans Jackets, Bags, Footwear, And Accessories For Men, Women, And Children, Offering Elevated Design And Enduring Quality Across Every Category.",
  },
  {
    number: "02",
    title: "Footwear",
    description:
      "We Design And Produce A Diverse Range Of Footwear, From Trainers And Boots To Shoes, Sandals, And EVA Flip-Flops And Sliders, Crafted In Premium Leather And PU.With A Focus On Exceptional Comfort, Impeccable Quality, And Perfect Fit, We Deliver Footwear That Combines Style And Performance Across All Segments.",
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

export function LeatherSection() {
  return (
    <section id="leather" className="bg-orange-100 py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Leather
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
