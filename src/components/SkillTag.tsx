'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface SkillTagProps {
  skill: string
  index: number
}

export default function SkillTag({ skill, index }: SkillTagProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.span
      className="skill-tag"
      role="listitem"
      initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.4, delay: index * 0.04 }}
    >
      {skill}
    </motion.span>
  )
}
