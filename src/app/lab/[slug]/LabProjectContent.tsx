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
        className="border border-border bg-bg-raised p-6 md:p-8"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/lab"
            className="font-mono text-xs uppercase tracking-widest text-text-dim transition-colors hover:text-text"
          >
            ← back to lab
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-accent">{statusLabel[project.status]}</span>
        </div>

        <h1 className="mb-4 text-[clamp(2rem,4vw,3.5rem)]">{project.title}</h1>
        <p className="mb-6 max-w-3xl text-base text-text-muted">{project.description}</p>

        {project.techNotes && (
          <p className="mb-8 border-l-2 border-border-accent pl-4 font-mono text-sm text-text-muted">tech notes: {project.techNotes}</p>
        )}

        <div className="mb-8 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-border px-2 py-1 font-mono text-xs text-text-dim">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {playable && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent bg-accent px-4 py-2 font-mono text-xs uppercase tracking-wider text-bg transition-colors hover:bg-transparent hover:text-accent"
            >
              play experiment
            </a>
          )}
          <Link
            href="/lab"
            className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            browse more
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
