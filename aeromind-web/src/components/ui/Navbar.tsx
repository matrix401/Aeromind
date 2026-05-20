import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Platform', href: '#layer1' },
  { label: 'Intelligence', href: '#mosaic' },
  { label: 'Prediction', href: '#prediction' },
  { label: 'About', href: '#resolution' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'py-3 bg-[rgba(6,16,26,0.92)] backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]'
          : 'py-6 bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-7 h-7 rounded-full border border-teal flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-teal group-hover:animate-pulse" />
            </div>
            <div className="absolute inset-0 rounded-full border border-teal opacity-30 scale-150" />
          </div>
          <span className="font-semibold text-[15px] tracking-wide text-[#F0F4F8]">
            Aero<span className="text-teal">mind</span>
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[12px] tracking-wider text-[#8BA3B8] hover:text-teal transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#resolution"
          className="btn-primary text-xs py-2.5 px-5"
        >
          Request Access
        </a>
      </div>
    </nav>
  )
}
