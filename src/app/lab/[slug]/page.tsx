import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { labProjects } from '@/lib/lab-projects'
import LabProjectContent from './LabProjectContent'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return labProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = labProjects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/lab/${project.slug}` },
    openGraph: {
      title: `${project.title} — CHADDYTWICEOVER Lab`,
      description: project.description,
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/og-image.png'],
    },
  }
}

export default function LabProjectPage({ params }: Props) {
  const project = labProjects.find((p) => p.slug === params.slug)
  if (!project) notFound()
  return <LabProjectContent project={project} />
}
