'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4, duration: 0.8 } }
}

export default function FeaturedProjects() {
  return (
    <section className="featured-section">
      <div className="section-content">
        <span className="section-label">Featured</span>
        <h2 className="featured-heading">Selected Projects</h2>
        <motion.div
          className="featured-grid"
          aria-live="polite"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.slice(0, 2).map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        <Link href="/projects" className="cta-button cta-secondary">
          View All Projects
        </Link>
      </div>
    </section>
  )
}
