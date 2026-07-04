import { useMemo, useState } from 'react'
import { searchContent } from '../data/searchIndex'

export default function SearchBar({ autoFocus = false, className = '' }) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const results = useMemo(() => searchContent(query), [query])
  const showResults = focused && query.trim().length > 0

  return (
    <div className={`relative w-full ${className}`}>
      <div className="flex items-center gap-3 rounded-2xl border border-navy-200 bg-white px-5 py-4 shadow-sm transition focus-within:border-navy-500 focus-within:shadow-md">
        <svg
          className="h-5 w-5 flex-none text-navy-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.3-4.3m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z" />
        </svg>
        <input
          type="text"
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="搜尋學分抵免、選課時程、住宿、跨校交通、FAQ…"
          className="w-full bg-transparent text-[16px] text-navy-950 placeholder:text-navy-400 focus:outline-none"
        />
      </div>

      {showResults && (
        <div className="absolute z-40 mt-2 w-full overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-xl">
          {results.length === 0 ? (
            <p className="px-5 py-4 text-[14px] text-navy-400">找不到相關內容，試試其他關鍵字，或直接到 FAQ 提問。</p>
          ) : (
            <ul className="max-h-96 divide-y divide-navy-50 overflow-y-auto">
              {results.map((r, i) => (
                <li key={i}>
                  <a
                    href={r.href}
                    className="flex flex-col gap-1 px-5 py-3 transition hover:bg-navy-50"
                    onClick={() => setQuery('')}
                  >
                    <span className="flex items-center gap-2">
                      <span className="rounded-full bg-navy-100 px-2 py-0.5 text-[11px] font-medium text-navy-700">
                        {r.tag}
                      </span>
                      <span className="text-[14px] font-medium text-navy-950">{r.title}</span>
                    </span>
                    {r.snippet && <span className="text-[12px] text-navy-500">{r.snippet}</span>}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
