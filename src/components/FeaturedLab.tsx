'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { labProjects } from '@/lib/lab-projects'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4, duration: 0.8 } },
}

export default function FeaturedLab() {
  const featured = labProjects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="featured-section">
      <div className="section-content">
        <span className="section-label">Lab</span>
        <h2 className="featured-heading">Featured Experiments</h2>
        <motion.div
          className="featured-grid"
          aria-live="polite"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featured.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <Link href={`/lab/${project.slug}`} className="lab-card">
                <div className="lab-card-header">
                  <h2 className="lab-card-title">{project.title}</h2>
                </div>
                <p className="lab-card-description">{project.description}</p>
                <div className="lab-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="lab-tag">{tag}</span>
                  ))}
                </div>
                <span className="lab-card-cta">View experiment →</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <Link href="/lab" className="cta-button cta-secondary">
          View All Experiments
        </Link>
      </div>
    </section>
  )
}
