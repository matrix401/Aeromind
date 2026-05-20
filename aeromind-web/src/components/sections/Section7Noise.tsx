import { FadeIn } from '../ui/FadeIn'
import { LabelLine } from '../ui/LabelLine'

const LAYERS = [
  { name: 'Layer 1: Telemetry',     color: '#4FC3F7', desc: 'ADS-B · ACARS · FDR' },
  { name: 'Layer 2: Environment',   color: '#7C3AED', desc: 'Weather · NOTAMs · Airspace' },
  { name: 'Layer 3: Maintenance',   color: '#F59E0B', desc: 'MRO · Fatigue cycles · Defects' },
  { name: 'Layer 4: Human Factors', color: '#FB923C', desc: 'Crew · Fatigue · Scheduling' },
]

export function Section7Noise() {
  return (
    <section
      id="noise"
      data-section="6"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn className="max-w-2xl" data-section-content>
          <LabelLine text="The Problem" color="#EF4444" />

          <h2 className="section-heading mb-6">
            Four layers.
            <br />
            <span className="text-[#EF4444]">No single system</span>
            <br />
            <em className="serif-italic text-white/40">sees all of it.</em>
          </h2>

          <p className="section-body mb-10">
            Airlines, regulators, and safety investigators each see one or two
            layers. Never all four. Never simultaneously. Never in real time.
          </p>

          <div className="space-y-3 mb-8">
            {LAYERS.map((layer) => (
              <div key={layer.name} className="liquid-glass rounded-2xl px-5 py-4 flex items-center gap-4">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: layer.color, boxShadow: `0 0 10px ${layer.color}` }}
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{layer.name}</div>
                  <div className="font-mono text-[10px] text-white/30 mt-0.5">{layer.desc}</div>
                </div>
                <div
                  className="font-mono text-[10px] border rounded-full px-3 py-1"
                  style={{ color: '#EF4444', borderColor: 'rgba(239,68,68,0.25)' }}
                >
                  Siloed
                </div>
              </div>
            ))}
          </div>

          <div
            className="liquid-glass rounded-2xl px-6 py-5 text-center"
            style={{ borderColor: 'rgba(239,68,68,0.15)', borderWidth: 1 }}
          >
            <p className="font-serif text-[15px] text-[#EF4444]/80 leading-relaxed">
              The next distress event is already in this data.
              <br />
              <em>The question is: is anyone reading all of it?</em>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
