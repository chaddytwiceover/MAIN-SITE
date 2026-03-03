import type { Metadata } from 'next'
import SocialsContent from './SocialsContent'

export const metadata: Metadata = {
  title: 'Socials',
  description:
    'Connect with CHADDYTWICEOVER — GitHub, email, and other links.',
  twitter: { card: 'summary' },
}

export default function SocialsPage() {
  return <SocialsContent />
}
