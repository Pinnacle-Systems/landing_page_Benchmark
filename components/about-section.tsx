"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="bg-gray-100 text-black py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-32">
        {/* STORY */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          className="text-center  mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-4xl font-bold mb-6"
          >
            The BenchMaark Story
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-lg text-gray-700 leading-relaxed w-full"
          >
            We provide a one-stop solution for all your clothing and product
            sourcing needs, giving you a complete 360° service from design to
            delivery across the entire supply chain. Our experienced teams are
            located across India, Bangladesh, Dubai, Turkey, and the UK,
            offering everything from creative design to efficient global
            shipping.
          </motion.p>
        </motion.div>

        {/* FLEX SECTION */}

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Vision */}

          <motion.div initial="hidden" whileInView="visible" className="flex-1">
            <h3 className="text-3xl font-bold mb-8">Our Vision and Values</h3>

            <div className="space-y-6">
              {[
                "One team, one vision: we can achieve more together",
                "Sustainable and socially responsible: respect for environment, community and economy",
                "Customer centric:The customer is at the heart of all we do",
                "Transparent And Honest In Driving The Success Of The Entire Supply Chain",
                "Innovation And Technology: Committed To The Future Of Supply Chain Management",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-4"
                >
                  <span className="font-bold text-black">■</span>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experts */}

          <motion.div initial="hidden" whileInView="visible" className="flex-1">
            <h3 className="text-3xl font-bold mb-8">We're Experts In</h3>

            <div className="space-y-4">
              {[
                "Solutions for complex supply chains",
                "Bespoke product design",
                "Quick deliveries for speed to market",
                "Adapting to changing market trends",
                "Innovation and technology-driven solutions",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-4"
                >
                  <span className="font-bold text-black">■</span>

                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Culture */}

          <motion.div initial="hidden" whileInView="visible" className="flex-1">
            <h3 className="text-3xl font-bold mb-8">Our People / Culture</h3>

            <div className="space-y-4">
              {[
                "We Pride Ourselves On Our People Powered Culture",
                "We Are A Dynamic, Vibrant And Multicultural Team",
                "Customer Success Is At The Core Of Everything We Do",
                "Taking Business Seriously, Always With A Smile!",
                "Innovation Leads Us, And Teamwork Strengthens Us",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-4"
                >
                  <span className="font-bold text-black">■</span>

                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Promise */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Our Promise To You</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Transparent and flexible services",
              "Attention to detail and quality",
              "Strong relationships through the supply chain that add value",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="border border-gray-300 bg-white p-6 rounded-xl hover:bg-black hover:text-white transition duration-300 shadow-sm hover:shadow-lg"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
