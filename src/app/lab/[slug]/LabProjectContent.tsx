'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LabProject } from '@/lib/lab-projects'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

interface Props {
  project: LabProject
}

const statusLabel: Record<LabProject['status'], string> = {
  live: 'Live',
  experiment: 'Experiment',
  prototype: 'Prototype',
  'coming soon': 'Coming Soon',
}

function FlowerQuestFrame({ project }: Props) {
  const gameUrl = process.env.NEXT_PUBLIC_FLOWERQUEST_URL

  return (
    <section className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 md:py-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/lab"
          className="font-mono text-sm font-bold uppercase tracking-widest text-text-dim transition-colors duration-0 hover:text-accent"
        >
          ← BACK TO LAB
        </Link>
        <span className="neo-border bg-bg-raised px-2 py-1 font-mono text-sm font-bold uppercase tracking-widest text-accent">
          {statusLabel[project.status]}
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        <div className="overflow-hidden rounded-3xl border border-border bg-bgSoft/40 p-2 shadow-[0_0_42px_rgba(237,235,230,0.06)]">
          <div className="relative min-h-[720px] overflow-hidden rounded-[1.25rem] bg-[#1c1612]">
            {gameUrl ? (
              <iframe
                title="Monnie's Flower Quest"
                src={gameUrl}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; gamepad"
                loading="eager"
              />
            ) : (
              <div className="flex min-h-[720px] items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#4f8f5c,#245c3a_35%,#3a271c_80%)] p-8 text-center">
                <div className="max-w-md rounded-3xl border border-white/15 bg-black/25 p-8 backdrop-blur-sm">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#e0a93a]">ready to launch</p>
                  <h1 className="mt-3 font-serif text-4xl lowercase text-white">flower quest is planted</h1>
                  <p className="mt-4 text-sm leading-relaxed text-white/78">
                    The lab page is wired. Add the deployed game URL as NEXT_PUBLIC_FLOWERQUEST_URL in the main site build settings and this panel becomes the playable game.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-border bg-bgSoft/35 p-6 lg:sticky lg:top-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">playable lab</p>
          <h1 className="mt-3 font-serif text-4xl lowercase leading-none text-text">{project.title}</h1>
          <p className="mt-5 text-sm leading-relaxed text-textDim">{project.description}</p>
          {project.techNotes && (
            <p className="mt-6 border-l border-accent pl-4 font-mono text-xs leading-relaxed text-textDim">
              tech notes: {project.techNotes}
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-text-dim">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-3">
            {gameUrl && (
              <a
                href={gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-text px-5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-bg transition hover:bg-accent"
              >
                Open full screen ↗
              </a>
            )}
            <a
              href="https://github.com/chaddytwiceover/flowerquest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-textDim transition hover:border-textDim hover:text-text"
            >
              View source ↗
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

const statusLabel: Record<LabProject['status'], string> = {
  live: 'Live',
  experiment: 'Experiment',
  prototype: 'Prototype',
  'coming soon': 'Coming Soon',
}

export default function LabProjectContent({ project }: Props) {
  const skip = useSkipAnimation()
  const playable = project.demoUrl !== '#'

  if (project.slug === 'flowerquest') {
    return <FlowerQuestFrame project={project} />
  }

  return (
    <section className="mx-auto max-w-[var(--max-width-content)] px-6 py-20">
      <motion.div
        initial={skip ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.35 }}
        className="neo-card bg-bg p-8 md:p-12"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/lab"
            className="font-mono text-sm font-bold uppercase tracking-widest text-text-dim hover:text-accent transition-colors duration-0"
          >
            ← BACK TO LAB
          </Link>
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-accent px-2 py-1 bg-bg-raised neo-border">{statusLabel[project.status]}</span>
        </div>

        <h1 className="mb-6 font-heading text-[clamp(2rem,4vw,4rem)] font-bold uppercase text-text tracking-tight">{project.title}</h1>
        <p className="mb-8 max-w-3xl text-lg text-text-muted">{project.description}</p>

        {project.techNotes && (
          <p className="mb-10 neo-border border-y-0 border-r-0 border-accent pl-6 font-mono text-sm text-text-muted">tech notes: {project.techNotes}</p>
        )}

        <div className="mb-8 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <span key={tag} className="neo-border px-3 py-1 font-mono text-xs font-bold text-text-dim">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {playable && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent inline-block text-center bg-accent text-bg neo-border-accent neo-shadow hover:bg-bg hover:text-accent hover:neo-shadow-hover"
            >
              PLAY EXPERIMENT
            </a>
          )}
          <Link
            href="/lab"
            className="font-mono font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent inline-block text-center bg-transparent text-text neo-border neo-shadow hover:bg-text hover:text-bg hover:neo-shadow-hover"
          >
            BROWSE MORE
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
