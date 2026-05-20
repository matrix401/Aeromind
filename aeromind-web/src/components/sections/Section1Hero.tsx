import { ScrollIndicator } from '../ui/ScrollIndicator'
import { DataBadge }       from '../ui/DataBadge'

export function Section1Hero() {
  return (
    <section
      id="hero"
      data-section="0"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-2xl" data-section-content>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-7 h-px bg-teal" />
            <span className="font-mono text-[11px] tracking-widest uppercase text-teal">
              Aviation Intelligence
            </span>
          </div>

          {/* Hero headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#F0F4F8] leading-[1.04] mb-6">
            4.5 billion journeys.
            <br />
            <span className="text-gradient-teal">Every one a signal.</span>
          </h1>

          <p className="section-body mb-10">
            Aviation generates millions of data points every second — telemetry,
            weather, maintenance, human factors. Most are never heard.
            <br /><br />
            Aeromind listens to all of them.
          </p>

          {/* Live data badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            <DataBadge label="Flights monitored" value="87,420 / day" color="#00C896" />
            <DataBadge label="Signals ingested" value="154 per flight" color="#4FC3F7" />
            <DataBadge label="Prediction horizon" value="6–18 months" color="#F59E0B" />
          </div>

          <div className="flex items-center gap-4">
            <a href="#mosaic" className="btn-primary">
              See the Intelligence
            </a>
            <a href="#signals" className="btn-ghost">
              How it works
            </a>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
