"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Home Textiles",
    description:
      "Our Home Textiles Portfolio Features Premium Organic Cotton Products, Including Sheet Sets, Duvets, Shams And Pillowcases Offered In Thread Counts From 20's to 80's , Alongside Plush Towels Ranging From 400 To 800 GSM. Our Capabilities Extend To Jersey Sheet Sets, Duvets And Shams, Along With Premium Flannel Bedding Collections. In Addition, We Produce Luxurious Robes In Terry, Waffle And Interlock Constructions, Complemented By An Elegant Selection Of Throws And Blankets Crafted In A Variety Of Refined Weaves.",
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
    <section
      id="home-textiles"
      className="bg-[#F8F8FF] py-24 lg:py-40 capitalize"
    >
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
                className="justalign group flex h-full gap-6 rounded-sm border border-border bg-white p-6 transition-colors hover:border-accent/40"
              >
                <span className="shrink-0 text-4xl font-bold text-accent/30 transition-colors group-hover:text-accent">
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
            {/* <Link href="/home-products" className="block absolute inset-0 group">
              <Image
                src="/images/design-studio.jpg"
                alt="Fashion design studio workspace"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link> */}
            <div className="hidden lg:flex flex-col gap-6">
              <Link
                href="/home-products/home-1"
                className="relative h-[320px] w-[300px] overflow-hidden rounded-lg group"
              >
                <Image
                  src="/products/homeImage.jpg"
                  alt="Men's Clothing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">View Products</span>
                </div>
              </Link>

           
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
