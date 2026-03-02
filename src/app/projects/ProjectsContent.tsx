'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import FilterBar from '@/components/FilterBar'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

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
        <Link className="cta-button cta-secondary page-back" href="/">
          ← Back
        </Link>
        <span className="section-label">Work</span>
        <h1>Experiments &amp; Projects</h1>
        <p>
          Active learning builds where I test ideas and improve front-end
          skills.
        </p>

        <FilterBar activeFilter={filter} onFilter={setFilter} />

        <div
          className="project-grid"
          aria-live="polite"
          aria-label="Projects"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
