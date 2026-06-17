'use client'

import Link from 'next/link'

export default function GuestbookCTA() {
  return (
    <section className="retro-community guestbook-section" aria-labelledby="community-title">
      <header className="retro-section-header">
        <p className="retro-section-label">Web Ring Energy</p>
        <h2 id="community-title">Ready to build something weirdly useful?</h2>
      </header>

      <div className="retro-community-panel">
        <p>
          Need a simple site, landing page, or front-end polish? Sign the guestbook — aka send me a message.
        </p>
        <div className="guestbook-actions" style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/pricing" className="retro-button retro-button-secondary">
            View Pricing
          </Link>
          <Link href="/contact" className="retro-button retro-button-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
