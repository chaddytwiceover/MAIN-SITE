import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with CHADDYTWICEOVER — share feedback, project ideas, or just say hi.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — CHADDYTWICEOVER',
    description: 'Share feedback, project ideas, or just say hi.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact CHADDYTWICEOVER',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function ContactPage() {
  return <ContactContent />
}
