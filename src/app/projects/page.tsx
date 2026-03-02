import type { Metadata } from 'next'
import ProjectsContent from './ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects and experiments by CHADDYTWICEOVER — front-end builds and UI explorations.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — CHADDYTWICEOVER',
    description: 'Front-end builds, UI experiments, and ongoing iterations.',
  },
  twitter: { card: 'summary' },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
