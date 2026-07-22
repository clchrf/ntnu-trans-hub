export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', className = '' }) {
  const isCenter = align === 'center'

  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 ${isCenter ? 'justify-center' : ''}`}>
          <span className="h-[2px] w-6 bg-navy-950" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-500">{eyebrow}</span>
        </div>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-950 md:text-4xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-[15px] text-navy-500 ${isCenter ? 'mx-auto max-w-xl' : 'max-w-xl'}`}>{subtitle}</p>
      )}
    </div>
  )
}
