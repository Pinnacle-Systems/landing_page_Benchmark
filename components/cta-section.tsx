"use client";

import { ArrowRight, Mail, Building2, MessageSquare } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left — Content */}
          <div>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-primary">
              Get Started
            </span>
            <h2 className="font-serif text-3xl tracking-tight text-background md:text-4xl lg:text-5xl text-balance">
              Let&apos;s build something better, together
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-background/70">
              Whether you&apos;re launching a new line or transitioning to
              sustainable manufacturing, we&apos;re here to make it happen. Tell
              us about your project and receive a custom proposal within 48
              hours.
            </p>

            {/* Features */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                "Minimum order quantity of just 500 units",
                "Full design-to-delivery service available",
                "Dedicated account manager for every client",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm text-background/70">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl bg-background p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  Thank you!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ll be in touch within 48 hours with a custom proposal.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Cooper"
                      className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 pl-10 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <Building2 className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground/50" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
                  >
                    Work Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@brand.com"
                      className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 pl-10 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground/50" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Describe your garment type, estimated quantity, timeline, and any sustainability requirements..."
                    className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Send Inquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
