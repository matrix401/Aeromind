import { FadeIn } from '../ui/FadeIn'
import { LabelLine } from '../ui/LabelLine'
import { LAYER_COLORS } from '../../utils/constants'

const ALERTS = [
  {
    flight: 'XY4412', route: 'DXB → LHR', risk: 95, level: 'CRITICAL' as const,
    signals: ['Engine EGT +18% deviation', 'Crew fatigue score 9.1/10', 'MRO deferred 3x AD'],
  },
  {
    flight: 'ZG8801', route: 'SIN → NRT', risk: 71, level: 'HIGH' as const,
    signals: ['Weather corridor severity 7.2', 'Rest violation: 3h short'],
  },
  {
    flight: 'AM2293', route: 'MEX → LAX', risk: 44, level: 'WATCH' as const,
    signals: ['Hydraulic pressure trending low', 'Scheduling pressure index 7.4'],
  },
]

const LEVEL_COLOR = { CRITICAL: '#EF4444', HIGH: '#F59E0B', WATCH: '#4FC3F7' }

export function Section9Prediction() {
  return (
    <section
      id="prediction"
      data-section="8"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn data-section-content>
          <LabelLine text="Layer 05 — Composite Prediction" color={LAYER_COLORS.layer5} />

          <h2 className="section-heading mb-4">
            Not reaction.
            <br />
            <em className="serif-italic text-gradient-teal">Anticipation.</em>
          </h2>

          <p className="section-body mb-12 max-w-2xl">
            Layer 5 is not a fifth data source. It is the synthesis of all four —
            a composite distress prediction that surfaces which flights need
            attention before the crew knows it themselves.
          </p>

          {/* Video feature + cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {ALERTS.map((alert) => (
              <div key={alert.flight} className="liquid-glass rounded-3xl p-5 group">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-mono text-sm font-medium text-white">{alert.flight}</div>
                    <div className="font-mono text-[10px] text-white/30">{alert.route}</div>
                  </div>
                  <div
                    className="font-mono text-[10px] px-3 py-1 rounded-full"
                    style={{
                      color: LEVEL_COLOR[alert.level],
                      background: `${LEVEL_COLOR[alert.level]}12`,
                    }}
                  >
                    {alert.level}
                  </div>
                </div>

                {/* Risk bar */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-white/30">Distress score</span>
                    <span
                      className="font-mono text-[10px] font-medium"
                      style={{ color: LEVEL_COLOR[alert.level] }}
                    >
                      {alert.risk}/100
                    </span>
                  </div>
                  <div className="h-0.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${alert.risk}%`, background: LEVEL_COLOR[alert.level] }}
                    />
                  </div>
                </div>

                {/* Signals */}
                <div className="space-y-2">
                  {alert.signals.map((sig) => (
                    <div key={sig} className="flex items-start gap-2">
                      <div
                        className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: LEVEL_COLOR[alert.level] }}
                      />
                      <span className="font-mono text-[10px] text-white/40 leading-tight">{sig}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
