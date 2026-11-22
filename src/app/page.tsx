import type { Metadata } from 'next'
import Link from 'next/link'
import ProjectFrames, { Still } from '@/components/ProjectFrames'
import ProjectAction from '@/components/ProjectAction'
import { labProjects } from '@/lib/lab-projects'

export const metadata: Metadata = {
  title: { absolute: 'Twice Over — chaddytwiceover' },
  description: 'Play South Florida Fighter and explore games and interactive work by chaddytwiceover.',
}

export default function HomePage() {
  const published = labProjects.filter(project => !project.hidden)
  const fighter = published.find(project => project.slug === 'south-florida-fighter')
  const selected = published.filter(project => project !== fighter && project.featured).slice(0, 2)
  return (
    <div className="sheet home-page">
      <h1 className="masthead">TWICE OVER</h1>
      {fighter && (
        <section aria-labelledby="featured-title">
          {fighter.stills && <ProjectFrames media={fighter.stills} featured priority />}
          <div className="featured-credit">
            <h2 id="featured-title">{fighter.title}</h2>
            <div className="launch"><ProjectAction project={fighter} /></div>
          </div>
        </section>
      )}
      <section className="selected" aria-labelledby="selected-title">
        <header className="selection-header">
          <h2 id="selected-title">Selected work</h2>
          <Link className="text-link" href="/lab/">Browse the Lab</Link>
        </header>
        <div className="selections">
          {selected.map(project => (
            <article key={project.slug} className="selection">
              {project.stills && <div className={`proof proof-${project.stills.prefix}`}>
                <Still media={project.stills} index={project.stills.frames.length - 1} sizes="(max-width: 640px) 76px, 120px" />
              </div>}
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectAction project={project} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
