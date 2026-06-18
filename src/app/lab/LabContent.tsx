'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { labProjects } from '@/lib/lab-projects'
import BackButton from '@/components/BackButton'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.25, duration: 0.55 } },
}

const STATUS_LABEL: Record<string, string> = {
  finished: 'Finished',
  active: 'Active',
  prototype: 'Prototype',
}

export default function LabContent() {
  const skip = useSkipAnimation()

  return (
    <section className="page-section" id="lab">
      <motion.div
        className="section-content"
        initial={skip ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
      >
        <BackButton />
        <span className="section-label">Lab</span>
        <h1>Experiments &amp; Prototypes</h1>
        <p>
          Small builds, game demos, and UI explorations — things I made while
          learning. Not every project is polished; some exist purely to test an
          idea or technique.
        </p>

        <motion.div
          className="lab-grid"
          aria-label="Lab projects"
          variants={container}
          initial={skip ? false : 'hidden'}
          animate="show"
        >
          {labProjects.map((project) => (
            <motion.div key={project.slug} variants={skip ? undefined : item}>
              <Link href={`/lab/${project.slug}`} className="lab-card">
                <div className="lab-card-header">
                  <h2 className="lab-card-title">{project.title}</h2>
                  <span className={`lab-card-status lab-card-status--${project.status}`}>
                    {STATUS_LABEL[project.status]}
                  </span>
                </div>
                <p className="lab-card-description">{project.description}</p>
                <div className="lab-card-tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <span key={tag} className="lab-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="lab-card-cta" aria-hidden="true">
                  View project →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
