'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

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
      initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.5 }}
    >
      <Link className="section-card" href={href}>
        <span className="section-card-label">{label}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </motion.div>
  )
}
