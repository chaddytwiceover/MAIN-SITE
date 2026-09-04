'use client'

import { useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LabProject } from '@/lib/lab-projects'

interface Props {
  project: LabProject
}

const statusLabel: Record<LabProject['status'], string> = {
  live: 'Live',
  experiment: 'Experiment',
  prototype: 'Prototype',
  'coming soon': 'Coming Soon',
}

const gameUrlBySlug: Record<string, string> = {
  flowerquest: process.env.NEXT_PUBLIC_FLOWERQUEST_URL ?? 'https://flowerquest.vercel.app',
  'south-florida-fighter': process.env.NEXT_PUBLIC_SF_FIGHTER_URL ?? 'https://south-florida-fighter.vercel.app',
  'simon-says': 'https://simon-says-neon.vercel.app/',
  'tic-tac-toe': 'https://tic-tac-toe-two-self-24.vercel.app/',
}

const sourceUrlBySlug: Record<string, string> = {
  flowerquest: 'https://github.com/chaddytwiceover/flowerquest',
  'south-florida-fighter': 'https://south-florida-fighter.vercel.app',
  'simon-says': 'https://github.com/chaddytwiceover',
  'tic-tac-toe': 'https://github.com/chaddytwiceover',
}

export default function LabProjectContent({ project }: Props) {
  const gameUrl = gameUrlBySlug[project.slug] ?? (project.demoUrl.startsWith('/demos/') ? project.demoUrl : undefined)
  const sourceUrl = sourceUrlBySlug[project.slug] ?? 'https://github.com/chaddytwiceover'
  const frameRef = useRef<HTMLDivElement>(null)

  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

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
        <div
          ref={frameRef}
          onMouseEnter={lockScroll}
          onMouseLeave={unlockScroll}
          onTouchStart={lockScroll}
          onTouchEnd={unlockScroll}
          className="overflow-hidden rounded-3xl border border-border bg-bgSoft/40 p-2 shadow-[0_0_42px_rgba(237,235,230,0.06)]"
        >
          <div className="relative min-h-[720px] overflow-hidden rounded-[1.25rem] bg-[#1c1612]">
            {gameUrl ? (
              <iframe
                title={project.title}
                src={gameUrl}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; gamepad"
                loading="eager"
                sandbox="allow-scripts"
              />
            ) : (
              <div className="flex min-h-[720px] items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#4f8f5c,#245c3a_35%,#3a271c_80%)] p-8 text-center">
                <div className="max-w-md rounded-3xl border border-white/15 bg-black/25 p-8 backdrop-blur-sm">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#e0a93a]">ready to launch</p>
                  <h1 className="mt-3 font-serif text-4xl lowercase text-white">{project.title}</h1>
                  <p className="mt-4 text-sm leading-relaxed text-white/78">
                    {project.description}
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
              href={sourceUrl}
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
