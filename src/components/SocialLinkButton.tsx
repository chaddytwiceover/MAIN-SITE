'use client'

import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'
import type { SocialLink } from '@/lib/social-links'

interface SocialLinkButtonProps {
  link: SocialLink
  index: number
}

export default function SocialLinkButton({ link, index }: SocialLinkButtonProps) {
  const skipAnim = useSkipAnimation()
  const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto')

  return (
    <motion.a
      href={link.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="
        group flex items-center gap-4 w-full px-5 py-4
        border border-border bg-bg-raised
        transition-all duration-150
        hover:border-border-strong hover:-translate-y-[1px]
      "
      initial={skipAnim ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: skipAnim ? 0 : index * 0.08,
      }}
    >
      {/* Platform icon */}
      <span className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-accent"
          aria-hidden="true"
        >
          <path d={link.iconPath} />
        </svg>
      </span>

      {/* Label */}
      <div className="flex-1 min-w-0">
        <span className="block font-heading font-semibold text-text">
          {link.name}
        </span>
        <span className="block text-text-dim text-sm truncate">
          {link.description}
        </span>
      </div>

      {/* Arrow indicator */}
      <span className="flex-shrink-0 text-text-dim transition-transform duration-150 group-hover:translate-x-1">
        →
      </span>

      {isExternal && <span className="sr-only">(opens in new tab)</span>}
    </motion.a>
  )
}
