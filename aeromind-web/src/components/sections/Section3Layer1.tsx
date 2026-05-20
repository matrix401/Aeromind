import { FadeIn } from '../ui/FadeIn'
import { LabelLine } from '../ui/LabelLine'
import { LAYER_COLORS } from '../../utils/constants'

const SIGNALS = [
  'ADS-B position & velocity',
  'Engine N1/N2 RPM',
  'EGT (exhaust gas temp)',
  'Fuel flow rate',
  'ACARS digital messages',
  'FDR flight parameters',
  'Vibration signatures',
  'Hydraulic pressure',
]

export function Section3Layer1() {
  return (
    <section
      id="layer1"
      data-section="2"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn className="max-w-2xl" data-section-content>
          <LabelLine text="Layer 01 of 04" color={LAYER_COLORS.layer1} />

          <h2 className="section-heading mb-4">
            <span style={{ color: LAYER_COLORS.layer1 }}>Telemetry.</span>
            <br />
            <em className="serif-italic text-white/50">What the aircraft says.</em>
          </h2>

          <p className="section-body mb-10">
            Real-time signals from every airframe in the sky. ADS-B, ACARS,
            engine health parameters, flight data recorder streams — the aircraft
            is always broadcasting. Aeromind always listens.
          </p>

          <div className="grid grid-cols-2 gap-2">
            {SIGNALS.map((signal, i) => (
              <div key={i} className="liquid-glass rounded-xl px-4 py-3 flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: LAYER_COLORS.layer1 }}
                />
                <span className="font-mono text-[11px] text-white/50">{signal}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
