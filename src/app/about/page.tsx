import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'About CHADDYTWICEOVER — web dev student learning in public.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — CHADDYTWICEOVER',
    description: 'Web dev student learning in public.',
  },
  twitter: { card: 'summary' },
}

export default function AboutPage() {
  return <AboutContent />
}
