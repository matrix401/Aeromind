import { FadeIn } from '../ui/FadeIn'
import { LabelLine } from '../ui/LabelLine'
import { LAYER_COLORS } from '../../utils/constants'

const INDICATORS = [
  { label: 'Fatigue Risk Score',        value: 'Critical → 8.7', delta: '+2.3 this week', warn: true },
  { label: 'Rest Compliance',           value: '91.4%',          delta: '–3.2% vs baseline', warn: true },
  { label: 'Crew Comm Anomalies',       value: '3 flagged',      delta: 'Last 48h', warn: false },
  { label: 'Scheduling Pressure Index', value: '6.1 / 10',       delta: 'High season', warn: false },
]

export function Section6Layer4() {
  return (
    <section
      id="layer4"
      data-section="5"
      className="relative min-h-screen flex flex-col justify-center px-6 section-vignette-right"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-16">
        <FadeIn className="max-w-lg" data-section-content>
          <LabelLine text="Layer 04 of 04" color={LAYER_COLORS.layer4} />

          <h2 className="section-heading mb-4">
            <span style={{ color: LAYER_COLORS.layer4 }}>Human factors.</span>
            <br />
            <em className="serif-italic text-white/50">What people say.</em>
          </h2>

          <p className="section-body mb-8">
            Crew fatigue scores, scheduling pressure, communication anomalies,
            rest violations, rostering patterns. The human variable is the
            hardest signal to read — and the most important.
          </p>

          <div className="space-y-3">
            {INDICATORS.map((item) => (
              <div key={item.label} className="liquid-glass rounded-2xl px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] text-white/30 mb-1 uppercase tracking-wider">{item.label}</div>
                  <div className="font-mono text-sm text-white">{item.value}</div>
                </div>
                <div
                  className="font-mono text-[10px] px-2.5 py-1 rounded-full flex-shrink-0 ml-4"
                  style={{
                    color: item.warn ? '#EF4444' : '#F59E0B',
                    background: item.warn ? 'rgba(239,68,68,0.08)' : 'rgba(245,158,11,0.08)',
                  }}
                >
                  {item.delta}
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
