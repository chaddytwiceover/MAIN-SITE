import type { Metadata } from 'next'
import SocialsContent from './SocialsContent'

export const metadata: Metadata = {
  title: 'Socials',
  description:
    'Connect with CHADDYTWICEOVER — GitHub, email, and other links.',
  alternates: { canonical: '/socials' },
  openGraph: {
    title: 'Socials — CHADDYTWICEOVER',
    description: 'GitHub, email, and other ways to connect.',
  },
  twitter: { card: 'summary' },
}

export default function SocialsPage() {
  return <SocialsContent />
}
