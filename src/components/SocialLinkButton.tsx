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
        group flex items-center gap-4 w-full p-4
        neo-border bg-bg neo-shadow
        hover:bg-text hover:text-bg hover:neo-border-accent hover:neo-shadow-hover
        transition-colors duration-0
        focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
      "
      initial={skipAnim ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: skipAnim ? 0 : index * 0.08,
      }}
    >
      {/* Platform icon */}
      <span className="flex-shrink-0 w-12 h-12 neo-border flex items-center justify-center group-hover:border-bg transition-colors duration-0">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-accent group-hover:text-bg"
          aria-hidden="true"
        >
          <path d={link.iconPath} />
        </svg>
      </span>

      {/* Label */}
      <div className="flex-1 min-w-0">
        <span className="block font-heading font-bold text-text group-hover:text-bg">
          {link.name}
        </span>
        <span className="block text-text-dim text-sm font-mono group-hover:text-bg/70 truncate">
          {link.description}
        </span>
      </div>

      {/* Arrow indicator */}
      <span className="flex-shrink-0 font-mono text-2xl font-bold text-text-dim transition-colors duration-0 group-hover:text-accent">
        →
      </span>

      {isExternal && <span className="sr-only">(opens in new tab)</span>}
    </motion.a>
  )
}
