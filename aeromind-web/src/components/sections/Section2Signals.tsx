import { LabelLine } from '../ui/LabelLine'

export function Section2Signals() {
  return (
    <section
      id="signals"
      data-section="1"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        {/* Left: text */}
        <div className="max-w-lg" data-section-content>
          <LabelLine text="The Signal Problem" />

          <h2 className="section-heading mb-6">
            The signals exist.
            <br />
            <span className="text-[#8BA3B8] font-light">No one reads them all.</span>
          </h2>

          <p className="section-body mb-8">
            Every flight generates 10,000+ data events per hour. Scattered across
            systems, formats, and silos — never synthesised into a coherent picture.
          </p>

          <p className="section-body">
            The next airline distress event is already encoded in data that exists today.
            The question is whether anyone is listening.
          </p>
        </div>

        {/* Right: stat panel */}
        <div className="flex-1 max-w-sm" data-section-content>
          <div className="glass-card p-6 space-y-4">
            {[
              { label: 'Telemetry events / flight / hr', value: '10,000+', color: '#4FC3F7' },
              { label: 'Weather data points / day',       value: '2.4M',    color: '#7C3AED' },
              { label: 'MRO records (global fleet)',      value: '480M+',   color: '#F59E0B' },
              { label: 'Crew scheduling variables',       value: '1,200+',  color: '#FB923C' },
              { label: 'Systems that read all of it',     value: '0',       color: '#EF4444' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.05)] last:border-0">
                <span className="font-mono text-[11px] text-[#8BA3B8] tracking-wide">{item.label}</span>
                <span className="font-mono text-lg font-medium" style={{ color: item.color }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
