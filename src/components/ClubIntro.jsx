import { club } from '../data/content'

export default function ClubIntro() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-navy-50 px-3 py-1 text-[12px] font-medium text-navy-700">
            關於轉聯會
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy-950">
            我們想把轉學生的互助精神
            <br />
            傳承下去
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-navy-600">{club.description}</p>

          <ul className="mt-6 space-y-3">
            {club.missions.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-navy-600">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-navy-950" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-ios bg-navy-50/60 p-8">
          <h3 className="text-[14px] font-semibold uppercase tracking-wider text-navy-400">近期活動</h3>
          <ol className="mt-5 space-y-5">
            {club.events.map((e, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className={`flex h-9 w-16 flex-none items-center justify-center rounded-full text-[12px] font-semibold ${
                    e.tbd ? 'bg-navy-100 text-navy-500' : 'bg-navy-950 text-white'
                  }`}
                >
                  {e.date}
                </span>
                <span className="pt-1.5 text-[14px] text-navy-800">
                  {e.label}
                  {e.url && (
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 text-[12px] font-medium text-navy-500 underline decoration-navy-300 underline-offset-4 hover:text-navy-950"
                    >
                      報名 ↗
                    </a>
                  )}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-8 border-t border-navy-100 pt-6">
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-navy-400">{club.edition}幹部</h3>
            <ul className="mt-3 space-y-1.5">
              {club.officers.map((o, i) => (
                <li key={i} className="text-[13px] text-navy-600">
                  {o.role}　{o.dept}　{o.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
