import { useEffect, useState } from 'react'

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
      <span className="font-mono text-[10px] tracking-widest uppercase text-[#4A6278]">
        Scroll
      </span>
      <div className="w-px h-10 bg-gradient-to-b from-teal to-transparent" />
    </div>
  )
}
