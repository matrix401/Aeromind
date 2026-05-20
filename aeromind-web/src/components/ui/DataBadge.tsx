interface DataBadgeProps {
  label: string
  value: string
  color?: string
}

export function DataBadge({ label, value, color = '#00C896' }: DataBadgeProps) {
  return (
    <div className="glass-card px-4 py-3 flex items-center gap-3">
      <div
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      />
      <div>
        <div className="font-mono text-[10px] tracking-wider text-[#4A6278] uppercase mb-0.5">
          {label}
        </div>
        <div className="font-mono text-sm text-[#F0F4F8]">{value}</div>
      </div>
    </div>
  )
}
