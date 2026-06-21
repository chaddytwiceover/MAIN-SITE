'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * SectionHeader — Consistent heading block for page sections
 *
 * Includes an optional small label, a title, and a description.
 * Fades in on viewport entry with Framer Motion.
 */

interface SectionHeaderProps {
  /** Small uppercase label above the title (e.g., "Projects") */
  label?: string
  /** Main section title */
  title: string
  /** Supporting description text */
  description?: string | ReactNode
  className?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.header
      className={`mb-10 ${className}`}
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' }}
    >
      {label && (
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent mb-3">
          {label}
        </span>
      )}
      <h1 className="text-text mb-4">{title}</h1>
      {description && (
        <p className="text-text-muted text-lg max-w-2xl">{description}</p>
      )}
    </motion.header>
  )
}
