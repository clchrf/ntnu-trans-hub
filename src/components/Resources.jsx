import { resources } from '../data/content'

function ListCard({ title, items }) {
  return (
    <div className="card-ios p-6">
      <h4 className="text-[14px] font-semibold text-navy-950">{title}</h4>
      <ul className="mt-3 space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="text-[13px] text-navy-600">{it}</li>
        ))}
      </ul>
    </div>
  )
}

function LinkList({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((it, i) => (
        <li key={i}>
          {it.url ? (
            <a
              href={it.url}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-navy-700 underline decoration-navy-200 underline-offset-4 hover:text-navy-950"
            >
              {it.label}
            </a>
          ) : (
            <span className="text-[13px] text-navy-600">{it.label}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Resources() {
  const { archive, campusLife, food, community, campusResources, dormRules, dormAddresses } = resources

  return (
    <section id="resources" className="bg-navy-50/50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy-950 md:text-4xl">資源與在地生活</h2>
          <p className="mt-4 text-[15px] text-navy-500">考古題筆記、真實踩點美食、交朋友管道，師大人跟公館人都用得到</p>
        </div>

        {/* 考古題 */}
        <div className="card-ios mt-14 p-8">
          <h3 className="text-[17px] font-semibold text-navy-950">{archive.title}</h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {archive.subjectLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-navy-50 p-4 transition hover:bg-navy-100"
              >
                <p className="text-[14px] font-medium text-navy-950">{s.label} ↗</p>
                <p className="mt-1 text-[12px] leading-relaxed text-navy-500">{s.detail}</p>
              </a>
            ))}
          </div>

          <p className="mt-4 rounded-xl bg-amber-50 p-4 text-[13px] leading-relaxed text-amber-800">
            待確認：{archive.notice}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {archive.placeholderLinks.map((l, i) => (
              <span
                key={i}
                className="rounded-full border border-dashed border-navy-300 px-4 py-2 text-[13px] text-navy-500"
              >
                {l.label}（待補充）
              </span>
            ))}
          </div>
        </div>

        {/* 美食推薦 */}
        <div className="card-ios mt-6 p-8">
          <h3 className="text-[17px] font-semibold text-navy-950">{food.title}</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {food.spots.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-navy-50 p-4 transition hover:bg-navy-100"
              >
                <p className="text-[14px] font-medium text-navy-950">{s.name} ↗</p>
                {s.note && <p className="mt-1 text-[12px] leading-relaxed text-navy-500">{s.note}</p>}
              </a>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-navy-50 p-5">
              <h4 className="text-[13px] font-semibold text-navy-950">{food.dormMeal.title}</h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-navy-600">{food.dormMeal.detail}</p>
            </div>
            <div className="rounded-2xl bg-navy-50 p-5">
              <h4 className="text-[13px] font-semibold text-navy-950">{food.monthEndSaver.title}</h4>
              <LinkList items={food.monthEndSaver.items} />
            </div>
          </div>
        </div>

        {/* 生活機能 */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <ListCard title={campusLife.printShops.title} items={campusLife.printShops.items} />
          <ListCard title={campusLife.dailyGoods.title} items={campusLife.dailyGoods.items} />
          <ListCard title={campusLife.postOffice.title} items={campusLife.postOffice.items} />
        </div>

        {/* 認識朋友與社團 */}
        <div className="card-ios mt-6 p-8">
          <h3 className="text-[17px] font-semibold text-navy-950">{community.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-navy-600">{community.intro}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-navy-400">
                {community.lineGroups.title}
              </h4>
              <LinkList items={community.lineGroups.items} />
            </div>
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-navy-400">
                {community.schoolSocial.title}
              </h4>
              <LinkList items={community.schoolSocial.items} />
            </div>
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-navy-400">
                {community.clubDirectories.title}
              </h4>
              <LinkList items={community.clubDirectories.items} />
            </div>
          </div>
          <p className="mt-6 rounded-xl bg-navy-50 p-4 text-[13px] leading-relaxed text-navy-600">
            {community.clubDirectories.note}
          </p>
        </div>

        {/* 校內資源懶人包 */}
        <div className="card-ios mt-6 p-8">
          <h3 className="text-[17px] font-semibold text-navy-950">{campusResources.title}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {campusResources.items.map((it, i) => (
              <div key={i} className="rounded-2xl bg-navy-50 p-5">
                {it.url ? (
                  <a
                    href={it.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] font-medium text-navy-950 underline decoration-navy-300 underline-offset-4"
                  >
                    {it.label} ↗
                  </a>
                ) : (
                  <p className="text-[14px] font-medium text-navy-950">{it.label}</p>
                )}
                <p className="mt-1.5 text-[13px] leading-relaxed text-navy-600">{it.detail}</p>
                {it.subLinks && (
                  <div className="mt-2 flex flex-wrap gap-3">
                    {it.subLinks.map((sl, j) => (
                      <a
                        key={j}
                        href={sl.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[12px] text-navy-500 underline decoration-navy-200 underline-offset-4"
                      >
                        {sl.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {campusResources.tbd.length > 0 && (
            <div className="mt-4 rounded-xl bg-amber-50 p-4 text-[13px] leading-relaxed text-amber-800">
              待確認：{campusResources.tbd.join('；')}
            </div>
          )}
        </div>

        {/* 宿舍規定與地址 */}
        <div className="card-ios mt-6 p-8">
          <h3 className="text-[17px] font-semibold text-navy-950">{dormRules.title}</h3>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {dormRules.items.map((r, i) => (
              <li key={i} className="rounded-xl bg-navy-50 p-4 text-[13px] leading-relaxed text-navy-700">
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            {dormRules.links.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] text-navy-500 underline decoration-navy-200 underline-offset-4 hover:text-navy-950"
              >
                {l.label} ↗
              </a>
            ))}
          </div>

          <h3 className="mt-8 text-[17px] font-semibold text-navy-950">{dormAddresses.title}</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {dormAddresses.items.map((d, i) => (
              <div key={i} className="rounded-2xl bg-navy-50 p-4">
                <p className="text-[14px] font-medium text-navy-950">{d.name}</p>
                <p className="mt-1 text-[12px] text-navy-500">{d.campus}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-navy-600">{d.address}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            <a
              href={dormAddresses.officialLink.url}
              target="_blank"
              rel="noreferrer"
              className="text-[12px] text-navy-500 underline decoration-navy-200 underline-offset-4 hover:text-navy-950"
            >
              {dormAddresses.officialLink.label} ↗
            </a>
            <a
              href={dormAddresses.videoLink.url}
              target="_blank"
              rel="noreferrer"
              className="text-[12px] text-navy-500 underline decoration-navy-200 underline-offset-4 hover:text-navy-950"
            >
              {dormAddresses.videoLink.label} ↗
            </a>
            {dormAddresses.communityLinks.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] text-navy-500 underline decoration-navy-200 underline-offset-4 hover:text-navy-950"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
