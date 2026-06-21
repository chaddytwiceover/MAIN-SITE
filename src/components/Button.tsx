'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Button — Reusable button / link component
 *
 * Renders as an anchor (<a> or Next Link) when `href` is provided,
 * or a <button> element otherwise. Includes Framer Motion hover
 * and tap feedback.
 *
 * Variants:
 *  - primary: Accent-filled solid button
 *  - secondary: Glass outline button
 */

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  external?: boolean
  ariaLabel?: string
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-accent text-bg hover:bg-accent-hover',
  secondary:
    'bg-surface border border-border text-text-muted hover:bg-surface-hover hover:border-border-hover hover:text-text',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
  ariaLabel,
}: ButtonProps) {
  const prefersReduced = useReducedMotion()

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  const motionProps = prefersReduced
    ? {}
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.97 },
      }

  // External link — plain <a> tag
  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  // Internal link — Next.js Link
  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    )
  }

  // Button
  return (
    <motion.button
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      type="button"
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
