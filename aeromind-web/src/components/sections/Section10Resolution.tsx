import { LabelLine } from '../ui/LabelLine'

export function Section10Resolution() {
  return (
    <section
      id="resolution"
      data-section="9"
      className="relative min-h-screen flex flex-col justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-2xl" data-section-content>
          <LabelLine text="Aeromind" />

          <h2 className="section-heading mb-6">
            See everything.
            <br />
            <span className="text-gradient-teal">Miss nothing.</span>
          </h2>

          <p className="section-body mb-10">
            Aeromind is the first platform to synthesise all four layers of
            aviation intelligence into a single, real-time composite signal —
            predicting airline and flight distress 6 to 18 months before
            conventional systems raise a flag.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="mailto:contact@aeromind.io" className="btn-primary">
              Request Access
            </a>
            <a href="#hero" className="btn-ghost">
              Back to top
            </a>
          </div>

          {/* Footer meta */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.06)] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border border-teal flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
              </div>
              <span className="font-semibold text-sm text-[#F0F4F8]">
                Aero<span className="text-teal">mind</span>
              </span>
            </div>

            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Security'].map((link) => (
                <a key={link} href="#" className="font-mono text-[11px] text-[#4A6278] hover:text-teal transition-colors">
                  {link}
                </a>
              ))}
            </div>

            <span className="font-mono text-[11px] text-[#4A6278]">
              © 2025 Aeromind Inc.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
