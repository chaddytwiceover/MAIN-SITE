'use client'

import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = !!project.url && project.url !== '#'
  const cardRef = useRef<HTMLAnchorElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (shouldReduceMotion) return
      const rect = cardRef.current?.getBoundingClientRect()
      if (!rect) return
      x.set((e.clientX - rect.left) / rect.width - 0.5)
      y.set((e.clientY - rect.top) / rect.height - 0.5)
    },
    [x, y, shouldReduceMotion]
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.a
      ref={cardRef}
      href={project.url}
      className="project-card"
      data-category={project.category}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-disabled={!project.url ? true : undefined}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ translateY: -4 }}
    >
      <div className="project-image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 400"
          role="img"
          aria-label={project.title}
          focusable={false}
        >
          <rect width="640" height="400" fill={project.svgBg} />
          <rect
            x="60"
            y="60"
            width="520"
            height="280"
            fill="none"
            stroke={project.svgStroke}
            strokeWidth="2"
            opacity="0.4"
          />
          <rect
            x="80"
            y="80"
            width="480"
            height="240"
            fill="none"
            stroke={project.svgStroke}
            strokeWidth="1"
            opacity="0.2"
          />
          <text
            x="320"
            y="215"
            fill="#1a1a18"
            fontFamily="Consolas, monospace"
            fontSize="30"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="4"
          >
            {project.svgLabel}
          </text>
        </svg>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="project-outcome">{project.description}</p>
        <p className="project-meta">Focus: {project.focus}</p>
        <p className="project-meta">Stack: {project.stack}</p>
        <p className="project-stat">{`// ${project.status}`}</p>
        {project.problem && project.approach && project.result && project.learned && (
          <div className="project-case-study">
            <p className="project-case-item"><span className="case-label">Problem:</span> {project.problem}</p>
            <p className="project-case-item"><span className="case-label">Approach:</span> {project.approach}</p>
            <p className="project-case-item"><span className="case-label">Result:</span> {project.result}</p>
            <p className="project-case-item"><span className="case-label">Learned:</span> {project.learned}</p>
          </div>
        )}
        {isExternal && <span className="sr-only">(opens in new tab)</span>}
      </div>
    </motion.a>
  )
}
