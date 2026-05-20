import { FadeIn } from '../ui/FadeIn'
import { LabelLine } from '../ui/LabelLine'
import { LAYER_COLORS } from '../../utils/constants'

const METRICS = [
  { label: 'Weather cells tracked',  value: '12,400 / day', pct: 78 },
  { label: 'NOTAM coverage',         value: '100% regions', pct: 100 },
  { label: 'Wind shear events',      value: 'Real-time',    pct: 92 },
  { label: 'Route deviation alerts', value: '< 4 min lag',  pct: 88 },
]

export function Section4Layer2() {
  return (
    <section
      id="layer2"
      data-section="3"
      className="relative min-h-screen flex flex-col justify-center px-6 section-vignette-right"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-16">
        <FadeIn className="max-w-lg" data-section-content>
          <LabelLine text="Layer 02 of 04" color={LAYER_COLORS.layer2} />

          <h2 className="section-heading mb-4">
            <span style={{ color: LAYER_COLORS.layer2 }}>Environment.</span>
            <br />
            <em className="serif-italic text-white/50">What the world says.</em>
          </h2>

          <p className="section-body mb-8">
            Convective weather cells, NOTAMs, airspace restrictions, jet streams,
            volcanic ash corridors. The world speaks a language aviation ignores
            until it's too late.
          </p>

          <div className="space-y-3">
            {METRICS.map((item) => (
              <div key={item.label} className="liquid-glass rounded-2xl px-5 py-4">
                <div className="flex justify-between mb-2.5">
                  <span className="font-mono text-[11px] text-white/40">{item.label}</span>
                  <span className="font-mono text-[11px] font-medium" style={{ color: LAYER_COLORS.layer2 }}>
                    {item.value}
                  </span>
                </div>
                <div className="h-px bg-white/[0.06] rounded overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{ width: `${item.pct}%`, background: LAYER_COLORS.layer2, opacity: 0.6 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="flex-1 hidden md:block" />
      </div>
    </section>
  )
}
