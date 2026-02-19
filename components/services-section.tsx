"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useScrollAnimation, useStaggeredReveal } from "@/hooks/use-scroll-animation"

const categories = [
  {
    title: "Activewear",
    description: "High-performance athletic apparel engineered for durability and comfort across all disciplines.",
    image: "/images/activewear.jpg",
    stats: "120K units/mo",
    span: "md:col-span-2 md:row-span-2",
    height: "h-64 md:h-full",
  },
  {
    title: "Denim",
    description: "Premium denim production with advanced wash and finishing techniques.",
    image: "/images/denim.jpg",
    stats: "85K units/mo",
    span: "",
    height: "h-56",
  },
  {
    title: "Outerwear",
    description: "Technical outerwear with sealed seams and weather-resistant construction.",
    image: "/images/outerwear.jpg",
    stats: "60K units/mo",
    span: "",
    height: "h-56",
  },
  {
    title: "Knitwear",
    description: "Fine-gauge and specialty knits with precision finishing.",
    image: "/images/knitwear.jpg",
    stats: "95K units/mo",
    span: "md:col-span-2",
    height: "h-56",
  },
  {
    title: "Private Label",
    description: "Full-service private label development from concept to retail-ready product.",
    image: "/images/sustainability.jpg",
    stats: "200K units/mo",
    span: "",
    height: "h-56",
  },
]

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const itemsVisible = useStaggeredReveal(categories.length, isVisible, 120)

  return (
    <section id="categories" className="bg-background py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Product Categories
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            End-to-End Manufacturing for Every Category
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            From activewear to luxury knitwear, our vertically integrated facilities deliver
            precision manufacturing across every apparel category.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${cat.span} ${
                itemsVisible[i]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className={`relative ${cat.height}`}>
                <Image
                  src={cat.image}
                  alt={`${cat.title} manufacturing`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/45 transition-all duration-500 group-hover:bg-navy-900/60" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-end justify-between gap-4">
                  <div className="transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="mb-2 inline-block rounded-full border border-card/20 bg-card/10 px-3 py-0.5 text-xs font-semibold tracking-wider text-card backdrop-blur-sm">
                      {cat.stats}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-card">{cat.title}</h3>
                    <p className="mt-1 max-w-sm text-sm leading-relaxed text-card/70 opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      {cat.description}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
