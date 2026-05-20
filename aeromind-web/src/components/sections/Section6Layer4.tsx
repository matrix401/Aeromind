import { LabelLine } from '../ui/LabelLine'
import { LAYER_COLORS } from '../../utils/constants'

export function Section6Layer4() {
  return (
    <section
      id="layer4"
      data-section="5"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="max-w-lg" data-section-content>
          <LabelLine text="Layer 04 of 04" color={LAYER_COLORS.layer4} />

          <h2 className="section-heading mb-4">
            <span style={{ color: LAYER_COLORS.layer4 }}>Human factors.</span>
            <br />
            What people say.
          </h2>

          <p className="section-body mb-8">
            Crew fatigue scores, scheduling pressure, communication anomalies,
            rest violations, rostering patterns. The human variable is the
            hardest signal to read — and the most important.
          </p>

          <div className="space-y-4">
            {[
              { label: 'Fatigue Risk Score', value: 'Critical → 8.7', delta: '+2.3 this week', warn: true },
              { label: 'Rest Compliance',    value: '91.4%',           delta: '-3.2% vs baseline', warn: true },
              { label: 'Crew Comm Anomalies',value: '3 flagged',       delta: 'Last 48h', warn: false },
              { label: 'Scheduling Pressure Index', value: '6.1 / 10', delta: 'High season', warn: false },
            ].map((item) => (
              <div key={item.label} className="glass-card px-4 py-3 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[11px] text-[#4A6278] mb-1">{item.label}</div>
                  <div className="font-mono text-sm text-[#F0F4F8]">{item.value}</div>
                </div>
                <div
                  className="font-mono text-[10px] px-2 py-1 rounded"
                  style={{
                    color: item.warn ? '#EF4444' : '#F59E0B',
                    background: item.warn ? 'rgba(239,68,68,0.1)' : 'rgba(245,158,11,0.1)',
                  }}
                >
                  {item.delta}
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
