"use client";
import { WhoWeAreSection } from "@/components/who-we-are-section";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <Image
          src="/images/hero-textile.jpg"
          alt="Premium textile fabric close-up"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/75" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/60"
          >
            Innovation in Every Thread
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className=" text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance"
          >
            Lets Brands Focus On Sales
            <br />
            Benchmaark Takes Care of Everything Else{" "}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 text-pretty"
          >
            Leading supplier of sustainable fashion innovation. We provide full
            services from concept and design to production and global logistics.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-primary-foreground/50 transition-colors hover:text-primary-foreground/80"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div> */}
        {/* Who we are bottom content */}
      </section>
      <WhoWeAreSection />
    </>
  );
}
