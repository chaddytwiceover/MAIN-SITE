import Link from 'next/link'
import type { LabProject } from '@/lib/lab-projects'
import GamePlayer from '@/components/GamePlayer'

export default function LabProjectContent({ project }: { project: LabProject }) {
  const gameUrl = project.gameUrl ?? (project.demoUrl.startsWith('/demos/') ? project.demoUrl : undefined)
  return (
    <section className="sheet game-shell">
      <Link className="text-link" href="/lab/">Back to Lab</Link>
      {gameUrl && <GamePlayer key={gameUrl} title={project.title} url={gameUrl} />}
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className="game-links">
        {gameUrl && <a className="text-link" href={gameUrl} target="_blank" rel="noopener noreferrer">Open game in new tab</a>}
        {project.sourceUrl && project.sourceUrl !== gameUrl && <a className="text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View source</a>}
      </div>
    </section>
  )
}
