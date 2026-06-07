import { motion } from 'framer-motion'
import { FadeIn } from '../ui/FadeIn'

export function Section10Resolution() {
  return (
    <section
      id="resolution"
      data-section="9"
      className="relative px-6 pb-12"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Featured video panel */}
        <FadeIn className="rounded-3xl overflow-hidden aspect-video mb-16 relative group">
          <video
            src="/videos/feature-bg.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row items-end gap-6">
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md">
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">
                Our Approach
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed font-light">
                We believe in the power of mosaic intelligence. Every signal
                tells a partial story. Aeromind reads the whole picture —
                before the system fails, before the crew knows, before the
                regulator notices.
              </p>
            </div>
            <motion.a
              href="mailto:contact@aeromind.io"
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Access
            </motion.a>
            <form
  action="https://formspree.io/f/mqeopdej"
  method="POST"
  className="liquid-glass rounded-2xl p-6 mt-6 w-full max-w-md flex flex-col gap-4"
>
  <input
    type="text"
    name="name"
    placeholder="Name"
    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
    required
  />

  <textarea
    name="message"
    placeholder="Tell us about your requirements..."
    rows={4}
    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white resize-none"
    required
  />

  <button
    type="submit"
    className="liquid-glass rounded-full px-6 py-3 text-white font-medium"
  >
    Transmit Message
  </button>
</form>
          </div>
        </FadeIn>

        {/* Liquid glass footer */}
        <motion.footer
          className="liquid-glass rounded-3xl p-6 md:p-10 text-white/70"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full border border-teal/60 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                </div>
                <span className="text-xl font-medium text-white">
                  Aero<span className="text-teal">mind</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs text-white/40">
                Aeromind provides composite intelligence across four layers of
                aviation signals — predicting distress before it becomes disaster.
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-7 grid grid-cols-3 gap-6">
              {[
                {
                  title: 'Platform',
                  links: ['Intelligence', 'Prediction', 'Layers', 'API Access', 'Integrations'],
                },
                {
                  title: 'Company',
                  links: ['About', 'Approach', 'Newsroom', 'Careers'],
                },
                {
                  title: 'Support',
                  links: ['Contact', 'Privacy', 'Terms', 'Security'],
                },
              ].map((col) => (
                <div key={col.title}>
                  <div className="text-sm uppercase tracking-wider text-white font-medium mb-4">
                    {col.title}
                  </div>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-xs text-white/40 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-widest text-white/30">
              © 2025 Aeromind Inc. · Palantir for Aviation
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest text-white/30">
                Contact:
              </span>
              <a
                href="mailto:contact@aeromind.io"
                className="text-[11px] text-teal/70 hover:text-teal transition-colors font-mono"
              >
                contact@aeromind.io
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
