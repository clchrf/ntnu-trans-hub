import { useState } from 'react'
import { feedbackForm } from '../data/content'

const IDENTITIES = ['轉學生', '轉系生', '已經是學長姐', '其他']

export default function Feedback() {
  const [name, setName] = useState('')
  const [identity, setIdentity] = useState('')
  const [message, setMessage] = useState('')
  const [honey, setHoney] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [needsActivation, setNeedsActivation] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!message.trim()) return
    if (honey) return // 蜜罐欄位有值代表是機器人，靜默略過

    setStatus('sending')
    try {
      const res = await fetch(feedbackForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          暱稱: name.trim() || '匿名',
          身份: identity || '未填寫',
          內容: message.trim(),
          _subject: feedbackForm.subject,
          _captcha: false,
        }),
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data && (data.success === 'true' || data.success === true)) {
        setStatus('success')
        setNeedsActivation(false)
        setName('')
        setIdentity('')
        setMessage('')
      } else {
        setStatus('error')
        setNeedsActivation(Boolean(data?.message && /activation/i.test(data.message)))
      }
    } catch {
      setStatus('error')
      setNeedsActivation(false)
    }
  }

  return (
    <section id="feedback" className="bg-navy-50/50 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy-950 md:text-4xl">許願池</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy-500">
            已經轉進來一學期的你，有什麼想跟下一屆說的、想稱讚或吐槽轉聯會的，都歡迎留言——匿名也沒問題，我們都會認真看。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-ios mt-10 p-8">
          {/* 蜜罐欄位，一般使用者看不到，機器人才會填 */}
          <input
            type="text"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-[13px] font-medium text-navy-700">暱稱（可留空，匿名 OK）</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="匿名"
                className="mt-1.5 w-full rounded-xl border border-navy-200 px-4 py-2.5 text-[16px] text-navy-950 outline-none transition focus:border-navy-500"
              />
            </div>
            <div>
              <label className="text-[13px] font-medium text-navy-700">你是？（選填）</label>
              <select
                value={identity}
                onChange={(e) => setIdentity(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-[16px] text-navy-950 outline-none transition focus:border-navy-500"
              >
                <option value="">不指定</option>
                {IDENTITIES.map((it) => (
                  <option key={it} value={it}>
                    {it}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-[13px] font-medium text-navy-700">想說的話</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="給下一屆的建議、對轉聯會的回饋、想分享的轉學經驗⋯⋯都可以寫在這裡"
              className="mt-1.5 w-full resize-none rounded-2xl border border-navy-200 px-4 py-3 text-[16px] text-navy-950 outline-none transition focus:border-navy-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-5 w-full rounded-full bg-navy-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-navy-800 disabled:opacity-50"
          >
            {status === 'sending' ? '送出中…' : '送出'}
          </button>

          {status === 'success' && (
            <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-center text-[13px] text-emerald-700">
              收到了，謝謝你的分享！
            </p>
          )}
          {status === 'error' && needsActivation && (
            <p className="mt-4 rounded-xl bg-amber-50 p-3 text-center text-[13px] text-amber-800">
              表單尚未啟用：請到 ntnutrans2016@gmail.com 收件匣（含垃圾郵件）找 FormSubmit 寄來的信，點擊「Activate Form」連結啟用一次，之後投稿就會正常送達。
            </p>
          )}
          {status === 'error' && !needsActivation && (
            <p className="mt-4 rounded-xl bg-rose-50 p-3 text-center text-[13px] text-rose-700">
              送出失敗了，可以稍後再試一次，或直接私訊我們的 Instagram。
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
