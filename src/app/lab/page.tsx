import type { Metadata } from 'next'
import Link from 'next/link'
import { labProjects } from '@/lib/lab-projects'

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Experiments, prototypes, games, and weird little builds from chaddytwiceover.',
}

export default function LabPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-6 py-16 md:px-12 md:py-24">
      <header className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">experiments + prototypes</p>
        <h1 className="mt-3 font-serif text-5xl lowercase tracking-[-0.02em] text-text md:text-7xl">the lab</h1>
        <p className="mt-4 max-w-[58ch] text-textDim">Games, tools, and small ideas built to see what happens.</p>
      </header>

      <section aria-label="Lab experiments" className="mt-12 grid gap-4 md:grid-cols-2">
        {labProjects.filter((p) => !p.hidden).map((project) => (
          <article key={project.slug} className="flex flex-col rounded-2xl border border-border/80 bg-bgSoft/60 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-textDim hover:shadow-[0_0_32px_rgba(237,235,230,0.08)]">
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-textFaint">{project.status}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-textFaint">{project.tags.slice(0, 2).join(' + ')}</span>
            </div>
            <h2 className="mt-5 font-serif text-3xl lowercase text-text">{project.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-textDim">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/lab/${project.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-text px-5 font-mono text-[11px] uppercase tracking-[0.08em] text-bg transition-colors hover:bg-neon">
                Play now
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
