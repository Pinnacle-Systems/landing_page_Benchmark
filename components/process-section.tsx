"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const steps = [
  {
    number: "01",
    title: "Men’s Clothing",
    slug: "step-1",
    description:
      "We Specialise In Menswear And Proudly Collaborate With Some Of The Most Recognised Brands Worldwide. Our Expertise Spans Wovens, Denim, Jersey, Sleepwear, And Essentials, Delivering Products For Designer Labels As Well As Global Brand Merchandise. With Strategic Manufacturing Bases In India And Bangladesh, We Are Equipped To Serve All Market Segments, Delivering Comprehensive Solutions That Ensure Smooth, Efficient, And Reliable Retail Delivery Management.",
  },
  {
    number: "02",
    title: "Women’s Clothing",
    slug: "step-2",
    description:
      "From Entry-Level Price Points To Premium Boutique Collections, We Offer A Complete Range Of Products. Whether It's Wovens, Denim, Jersey, Knitwear, Or Occasion Wear, Our Clients Trust Us To Design, Develop, And Deliver The Right Product At The Right Price For Their Market. Our Designers Are Among The Best In The Industry, Bringing Sharp Trend Awareness And Meticulous Attention To Detail While Staying True To Each Brand’s Unique Handwriting. Whether Catering To Plus-Size Or Petite, Basics Or Embellished Designs, We Are Your Dependable Private-Label Clothing Manufacturer For A Complete, End-To-End Solution.",
  },
  {
    number: "03",
    title: "Children’s Clothing",
    slug: "step-3",
    description:
      "With Extensive Experience In Childrenswear, We Proudly Partner With Many Globally Recognised And Respected Brands. Our Expertise Spans Newborn To Teen Categories, Supported By A Dedicated Team Of Designers And Product Developers Who Ensure Every Style Meets All Technical Specifications And Adheres To The Required Safety And Legal Standards. This Department Covers A Comprehensive Range Of Products, Including Wovens, Knitwear, Jersey, Essentials And Sleepwear.",
  },
  {
    number: "04",
    title: "Infant Wear",
    slug: "step-4",
    description:
      "Our Deep Expertise In Infant Wear Has Allowed Us To Partner With Some Of The Most Globally Recognised And Respected Brands. Our Skilled Team Of Designers And Product Developers Oversees Garments From Newborn Through Teen Sizes, Ensuring Each Piece Complies With The Highest Safety, Technical, And Regulatory Requirements Of Childrenswear. Our Comprehensive Range Spans Wovens, Knitwear, Jersey Essentials, Sleepwear, And Partywear—Crafted To Provide Superior Comfort, Quality, And Style For Every Stage And Occasion.",
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
    <section id="apparels" className="bg-[#fff7ed] py-24 lg:py-32 capitalize">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our Products
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Apparels
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-6"
          >
            <div className="hidden lg:flex flex-col gap-6">
              <Link href="/products/step-1" className="relative h-[320px] w-[300px] overflow-hidden rounded-lg group">
                <Image
                  src="/products/step-1.jpg"
                  alt="Men's Clothing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">View Products</span>
                </div>
              </Link>

              <Link href="/products/step-2" className="relative h-[320px] w-[300px] overflow-hidden rounded-lg group">
                <Image
                  src="/products/step-2.jpg"
                  alt="Women's Clothing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">View Products</span>
                </div>
              </Link>

              <Link href="/products/step-3" className="relative h-[320px] w-[300px] overflow-hidden rounded-lg group">
                <Image
                  src="/products/step-3.jpg"
                  alt="Children's Clothing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">View Products</span>
                </div>
              </Link>

              <Link href="/products/step-4" className="relative h-[320px] w-[300px] overflow-hidden rounded-lg group">
                <Image
                  src="/products/step-4.jpg"
                  alt="Infant Wear"
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
