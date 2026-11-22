import type { Metadata } from 'next'
import { labProjects } from '@/lib/lab-projects'
import ProjectFrames from '@/components/ProjectFrames'
import ProjectAction from '@/components/ProjectAction'

export const metadata: Metadata = { title: 'Lab', description: 'The complete catalog of interactive projects by chaddytwiceover.' }

export default function LabPage() {
  return (
    <div className="sheet catalog">
      <header className="page-heading"><h1>Lab</h1><p>Games and interactive work by chaddytwiceover.</p></header>
      <section className="catalog-grid" aria-label="Projects">
        {labProjects.filter(p => !p.hidden).map((project, i) => (
          <article key={project.slug} className="catalog-entry">
            {project.stills && <ProjectFrames media={project.stills} priority={i === 0} />}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ProjectAction project={project} />
          </article>
        ))}
      </section>
    </div>
  )
}
