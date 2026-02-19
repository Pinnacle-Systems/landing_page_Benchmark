import { Lightbulb, Ruler, Cog, Truck, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Concept & Design",
    description: "Collaborative design sessions with tech packs, fabric selection, and prototype development tailored to your brand identity.",
  },
  {
    icon: Ruler,
    title: "Sampling & Fit",
    description: "Rapid prototyping with precision fit testing. Multiple sample rounds ensure exact specifications before production.",
  },
  {
    icon: Cog,
    title: "Production",
    description: "Automated cutting, assembly, and finishing across our state-of-the-art facilities with real-time quality checkpoints.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "AQL 2.5 inspection standards with automated defect detection. Every garment passes multi-stage verification.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "End-to-end supply chain management with DDP and FOB options. Full visibility from factory floor to warehouse.",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            How We Work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            From Concept to Delivery
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our streamlined five-stage process ensures consistency, quality, and speed at every step of your production journey.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-border lg:block" />

          <div className="flex flex-col gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex gap-6 lg:gap-10">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-card border border-border shadow-sm">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
