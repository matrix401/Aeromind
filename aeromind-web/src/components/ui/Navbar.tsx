import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Platform',     href: '#layer1' },
  { label: 'Intelligence', href: '#mosaic' },
  { label: 'Prediction',   href: '#prediction' },
  { label: 'About',        href: '#resolution' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div
        className={`
          liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3
          flex items-center justify-between
          transition-all duration-500
          ${scrolled ? 'bg-[rgba(5,5,8,0.6)]' : 'bg-transparent'}
        `}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-full border border-teal/60" />
            <div className="absolute inset-0 rounded-full border border-teal/20 scale-150" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-teal group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="font-semibold text-[15px] tracking-wide text-white">
            Aero<span className="text-teal">mind</span>
          </span>

          {/* Desktop nav links inline */}
          <div className="hidden md:flex items-center gap-7 ml-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] tracking-widest text-white/50 hover:text-white/90 transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </a>

        {/* CTA */}
        <a
          href="#resolution"
          className="liquid-glass rounded-full px-5 py-2 text-white text-[13px] font-medium hover:bg-white/5 transition-colors flex-shrink-0"
        >
          Request Access
        </a>
      </div>
    </nav>
  )
}
