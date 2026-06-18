import type { Metadata } from 'next'
import LabContent from './LabContent'

export const metadata: Metadata = {
  title: 'Lab',
  description:
    'The Lab — small experiments, game prototypes, UI tests, and JavaScript mini-projects by CHADDYTWICEOVER.',
  alternates: { canonical: '/lab' },
  openGraph: {
    title: 'Lab — CHADDYTWICEOVER',
    description:
      'Small experiments, game prototypes, UI tests, and JavaScript mini-projects.',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'The Lab — CHADDYTWICEOVER' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function LabPage() {
  return <LabContent />
}
