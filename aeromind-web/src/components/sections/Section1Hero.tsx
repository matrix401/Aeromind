import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ScrollIndicator } from '../ui/ScrollIndicator'

export function Section1Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.style.opacity = '0'

    const onCanPlay = () => {
      video.play().catch(() => {})
      let start: number | null = null
      const fadeIn = (ts: number) => {
        if (!start) start = ts
        const progress = Math.min((ts - start) / 600, 1)
        video.style.opacity = String(progress * 0.55)
        if (progress < 1) requestAnimationFrame(fadeIn)
      }
      requestAnimationFrame(fadeIn)
    }

    const onTimeUpdate = () => {
      if (!video.duration) return
      if (video.duration - video.currentTime <= 0.7) {
        let start: number | null = null
        const cur = parseFloat(video.style.opacity)
        const fadeOut = (ts: number) => {
          if (!start) start = ts
          const progress = Math.min((ts - start) / 500, 1)
          video.style.opacity = String(cur * (1 - progress))
          if (progress < 1) requestAnimationFrame(fadeOut)
        }
        requestAnimationFrame(fadeOut)
      }
    }

    const onEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        let start: number | null = null
        const fadeIn = (ts: number) => {
          if (!start) start = ts
          const p = Math.min((ts - start) / 600, 1)
          video.style.opacity = String(p * 0.55)
          if (p < 1) requestAnimationFrame(fadeIn)
        }
        requestAnimationFrame(fadeIn)
      }, 100)
    }

    video.addEventListener('canplay', onCanPlay)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('canplay', onCanPlay)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  return (
    <section
      id="hero"
      data-section="0"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Video background — layered behind the 3D globe */}
      <video
        ref={videoRef}
        src="/videos/hero-bg.mp4"
        muted
        playsInline
        preload="auto"
        className="hero-video"
        style={{ zIndex: 2, opacity: 0 }}
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,8,0.7) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ zIndex: 3, background: 'linear-gradient(to top, #050508, transparent)' }}
      />

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center px-6 pt-28" style={{ zIndex: 4 }}>
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="max-w-3xl"
            data-section-content
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-px bg-teal" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-teal">
                Aviation Intelligence Platform
              </span>
            </div>

            {/* Headline — Instrument Serif */}
            <h1 className="section-heading mb-6">
              The signals exist.
              <br />
              <em className="serif-italic text-white/50">
                No one reads them all.
              </em>
              <br />
              <span className="text-gradient-teal">Until now.</span>
            </h1>

            <p className="section-body mb-10 max-w-2xl">
              Four layers of aviation intelligence — telemetry, environment,
              maintenance, human factors — synthesised in real time into one
              composite signal. Aeromind predicts distress 6 to 18 months
              before conventional systems raise a flag.
            </p>

            {/* Live data stats — liquid glass pills */}
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { label: 'Flights / day',      value: '87,420',   color: '#00C896' },
                { label: 'Signals per flight', value: '154',      color: '#4FC3F7' },
                { label: 'Horizon',            value: '6–18 mo',  color: '#F59E0B' },
              ].map((stat) => (
                <div key={stat.label} className="liquid-glass rounded-full px-4 py-2 flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: stat.color, boxShadow: `0 0 8px ${stat.color}` }}
                  />
                  <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="font-mono text-[13px] text-white font-medium">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href="#mosaic" className="btn-primary">
                See the Intelligence
              </a>
              <a href="#signals" className="btn-ghost">
                How it works
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
