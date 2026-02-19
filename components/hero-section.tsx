"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Factory, Clock, Globe2, Shield } from "lucide-react"
import Image from "next/image"
import { useAnimatedCounter } from "@/hooks/use-scroll-animation"

const stats = [
  {
    icon: Factory,
    label: "Production Capacity",
    value: 2400000,
    display: "2.4M",
    unit: "units/month",
  },
  {
    icon: Clock,
    label: "Lead Times",
    value: 21,
    display: "21",
    unit: "days avg.",
  },
  {
    icon: Globe2,
    label: "Global Reach",
    value: 40,
    display: "40+",
    unit: "countries",
  },
  {
    icon: Shield,
    label: "Certifications",
    value: 18,
    display: "18",
    unit: "ISO & BSCI",
  },
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-14">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-factory.jpg"
          alt="Modern high-tech garment manufacturing facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/30" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-7xl flex-col justify-center px-6 py-24">
        {/* Hero content */}
        <div className="max-w-3xl">
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-card/20 bg-card/10 px-4 py-1.5 backdrop-blur-sm transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold tracking-wider text-card uppercase">
              Global Manufacturing Partner
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span
              className={`block text-card transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Precision Apparel
            </span>
            <span
              className={`block text-card transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Manufacturing
            </span>
            <span
              className={`block text-accent transition-all duration-700 delay-600 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              At Global Scale
            </span>
          </h1>

          <p
            className={`mb-10 max-w-xl text-base leading-relaxed text-card/75 sm:text-lg transition-all duration-700 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            End-to-end supply chain solutions for the world&apos;s leading apparel brands.
            From concept to delivery, powered by technology and driven by quality.
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-[900ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all duration-200 hover:bg-orange-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-lg border border-card/25 bg-card/5 px-7 py-3.5 text-sm font-semibold text-card backdrop-blur-sm transition-all duration-200 hover:bg-card/15"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Stats panel */}
        <div
          className={`mt-16 lg:mt-24 transition-all duration-1000 delay-[1100ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl border border-card/10 bg-card/5 p-1 backdrop-blur-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} mounted={mounted} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  stat,
  index,
  mounted,
}: {
  stat: (typeof stats)[number]
  index: number
  mounted: boolean
}) {
  const numericEnd =
    stat.value >= 1000000 ? 2.4 : stat.value >= 100 ? stat.value : stat.value
  const count = useAnimatedCounter(
    Math.round(numericEnd * 10),
    2000,
    mounted
  )

  const displayValue = () => {
    if (stat.value >= 1000000) {
      return `${(count / 10).toFixed(1)}M`
    }
    if (stat.label === "Global Reach") {
      return `${Math.round(count / 10)}+`
    }
    return `${Math.round(count / 10)}`
  }

  return (
    <div
      className={`flex items-center gap-4 px-6 py-5 ${
        index < 3 ? "border-r border-card/10" : ""
      } ${index < 2 ? "max-lg:border-b max-lg:border-card/10" : ""} ${
        index === 2 ? "max-lg:border-r-0" : ""
      }`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15">
        <stat.icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-card/50">
          {stat.label}
        </p>
        <p className="text-2xl font-bold tabular-nums text-card">
          {displayValue()}
          <span className="ml-1.5 text-xs font-normal text-card/50">{stat.unit}</span>
        </p>
      </div>
    </div>
  )
}
