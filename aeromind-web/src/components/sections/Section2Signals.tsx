import { FadeIn } from '../ui/FadeIn'
import { LabelLine } from '../ui/LabelLine'

const STATS = [
  { label: 'Telemetry events / flight / hr', value: '10,000+', color: '#4FC3F7' },
  { label: 'Weather data points / day',       value: '2.4M',    color: '#7C3AED' },
  { label: 'MRO records (global fleet)',      value: '480M+',   color: '#F59E0B' },
  { label: 'Crew scheduling variables',       value: '1,200+',  color: '#FB923C' },
  { label: 'Systems that read all of it',     value: '0',       color: '#EF4444' },
]

export function Section2Signals() {
  return (
    <section
      id="signals"
      data-section="1"
      className="relative min-h-screen flex flex-col justify-center px-6 section-vignette"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        <FadeIn className="max-w-lg" data-section-content>
          <LabelLine text="The Signal Problem" />
          <h2 className="section-heading mb-6">
            The signals exist.
            <br />
            <em className="serif-italic text-white/40">No one reads them all.</em>
          </h2>
          <p className="section-body mb-8">
            Every flight generates 10,000+ data events per hour. Scattered across
            systems, formats, and silos — never synthesised into a coherent picture.
          </p>
          <p className="section-body">
            The next airline distress event is already encoded in data that exists today.
            The question is whether anyone is listening.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex-1 max-w-sm w-full">
          <div className="liquid-glass rounded-3xl p-6 space-y-1">
            {STATS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-3.5 border-b border-white/[0.05] last:border-0"
              >
                <span className="font-mono text-[11px] text-white/40 tracking-wide pr-4">{item.label}</span>
                <span className="font-mono text-lg font-medium flex-shrink-0" style={{ color: item.color }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
