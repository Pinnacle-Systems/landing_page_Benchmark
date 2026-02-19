import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    title: "Activewear",
    description: "High-performance athletic apparel engineered for durability and comfort across all disciplines.",
    image: "/images/activewear.jpg",
    stats: "120K units/mo",
    span: "col-span-1 md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    title: "Denim",
    description: "Premium denim production with advanced wash and finishing techniques.",
    image: "/images/denim.jpg",
    stats: "85K units/mo",
    span: "col-span-1",
    featured: false,
  },
  {
    title: "Outerwear",
    description: "Technical outerwear with sealed seams and weather-resistant construction.",
    image: "/images/outerwear.jpg",
    stats: "60K units/mo",
    span: "col-span-1",
    featured: false,
  },
  {
    title: "Knitwear",
    description: "Fine-gauge and specialty knits with precision finishing.",
    image: "/images/knitwear.jpg",
    stats: "95K units/mo",
    span: "col-span-1 md:col-span-2",
    featured: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Product Categories
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            End-to-End Manufacturing for Every Category
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            From activewear to luxury knitwear, our vertically integrated facilities deliver precision manufacturing across every apparel category.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-shadow hover:shadow-lg ${cat.span}`}
            >
              <div className={`relative ${cat.featured ? "h-80 md:h-full" : "h-52"}`}>
                <Image
                  src={cat.image}
                  alt={`${cat.title} manufacturing`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/40 transition-colors group-hover:bg-foreground/50" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-1 inline-block rounded-full bg-card/15 px-3 py-0.5 text-xs font-medium text-card backdrop-blur-sm">
                      {cat.stats}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-card">{cat.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-card/80 max-w-sm">
                      {cat.description}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
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
