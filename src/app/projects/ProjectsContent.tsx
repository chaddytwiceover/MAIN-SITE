'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import FilterBar from '@/components/FilterBar'
import BackButton from '@/components/BackButton'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.6 } }
}

export default function ProjectsContent() {
  const [filter, setFilter] = useState('all')
  const skip = useSkipAnimation()

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  )

  return (
    <section className="page-section" id="projects">
      <motion.div
        className="section-content"
        initial={skip ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
      >
        <BackButton />
        <span className="section-label">Work</span>
        <h1>Experiments &amp; Projects</h1>
        <p>
          Active learning builds where I test ideas and improve front-end
          skills.
        </p>

        <FilterBar activeFilter={filter} onFilter={setFilter} />

        <motion.div
          className="project-grid"
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
                variants={itemVariant}
                layout
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}
