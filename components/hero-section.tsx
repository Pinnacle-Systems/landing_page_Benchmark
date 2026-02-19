"use client"

import { ArrowRight, Clock, Gauge, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const stats = [
  {
    icon: Gauge,
    label: "Factory Capacity",
    value: "2.4M",
    unit: "units/month",
  },
  {
    icon: Clock,
    label: "Avg. Lead Time",
    value: "21",
    unit: "days",
  },
  {
    icon: TrendingUp,
    label: "On-Time Delivery",
    value: "99.2",
    unit: "%",
  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-factory.jpg"
          alt="Modern high-tech garment manufacturing facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 py-24">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-card/15 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wide text-card uppercase">
              Global Manufacturing Partner
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-card sm:text-5xl lg:text-6xl text-balance">
            Precision Apparel Manufacturing at Scale
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-card/80 sm:text-lg">
            End-to-end supply chain solutions for the world&apos;s leading apparel brands. From concept to delivery, powered by technology and driven by quality.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-card/30 bg-card/10 text-card hover:bg-card/20 hover:text-card backdrop-blur-sm"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-xl bg-card/10 px-5 py-4 backdrop-blur-md border border-card/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium text-card/60 uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-card">
                  {stat.value}
                  <span className="ml-1 text-sm font-normal text-card/70">{stat.unit}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
