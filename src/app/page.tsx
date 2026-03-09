import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import FeaturedLab from '@/components/FeaturedLab'
import CurrentlyBuilding from '@/components/CurrentlyBuilding'
import HomeCTA from '@/components/HomeCTA'

export const metadata: Metadata = {
  title: 'CHADDYTWICEOVER — Front-End Developer Portfolio',
  description: 'Front-end developer building with Next.js, React, and TypeScript. Sharing experiments, projects, and lessons learned in public.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <FeaturedLab />
      <CurrentlyBuilding />
      <HomeCTA />
    </>
  )
}
