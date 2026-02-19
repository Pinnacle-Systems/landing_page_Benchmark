import Image from "next/image"
import { Factory, Users, Globe2, Award } from "lucide-react"

const metrics = [
  { icon: Factory, value: "12", label: "Manufacturing Facilities" },
  { icon: Users, value: "18,000+", label: "Employees Worldwide" },
  { icon: Globe2, value: "40+", label: "Countries Served" },
  { icon: Award, value: "25+", label: "Years of Excellence" },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              About Pinnacle Systems
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Building the Future of Apparel Manufacturing
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              For over two decades, Pinnacle Systems has been at the forefront of global apparel manufacturing. Our vertically integrated operations span from raw material sourcing to finished goods logistics, delivering unmatched quality, speed, and transparency.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We partner with the world&apos;s most demanding brands to bring their vision to life, with facilities across Asia and the Americas equipped with the latest in automated production technology.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <metric.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="Pinnacle Systems leadership team"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-card p-6 shadow-lg border border-border lg:block">
              <p className="text-3xl font-bold text-foreground">99.8%</p>
              <p className="text-sm text-muted-foreground">Quality Pass Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
