import { GlobeScene }          from './components/scene/GlobeScene'
import { Navbar }               from './components/ui/Navbar'
import { Section1Hero }         from './components/sections/Section1Hero'
import { Section2Signals }      from './components/sections/Section2Signals'
import { Section3Layer1 }       from './components/sections/Section3Layer1'
import { Section4Layer2 }       from './components/sections/Section4Layer2'
import { Section5Layer3 }       from './components/sections/Section5Layer3'
import { Section6Layer4 }       from './components/sections/Section6Layer4'
import { Section7Noise }        from './components/sections/Section7Noise'
import { Section8Mosaic }       from './components/sections/Section8Mosaic'
import { Section9Prediction }   from './components/sections/Section9Prediction'
import { Section10Resolution }  from './components/sections/Section10Resolution'
import { useSmoothScroll }      from './hooks/useSmoothScroll'
import { useScrollSections }    from './hooks/useScrollSections'

function ScrollSetup() {
  useSmoothScroll()
  useScrollSections()
  return null
}

export default function App() {
  return (
    <>
      {/* Fixed 3D canvas — always behind */}
      <GlobeScene />

      {/* Scroll setup — registers Lenis + GSAP ScrollTrigger */}
      <ScrollSetup />

      {/* Fixed navigation */}
      <Navbar />

      {/* Scrollable content layers over canvas */}
      <div id="scroll-container">
        <Section1Hero />
        <Section2Signals />
        <Section3Layer1 />
        <Section4Layer2 />
        <Section5Layer3 />
        <Section6Layer4 />
        <Section7Noise />
        <Section8Mosaic />
        <Section9Prediction />
        <Section10Resolution />
      </div>
    </>
  )
}
