import type { Metadata } from 'next'
import PricingContent from './PricingContent'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple website design pricing for small businesses and creators.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — CHADDYTWICEOVER',
    description: 'Simple website design pricing for small businesses and creators.',
  },
  twitter: { card: 'summary' },
}

export default function PricingPage() {
  return <PricingContent />
}
