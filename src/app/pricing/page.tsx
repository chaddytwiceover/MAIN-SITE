import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Archive',
  description: 'Archived page.',
  robots: { index: false, follow: false },
}

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-[800px] px-6 py-20 md:px-12 md:py-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">archive</p>
      <h1 className="mt-3 font-serif text-5xl lowercase text-text md:text-7xl">pricing</h1>
      <p className="mt-5 max-w-[55ch] text-textDim">This page is archived and is no longer part of the main site navigation.</p>
    </div>
  )
}
