'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * SectionHeader — Consistent heading block for page sections
 */

interface SectionHeaderProps {
  /** Small uppercase label above the title */
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
      initial={prefersReduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReduced ? 0 : 0.3, ease: 'easeOut' }}
    >
      {label && (
        <span className="inline-block font-mono text-xs tracking-widest uppercase text-accent mb-3">
          {label}
        </span>
      )}
      <h1 className="font-heading font-bold text-text mb-4">{title}</h1>
      {description && (
        <p className="text-text-muted text-lg max-w-2xl">{description}</p>
      )}
    </motion.header>
  )
}
