import { useMemo, useState } from 'react'
import { timeline, timelineCategories, timelineSource, officialCalendarLink } from '../data/content'
import { buildMonthMatrix, isoDate, eventsOnDate, WEEKDAYS } from '../utils/calendar'
import OfficialLink from './OfficialLink'
import SectionHeading from './SectionHeading'
import { CalendarIcon } from './icons'

const MONTHS = [
  { year: 2026, monthIndex: 7, label: '2026 年 8 月' },
  { year: 2026, monthIndex: 8, label: '2026 年 9 月' },
]

const todayIso = new Date().toISOString().slice(0, 10)

function MonthCalendar({ year, monthIndex, label, selectedDate, onSelect }) {
  const weeks = useMemo(() => buildMonthMatrix(year, monthIndex), [year, monthIndex])

  return (
    <div className="card-ios p-5 md:p-6">
      <h3 className="text-center text-[15px] font-semibold text-navy-950">{label}</h3>

      <div className="mt-4 grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((w) => (
          <span key={w} className="text-[11px] font-medium text-navy-400">
            {w}
          </span>
        ))}

        {weeks.map((week, wi) =>
          week.map((day, di) => {
            if (!day) return <span key={`${wi}-${di}`} />

            const iso = isoDate(year, monthIndex, day)
            const dayEvents = eventsOnDate(timeline, iso)
            const isSelected = selectedDate === iso
            const isToday = iso === todayIso

            return (
              <button
                key={`${wi}-${di}`}
                type="button"
                disabled={dayEvents.length === 0}
                onClick={() => onSelect(isSelected ? null : iso)}
                className={`mx-auto flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full text-[13px] transition ${
                  isSelected
                    ? 'bg-navy-950 text-white'
                    : isToday
                      ? 'border border-navy-300 text-navy-950'
                      : dayEvents.length > 0
                        ? 'text-navy-950 hover:bg-navy-50'
                        : 'text-navy-300'
                }`}
              >
                {day}
                <span className="flex gap-0.5">
                  {dayEvents.slice(0, 3).map((ev, i) => (
                    <span
                      key={i}
                      className={`h-1 w-1 rounded-full ${
                        isSelected ? 'bg-white' : timelineCategories[ev.category]?.dot || 'bg-navy-400'
                      }`}
                    />
                  ))}
                </span>
              </button>
            )
          }),
        )}
      </div>
    </div>
  )
}

function AgendaRow({ item }) {
  const style = timelineCategories[item.category] || {}
  return (
    <li className={`flex gap-4 rounded-2xl p-4 transition ${item.highlight ? 'bg-rose-50/60' : ''}`}>
      <span className={`mt-1.5 h-2 w-2 flex-none rounded-full ${style.dot || 'bg-navy-400'}`} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[13px] font-semibold text-navy-950">{item.date}</span>
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${style.badge || 'bg-navy-100 text-navy-800'}`}>
            {item.category}
          </span>
        </div>
        <p className="mt-1 text-[14px] font-medium text-navy-950">{item.title}</p>
        {item.detail && <p className="mt-0.5 text-[13px] leading-relaxed text-navy-500">{item.detail}</p>}
      </div>
    </li>
  )
}

export default function Timeline() {
  const [selectedDate, setSelectedDate] = useState(null)

  const visibleItems = selectedDate ? eventsOnDate(timeline, selectedDate) : timeline

  return (
    <section id="timeline" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        icon={CalendarIcon}
        eyebrow="115 學年度"
        title="重要時程"
        subtitle="選課、學分抵免、註冊繳費、住宿⋯⋯點日期看當天詳情，轉學生最容易錯過的死線都幫你標出來了"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {MONTHS.map((m) => (
          <MonthCalendar key={m.label} {...m} selectedDate={selectedDate} onSelect={setSelectedDate} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {Object.entries(timelineCategories).map(([label, style]) => (
          <span key={label} className="flex items-center gap-1.5 text-[12px] text-navy-500">
            <span className={`h-2 w-2 rounded-full ${style.dot}`} />
            {label}
          </span>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-navy-950">
            {selectedDate ? `${selectedDate} 的行程` : '完整時程清單'}
          </h3>
          {selectedDate && (
            <button
              type="button"
              onClick={() => setSelectedDate(null)}
              className="text-[13px] font-medium text-navy-500 hover:text-navy-950"
            >
              顯示全部 ×
            </button>
          )}
        </div>
        <ul className="card-ios divide-y divide-navy-50 p-2">
          {visibleItems.length === 0 ? (
            <li className="p-4 text-[13px] text-navy-400">這天沒有安排在時程表上的項目。</li>
          ) : (
            visibleItems.map((item, i) => <AgendaRow key={i} item={item} />)
          )}
        </ul>
      </div>

      <p className="mt-8 text-center text-[12px] text-navy-400">{timelineSource}</p>
      <div className="mt-4 flex justify-center">
        <OfficialLink link={officialCalendarLink} />
      </div>
    </section>
  )
}
