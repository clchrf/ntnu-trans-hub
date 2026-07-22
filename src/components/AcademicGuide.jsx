import { useState } from 'react'
import { creditTransfer, courseSelection, graduationRequirements } from '../data/content'
import OfficialLink from './OfficialLink'
import SectionHeading from './SectionHeading'
import { BookIcon } from './icons'

const TABS = ['學分抵免', '選課與通識指南', '畢業門檻與語言檢定']

function Pill({ children }) {
  return (
    <span className="mt-0.5 h-1.5 w-1.5 flex-none rounded-full bg-navy-400" aria-hidden />
  )
}

function CreditTransferPanel() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <h3 className="text-[15px] font-semibold text-navy-950">申請資格</h3>
        <ul className="mt-3 space-y-3">
          {creditTransfer.eligibility.map((e, i) => (
            <li key={i} className="flex items-start gap-2 text-[14px] leading-relaxed text-navy-600">
              <Pill />
              {e}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
          <p className="text-[13px] font-semibold text-rose-700">申請期間</p>
          <p className="mt-1 text-[14px] text-rose-700">{creditTransfer.window}</p>
          <p className="mt-2 text-[12px] leading-relaxed text-rose-600">{creditTransfer.generalWindowNote}</p>
        </div>

        <h3 className="mt-6 text-[15px] font-semibold text-navy-950">準備文件</h3>
        <ul className="mt-3 space-y-2">
          {creditTransfer.documentsNeeded.map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-[14px] leading-relaxed text-navy-600">
              <Pill />
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[15px] font-semibold text-navy-950">申請流程</h3>
        <ol className="mt-3 space-y-3">
          {creditTransfer.procedure.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-navy-600">
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-navy-950 text-[11px] font-semibold text-white">
                {i + 1}
              </span>
              {p}
            </li>
          ))}
        </ol>
      </div>

      <div className="md:col-span-2">
        <h3 className="text-[15px] font-semibold text-navy-950">注意事項</h3>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {creditTransfer.rules.map((r, i) => (
            <li key={i} className="flex items-start gap-2 rounded-xl bg-navy-50 p-4 text-[13px] leading-relaxed text-navy-700">
              <Pill />
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[12px] text-navy-400">諮詢窗口：{creditTransfer.contact}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <OfficialLink link={creditTransfer.officialLink} />
          <OfficialLink link={creditTransfer.handbookLink} />
        </div>
      </div>

      <div className="md:col-span-2 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-navy-50 p-5">
          <h4 className="text-[13px] font-semibold text-navy-950">{creditTransfer.splitFormTip.title}</h4>
          <p className="mt-2 text-[12px] leading-relaxed text-navy-600">{creditTransfer.splitFormTip.detail}</p>
        </div>
        <div className="rounded-2xl bg-navy-50 p-5">
          <h4 className="text-[13px] font-semibold text-navy-950">{creditTransfer.selfCheckTip.title}</h4>
          <p className="mt-2 text-[12px] leading-relaxed text-navy-600">{creditTransfer.selfCheckTip.detail}</p>
        </div>
        <div className="rounded-2xl bg-navy-50 p-5">
          <h4 className="text-[13px] font-semibold text-navy-950">{creditTransfer.englishChineseMakeup.title}</h4>
          <p className="mt-2 text-[12px] leading-relaxed text-navy-600">{creditTransfer.englishChineseMakeup.detail}</p>
        </div>
      </div>
    </div>
  )
}

function CourseSelectionPanel() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courseSelection.phases.map((p, i) => (
          <div key={i} className="card-ios p-5">
            <p className="text-[13px] font-semibold text-navy-950">{p.name}</p>
            <p className="mt-1 text-[13px] text-navy-500">{p.date}</p>
            <p className="mt-2 text-[12px] leading-relaxed text-navy-500">{p.note}</p>
          </div>
        ))}
      </div>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {courseSelection.notes.map((n, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-navy-600">
            <Pill />
            {n}
          </li>
        ))}
      </ul>
      <OfficialLink link={courseSelection.officialLink} className="mt-4" />

      <div className="mt-10">
        <h3 className="text-[15px] font-semibold text-navy-950">{courseSelection.generalEducation.summary}</h3>
        <div className="mt-4 overflow-hidden rounded-2xl border border-navy-100">
          <table className="w-full text-left text-[13px]">
            <tbody>
              {courseSelection.generalEducation.structure.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-navy-50/60'}>
                  <td className="px-5 py-3 text-navy-700">{row.area}</td>
                  <td className="whitespace-nowrap px-5 py-3 text-right font-medium text-navy-950">{row.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-xl bg-amber-50 p-4 text-[12px] leading-relaxed text-amber-800">
          待確認：{courseSelection.generalEducation.caveat}
        </p>
        <OfficialLink link={courseSelection.generalEducation.officialLink} className="mt-4" />
      </div>

      <div className="mt-10 rounded-2xl bg-navy-50 p-6">
        <h3 className="text-[15px] font-semibold text-navy-950">{courseSelection.crossProgram.title}</h3>
        <ul className="mt-3 space-y-2">
          {courseSelection.crossProgram.rules.map((r, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-navy-700">
              <Pill />
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12px] leading-relaxed text-navy-500">
          待確認：{courseSelection.crossProgram.notice}
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <OfficialLink link={courseSelection.crossProgram.link} />
          <OfficialLink link={courseSelection.crossProgram.doubleMajorLink} />
          <OfficialLink link={courseSelection.crossProgram.transferRuleLink} />
          <OfficialLink link={courseSelection.crossProgram.qaLink} />
        </div>

        <div className="mt-5 rounded-xl bg-white p-4">
          <h4 className="text-[13px] font-semibold text-navy-950">
            {courseSelection.crossProgram.changeMajorWorkaround.title}
          </h4>
          <p className="mt-2 text-[13px] leading-relaxed text-navy-600">
            {courseSelection.crossProgram.changeMajorWorkaround.detail}
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-amber-700">
            待確認：{courseSelection.crossProgram.changeMajorWorkaround.notice}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-navy-50 p-6">
        <h3 className="text-[15px] font-semibold text-navy-950">{courseSelection.teachingProgram.title}</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-4">
            <h4 className="text-[13px] font-semibold text-navy-950">
              {courseSelection.teachingProgram.withPriorStatus.title}
            </h4>
            <p className="mt-2 text-[12px] leading-relaxed text-navy-600">
              {courseSelection.teachingProgram.withPriorStatus.detail}
            </p>
          </div>
          <div className="rounded-xl bg-white p-4">
            <h4 className="text-[13px] font-semibold text-navy-950">
              {courseSelection.teachingProgram.creditTransferRule.title}
            </h4>
            <p className="mt-2 text-[12px] leading-relaxed text-navy-600">
              {courseSelection.teachingProgram.creditTransferRule.detail}
            </p>
          </div>
          <div className="rounded-xl bg-white p-4">
            <h4 className="text-[13px] font-semibold text-navy-950">
              {courseSelection.teachingProgram.withoutPriorStatus.title}
            </h4>
            <p className="mt-2 text-[12px] leading-relaxed text-navy-600">
              {courseSelection.teachingProgram.withoutPriorStatus.detail}
            </p>
          </div>
        </div>
        <OfficialLink link={courseSelection.teachingProgram.officialLink} className="mt-4" />
      </div>
    </div>
  )
}

function GraduationPanel() {
  return (
    <div>
      <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
        <p className="text-[14px] leading-relaxed text-amber-800">{graduationRequirements.notice}</p>
      </div>
      <h3 className="mt-8 text-[15px] font-semibold text-navy-950">建議查詢管道</h3>
      <ul className="mt-3 space-y-3">
        {graduationRequirements.channels.map((c, i) => (
          <li key={i} className="flex items-start gap-2 text-[14px] leading-relaxed text-navy-600">
            <Pill />
            {c}
          </li>
        ))}
      </ul>
      <OfficialLink link={graduationRequirements.officialLink} className="mt-5" />
    </div>
  )
}

export default function AcademicGuide() {
  const [tab, setTab] = useState(0)

  return (
    <section id="academic-guide" className="bg-navy-50/50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          icon={BookIcon}
          eyebrow="ACADEMIC GUIDE"
          title="學務指南"
          subtitle="學分抵免、選課、通識、畢業門檻，轉學生最常搞混的規定整理在這裡"
        />

        <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2 rounded-full bg-white p-1.5 shadow-sm">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`flex-1 rounded-full px-4 py-2 text-[13px] font-medium transition ${
                tab === i ? 'bg-navy-950 text-white' : 'text-navy-600 hover:text-navy-950'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="card-ios mt-12 p-8 md:p-12">
          {tab === 0 && <CreditTransferPanel />}
          {tab === 1 && <CourseSelectionPanel />}
          {tab === 2 && <GraduationPanel />}
        </div>
      </div>
    </section>
  )
}
