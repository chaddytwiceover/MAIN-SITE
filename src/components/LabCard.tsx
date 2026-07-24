'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LabProject } from '@/lib/lab-projects'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

interface LabCardProps {
  project: LabProject
}

const statusColors: Record<string, string> = {
  live: 'text-accent',
  experiment: 'text-accent-warm',
  prototype: 'text-text-muted',
  'coming soon': 'text-text-dim',
}

export default function LabCard({ project }: LabCardProps) {
  const skipAnimation = useSkipAnimation()
  const statusColor = statusColors[project.status] || 'text-text-dim'
  const isPlayable = project.demoUrl && project.demoUrl !== '#'

  return (
    <motion.article whileHover={skipAnimation ? {} : { y: -2 }} className="h-full border border-border bg-bg-raised p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h2 className="font-heading text-lg font-bold text-text">{project.title}</h2>
        <span className={`mt-1 shrink-0 font-mono text-xs uppercase tracking-wider ${statusColor}`}>
          {project.status}
        </span>
      </div>

      <p className="mb-4 text-sm text-text-muted">{project.description}</p>
      {project.techNotes && <p className="mb-6 font-mono text-xs tracking-wide text-text-dim">tech: {project.techNotes}</p>}

      <div className="mt-auto flex flex-wrap gap-2 pb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="border border-border px-2 py-0.5 font-mono text-xs text-text-dim">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href={`/lab/${project.slug}`}
          className="border border-border px-3 py-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:border-border-strong hover:text-text"
        >
          details
        </Link>
        {isPlayable && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent px-3 py-2 font-mono text-xs uppercase tracking-wider text-accent transition-colors hover:border-accent-hover hover:text-accent-hover"
          >
            play
          </a>
        )}
      </div>
    </motion.article>
  )
}
