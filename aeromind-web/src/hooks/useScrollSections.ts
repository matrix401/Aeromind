import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGlobeStore } from '../store/useGlobeStore'
import { SECTION_COUNT } from '../utils/constants'

gsap.registerPlugin(ScrollTrigger)

export function useScrollSections() {
  const initialized = useRef(false)
  const setSection = useGlobeStore((s) => s.setSection)
  const setMorphProgress = useGlobeStore((s) => s.setMorphProgress)
  const setLayerOpacity = useGlobeStore((s) => s.setLayerOpacity)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Small delay to let DOM render
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('[data-section]')

      sections.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => {
            setSection(i)
            animateLayersForSection(i, setLayerOpacity)
          },
          onEnterBack: () => {
            setSection(i)
            animateLayersForSection(i, setLayerOpacity)
          },
        })

        // Morphprogress: track how far into each section we are
        ScrollTrigger.create({
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            if (useGlobeStore.getState().currentSection === i) {
              setMorphProgress(self.progress)
            }
          },
        })
      })

      // Fade sections in as they enter
      gsap.utils.toArray<HTMLElement>('[data-section-content]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [setSection, setMorphProgress, setLayerOpacity])
}

type SetLayerOpacity = ReturnType<typeof useGlobeStore.getState>['setLayerOpacity']

function animateLayersForSection(i: number, set: SetLayerOpacity) {
  const targets: Parameters<SetLayerOpacity>[] = []

  // Reset all
  const base = { threads: 0.3, weather: 0, graph: 0, human: 0, prediction: 0 }

  const map: Record<number, Partial<typeof base>> = {
    0: { threads: 0.3 },
    1: { threads: 0.8 },
    2: { threads: 0.8 },
    3: { threads: 0.6, weather: 0.8 },
    4: { threads: 0.4, weather: 0.4, graph: 0.8 },
    5: { threads: 0.3, graph: 0.6, human: 0.8 },
    6: { threads: 0.9, weather: 0.7, graph: 0.7, human: 0.7 },
    7: { threads: 0.7, weather: 0.4, graph: 0.4, human: 0.4 },
    8: { threads: 0.5, weather: 0.2, graph: 0.2, prediction: 0.9 },
    9: { threads: 0.3, prediction: 0.5 },
  }

  const config = { ...base, ...(map[Math.min(i, SECTION_COUNT - 1)] ?? {}) }

  for (const [key, val] of Object.entries(config) as [keyof typeof base, number][]) {
    set(key, val)
  }
  void targets
}
