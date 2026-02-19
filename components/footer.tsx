import { Linkedin, Instagram, ArrowUp } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  services: [
    { label: "Activewear", href: "#categories" },
    { label: "Denim", href: "#categories" },
    { label: "Outerwear", href: "#categories" },
    { label: "Knitwear", href: "#categories" },
    { label: "Private Label", href: "#categories" },
  ],
  resources: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Technology", href: "#technology" },
    { label: "Global Logistics", href: "#logistics" },
    { label: "Quality Standards", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-bold text-accent-foreground tracking-tight">P</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-primary-foreground">
                Pinnacle Systems
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/55">
              Global apparel manufacturing partner delivering precision, quality, and
              sustainability at scale for the world&apos;s leading brands.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/60 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/40">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/55 transition-colors duration-200 hover:text-accent"
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/35">
            2026 Pinnacle Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-primary-foreground/35 transition-colors hover:text-primary-foreground/60"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-primary-foreground/35 transition-colors hover:text-primary-foreground/60"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-primary-foreground/35 transition-colors hover:text-primary-foreground/60"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/50 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
