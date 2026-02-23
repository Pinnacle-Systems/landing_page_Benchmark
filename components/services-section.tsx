// "use client";

// import {
//   Layers,
//   Paintbrush,
//   Scissors,
//   ShieldCheck,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     icon: Layers,
//     title: "Fabric Sourcing",
//     description:
//       "We offer trend-based fabric development, access to global mills in India and Bangladesh, cost-effective material options, and fabric quality monitoring. Our optimized supply chain ensures seamless production flow and high-quality materials at the best prices.",
//   },
//   {
//     icon: Paintbrush,
//     title: "Product Design And Development",
//     description:
//       "We offer bespoke design solutions for our global customer base. Our design teams specialize in all product levels, and we are capable of creating new ranges or following your existing designs. Our developers work closely with supply partners to ensure smooth sampling, orders, and production.",
//   },
//   {
//     icon: Scissors,
//     title: "Apparel Sourcing",
//     description:
//       "We streamline sourcing by boosting efficiency, ensuring quality, and cutting costs. Leveraging our global network, we connect you with top manufacturers to deliver superior products. Committed to ethical, sustainable practices, we meet consumer demands while securing competitive prices without compromising quality. By tracking market trends, we help brands stay competitive and profitable, ensuring top manufacturing standards.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Quality Assurance",
//     description:
//       "Our full time Quality Assurance teams in India and Bangladesh rigorously and meticulously oversee every stage of quality, beginning from the ex-mill fabric. Through continuous monitoring and comprehensive inspections at each critical checkpoint from fabric development and processing through to final export we ensure that every product consistently meets the highest standards of excellence and adheres to all required specifications.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, delay: i * 0.1 },
//   }),
// };

// export function ServicesSection() {
//   return (
//     <section id="services" className="bg-white py-24">

//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mb-16"
//         >

//           <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
//             We’re experts in:
//           </p>

//           <h2 className="text-4xl font-bold text-black mb-6">
//             Fabric and Garments Sourcing Excellence
//           </h2>

//           <p className="max-w-3xl text-gray-600 leading-relaxed">
//             We are a leading fabric and garments sourcing unit, providing expert
//             services in product sourcing, development, and quality assurance,
//             driving positive business growth.
//             <br /><br />
//             With over 20 years of industry experience, Benchmaark is equipped to
//             deliver unmatched service and exceptional value, ensuring reliability
//             and excellence in every partnership.
//           </p>

//         </motion.div>

//         {/* Cards */}

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           className="grid gap-8 md:grid-cols-2"
//         >

//           {services.map((service, i) => (

//             <motion.div
//               key={service.title}
//               variants={cardVariants}
//               custom={i}
//               whileHover={{ y: -6 }}
//               className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
//             >

//               <service.icon className="mb-5 h-8 w-8 text-black" />

//               <h3 className="mb-4 text-2xl font-semibold text-black">
//                 {service.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed text-justify">
//                 {service.description}
//               </p>

//             </motion.div>

//           ))}

//         </motion.div>

//       </div>

//     </section>
//   );
// }

"use client";

import Image from "next/image";
import {
  Layers,
  Paintbrush,
  Scissors,
  Globe,
  Truck,
  Camera,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Layers,
    title: "Fabric Sourcing",
    description:
      "We offer trend-based fabric development, access to global mills in India and Bangladesh, cost-effective material options, and fabric quality monitoring. Our optimized supply chain ensures seamless production flow and high-quality materials at the best prices.",
  },
  {
    icon: Paintbrush,
    title: "Product Design And Development",
    description:
      "We offer bespoke design solutions for our global customer base. Our design teams specialize in all product levels, and we are capable of creating new ranges or following your existing designs. Our developers work closely with supply partners to ensure smooth sampling, orders, and production.",
  },
  {
    icon: Scissors,
    title: "Apparel Sourcing",
    description:
      "We streamline sourcing by boosting efficiency, ensuring quality, and cutting costs. Leveraging our global network, we connect you with top manufacturers to deliver superior products. Committed to ethical, sustainable practices, we meet consumer demands while securing competitive prices without compromising quality. By tracking market trends, we help brands stay competitive and profitable, ensuring top manufacturing standards.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Our full time Quality Assurance teams in India and Bangladesh rigorously and meticulously oversee every stage of quality, beginning from the ex-mill fabric. Through continuous monitoring and comprehensive inspections at each critical checkpoint from fabric development and processing through to final export we ensure that every product consistently meets the highest standards of excellence and adheres to all required specifications.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#fff7ed] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-black">
            We’re experts in
          </p>
          <h2 className="text-4xl font-bold text-black mb-6">
            Fabric and Garments Sourcing Excellence
          </h2>
          <p className="mx-auto mt-4 text-lg text-black">
            We Are A Leading Fabric And Garments Sourcing Unit, Providing Expert
            Services In Product Sourcing, Development, And Quality Assurance,
            Driving Positive Business Growth. With Over 20 Years Of Industry
            Experience, Benchmaark Is Equipped To Deliver Unmatched Service And
            Exceptional Value, Ensuring Reliability And Excellence In Every
            Partnership.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-sm border border-orange-200 bg-orange-50 p-8 transition-colors hover:bg-orange-foreground/10"
            >
              <service.icon className="mb-5 h-8 w-8 text-accent" />
              <h3 className="mb-3 text-lg font-semibold text-black">
                {service?.title}
              </h3>
              <p className="text-sm leading-relaxed text-black">
                {service?.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 overflow-hidden rounded-sm"
        >
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/fabric-detail.jpg"
              alt="Premium fabric swatches in earthy tones"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
