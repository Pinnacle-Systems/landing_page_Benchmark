"use client";

import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" strokeWidth={1.5} />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Verdana Textiles
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#process"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Process
          </Link>
          <Link
            href="#certifications"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Certifications
          </Link>
          <Link
            href="#impact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Impact
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="#process"
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Process
            </Link>
            <Link
              href="#certifications"
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Certifications
            </Link>
            <Link
              href="#impact"
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Impact
            </Link>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
