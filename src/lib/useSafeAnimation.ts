'use client'

import { useReducedMotion } from 'framer-motion'

/**
 * Returns whether animations should be skipped
 * based on the user's reduced-motion preference.
 */
export function useSkipAnimation(): boolean {
  return useReducedMotion() ?? false
}
