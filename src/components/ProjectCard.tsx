'use client'

import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasUrl = !!project.url
  const isExternal = !!project.url?.startsWith('http')
  const cardRef = useRef<HTMLElement>(null)

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
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const rect = cardRef.current?.getBoundingClientRect()
      if (!rect) return
      x.set((e.clientX - rect.left) / rect.width - 0.5)
      y.set((e.clientY - rect.top) / rect.height - 0.5)
    },
    [x, y]
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  const sharedMotionProps = {
    className: 'project-card',
    'data-category': project.category,
    style: { rotateX, rotateY, transformPerspective: 1000 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileHover: { translateY: -4 },
  }

  const cardContent = (
    <>
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
            fill="#ffffff"
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
        <p className="project-stat">// {project.status}</p>
      </div>
    </>
  )

  if (hasUrl) {
    return (
      <motion.a
        ref={cardRef as React.RefObject<HTMLAnchorElement>}
        href={project.url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...sharedMotionProps}
      >
        {cardContent}
        {isExternal && <span className="sr-only">(opens in new tab)</span>}
      </motion.a>
    )
  }

  return (
    <motion.div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      aria-label={project.title}
      {...sharedMotionProps}
    >
      {cardContent}
    </motion.div>
  )
}
