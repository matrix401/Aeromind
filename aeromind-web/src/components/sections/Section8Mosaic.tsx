import { LabelLine } from '../ui/LabelLine'

export function Section8Mosaic() {
  return (
    <section
      id="mosaic"
      data-section="7"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-2xl" data-section-content>
          <LabelLine text="The Aeromind Approach" />

          <h2 className="section-heading mb-6">
            Aeromind reads
            <br />
            <span className="text-gradient-teal">the mosaic.</span>
          </h2>

          <p className="section-body mb-8">
            Where others see noise, we see signal.
            Where others see four isolated layers, we see one coherent picture.
            The same intelligence principle used by the world's most sophisticated
            threat analysis systems — applied to aviation safety.
          </p>

          <p className="section-body mb-10">
            Mosaic thinking: no single signal predicts distress. But 154 signals,
            synthesised across four layers, in real time — that's a different
            kind of intelligence entirely.
          </p>

          {/* Synthesis visual */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { label: 'Telemetry', color: '#4FC3F7' },
              { label: 'Environment', color: '#7C3AED' },
              { label: 'Maintenance', color: '#F59E0B' },
              { label: 'Human', color: '#FB923C' },
            ].map((layer, i) => (
              <div key={layer.label} className="flex items-center gap-2">
                <div
                  className="glass-card px-3 py-1.5 font-mono text-[11px]"
                  style={{ color: layer.color }}
                >
                  {layer.label}
                </div>
                {i < 3 && (
                  <span className="text-[#4A6278] text-lg font-light">+</span>
                )}
              </div>
            ))}
            <span className="text-[#4A6278] text-lg mx-1">=</span>
            <div className="glass-card px-3 py-1.5 font-mono text-[11px] text-teal border-teal border">
              Composite Signal
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
