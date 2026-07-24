'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

/**
 * Button — Reusable button / link component
 *
 * Soft brutalist styles.
 *
 * Variants:
 *  - primary: Accent solid, hover invert
 *  - secondary: Transparent outline, hover accent
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
  'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-none font-mono text-sm tracking-wide uppercase transition-all duration-150 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-accent text-bg border border-accent hover:bg-transparent hover:text-accent',
  secondary:
    'bg-transparent text-text border border-border hover:border-accent hover:text-accent',
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
  const classes = `${baseClasses} ${variants[variant]} ${className}`

  // External link — plain <a> tag
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  // Internal link — Next.js Link
  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  // Button
  return (
    <button
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  )
}
