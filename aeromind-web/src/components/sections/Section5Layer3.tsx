import { LabelLine } from '../ui/LabelLine'
import { LAYER_COLORS } from '../../utils/constants'

export function Section5Layer3() {
  return (
    <section
      id="layer3"
      data-section="4"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-2xl" data-section-content>
          <LabelLine text="Layer 03 of 04" color={LAYER_COLORS.layer3} />

          <h2 className="section-heading mb-4">
            <span style={{ color: LAYER_COLORS.layer3 }}>Maintenance.</span>
            <br />
            What history says.
          </h2>

          <p className="section-body mb-10">
            Component fatigue cycles, deferred defects, MRO patterns, airworthiness
            directives. The past is the most reliable predictor of failure.
            If you know how to read it.
          </p>

          <blockquote className="border-l-2 pl-5 mb-10" style={{ borderColor: LAYER_COLORS.layer3 }}>
            <p className="text-[#8BA3B8] text-base font-light italic leading-relaxed">
              "Every major aviation incident in history had a maintenance signature
              visible 60–180 days before the event. The data existed. The synthesis didn't."
            </p>
          </blockquote>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'MRO Records', value: '480M+' },
              { label: 'Components tracked', value: '2,200' },
              { label: 'Defect patterns', value: '94 types' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <div className="font-semibold text-2xl mb-1" style={{ color: LAYER_COLORS.layer3 }}>
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] tracking-wider text-[#4A6278] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
