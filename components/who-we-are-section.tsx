"use client";

import { motion } from "framer-motion";

export function WhoWeAreSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Small title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500"
        >
          Who we are
        </motion.p>

        {/* Main title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4  text-3xl font-bold text-gray-900 md:text-4xl"
        >
          Let Brands Focus on Sales. Benchmaark Takes Care of Everything Else.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-gray-600 leading-relaxed"
        >
          A team of young and passionate professionals serving global brands and
          retailers to build and grow their businesses by leveraging our global
          exposure, techno-commercial expertise, market intelligence, and the
          support of cutting-edge technologies.
        </motion.p>

        {/* Features */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex h-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg hover:-translate-y-1 hover:border-black">
            <p className="text-sm font-semibold text-gray-900">
              Leveraging Global Exposure
            </p>
          </div>

          <div className="flex h-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg hover:-translate-y-1 hover:border-black">
            <p className="text-sm font-semibold text-gray-900">
              Techno Commercial Expertise
            </p>
          </div>

          <div className="flex h-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg hover:-translate-y-1 hover:border-black">
            <p className="text-sm font-semibold text-gray-900">
              Market Intelligence
            </p>
          </div>

          <div className="flex h-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg hover:-translate-y-1 hover:border-black">
            <p className="text-sm font-semibold text-gray-900">
              Cutting Edge Technology
            </p>
          </div>
        </div>
        {/* Why BenchMaark Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          {/* Title */}
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Why BenchMaark
          </p>

          <h3 className="mt-4  text-3xl font-bold text-gray-900 md:text-4xl">
            Complete Product & Supply Chain Expertise
          </h3>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-gray-600 leading-relaxed">
            We are experienced in meeting our customers' full product and supply
            chain needs, from design to delivery. We have been providing a
            versatile and transparent service to customers for over 10 years and
            pride ourselves on delivering the best possible service in
            everything we do.
          </p>

          {/* Points Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "One Stop Solution Provider",
              "International Exposure",
              "Evolving & Adaptive Team",
              "Research & Design Support",
              "Integrity, Trust & Ethics",
              "Enriched Trade Knowledge",
              "Hassle Free Supply Chain Management",
              "Smooth SupplyChain Integration",
            ].map((item, i) => (
              <div
                key={i}
                className="flex h-full min-h-[140px] items-center justify-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-black"
              >
                <p className="text-sm font-semibold text-gray-900 leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
