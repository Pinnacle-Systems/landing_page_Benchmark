"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Leather",
    slug: "leather-1",
    image: "/leather/leather-1.jpg",
    description:
      "Timeless, Durable, And Effortlessly Stylish—Leather Remains A Fashion Essential Season After Season. Alongside Premium Leather Craftsmanship From India, We Also Provide High-Quality Leather Production From Bangladesh, Ensuring Versatility And Excellence Across Our Supply Base. Our Range Spans Jackets, Bags, Footwear, And Accessories For Men, Women, And Children, Offering Elevated Design And Enduring Quality Across Every Category.",
  },
  {
    number: "02",
    title: "Footwear",
    slug: "leather-2",
    image: "/leather/leather-1.jpg",
    description:
      "We Design And Produce A Diverse Range Of Footwear, From Trainers And Boots To Shoes, Sandals, And EVA Flip-Flops And Sliders, Crafted In Premium Leather And PU. With A Focus On Exceptional Comfort, Impeccable Quality, And Perfect Fit, We Deliver Footwear That Combines Style And Performance Across All Segments.",
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
    <section id="leather" className="bg-[#fff7ed] py-24 lg:py-40 capitalize">
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
                className="justalign group flex h-full gap-6 rounded-sm border border-border bg-orange-50 p-6 transition-colors hover:border-accent/40"
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
            className="hidden lg:flex flex-col gap-6"
          >
            <div className="hidden lg:flex flex-col gap-6">
              <Link href="/leathers/leather-1" className="relative h-[320px] w-[300px] overflow-hidden rounded-lg group">
                <Image
                  src="/products/leather-1.jpg"
                  alt="Men's Clothing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">View Products</span>
                </div>
              </Link>

              <Link href="/leathers/leather-2" className="relative h-[320px] w-[300px] overflow-hidden rounded-lg group">
                <Image
                  src="/products/leather-2.jpg"
                  alt="Women's Clothing"
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
