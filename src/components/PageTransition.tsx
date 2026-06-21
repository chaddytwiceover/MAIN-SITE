'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * PageTransition — Wrapper for page-level entrance animations
 *
 * Wraps each page's content in a fade + upward slide on mount.
 * Respects the user's reduced-motion preference.
 */

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export default function PageTransition({
  children,
  className = '',
}: PageTransitionProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReduced ? 0 : 0.5,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
