"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const regions = [
  {
    name: "Vietnam",
    facilities: 4,
    type: "Manufacturing Hub",
    specialty: "Activewear & Outerwear",
    x: 72,
    y: 48,
  },
  {
    name: "Bangladesh",
    facilities: 3,
    type: "Manufacturing Hub",
    specialty: "Denim & Knitwear",
    x: 67,
    y: 42,
  },
  {
    name: "Turkey",
    facilities: 2,
    type: "Manufacturing Hub",
    specialty: "Premium Denim",
    x: 54,
    y: 34,
  },
  {
    name: "Mexico",
    facilities: 2,
    type: "Distribution Center",
    specialty: "Fast-Turn Activewear",
    x: 18,
    y: 40,
  },
  {
    name: "Portugal",
    facilities: 1,
    type: "Manufacturing Hub",
    specialty: "Luxury Knitwear",
    x: 46,
    y: 34,
  },
]

const shippingRoutes = [
  { from: { x: 72, y: 48 }, to: { x: 18, y: 40 }, label: "Vietnam to Americas" },
  { from: { x: 67, y: 42 }, to: { x: 46, y: 34 }, label: "Bangladesh to Europe" },
  { from: { x: 54, y: 34 }, to: { x: 18, y: 40 }, label: "Turkey to Americas" },
  { from: { x: 72, y: 48 }, to: { x: 46, y: 34 }, label: "Vietnam to Europe" },
]

export default function GlobalSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  return (
    <section id="logistics" className="bg-card py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Global Footprint
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Manufacturing Excellence Across 5 Continents
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            Strategically located facilities ensure proximity to key markets, reduced lead
            times, and optimized logistics.
          </p>
        </div>

        {/* Interactive Map */}
        <div
          className={`relative mx-auto max-w-5xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl border border-border bg-muted/50 p-6 lg:p-10">
            <svg
              viewBox="0 0 100 55"
              className="w-full h-auto"
              aria-label="World map showing Pinnacle Systems manufacturing locations and shipping routes"
              role="img"
            >
              {/* Grid lines */}
              {Array.from({ length: 11 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 5 + 2.5}
                  x2="100"
                  y2={i * 5 + 2.5}
                  stroke="var(--border)"
                  strokeWidth="0.15"
                  strokeDasharray="0.5,0.5"
                />
              ))}
              {Array.from({ length: 21 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 5}
                  y1="0"
                  x2={i * 5}
                  y2="55"
                  stroke="var(--border)"
                  strokeWidth="0.15"
                  strokeDasharray="0.5,0.5"
                />
              ))}

              {/* Continents */}
              {/* North America */}
              <path
                d="M5,15 Q8,10 15,12 L22,14 Q25,16 24,22 L22,28 Q20,32 18,35 L16,38 Q14,42 12,40 L10,36 Q8,30 6,25 L5,20 Z"
                fill="var(--primary)"
                opacity="0.08"
              />
              {/* South America */}
              <path
                d="M22,42 Q24,38 26,40 L28,44 Q30,50 28,52 L24,54 Q20,52 20,48 L22,42 Z"
                fill="var(--primary)"
                opacity="0.08"
                transform="translate(0,-6)"
              />
              {/* Europe */}
              <path
                d="M44,12 Q46,10 50,12 L52,14 Q54,16 52,20 L50,22 Q48,24 46,22 L44,18 Q42,14 44,12 Z"
                fill="var(--primary)"
                opacity="0.08"
              />
              {/* Africa */}
              <path
                d="M46,26 Q48,24 52,26 L54,30 Q56,36 54,40 L50,44 Q48,46 46,42 L44,36 Q42,30 46,26 Z"
                fill="var(--primary)"
                opacity="0.08"
              />
              {/* Asia */}
              <path
                d="M56,10 Q60,8 68,10 L76,14 Q80,18 78,24 L74,28 Q70,32 66,30 L60,26 Q56,22 54,18 L56,10 Z"
                fill="var(--primary)"
                opacity="0.08"
              />
              {/* Southeast Asia */}
              <path
                d="M68,34 Q72,32 76,36 L78,40 Q76,44 72,42 L68,38 Z"
                fill="var(--primary)"
                opacity="0.08"
              />
              {/* Australia */}
              <path
                d="M76,42 Q80,40 84,42 L86,46 Q84,50 80,48 L76,46 Z"
                fill="var(--primary)"
                opacity="0.08"
              />

              {/* Animated shipping routes */}
              {shippingRoutes.map((route, i) => {
                const midX = (route.from.x + route.to.x) / 2
                const midY = Math.min(route.from.y, route.to.y) - 8
                return (
                  <path
                    key={i}
                    d={`M${route.from.x},${route.from.y} Q${midX},${midY} ${route.to.x},${route.to.y}`}
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="0.3"
                    strokeDasharray={isVisible ? "2,1" : "0,1000"}
                    opacity="0.3"
                    className="transition-all duration-[3000ms] ease-out"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="100"
                      to="0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </path>
                )
              })}

              {/* Location markers */}
              {regions.map((region) => (
                <g
                  key={region.name}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredRegion(region.name)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  {/* Pulse ring */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={hoveredRegion === region.name ? "3" : "2"}
                    fill="var(--accent)"
                    opacity="0.15"
                    className="transition-all duration-300"
                  >
                    <animate
                      attributeName="r"
                      values="2;3.5;2"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.15;0.05;0.15"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Core dot */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r="1"
                    fill="var(--accent)"
                    className="transition-all duration-200"
                  />

                  {/* Hover tooltip */}
                  {hoveredRegion === region.name && (
                    <g>
                      <rect
                        x={region.x - 14}
                        y={region.y - 12}
                        width="28"
                        height="9"
                        rx="1"
                        fill="var(--primary)"
                        opacity="0.95"
                      />
                      <text
                        x={region.x}
                        y={region.y - 6.5}
                        textAnchor="middle"
                        fill="white"
                        fontSize="2.5"
                        fontWeight="bold"
                        fontFamily="system-ui, sans-serif"
                      >
                        {region.name}
                      </text>
                      <text
                        x={region.x}
                        y={region.y - 4}
                        textAnchor="middle"
                        fill="white"
                        fontSize="1.6"
                        opacity="0.75"
                        fontFamily="system-ui, sans-serif"
                      >
                        {region.facilities} {region.facilities === 1 ? "Facility" : "Facilities"} - {region.type}
                      </text>
                    </g>
                  )}
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Region cards */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {regions.map((region) => (
            <div
              key={region.name}
              className={`group rounded-xl bg-card p-5 border transition-all duration-300 cursor-default ${
                hoveredRegion === region.name
                  ? "border-accent shadow-md -translate-y-0.5"
                  : "border-border shadow-sm hover:shadow-md hover:-translate-y-0.5"
              }`}
              onMouseEnter={() => setHoveredRegion(region.name)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              <div className="mb-3 flex items-center gap-2">
                <MapPin className={`h-4 w-4 transition-colors ${hoveredRegion === region.name ? "text-accent" : "text-primary"}`} />
                <h3 className="font-semibold text-foreground">{region.name}</h3>
              </div>
              <p className="text-2xl font-bold text-foreground">{region.facilities}</p>
              <p className="text-xs text-muted-foreground">
                {region.facilities === 1 ? "Facility" : "Facilities"}
              </p>
              <p className="mt-2 text-xs font-semibold text-accent">{region.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
