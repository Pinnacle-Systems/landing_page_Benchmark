// "use client";

// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.1 },
//   }),
// };

// export function AboutSection() {
//   return (
//     <section id="about" className="bg-gray-100 text-black py-24">
//       <div className="mx-auto max-w-7xl px-6 space-y-32">
//         {/* STORY */}

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           className="text-center  mx-auto"
//         >
//           <motion.h2
//             variants={fadeUp}
//             custom={0}
//             className="text-4xl font-bold mb-6"
//           >
//             The BenchMaark Story
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             custom={1}
//             className="text-lg text-gray-700 leading-relaxed w-full"
//           >
//          We Provide A One-Stop Solution For All Your Clothing And Product Sourcing Needs, Giving You A 360° Service From Design To Delivery Across The Complete Supply Chain. Our Experienced Teams Are Located Across India, Bangladesh, Dubai, Turkey And The UK, Offering Everything From Creative Design To Efficient Shipping.
//           </motion.p>
//         </motion.div>

//         {/* FLEX SECTION */}

//         <div className="flex flex-col lg:flex-row gap-16">
//           {/* Vision */}

//           <motion.div initial="hidden" whileInView="visible" className="flex-1">
//             <h3 className="text-3xl font-bold mb-8">Our Vision and Values</h3>

//             <div className="space-y-6">
//               {[
//                 "One team, one vision: we can achieve more together",
//                 "Sustainable and socially responsible: respect for environment, community and economy",
//                 "Customer centric:The customer is at the heart of all we do",
//                 "Transparent And Honest In Driving The Success Of The Entire Supply Chain",
//                 "Innovation And Technology: Committed To The Future Of Supply Chain Management",
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeUp}
//                   custom={i}
//                   className="flex gap-4"
//                 >
//                   <span className="font-bold text-black">■</span>
//                   <p className="text-gray-700">{item}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Experts */}

//           <motion.div initial="hidden" whileInView="visible" className="flex-1">
//             <h3 className="text-3xl font-bold mb-8">We're Experts In</h3>

//             <div className="space-y-4">
//               {[
//                 "Solutions for complex supply chains",
//                 "Bespoke product design",
//                 "Quick deliveries for speed to market",
//                 "Adapting to changing market trends",
//                 "Innovation and technology-driven solutions",
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeUp}
//                   custom={i}
//                   className="flex gap-4"
//                 >
//                   <span className="font-bold text-black">■</span>

//                   <p className="text-gray-700">{item}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Culture */}

//           <motion.div initial="hidden" whileInView="visible" className="flex-1">
//             <h3 className="text-3xl font-bold mb-8">Our People / Culture</h3>

//             <div className="space-y-4">
//               {[
//                 "We Pride Ourselves On Our People Powered Culture",
//                 "We Are A Dynamic, Vibrant And Multicultural Team",
//                 "Customer Success Is At The Core Of Everything We Do",
//                 "Taking Business Seriously, Always With A Smile!",
//                 "Innovation Leads Us, And Teamwork Strengthens Us",
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeUp}
//                   custom={i}
//                   className="flex gap-4"
//                 >
//                   <span className="font-bold text-black">■</span>

//                   <p className="text-gray-700">{item}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Promise */}

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           className="text-center"
//         >
//           <h3 className="text-3xl font-bold mb-8">Our Promise To You</h3>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "Transparent and flexible services",
//               "Attention to detail and quality",
//               "Strong relationships through the supply chain that add value",
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 custom={i}
//                 className="border border-gray-300 bg-white p-6 rounded-xl hover:bg-black hover:text-white transition duration-300 shadow-sm hover:shadow-lg"
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "2005", label: "Established" },
  { value: "500+", label: "Team Members" },
  { value: "30+", label: "Global Clients" },
  { value: "6", label: "International Offices" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="bg-orange-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance"
          >
            The BenchMaark Story{" "}
          </motion.h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <Image
              src="/images/about-factory.jpg"
              alt="Modern textile manufacturing facility"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text + Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              We Provide A One-Stop Solution For All Your Clothing And Product
              Sourcing Needs, Giving You A 360° Service From Design To Delivery
              Across The Complete Supply Chain. Our Experienced Teams Are
              Located Across India, Bangladesh, Dubai, Turkey And The UK,
              Offering Everything From Creative Design To Efficient Shipping.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-lg leading-relaxed text-muted-foreground"
            >
              Our commitment to quality, reliability, and sustainability drives
              every decision we make, ensuring we deliver exceptional value from
              concept to final product.
            </motion.p>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i + 2}
                  className="border-l-2 border-accent pl-4"
                >
                  <p className="font-serif text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* FLEX SECTION */}

        <div className="flex flex-col lg:flex-row gap-16 mt-8">
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
            {" "}
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
                className="group
    flex h-full items-center justify-center
    rounded-xl
    border border-gray-200
    bg-[#9C6237]
    p-6
    text-center
    shadow-sm

    transition-all duration-500 ease-out
    hover:shadow-2xl
    hover:-translate-y-2
    hover:scale-[1.04]"
              >
                <p
                  className="
      text-sm font-semibold
      text-white
      leading-snug

      transition-colors duration-500
    "
                >
                  {item}
                </p>{" "}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
