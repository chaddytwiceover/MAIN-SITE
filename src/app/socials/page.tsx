import type { Metadata } from 'next'
import SocialsContent from './SocialsContent'

export const metadata: Metadata = {
  title: 'Socials',
  description:
    'Find CHADDYTWICEOVER across the web — GitHub, X, Instagram, TikTok, and more.',
  alternates: { canonical: '/socials' },
  openGraph: {
    title: 'Socials — CHADDYTWICEOVER',
    description: 'Find CHADDYTWICEOVER across the web — GitHub, X, Instagram, TikTok, and more.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CHADDYTWICEOVER Socials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function SocialsPage() {
  return <SocialsContent />
}
