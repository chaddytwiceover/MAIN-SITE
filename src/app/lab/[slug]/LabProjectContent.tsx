'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LabProject } from '@/lib/lab-projects'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

const STATUS_LABEL: Record<string, string> = {
  finished: 'Finished',
  active: 'Active',
  prototype: 'Prototype',
}

interface Props {
  project: LabProject
}

export default function LabProjectContent({ project }: Props) {
  const skip = useSkipAnimation()

  return (
    <section className="page-section" id="lab-project">
      <motion.div
        className="section-content"
        initial={skip ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: skip ? 0 : 0.5, ease: 'easeOut' }}
      >
        {/* Back to Lab */}
        <motion.div
          className="back-button-wrapper"
          initial={skip ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: skip ? 0 : 0.4, ease: 'easeOut', delay: skip ? 0 : 0.15 }}
        >
          <Link href="/lab" className="back-button" aria-label="Back to Lab">
            <svg
              className="back-button-arrow"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Lab</span>
          </Link>
        </motion.div>

        <span className="section-label">Lab</span>

        <div className="lab-project-header">
          <h1>{project.title}</h1>
          <span className={`lab-card-status lab-card-status--${project.status}`}>
            {STATUS_LABEL[project.status]}
          </span>
        </div>

        <p>{project.description}</p>

        <div className="lab-card-tags lab-card-tags--spaced" aria-label="Technologies">
          {project.tags.map((tag) => (
            <span key={tag} className="lab-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="lab-project-actions">
          <a
            href={project.demoUrl}
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Demo
          </a>
          <Link href="/lab" className="cta-button cta-secondary">
            ← Back to Lab
          </Link>
        </div>

        <p className="lab-project-note">
          This is a Lab experiment — part of an ongoing learning-in-public workflow.
          It may be a rough prototype or a finished mini-project.
        </p>
      </motion.div>
    </section>
  )
}
