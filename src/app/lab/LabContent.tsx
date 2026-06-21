'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { labProjects } from '@/lib/lab-projects'
import LabCard from '@/components/LabCard'
import SectionHeader from '@/components/SectionHeader'
import PageTransition from '@/components/PageTransition'

/**
 * LabContent — Client component for the Lab page
 *
 * Creative sandbox grid of small experiments and prototypes.
 */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.25, duration: 0.55 },
  },
}

export default function LabContent() {
  const prefersReduced = useReducedMotion()

  return (
    <PageTransition className="min-h-screen pt-28 pb-16 px-5">
      <div className="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeader
          label="Lab"
          title="Experiments & Prototypes"
          description="Small experiments, unfinished ideas, weird UI bits, and things I'm learning by building."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          aria-label="Lab experiments"
          variants={container}
          initial={prefersReduced ? false : 'hidden'}
          animate="show"
        >
          {labProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={prefersReduced ? undefined : item}
            >
              <LabCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  )
}
