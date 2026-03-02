'use client'

import Link from 'next/link'
import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  return (
    <section className="featured-section">
      <div className="section-content">
        <span className="section-label">Featured</span>
        <h2 className="featured-heading">Selected Projects</h2>
        <div className="featured-grid" aria-live="polite">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link href="/projects" className="cta-button cta-secondary">
          View All Projects
        </Link>
      </div>
    </section>
  )
}
