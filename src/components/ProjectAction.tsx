import Link from 'next/link'
import type { LabProject } from '@/lib/lab-projects'

export default function ProjectAction({ project }: { project: LabProject }) {
  const action = project.action ?? 'Play game'
  return <Link href={project.demoUrl} prefetch={false} className="project-action" aria-label={`${action} — ${project.title}`}>{action}</Link>
}
