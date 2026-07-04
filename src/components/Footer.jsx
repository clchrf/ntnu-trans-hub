import { club } from '../data/content'

export default function Footer() {
  const base = import.meta.env.BASE_URL

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            {/* Logo 圖片位置：轉聯會 Logo（深色底版本） */}
            <img
              src={`${base}logo/full-white.png`}
              alt="NTNU Trans 轉學生聯會 Logo"
              className="h-20 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-navy-300">
              {club.description}
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-navy-400">聯絡我們</h4>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <a href={`mailto:${club.contact.email}`} className="hover:text-white">
                  {club.contact.email}
                </a>
              </li>
              <li>
                <a href={club.contact.instagram.url} target="_blank" rel="noreferrer" className="hover:text-white">
                  Instagram　{club.contact.instagram.handle}
                </a>
              </li>
              <li>
                <a href={club.contact.facebook.url} target="_blank" rel="noreferrer" className="hover:text-white">
                  Facebook 粉絲專頁
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-navy-400">快速連結</h4>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li><a href="#timeline" className="hover:text-white">重要時程</a></li>
              <li><a href="#academic-guide" className="hover:text-white">學務指南</a></li>
              <li><a href="#transportation" className="hover:text-white">跨區交通</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ 與提問</a></li>
              <li><a href="#feedback" className="hover:text-white">許願池</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-navy-800 pt-6 text-[12px] text-navy-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {club.englishName}．{club.tagline}</p>
          <p>本站內容由社員整理，正式規定請以教務處 / 系辦公告為準。</p>
        </div>
      </div>
    </footer>
  )
}
