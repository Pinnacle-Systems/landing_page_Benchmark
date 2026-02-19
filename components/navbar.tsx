"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Categories", href: "#categories" },
  { label: "Technology", href: "#technology" },
  { label: "Logistics", href: "#logistics" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-card border-b border-border"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform duration-200 group-hover:-translate-y-0.5">
            <span className="text-sm font-bold text-primary-foreground tracking-tight">P</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Pinnacle Systems
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground transition-all duration-200 hover:bg-orange-hover hover:-translate-y-0.5 hover:shadow-md"
        >
          Request a Quote
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-orange-hover"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
