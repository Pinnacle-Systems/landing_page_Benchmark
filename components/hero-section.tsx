import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 lg:grid-cols-2">
        {/* Left — Image */}
        <div className="relative h-[50vh] overflow-hidden lg:h-auto">
          <Image
            src="/images/hero-cotton.jpg"
            alt="Macro close-up of organic cotton fibers showing natural texture"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle overlay for text contrast on mobile */}
          <div className="absolute inset-0 bg-foreground/5 lg:bg-transparent" />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-accent px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              Certified Organic Manufacturing
            </span>

            {/* Headline */}
            <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-balance">
                Garments crafted with purpose, not compromise
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              From seed to stitch, every thread tells a story of sustainability.
              We partner with the world&apos;s most conscious brands to produce
              garments that honor both people and planet.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
              >
                Our Process
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground lg:text-4xl">
                  12M+
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  Garments Produced
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground lg:text-4xl">
                  98%
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  Organic Materials
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground lg:text-4xl">
                  0
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  Waste to Landfill
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
