import Link from 'next/link'

interface LabProjectDetailProps {
  title: string
  description: string
  demoUrl: string
  notes: string
}

export default function LabProjectDetail({ title, description, demoUrl, notes }: LabProjectDetailProps) {
  return (
    <div className="mx-auto w-full max-w-[900px] px-6 py-16 md:px-12 md:py-24">
      <Link href="/lab" className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint transition hover:text-text">
        ← Back to lab
      </Link>
      <header className="mt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">lab experiment</p>
        <h1 className="mt-3 font-serif text-5xl lowercase tracking-[-0.02em] text-text md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-textDim">{description}</p>
      </header>

      <section className="mt-10 rounded-2xl border border-border bg-bgSoft/35 p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">under the hood</p>
        <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-textDim">{notes}</p>
        <a href={demoUrl} className="mt-7 inline-flex min-h-11 items-center rounded-full bg-text px-5 font-mono text-[11px] uppercase tracking-[0.08em] text-bg">
          Open experiment ↗
        </a>
      </section>
    </div>
  )
}
