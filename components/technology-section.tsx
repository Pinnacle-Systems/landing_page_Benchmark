"use client"

import { Cpu, ScanLine, Zap, BarChart3, Layers, Settings } from "lucide-react"
import { useScrollAnimation, useAnimatedCounter, useStaggeredReveal } from "@/hooks/use-scroll-animation"

const capabilities = [
  {
    icon: Cpu,
    title: "AI-Powered Quality Control",
    description: "Computer vision systems inspect every garment in real-time, catching defects invisible to the human eye.",
  },
  {
    icon: ScanLine,
    title: "Automated Cutting Systems",
    description: "Laser-guided CNC cutting tables with fabric nesting algorithms that reduce waste by 18%.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Digital sampling and 3D visualization cut sample development time from weeks to days.",
  },
  {
    icon: Layers,
    title: "ERP Integration",
    description: "Real-time production tracking dashboards with API integrations for full supply chain visibility.",
  },
  {
    icon: Settings,
    title: "Smart Factory IoT",
    description: "Connected machinery with predictive maintenance reduces downtime by 35% across all facilities.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Advanced forecasting models optimize production planning and inventory management globally.",
  },
]

const metrics = [
  { label: "Automation Rate", value: 87, suffix: "%" },
  { label: "Defect Detection", value: 99, suffix: ".8%" },
  { label: "Waste Reduction", value: 42, suffix: "%" },
  { label: "Energy Efficiency", value: 65, suffix: "%" },
]

export default function TechnologySection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const itemsVisible = useStaggeredReveal(capabilities.length, isVisible, 100)

  return (
    <section id="technology" className="bg-muted py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left column - capabilities */}
          <div>
            <div
              className={`mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Technology & Operations
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Industry 4.0 Manufacturing Infrastructure
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our technology stack integrates AI, IoT, and advanced automation to deliver
                consistent quality at scale across every facility.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className={`group rounded-xl bg-card p-5 border border-border transition-all duration-500 hover:shadow-md hover:-translate-y-0.5 ${
                    itemsVisible[i]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 transition-colors group-hover:bg-accent/10">
                    <cap.icon className="h-5 w-5 text-primary transition-colors group-hover:text-accent" />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-foreground">{cap.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - metrics with progress bars */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="rounded-2xl bg-primary p-8 lg:p-10">
              <h3 className="mb-2 text-lg font-bold text-primary-foreground">
                Operational Excellence
              </h3>
              <p className="mb-10 text-sm text-primary-foreground/60">
                Key performance indicators across our global manufacturing network.
              </p>

              <div className="flex flex-col gap-8">
                {metrics.map((metric) => (
                  <MetricBar key={metric.label} metric={metric} isVisible={isVisible} />
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-primary-foreground/10 pt-8">
                <CounterStat end={12} label="Smart Factories" isVisible={isVisible} />
                <CounterStat end={340} label="Connected Machines" isVisible={isVisible} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricBar({
  metric,
  isVisible,
}: {
  metric: { label: string; value: number; suffix: string }
  isVisible: boolean
}) {
  const count = useAnimatedCounter(metric.value, 2000, isVisible)

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium text-primary-foreground/80">{metric.label}</span>
        <span className="text-lg font-bold tabular-nums text-accent">
          {count}{metric.suffix}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-primary-foreground/10">
        <div
          className="h-full rounded-full bg-accent transition-all duration-[2000ms] ease-out"
          style={{ width: isVisible ? `${metric.value}%` : "0%" }}
        />
      </div>
    </div>
  )
}

function CounterStat({
  end,
  label,
  isVisible,
}: {
  end: number
  label: string
  isVisible: boolean
}) {
  const count = useAnimatedCounter(end, 2000, isVisible)

  return (
    <div>
      <p className="text-3xl font-bold tabular-nums text-primary-foreground">{count}+</p>
      <p className="text-xs text-primary-foreground/60">{label}</p>
    </div>
  )
}
