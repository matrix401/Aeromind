import { LabelLine } from '../ui/LabelLine'

const LAYER_LIST = [
  { name: 'Layer 1: Telemetry',      color: '#4FC3F7', desc: 'ADS-B · ACARS · FDR' },
  { name: 'Layer 2: Environment',    color: '#7C3AED', desc: 'Weather · NOTAMs · Airspace' },
  { name: 'Layer 3: Maintenance',    color: '#F59E0B', desc: 'MRO · Fatigue · Defects' },
  { name: 'Layer 4: Human Factors',  color: '#FB923C', desc: 'Crew · Fatigue · Scheduling' },
]

export function Section7Noise() {
  return (
    <section
      id="noise"
      data-section="6"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-2xl" data-section-content>
          <LabelLine text="The problem" color="#EF4444" />

          <h2 className="section-heading mb-6">
            Four layers.
            <br />
            <span className="text-[#EF4444]">No single system</span>
            <br />
            sees all of it.
          </h2>

          <p className="section-body mb-10">
            Airlines, regulators, and safety investigators each see one or two
            layers. Never all four. Never simultaneously. Never in real time.
          </p>

          <div className="space-y-3">
            {LAYER_LIST.map((layer) => (
              <div key={layer.name} className="glass-card px-4 py-4 flex items-center gap-4">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: layer.color, boxShadow: `0 0 8px ${layer.color}` }}
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-[#F0F4F8]">{layer.name}</div>
                  <div className="font-mono text-[10px] text-[#4A6278] mt-0.5">{layer.desc}</div>
                </div>
                <div className="font-mono text-[10px] text-[#EF4444] border border-[rgba(239,68,68,0.3)] px-2 py-1 rounded">
                  Siloed
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-card px-5 py-4 border-[rgba(239,68,68,0.2)] border">
            <p className="font-mono text-[12px] text-[#EF4444] text-center tracking-wide">
              The next distress event is already in this data.
              <br />
              The question is: is anyone reading all of it?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
