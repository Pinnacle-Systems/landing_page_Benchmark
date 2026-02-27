"use client";

import { motion } from "framer-motion";
import Logo from "../public/images/bmlogo.png";
import Image from "next/image";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Product Divisions", href: "#apparels" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Contact", href: "#contact" },
  ],

  Connect: [
    { label: "info@benchmaark.co.in", href: "#contact" },
    { label: "info@benchmaark.co.in", href: "#" },
    { label: "No 54/1 - First Floor, KPN colony 3rd Street, Tirupur-641 601",  },
  ],
};

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
      className="border-t border-border bg-primary py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 capitalize">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <nav>
              <a href="#home" className="flex items-center gap-2">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="h-20 bg-white w-auto"
                  priority
                />
              </a>
            </nav>

            <p className="mt-4  text-sm leading-relaxed text-primary-foreground/50">
              A Team Of Young And Passionate Professionals Serving Global Brands
              And Retailers To Build And Grow Their Businesses By Leveraging Our
              Global Exposure, Techno-Commercial Expertise, Market Intelligence,
              And The Support Of Cutting-Edge Technologies.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/40 transition-colors hover:text-primary-foreground/70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/30">
             Copyright © 2024. Pinnacle Systems
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-primary-foreground/30 hover:text-primary-foreground/50"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-primary-foreground/30 hover:text-primary-foreground/50"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
