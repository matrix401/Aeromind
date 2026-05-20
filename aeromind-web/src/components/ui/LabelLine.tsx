interface LabelLineProps {
  text: string
  color?: string
}

export function LabelLine({ text, color = '#00C896' }: LabelLineProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-6 h-px flex-shrink-0" style={{ background: color }} />
      <span
        className="font-mono text-[10px] tracking-[0.18em] uppercase"
        style={{ color }}
      >
        {text}
      </span>
    </div>
  )
}
