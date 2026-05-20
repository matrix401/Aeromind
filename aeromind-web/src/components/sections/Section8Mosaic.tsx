import { FadeIn } from '../ui/FadeIn'
import { LabelLine } from '../ui/LabelLine'

const LAYERS = [
  { label: 'Telemetry',   color: '#4FC3F7' },
  { label: 'Environment', color: '#7C3AED' },
  { label: 'Maintenance', color: '#F59E0B' },
  { label: 'Human',       color: '#FB923C' },
]

export function Section8Mosaic() {
  return (
    <section
      id="mosaic"
      data-section="7"
      className="relative min-h-screen flex flex-col justify-center px-6 section-vignette"
    >
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn className="max-w-2xl" data-section-content>
          <LabelLine text="The Aeromind Approach" />

          <h2 className="section-heading mb-6">
            Aeromind reads
            <br />
            <em className="serif-italic text-gradient-teal">the mosaic.</em>
          </h2>

          <p className="section-body mb-8">
            Where others see noise, we see signal. Where others see four isolated
            layers, we see one coherent picture. The same intelligence principle
            used by the world's most sophisticated threat analysis systems —
            applied to aviation safety.
          </p>

          <p className="section-body mb-12">
            Mosaic thinking: no single signal predicts distress. But 154 signals,
            synthesised across four layers, in real time — that's a different
            kind of intelligence entirely.
          </p>

          {/* Synthesis equation */}
          <div className="flex items-center gap-3 flex-wrap">
            {LAYERS.map((layer, i) => (
              <div key={layer.label} className="flex items-center gap-3">
                <div
                  className="liquid-glass rounded-xl px-4 py-2 font-mono text-[12px]"
                  style={{ color: layer.color }}
                >
                  {layer.label}
                </div>
                {i < LAYERS.length - 1 && (
                  <span className="text-white/20 text-xl font-light">+</span>
                )}
              </div>
            ))}
            <span className="text-white/20 text-xl mx-1">=</span>
            <div className="liquid-glass-teal rounded-xl px-4 py-2 font-mono text-[12px] text-teal">
              Composite Signal
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
