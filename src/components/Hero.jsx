import SearchBar from './SearchBar'
import PdfDownloadLink from './PdfDownloadLink'
import { club, infoPackPdf } from '../data/content'

export default function Hero() {
  const base = import.meta.env.BASE_URL

  return (
    <section id="top" className="bg-white pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="h-[2px] w-6 bg-navy-950" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-500">
            {club.edition}．{club.englishName}
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy-950 md:text-6xl">
          給轉學生的
          <br className="hidden md:block" />
          師大生活資訊站
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-navy-600 md:text-lg">
          學分抵免死線、選課時程、跨校區通勤、在地生活資源，通通整理在這裡。
          <br />
          {club.tagline}。
        </p>

        <div className="mx-auto mt-10 max-w-xl">
          <SearchBar />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#timeline"
            className="rounded-full bg-navy-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-navy-800"
          >
            查看 115 學年度時程
          </a>
          <a
            href="#faq"
            className="rounded-full border border-navy-200 px-6 py-3 text-[14px] font-medium text-navy-800 transition hover:border-navy-400"
          >
            我有問題想問
          </a>
          <PdfDownloadLink
            href={`${base}files/${infoPackPdf.filename}`}
            iconSrc={`${base}logo/icon-navy.png`}
            className="rounded-full border border-navy-200 px-6 py-3 text-[14px] font-medium text-navy-800 transition hover:border-navy-400"
          >
            下載資訊懶人包 PDF
          </PdfDownloadLink>
        </div>
      </div>
    </section>
  )
}
