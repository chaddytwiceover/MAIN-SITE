'use client'

import Link from 'next/link'
import type { LabProject } from '@/lib/lab-projects'

interface LabCardProps {
  project: LabProject
}

const statusColors: Record<string, string> = {
  live: 'bg-accent text-bg',
  experiment: 'bg-accent-warm text-bg',
  prototype: 'bg-text-muted text-bg',
  'coming soon': 'bg-text-dim text-bg',
}

export default function LabCard({ project }: LabCardProps) {
  const statusColor = statusColors[project.status] || 'text-text-dim'
  const isPlayable = project.demoUrl && project.demoUrl !== '#'

  return (
    <article className="h-full neo-card bg-bg p-6 flex flex-col transition-shadow duration-0 hover:neo-shadow-hover">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h2 className="font-heading text-2xl font-bold text-text uppercase">{project.title}</h2>
        <span className={`mt-1 shrink-0 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${statusColor}`}>
          {project.status}
        </span>
      </div>

      <p className="mb-4 text-sm text-text-muted">{project.description}</p>
      {project.techNotes && <p className="mb-6 font-mono text-xs tracking-wide text-text-dim">tech: {project.techNotes}</p>}

      <div className="mt-auto flex flex-wrap gap-2 pb-8">
        <span className="font-mono text-xs text-text-muted">
          {project.tags.join(' / ')}
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href={`/lab/${project.slug}`}
          className="font-mono text-sm font-bold uppercase tracking-widest text-text transition-colors hover:text-accent"
        >
          DETAILS
        </Link>
        {isPlayable && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-bold uppercase tracking-widest text-accent transition-colors hover:text-accent-hover"
          >
            → OPEN
          </a>
        )}
      </div>
    </article>
  )
}
