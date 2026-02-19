"use client"

import { MapPin } from "lucide-react"

const regions = [
  {
    name: "Vietnam",
    facilities: 4,
    specialty: "Activewear & Outerwear",
    x: 72,
    y: 48,
  },
  {
    name: "Bangladesh",
    facilities: 3,
    specialty: "Denim & Knitwear",
    x: 67,
    y: 42,
  },
  {
    name: "Turkey",
    facilities: 2,
    specialty: "Premium Denim",
    x: 54,
    y: 34,
  },
  {
    name: "Mexico",
    facilities: 2,
    specialty: "Fast-Turn Activewear",
    x: 18,
    y: 40,
  },
  {
    name: "Portugal",
    facilities: 1,
    specialty: "Luxury Knitwear",
    x: 46,
    y: 34,
  },
]

export default function GlobalSection() {
  return (
    <section id="global" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Global Footprint
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Manufacturing Excellence Across 5 Continents
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            Strategically located facilities ensure proximity to key markets, reduced lead times, and optimized logistics.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* World Map SVG */}
          <svg
            viewBox="0 0 100 50"
            className="w-full h-auto"
            aria-label="World map showing Pinnacle Systems manufacturing locations"
            role="img"
          >
            {/* Simplified continents */}
            {/* North America */}
            <path
              d="M5,15 Q8,10 15,12 L22,14 Q25,16 24,22 L22,28 Q20,32 18,35 L16,38 Q14,42 12,40 L10,36 Q8,30 6,25 L5,20 Z"
              fill="currentColor"
              className="text-border"
            />
            {/* South America */}
            <path
              d="M22,42 Q24,38 26,40 L28,44 Q30,50 28,52 L24,54 Q20,52 20,48 L22,42 Z"
              fill="currentColor"
              className="text-border"
              transform="translate(0,-6)"
            />
            {/* Europe */}
            <path
              d="M44,12 Q46,10 50,12 L52,14 Q54,16 52,20 L50,22 Q48,24 46,22 L44,18 Q42,14 44,12 Z"
              fill="currentColor"
              className="text-border"
            />
            {/* Africa */}
            <path
              d="M46,26 Q48,24 52,26 L54,30 Q56,36 54,40 L50,44 Q48,46 46,42 L44,36 Q42,30 46,26 Z"
              fill="currentColor"
              className="text-border"
            />
            {/* Asia */}
            <path
              d="M56,10 Q60,8 68,10 L76,14 Q80,18 78,24 L74,28 Q70,32 66,30 L60,26 Q56,22 54,18 L56,10 Z"
              fill="currentColor"
              className="text-border"
            />
            {/* Southeast Asia */}
            <path
              d="M68,34 Q72,32 76,36 L78,40 Q76,44 72,42 L68,38 Z"
              fill="currentColor"
              className="text-border"
            />
            {/* Australia */}
            <path
              d="M76,42 Q80,40 84,42 L86,46 Q84,50 80,48 L76,46 Z"
              fill="currentColor"
              className="text-border"
            />

            {/* Location pins */}
            {regions.map((region) => (
              <g key={region.name}>
                <circle
                  cx={region.x}
                  cy={region.y}
                  r="1.2"
                  fill="var(--primary)"
                  className="animate-pulse"
                />
                <circle
                  cx={region.x}
                  cy={region.y}
                  r="2.5"
                  fill="var(--primary)"
                  opacity="0.2"
                />
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {regions.map((region) => (
            <div
              key={region.name}
              className="rounded-xl bg-card p-5 border border-border shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">{region.name}</h3>
              </div>
              <p className="text-2xl font-bold text-foreground">{region.facilities}</p>
              <p className="text-xs text-muted-foreground">
                {region.facilities === 1 ? "Facility" : "Facilities"}
              </p>
              <p className="mt-2 text-xs font-medium text-primary">{region.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
