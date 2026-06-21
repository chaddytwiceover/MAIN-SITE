'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { LabProject } from '@/lib/lab-projects'

/**
 * LabCard — Compact card for lab experiments
 *
 * Smaller than ProjectCard, designed for the Lab grid.
 * Shows title, description, tags, and status.
 */

const STATUS_STYLES: Record<string, { label: string; color: string }> = {
  finished: { label: 'Finished', color: 'text-status-live' },
  active: { label: 'Active', color: 'text-status-progress' },
  prototype: { label: 'Prototype', color: 'text-status-prototype' },
}

interface LabCardProps {
  project: LabProject
}

export default function LabCard({ project }: LabCardProps) {
  const prefersReduced = useReducedMotion()
  const status = STATUS_STYLES[project.status] ?? STATUS_STYLES.prototype
  const isPlayable = project.demoUrl !== '#'

  const CardContent = (
    <>
      {/* Header: title + status */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h2 className="text-text font-semibold text-base leading-snug">
          {project.title}
        </h2>
        <span className={`flex-shrink-0 text-xs font-medium ${status.color}`}>
          {status.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-accent-soft text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      {isPlayable && (
        <span className="text-sm text-accent font-medium inline-flex items-center gap-1.5 group-hover:gap-2 transition-all duration-200">
          Try it out
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </span>
      )}
    </>
  )

  // Wrap in a link if the demo is available, otherwise just a div
  if (isPlayable) {
    return (
      <motion.a
        href={project.demoUrl}
        className="
          group block p-5
          bg-surface backdrop-blur-md border border-border rounded-2xl
          transition-all duration-300
          hover:bg-surface-hover hover:border-border-hover
          hover:shadow-[0_8px_32px_rgba(125,211,252,0.04)]
          focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
        "
        whileHover={prefersReduced ? {} : { y: -4 }}
        whileTap={prefersReduced ? {} : { scale: 0.98 }}
      >
        {CardContent}
      </motion.a>
    )
  }

  return (
    <div className="
      block p-5
      bg-surface backdrop-blur-md border border-border rounded-2xl
      opacity-75
    ">
      {CardContent}
    </div>
  )
}
