'use client'

import { useRouter } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * BackButton — Navigate back to the previous page or home
 */

export default function BackButton() {
  const router = useRouter()
  const prefersReduced = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={() => router.back()}
      className="
        inline-flex items-center gap-2 mb-8
        text-sm font-medium text-text-dim
        hover:text-text transition-colors duration-200
        focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
      "
      whileHover={prefersReduced ? {} : { x: -4 }}
      aria-label="Go back"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      Back
    </motion.button>
  )
}
