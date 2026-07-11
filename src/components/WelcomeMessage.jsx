import { club } from '../data/content'

export default function WelcomeMessage() {
  return (
    <section className="border-b border-navy-800 bg-navy-950 py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[15px] leading-loose text-navy-200">{club.welcomeMessage}</p>
        <p className="mt-6 text-[13px] font-medium text-navy-400">—　{club.shortName}</p>
      </div>
    </section>
  )
}
