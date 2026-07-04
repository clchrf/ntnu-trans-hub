import { useState } from 'react'

const NAV_ITEMS = [
  { label: '重要時程', href: '#timeline' },
  { label: '學務指南', href: '#academic-guide' },
  { label: '跨區交通', href: '#transportation' },
  { label: '在地資源', href: '#resources' },
  { label: 'FAQ', href: '#faq' },
  { label: '許願池', href: '#feedback' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const base = import.meta.env.BASE_URL

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          {/* Logo 圖片位置：轉聯會 Logo（淺色底版本） */}
          <img
            src={`${base}logo/icon-navy.png`}
            alt="NTNU Trans 轉學生聯會 Logo"
            className="h-9 w-9 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-navy-950">NTNU Trans</span>
            <span className="text-[11px] text-navy-500">轉學生聯會</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[14px] font-medium text-navy-700 transition hover:text-navy-950"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#faq"
          className="hidden rounded-full bg-navy-950 px-5 py-2 text-[13px] font-medium text-white transition hover:bg-navy-800 md:inline-block"
        >
          我要提問
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-navy-950 md:hidden"
          aria-label="開啟選單"
        >
          <span className="block h-[1.5px] w-5 bg-navy-950 before:absolute before:-mt-2 before:block before:h-[1.5px] before:w-5 before:bg-navy-950 after:absolute after:mt-2 after:block after:h-[1.5px] after:w-5 after:bg-navy-950" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-100 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-navy-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#faq"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-navy-950 px-5 py-2 text-[13px] font-medium text-white"
              >
                我要提問
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
