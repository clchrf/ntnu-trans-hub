import { useState } from 'react'

export default function PdfDownloadLink({ href, iconSrc, className, children }) {
  const [loading, setLoading] = useState(false)

  async function handleClick(e) {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      const res = await fetch(href)
      const blob = await res.blob()
      const blobUrl = URL.createObjectURL(blob)
      window.open(blobUrl, '_blank', 'noopener')
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000)
    } catch {
      window.open(href, '_blank', 'noopener')
    } finally {
      setLoading(false)
    }
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" onClick={handleClick} className={className}>
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <img src={iconSrc} alt="" className="h-4 w-4 animate-spin object-contain" />
          載入中…
        </span>
      ) : (
        children
      )}
    </a>
  )
}
