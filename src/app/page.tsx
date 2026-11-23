import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Twice Over — chaddytwiceover' },
  description: 'I make stuff for fun. Find my projects and social links here.',
}

export default function HomePage() {
  return (
    <div className="sheet home-page">
      <h1 className="masthead">Twice Over</h1>
      <p className="home-tagline">
        I make stuff for fun. Find my <Link href="/lab/">projects</Link> and{' '}
        <Link href="/socials/">social links</Link> here.
      </p>
    </div>
  )
}
