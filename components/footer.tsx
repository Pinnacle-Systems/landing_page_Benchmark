import { Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  services: [
    { label: "Activewear", href: "#services" },
    { label: "Denim", href: "#services" },
    { label: "Outerwear", href: "#services" },
    { label: "Knitwear", href: "#services" },
  ],
  resources: [
    { label: "Process", href: "#process" },
    { label: "Global Facilities", href: "#global" },
    { label: "Quality Standards", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">P</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-background">
                Pinnacle Systems
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-background/60">
              Global apparel manufacturing partner delivering precision, quality, and sustainability at scale for the world&apos;s leading brands.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 text-background/70 transition-colors hover:bg-background/20 hover:text-background"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 text-background/70 transition-colors hover:bg-background/20 hover:text-background"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/40">
            2026 Pinnacle Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-background/40 hover:text-background/60">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-background/60">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-background/60">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
