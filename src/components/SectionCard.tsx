'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

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
  const skip = useSkipAnimation()

  return (
    <motion.div
      initial={skip ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: skip ? 0 : 0.5 }}
      className="h-full"
    >
      <Link
        href={href}
        className="
          group block h-full p-6
          bg-bg-raised border border-border rounded-none
          transition-all duration-150 no-underline
          hover:border-border-strong hover:-translate-y-[2px]
        "
      >
        <span className="font-mono text-xs tracking-widest uppercase text-text-dim block mb-3">
          {label}
        </span>
        <h2 className="font-heading text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-150">
          {title}
        </h2>
        <p className="text-text-muted text-sm leading-relaxed m-0">
          {description}
        </p>
      </Link>
    </motion.div>
  )
}
