"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Scale Your Production?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Whether you need a full production run or an initial consultation, our team is ready to help you bring your vision to life.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">partnerships@pinnaclesystems.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+1 (800) 555-0199</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
                  <p className="font-medium text-foreground">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-8 border border-border shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Send className="h-6 w-6 text-primary" />
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
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Smith" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your brand" required />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jane@company.com" required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="category">Product Category</Label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="activewear">Activewear</option>
                    <option value="denim">Denim</option>
                    <option value="outerwear">Outerwear</option>
                    <option value="knitwear">Knitwear</option>
                    <option value="multiple">Multiple Categories</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, estimated quantities, and timeline..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="gap-2">
                  Send Inquiry
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
