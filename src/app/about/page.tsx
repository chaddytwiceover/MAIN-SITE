import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about CHADDYTWICEOVER — a front-end developer and web development graduate building in public, sharing front-end experiments, UI designs, and the creative process.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — CHADDYTWICEOVER',
    description:
      'A front-end developer and web development graduate building in public — sharing front-end experiments, UI designs, and the creative process.',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About CHADDYTWICEOVER',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function AboutPage() {
  return <AboutContent />
}
