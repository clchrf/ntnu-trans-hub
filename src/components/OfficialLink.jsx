export default function OfficialLink({ link, className = '' }) {
  if (!link) return null

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-[12px] font-medium text-navy-700 transition hover:bg-navy-100 ${className}`}
    >
      <span className="rounded-full bg-navy-950 px-1.5 py-0.5 text-[10px] font-semibold text-white">官方</span>
      {link.label}
      <span aria-hidden>↗</span>
    </a>
  )
}
