import { FadeIn } from '../ui/FadeIn'
import { LabelLine } from '../ui/LabelLine'
import { LAYER_COLORS } from '../../utils/constants'

const STATS = [
  { label: 'MRO Records',        value: '480M+' },
  { label: 'Components tracked', value: '2,200' },
  { label: 'Defect patterns',    value: '94 types' },
]

export function Section5Layer3() {
  return (
    <section
      id="layer3"
      data-section="4"
      className="relative min-h-screen flex flex-col justify-center px-6 section-vignette"
    >
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn className="max-w-2xl" data-section-content>
          <LabelLine text="Layer 03 of 04" color={LAYER_COLORS.layer3} />

          <h2 className="section-heading mb-4">
            <span style={{ color: LAYER_COLORS.layer3 }}>Maintenance.</span>
            <br />
            <em className="serif-italic text-white/50">What history says.</em>
          </h2>

          <p className="section-body mb-10">
            Component fatigue cycles, deferred defects, MRO patterns, airworthiness
            directives. The past is the most reliable predictor of failure —
            if you know how to read it.
          </p>

          <blockquote
            className="liquid-glass rounded-2xl px-6 py-5 mb-10 border-l-2"
            style={{ borderColor: LAYER_COLORS.layer3 }}
          >
            <p className="text-white/50 text-base font-light italic leading-relaxed font-serif">
              "Every major aviation incident in history had a maintenance signature
              visible 60–180 days before the event. The data existed.
              The synthesis didn't."
            </p>
          </blockquote>

          <div className="grid grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="liquid-glass rounded-2xl p-5 text-center">
                <div
                  className="font-semibold text-2xl mb-1.5"
                  style={{ color: LAYER_COLORS.layer3 }}
                >
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] tracking-wider text-white/30 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
