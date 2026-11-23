import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Pricing Archive',
  description: 'Archived page.',
  robots: { index: false, follow: false },
}

export default function PricingPage() {
  return (
    <div className="sheet">
      <SectionHeader title="Pricing" description="This page is archived and is no longer part of the main site navigation." />
    </div>
  )
}
