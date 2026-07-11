import { useEffect, useState } from 'react'
import { faqs, questionIgDmUrl, aiAssistant, usefulLinks, contactPhones } from '../data/content'

function AccordionItem({ index, item, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index
  const id = `faq-${index}`

  return (
    <div id={id} className="scroll-mt-28 border-b border-navy-100 py-5">
      <button
        type="button"
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-medium text-navy-950">{item.q}</span>
        <span
          className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-transform ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <p className="mt-3 text-[14px] leading-relaxed text-navy-600">{item.a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '')
      const match = hash.match(/^faq-(\d+)$/)
      if (match) {
        setOpenIndex(Number(match[1]))
      }
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  return (
    <section id="faq" className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-navy-950 md:text-4xl">FAQ 與提問</h2>
        <p className="mt-4 text-[15px] text-navy-500">最常被問的問題整理在這裡，找不到答案就直接留言問我們</p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {faqs.map((item, i) => (
            <AccordionItem key={i} index={i} item={item} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          ))}

          <div className="mt-8 rounded-3xl bg-navy-950 p-8 text-center text-white">
            <p className="text-[16px] font-semibold">還有問題沒解決？</p>
            <p className="mt-2 text-[13px] text-navy-200">
              24 小時都在線的轉聯 AI 小助理，或私訊 Instagram，學長姐會盡快回覆
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={aiAssistant.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-white px-6 py-2.5 text-[13px] font-medium text-navy-950 transition hover:bg-navy-100"
              >
                問{aiAssistant.label}
              </a>
              <a
                href={questionIgDmUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full border border-white/40 px-6 py-2.5 text-[13px] font-medium text-white transition hover:bg-white/10"
              >
                私訊 Instagram 提問
              </a>
            </div>
            <ul className="mx-auto mt-6 max-w-sm space-y-1.5 text-left">
              {aiAssistant.tips.map((t, i) => (
                <li key={i} className="text-[12px] leading-relaxed text-navy-300">
                  ・{t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-[14px] font-semibold uppercase tracking-wider text-navy-400">常用連結</h3>
          <ul className="mt-4 space-y-2.5">
            {usefulLinks.map((l, i) => (
              <li key={i}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] text-navy-600 underline decoration-navy-200 underline-offset-4 hover:text-navy-950"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-[14px] font-semibold uppercase tracking-wider text-navy-400">教務處分機</h3>
          <ul className="mt-4 space-y-2">
            {contactPhones.map((c, i) => (
              <li key={i} className="flex justify-between text-[12px] text-navy-600">
                <span>{c.item}｜{c.office}</span>
                <span className="font-medium text-navy-950">{c.phone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
