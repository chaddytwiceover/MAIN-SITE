'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * PageTransition — Wrapper for page-level entrance animations
 *
 * Wraps each page's content in a fade + upward slide on mount.
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
      initial={prefersReduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReduced ? 0 : 0.3,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
