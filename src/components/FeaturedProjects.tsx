'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

/**
 * FeaturedProjects — Home page featured projects section
 *
 * Shows up to 3 featured projects in a responsive grid.
 */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
}

export default function FeaturedProjects() {
  const prefersReduced = useReducedMotion()
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-20 px-5">
      <div className="max-w-[var(--max-width-content)] mx-auto">
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent mb-3">
          Featured
        </span>
        <h2 className="text-text text-2xl sm:text-3xl font-bold mb-8">
          Things I&apos;ve Made
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          aria-live="polite"
          variants={container}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={prefersReduced ? undefined : item}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.03 }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            className="inline-block"
          >
            <Link
              href="/projects"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-surface border border-border text-text-muted font-medium text-sm
                hover:bg-surface-hover hover:border-border-hover hover:text-text
                transition-all duration-200 no-underline
              "
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
