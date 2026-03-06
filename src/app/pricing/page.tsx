import type { Metadata } from 'next'
import PricingContent from './PricingContent'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent website design pricing for small businesses and creators — simple packages with no hidden fees.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — CHADDYTWICEOVER',
    description: 'Transparent website design pricing for small businesses and creators — simple packages with no hidden fees.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CHADDYTWICEOVER Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function PricingPage() {
  return <PricingContent />
}
