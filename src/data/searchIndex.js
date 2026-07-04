import { timeline, creditTransfer, courseSelection, transportation, resources, faqs } from './content'

// 集中建立全站搜尋索引：每筆包含 title / snippet / href（供跳轉）/ tag（分類標籤）
function build() {
  const items = []

  timeline.forEach((t) => {
    items.push({
      tag: '重要時程',
      title: `${t.date}　${t.title}`,
      snippet: t.detail || '',
      href: '#timeline',
    })
  })

  items.push({ tag: '學務指南', title: '學分抵免申請資格與流程', snippet: creditTransfer.window, href: '#academic-guide' })
  creditTransfer.rules.forEach((r) => {
    items.push({ tag: '學分抵免', title: r, snippet: '', href: '#academic-guide' })
  })

  courseSelection.phases.forEach((p) => {
    items.push({ tag: '選課', title: `${p.name}　${p.date}`, snippet: p.note, href: '#academic-guide' })
  })
  courseSelection.notes.forEach((n) => {
    items.push({ tag: '選課須知', title: n, snippet: '', href: '#academic-guide' })
  })
  courseSelection.generalEducation.structure.forEach((g) => {
    items.push({ tag: '通識課程', title: g.area, snippet: g.credits, href: '#academic-guide' })
  })
  courseSelection.intercollegiate.rules.forEach((r) => {
    items.push({ tag: '校際選課', title: r, snippet: '', href: '#transportation' })
  })

  items.push({ tag: '跨區交通', title: transportation.shuttle.title, snippet: transportation.shuttle.detail, href: '#transportation' })
  items.push({ tag: '跨區交通', title: transportation.bus.title, snippet: transportation.bus.detail, href: '#transportation' })
  transportation.campusChoice.forEach((c) => {
    items.push({ tag: '校區選擇', title: c, snippet: '', href: '#transportation' })
  })
  transportation.runningClass.tips.forEach((t) => {
    items.push({ tag: '跑堂建議', title: t, snippet: '', href: '#transportation' })
  })

  items.push({
    tag: '在地生活',
    title: resources.campusLife.printShops.title,
    snippet: resources.campusLife.printShops.items.join('、'),
    href: '#resources',
  })
  items.push({
    tag: '在地生活',
    title: resources.campusLife.dailyGoods.title,
    snippet: resources.campusLife.dailyGoods.items.join('、'),
    href: '#resources',
  })
  items.push({ tag: '考古題', title: resources.archive.title, snippet: resources.archive.notice, href: '#resources' })

  resources.food.spots.forEach((s) => {
    items.push({ tag: '美食推薦', title: s.name, snippet: s.note || '', href: '#resources' })
  })
  items.push({
    tag: '美食推薦',
    title: resources.food.dormMeal.title,
    snippet: resources.food.dormMeal.detail,
    href: '#resources',
  })

  items.push({
    tag: '交朋友',
    title: resources.community.title,
    snippet: resources.community.intro,
    href: '#resources',
  })
  resources.community.clubDirectories.items.forEach((c) => {
    items.push({ tag: '社團資訊', title: c.label, snippet: '', href: '#resources' })
  })

  resources.campusResources.items.forEach((it) => {
    items.push({ tag: '校內資源', title: it.label, snippet: it.detail, href: '#resources' })
  })

  faqs.forEach((f, i) => {
    items.push({ tag: 'FAQ', title: f.q, snippet: f.a, href: `#faq-${i}` })
  })

  return items
}

export const searchIndex = build()

export function searchContent(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return searchIndex
    .filter((item) => (item.title + item.snippet + item.tag).toLowerCase().includes(q))
    .slice(0, 8)
}
