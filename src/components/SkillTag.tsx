'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * SkillTag — Small badge for the About page skills grid
 */

interface SkillTagProps {
  skill: string
  index: number
}

export default function SkillTag({ skill, index }: SkillTagProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.span
      className="
        px-3 py-1.5 text-sm font-medium rounded-lg
        bg-surface border border-border text-text-muted
        transition-colors duration-200
        hover:bg-surface-hover hover:text-text hover:border-border-hover
      "
      role="listitem"
      initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: prefersReduced ? 0 : 0.3,
        delay: prefersReduced ? 0 : index * 0.05,
      }}
    >
      {skill}
    </motion.span>
  )
}
