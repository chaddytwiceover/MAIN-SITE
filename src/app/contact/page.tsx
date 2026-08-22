import type { Metadata } from 'next'
import CopyEmailButton from '@/components/CopyEmailButton'

const email = 'contact@chaddytwiceover.com'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Say hi to chaddytwiceover.',
}

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[900px] px-6 py-16 md:px-12 md:py-24">
      <header>
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">say hi</p>
        <h1 className="mt-3 font-serif text-5xl lowercase tracking-[-0.02em] text-text md:text-7xl">contact</h1>
        <p className="mt-4 max-w-[56ch] text-textDim">Got a thought, a link, or something interesting to share? Email works.</p>
      </header>

      <section className="mt-10 rounded-2xl border border-border bg-bgSoft/35 p-6 md:p-8">
        <a href={`mailto:${email}`} className="break-all font-serif text-2xl text-text transition hover:text-textDim md:text-4xl">
          {email}
        </a>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-11 items-center rounded-full bg-text px-4 font-mono text-[11px] uppercase tracking-[0.08em] text-bg"
          >
            Open mail
          </a>
          <CopyEmailButton />
        </div>
      </section>

      <form action={`mailto:${email}`} method="post" encType="text/plain" className="mt-8 space-y-4 rounded-2xl border border-border p-6 md:p-8">
        <div>
          <label htmlFor="subject" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">Subject</label>
          <input id="subject" name="subject" type="text" className="min-h-11 w-full rounded-xl border border-border bg-bgSoft px-4 text-text outline-none transition focus:border-textDim" />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">Message</label>
          <textarea id="message" name="message" rows={5} className="w-full rounded-xl border border-border bg-bgSoft px-4 py-3 text-text outline-none transition focus:border-textDim" />
        </div>
        <button type="submit" className="inline-flex min-h-11 items-center rounded-full border border-border px-4 font-mono text-[11px] uppercase tracking-[0.08em] text-textDim transition hover:border-textDim hover:text-text">
          Compose email
        </button>
      </form>
    </div>
  )
}
