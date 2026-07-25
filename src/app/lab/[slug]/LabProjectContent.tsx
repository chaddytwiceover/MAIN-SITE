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

export default function LabProjectContent({ project }: Props) {
  const skip = useSkipAnimation()
  const playable = project.demoUrl !== '#'

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
