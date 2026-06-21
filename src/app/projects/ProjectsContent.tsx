'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import FilterBar from '@/components/FilterBar'
import SectionHeader from '@/components/SectionHeader'
import PageTransition from '@/components/PageTransition'

/**
 * ProjectsContent — Client component for the Projects page
 *
 * Shows a filterable grid of project cards with staggered animation.
 */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.6 },
  },
}

export default function ProjectsContent() {
  const [filter, setFilter] = useState('all')
  const prefersReduced = useReducedMotion()

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    if (filter === 'live') return projects.filter((p) => p.status === 'Live')
    if (filter === 'coming-soon') return projects.filter((p) => p.status === 'Coming Soon')
    return projects
  }, [filter])

  return (
    <PageTransition className="min-h-screen pt-28 pb-16 px-5">
      <div className="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeader
          label="Work"
          title="Experiments & Projects"
          description="This is where I put the stuff I'm building, breaking, fixing, and occasionally finishing."
        />

        <FilterBar activeFilter={filter} onFilter={setFilter} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          aria-live="polite"
          aria-label="Projects"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={prefersReduced ? undefined : itemVariant}
                layout
                initial="hidden"
                animate="show"
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.15 },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-text-dim py-12">
            No projects match that filter yet.
          </p>
        )}
      </div>
    </PageTransition>
  )
}
