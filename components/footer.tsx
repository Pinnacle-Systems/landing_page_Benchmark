"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Careers", href: "#" },
  ],
  Services: [
    { label: "Fabrics", href: "#services" },
    { label: "Design", href: "#services" },
    { label: "Sourcing", href: "#services" },
    { label: "Logistics", href: "#services" },
  ],
  Connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Digital Showroom", href: "#" },
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl font-bold text-primary-foreground">
              MERIDIAN
            </span>
            <span className="ml-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Textiles
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/50">
              Leading supplier of sustainable fashion innovation, providing
              full-service solutions from concept to collection.
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
            {new Date().getFullYear()} Meridian Textiles. All rights reserved.
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
