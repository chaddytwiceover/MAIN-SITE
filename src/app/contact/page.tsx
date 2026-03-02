import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact CHADDYTWICEOVER — share feedback, ideas, or resources.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — CHADDYTWICEOVER',
    description: 'Share feedback, ideas, or resources. Reach out and connect.',
  },
  twitter: { card: 'summary' },
}

export default function ContactPage() {
  return <ContactContent />
}
