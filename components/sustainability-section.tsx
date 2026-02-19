import Image from "next/image"
import { Leaf, Droplets, Recycle, Sun } from "lucide-react"

const initiatives = [
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "60% of our facilities run on solar and wind power. On track for 100% renewable by 2028.",
    stat: "60%",
  },
  {
    icon: Droplets,
    title: "Water Stewardship",
    description: "Closed-loop water recycling systems across all denim production lines.",
    stat: "40M gal",
  },
  {
    icon: Recycle,
    title: "Zero Waste",
    description: "95% of production waste is recycled or repurposed. Targeting zero landfill by 2027.",
    stat: "95%",
  },
  {
    icon: Leaf,
    title: "Carbon Neutral",
    description: "Comprehensive carbon offset program and Scope 1-3 emissions tracking.",
    stat: "Scope 1-3",
  },
]

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/sustainability.jpg"
              alt="Sustainable manufacturing facility with solar panels"
              width={640}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Sustainability
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Responsible Manufacturing for a Better Future
            </h2>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Sustainability isn&apos;t an afterthought. It&apos;s woven into every layer of our operations, from sourcing to logistics.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {initiatives.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-muted p-5 border border-border"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg font-bold text-primary">{item.stat}</span>
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
