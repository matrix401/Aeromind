import { LabelLine } from '../ui/LabelLine'
import { LAYER_COLORS } from '../../utils/constants'

export function Section4Layer2() {
  return (
    <section
      id="layer2"
      data-section="3"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="max-w-lg" data-section-content>
          <LabelLine text="Layer 02 of 04" color={LAYER_COLORS.layer2} />

          <h2 className="section-heading mb-4">
            <span style={{ color: LAYER_COLORS.layer2 }}>Environment.</span>
            <br />
            What the world says.
          </h2>

          <p className="section-body mb-8">
            Convective weather cells, NOTAMs, airspace restrictions, jet streams,
            volcanic ash corridors. The world speaks a language aviation ignores
            until it's too late.
          </p>

          <div className="space-y-3">
            {[
              { label: 'Weather cells tracked', value: '12,400 / day', pct: 78 },
              { label: 'NOTAM coverage',        value: '100% regions', pct: 100 },
              { label: 'Wind shear events',     value: 'Real-time',   pct: 92 },
              { label: 'Route deviation alerts', value: '< 4 min lag',pct: 88 },
            ].map((item) => (
              <div key={item.label} className="glass-card px-4 py-3">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#8BA3B8]">{item.label}</span>
                  <span className="font-mono text-[11px]" style={{ color: LAYER_COLORS.layer2 }}>
                    {item.value}
                  </span>
                </div>
                <div className="h-px bg-[rgba(255,255,255,0.06)] relative overflow-hidden rounded">
                  <div
                    className="h-full rounded transition-all duration-1000"
                    style={{
                      width: `${item.pct}%`,
                      background: LAYER_COLORS.layer2,
                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 hidden md:block" />
      </div>
    </section>
  )
}
