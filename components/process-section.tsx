"use client";

import { motion } from "framer-motion";

const apparels = [
  {
    number: "01",
    title: "Men’s Clothing",
    description:
      "We Specialise In Menswear And Proudly Collaborate With Some Of The Most Recognised Brands Worldwide.Our Expertise Spans Wovens, Denim, Jersey, Sleepwear, And Essentials, Delivering Products For Designer Labels As Well As Global Brand Merchandise.With Strategic Manufacturing Bases In India And Bangladesh, We Are Equipped To Serve All Market Segments, Delivering Comprehensive Solutions That Ensure Smooth, Efficient, And Reliable Retail Delivery Management.",
  },
  {
    number: "02",
    title: "Women’s Clothing",
    description:
      "From Entry-Level Price Points To Premium Boutique Collections, We Offer A Complete Range Of Products. Whether It'S Wovens, Denim, Jersey, Knitwear, Or Occasion Wear, Our Clients Trust Us To Design, Develop, And Deliver The Right Product At The Right Price For Their Market.Our Designers Are Among The Best In The Industry, Bringing Sharp Trend Awareness And Meticulous Attention To Detail While Staying True To Each Brand’S Unique Handwriting.Whether Catering To Plus-Size Or Petite, Basics Or Embellished Designs, We Are Your Dependable Private-Label Clothing Manufacturer For A Complete, End-To-End Solution.",
  },
  {
    number: "03",
    title: "Children’s Clothing",
    description:
      "With Extensive Experience In Childrenswear, We Proudly Partner With Many Globally Recognised And Respected Brands.Our Expertise Spans Newborn To Teen Categories, Supported By A Dedicated Team Of Designers And Product Developers Who Ensure Every Style Meets All Technical Specifications And Adheres To The Required Safety And Legal Standards.This Department Covers A Comprehensive Range Of Products, Including Wovens, Knitwear, Jersey, Essentials And Sleepwear.",
  },
  {
    number: "04",
    title: "Infant Wear",
    description:
      "Our Deep Expertise In Infant Wear Has Allowed Us To Partner With Some Of The Most Globally Recognised And Respected Brands.Our Skilled Team Of Designers And Product Developers Oversees Garments From Newborn Through Teen Sizes, Ensuring Each Piece Complies With The Highest Safety, Technical, And Regulatory Requirements Of Childrenswear.Our Comprehensive Range Spans Wovens, Knitwear, Jersey Essentials, Sleepwear, And Partywear—Crafted To Provide Superior Comfort, Quality, And Style For Every Stage And Occasion.",
  },
];

const homeTextiles = [
  {
    number: "05",
    title: "Home Textiles",
    description:
      "Our Home Textiles Portfolio Features Premium Organic Cotton Products, Including Sheet Sets, Duvets, Shams, And Pillowcases Offered In Thread Counts From 200 To 600, Alongside Plush Towels Ranging From 400 To 800 GSM.Our Capabilities Extend To Jersey Sheet Sets, Duvets, And Shams, Along With Premium Flannel Bedding Collections.In Addition, We Produce Luxurious Robes In Terry, Waffle, And Interlock Constructions, Complemented By An Elegant Selection Of Throws And Blankets Crafted In A Variety Of Refined Weaves.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function ProcessSection() {
  return (
    <section id="process" className="bg-gray-100 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* APPARELS */}

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-14">
          Apparels
        </h2>

        {/* 2 x 2 GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {apparels.map((item, i) => (
            <motion.div
              key={item.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              whileHover={{ y: -6 }}
              className="bg-white p-5 md:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
                {item.number}
              </span>

              <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-3 mb-2">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* HOME TEXTILES */}

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-16 mb-10 md:mb-14">
          Home Textiles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {homeTextiles.map((item, i) => (
            <motion.div
              key={item.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              whileHover={{ y: -6 }}
              className="bg-white p-5 md:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
                {item.number}
              </span>

              <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-3 mb-2">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
