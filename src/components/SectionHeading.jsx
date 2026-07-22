export default function SectionHeading({ icon: Icon, eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      {(Icon || eyebrow) && (
        <div className="mb-4 flex items-center justify-center gap-1.5">
          {Icon && (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-950 text-white">
              <Icon className="h-4 w-4" />
            </span>
          )}
          {eyebrow && (
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-400">{eyebrow}</span>
          )}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-navy-950 md:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-xl text-[15px] text-navy-500">{subtitle}</p>}
    </div>
  )
}
