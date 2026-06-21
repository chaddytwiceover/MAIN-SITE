'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { Project, ProjectStatus } from '@/lib/projects'

/**
 * ProjectCard — Glass panel card for the Projects page
 *
 * Displays title, description, tech tags, status badge,
 * and action buttons. Framer Motion hover lift effect.
 */

const STATUS_STYLES: Record<ProjectStatus, { bg: string; text: string }> = {
  'Live': { bg: 'bg-status-live/10', text: 'text-status-live' },
  'Prototype': { bg: 'bg-status-prototype/10', text: 'text-status-prototype' },
  'In Progress': { bg: 'bg-status-progress/10', text: 'text-status-progress' },
  'Experiment': { bg: 'bg-status-experiment/10', text: 'text-status-experiment' },
  'Coming Soon': { bg: 'bg-status-soon/10', text: 'text-status-soon' },
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const prefersReduced = useReducedMotion()
  const status = STATUS_STYLES[project.status]
  const hasLinks = project.url || project.sourceUrl

  return (
    <motion.div
      className="
        group flex flex-col p-6
        bg-surface backdrop-blur-md border border-border rounded-2xl
        transition-all duration-300
        hover:bg-surface-hover hover:border-border-hover
        hover:shadow-[0_8px_40px_rgba(125,211,252,0.04)]
        focus-within:outline-2 focus-within:outline-accent focus-within:outline-offset-2
      "
      whileHover={prefersReduced ? {} : { y: -4 }}
    >
      {/* Header: title + status */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-text font-semibold text-lg leading-snug">
          {project.title}
        </h3>
        <span
          className={`
            flex-shrink-0 px-2.5 py-1 text-xs font-medium rounded-lg
            ${status.bg} ${status.text}
          `}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5" aria-label="Technologies used">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-surface-raised text-text-dim border border-border"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      {hasLinks && (
        <div className="flex items-center gap-3 mt-auto pt-2">
          {project.url && (
            <a
              href={project.url}
              target={project.url.startsWith('http') ? '_blank' : undefined}
              rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="
                inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg
                bg-accent/10 text-accent hover:bg-accent/20
                transition-colors duration-200 no-underline
              "
            >
              View Project
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              {project.url.startsWith('http') && <span className="sr-only">(opens in new tab)</span>}
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg
                text-text-dim hover:text-text hover:bg-surface-raised
                transition-colors duration-200 no-underline
              "
            >
              Source Code
              <span className="sr-only">(opens in new tab)</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}
