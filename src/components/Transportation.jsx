import { transportation, courseSelection } from '../data/content'
import OfficialLink from './OfficialLink'

function StopRow({ stops }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {stops.map((s, i) => (
        <div key={i} className="rounded-xl bg-navy-50 p-3">
          <p className="text-[12px] font-semibold text-navy-500">{s.campus}</p>
          <p className="mt-0.5 text-[13px] text-navy-950">{s.location}</p>
        </div>
      ))}
    </div>
  )
}

export default function Transportation() {
  return (
    <section id="transportation" className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-navy-950 md:text-4xl">跨區交通包</h2>
        <p className="mt-4 text-[15px] text-navy-500">校本部、公館兩頭跑，還要跟臺大臺科大跑堂？先看這裡</p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="card-ios p-8">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-700">
            完全免費
          </span>
          <h3 className="mt-4 text-[17px] font-semibold text-navy-950">{transportation.shuttle.title}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-navy-600">{transportation.shuttle.detail}</p>
          <StopRow stops={transportation.shuttle.stops} />
        </div>

        <div className="card-ios p-8">
          <span className="rounded-full bg-navy-100 px-3 py-1 text-[12px] font-medium text-navy-700">
            班次密集
          </span>
          <h3 className="mt-4 text-[17px] font-semibold text-navy-950">{transportation.bus.title}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-navy-600">{transportation.bus.detail}</p>
          <StopRow stops={transportation.bus.stops} />
        </div>
      </div>

      <div className="mt-6 rounded-3xl bg-navy-950 p-8 text-white">
        <h3 className="text-[15px] font-semibold">捷運族怎麼走？</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-navy-200">{transportation.metro.detail}</p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-[17px] font-semibold text-navy-950">怎麼選校區、排課表？</h3>
          <ul className="mt-4 space-y-3">
            {transportation.campusChoice.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-[14px] leading-relaxed text-navy-600">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-navy-400" />
                {c}
              </li>
            ))}
          </ul>
          <OfficialLink link={transportation.housingOfficialLink} className="mt-4" />
        </div>

        <div>
          <h3 className="text-[17px] font-semibold text-navy-950">{transportation.runningClass.title}</h3>
          <ul className="mt-4 space-y-3">
            {transportation.runningClass.tips.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-[14px] leading-relaxed text-navy-600">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-navy-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={transportation.campusMap.url}
        target="_blank"
        rel="noreferrer"
        className="card-ios mt-14 flex items-center justify-between gap-4 p-6 transition hover:shadow-md"
      >
        <div>
          <h3 className="text-[15px] font-semibold text-navy-950">{transportation.campusMap.label}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-navy-500">{transportation.campusMap.detail}</p>
        </div>
        <span className="text-navy-400">↗</span>
      </a>

      <div className="card-ios mt-6 p-8">
        <h3 className="text-[17px] font-semibold text-navy-950">校際選課（臺灣大學系統）規定</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-navy-600">{courseSelection.intercollegiate.summary}</p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {courseSelection.intercollegiate.rules.map((r, i) => (
            <li key={i} className="flex items-start gap-2 rounded-xl bg-navy-50 p-4 text-[13px] leading-relaxed text-navy-700">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-navy-400" />
              {r}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={courseSelection.intercollegiate.tool.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-navy-800"
          >
            {courseSelection.intercollegiate.tool.label} ↗
          </a>
          <OfficialLink link={courseSelection.intercollegiate.officialLink} />
        </div>
      </div>
    </section>
  )
}
