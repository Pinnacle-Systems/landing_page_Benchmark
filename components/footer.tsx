import { Leaf } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <span className="text-base font-semibold text-foreground">
                Verdana Textiles
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sustainable garment manufacturing rooted in transparency, fair
              trade, and organic integrity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Company
            </h4>
            <nav className="mt-4 flex flex-col gap-2.5">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About Us
              </Link>
              <Link
                href="#process"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Our Process
              </Link>
              <Link
                href="#impact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Impact Report
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Careers
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Services
            </h4>
            <nav className="mt-4 flex flex-col gap-2.5">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Private Label
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Custom Development
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Fabric Sourcing
              </Link>
              <Link
                href="#certifications"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Certifications
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Connect
            </h4>
            <nav className="mt-4 flex flex-col gap-2.5">
              <Link
                href="#contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Request a Quote
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </Link>
              <Link
                href="mailto:hello@verdanatextiles.com"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                hello@verdanatextiles.com
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Verdana Textiles. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Sustainability Report
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
