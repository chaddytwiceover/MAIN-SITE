import type { Metadata } from 'next'
import ProjectsContent from './ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Front-end builds, UI experiments, and ongoing iterations by CHADDYTWICEOVER — live projects built with React, Next.js, and modern web technologies.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — CHADDYTWICEOVER',
    description: 'Front-end builds, UI experiments, and ongoing iterations — built with React, Next.js, and modern web technologies.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Projects by CHADDYTWICEOVER',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
