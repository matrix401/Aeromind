import { LabelLine } from '../ui/LabelLine'
import { LAYER_COLORS } from '../../utils/constants'

const TELEMETRY_SIGNALS = [
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
        <div className="max-w-2xl" data-section-content>
          <LabelLine text="Layer 01 of 04" color={LAYER_COLORS.layer1} />

          <h2 className="section-heading mb-4">
            <span style={{ color: LAYER_COLORS.layer1 }}>Telemetry.</span>
            <br />
            What the aircraft says.
          </h2>

          <p className="section-body mb-8">
            Real-time signals from every airframe in the sky. ADS-B, ACARS,
            engine health parameters, flight data recorder streams — the aircraft
            is always broadcasting. Aeromind always listens.
          </p>

          <div className="grid grid-cols-2 gap-2">
            {TELEMETRY_SIGNALS.map((signal, i) => (
              <div
                key={i}
                className="glass-card px-3 py-2.5 flex items-center gap-2"
              >
                <div
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: LAYER_COLORS.layer1 }}
                />
                <span className="font-mono text-[11px] text-[#8BA3B8]">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
