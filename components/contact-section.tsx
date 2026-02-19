"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="contact" className="bg-muted py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Get in Touch
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Scale Your Production?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Whether you need a full production run or an initial consultation, our team is
              ready to help you bring your vision to life.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">partnerships@pinnaclesystems.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+1 (800) 555-0199</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
                  <p className="font-medium text-foreground">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl bg-card p-8 border border-border shadow-sm transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mb-4">
                  <Send className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent</h3>
                <p className="text-muted-foreground">
                  Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      id="name"
                      placeholder="Jane Smith"
                      required
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company
                    </label>
                    <input
                      id="company"
                      placeholder="Your brand"
                      required
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="text-sm font-medium text-foreground">
                    Product Category
                  </label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:border-accent transition-colors"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="activewear">Activewear</option>
                    <option value="denim">Denim</option>
                    <option value="outerwear">Outerwear</option>
                    <option value="knitwear">Knitwear</option>
                    <option value="private-label">Private Label</option>
                    <option value="multiple">Multiple Categories</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project, estimated quantities, and timeline..."
                    rows={4}
                    required
                    className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all duration-200 hover:bg-orange-hover hover:-translate-y-0.5 hover:shadow-md"
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
  )
}
