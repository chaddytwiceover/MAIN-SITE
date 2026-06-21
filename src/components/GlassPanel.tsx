'use client'

import { ReactNode } from 'react'

/**
 * GlassPanel — Reusable glassmorphic container
 *
 * Provides the translucent, frosted-glass look used throughout the site.
 * Wraps children in a rounded panel with subtle border, backdrop blur,
 * and a soft surface tint.
 */

interface GlassPanelProps {
  children: ReactNode
  className?: string
  /** HTML element to render as (defaults to 'div') */
  as?: 'div' | 'section' | 'article' | 'aside'
  /** Whether to show a hover effect */
  hover?: boolean
}

export default function GlassPanel({
  children,
  className = '',
  as: Element = 'div',
  hover = false,
}: GlassPanelProps) {
  return (
    <Element
      className={`
        bg-surface backdrop-blur-md border border-border rounded-2xl
        ${hover ? 'transition-all duration-300 hover:bg-surface-hover hover:border-border-hover' : ''}
        ${className}
      `}
    >
      {children}
    </Element>
  )
}
