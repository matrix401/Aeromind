interface LabelLineProps {
  text: string
  color?: string
}

export function LabelLine({ text, color = '#00C896' }: LabelLineProps) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px flex-shrink-0" style={{ background: color }} />
      <span
        className="font-mono text-[11px] tracking-widest uppercase"
        style={{ color }}
      >
        {text}
      </span>
    </div>
  )
}
