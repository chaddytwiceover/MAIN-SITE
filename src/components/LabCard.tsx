'use client'

import { motion } from 'framer-motion'
import type { LabProject } from '@/lib/lab-projects'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

interface LabCardProps {
  project: LabProject
}

const statusColors: Record<string, string> = {
  'live': 'text-accent',
  'experiment': 'text-accent-warm',
  'prototype': 'text-text-dim',
  'coming soon': 'text-text-dim',
}

export default function LabCard({ project }: LabCardProps) {
  const skipAnimation = useSkipAnimation()
  const statusColor = statusColors[project.status] || 'text-text-dim'
  const isPlayable = project.demoUrl && project.demoUrl !== '#'

  const CardContent = (
    <>
      <div className="flex items-start justify-between gap-3 mb-4">
        <h2 className="font-heading text-lg font-bold text-text group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h2>
        <span className={`font-mono text-xs tracking-wider uppercase ${statusColor} shrink-0 mt-1`}>
          {project.status}
        </span>
      </div>

      <p className="text-text-muted text-sm line-clamp-3 mb-6">
        {project.description}
      </p>

      {project.techNotes && (
        <p className="text-text-dim text-xs font-mono mb-4">
          tech: {project.techNotes}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="border border-border px-2 py-0.5 font-mono text-xs text-text-dim">
            {tag}
          </span>
        ))}
      </div>

      {isPlayable && (
        <div className="mt-6 flex items-center text-sm font-mono tracking-wider text-accent uppercase">
          view demo <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      )}
    </>
  )

  const cardClasses = "group flex flex-col p-6 bg-bg-raised border border-border transition-all duration-200 hover:border-border-strong h-full"
  
  const content = isPlayable ? (
    <a href={project.demoUrl} target={project.demoUrl.includes('/demos/') ? '_blank' : undefined} rel={project.demoUrl.includes('/demos/') ? 'noopener noreferrer' : undefined} className={cardClasses}>
      {CardContent}
    </a>
  ) : (
    <div className={cardClasses}>
      {CardContent}
    </div>
  )

  return (
    <motion.div
      whileHover={skipAnimation ? {} : { y: -2 }}
      className="h-full block"
    >
      {content}
    </motion.div>
  )
}
