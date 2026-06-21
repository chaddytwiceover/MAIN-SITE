'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * SectionCard — Quick-link card for the home page grid
 *
 * Glass panel with label, title, description, and subtle hover animation.
 */

interface SectionCardProps {
  href: string
  label: string
  title: string
  description: string
}

export default function SectionCard({
  href,
  label,
  title,
  description,
}: SectionCardProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: prefersReduced ? 0 : 0.5 }}
    >
      <Link
        href={href}
        className="
          group block p-6
          bg-surface backdrop-blur-md border border-border rounded-2xl
          transition-all duration-300 no-underline
          hover:bg-surface-hover hover:border-border-hover
          hover:shadow-[0_8px_32px_rgba(125,211,252,0.04)]
        "
      >
        <span className="text-xs font-medium tracking-widest uppercase text-accent mb-2 block">
          {label}
        </span>
        <h2 className="text-text font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-200">
          {title}
        </h2>
        <p className="text-text-muted text-sm leading-relaxed m-0">
          {description}
        </p>
      </Link>
    </motion.div>
  )
}
