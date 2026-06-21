'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { SocialLink } from '@/lib/social-links'

/**
 * SocialLinkButton — Large stacked link button for the Socials page
 *
 * Linktree-style button with icon, platform name, and subtle arrow.
 * Glass panel styling with Framer Motion hover/tap feedback.
 */

interface SocialLinkButtonProps {
  link: SocialLink
  index: number
}

export default function SocialLinkButton({ link, index }: SocialLinkButtonProps) {
  const prefersReduced = useReducedMotion()
  const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto')

  return (
    <motion.a
      href={link.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="
        group flex items-center gap-4 w-full px-6 py-4
        bg-surface backdrop-blur-md border border-border rounded-2xl
        transition-all duration-300
        hover:bg-surface-hover hover:border-border-hover
        hover:shadow-[0_8px_32px_rgba(125,211,252,0.06)]
        focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
      "
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReduced ? 0 : 0.4,
        delay: prefersReduced ? 0 : index * 0.08,
        ease: 'easeOut',
      }}
      whileHover={prefersReduced ? {} : { scale: 1.02, y: -2 }}
      whileTap={prefersReduced ? {} : { scale: 0.98 }}
    >
      {/* Platform icon */}
      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-accent-soft text-accent">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d={link.iconPath} />
        </svg>
      </span>

      {/* Label */}
      <div className="flex-1 min-w-0">
        <span className="block text-text font-medium text-base">
          {link.name}
        </span>
        <span className="block text-text-dim text-sm truncate">
          {link.description}
        </span>
      </div>

      {/* Arrow indicator */}
      <svg
        className="flex-shrink-0 w-5 h-5 text-text-dim transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>

      {isExternal && <span className="sr-only">(opens in new tab)</span>}
    </motion.a>
  )
}
