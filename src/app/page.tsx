import type { Metadata } from 'next'
import Link from 'next/link'
import GuestbookCTA from '@/components/GuestbookCTA'
import InteractiveVisitorCounter from '@/components/InteractiveVisitorCounter'

export const metadata: Metadata = {
  title: 'chaddytwiceover — Welcome to the Book Fair',
  description:
    'chaddytwiceover is a personal portfolio styled like a 90s computer lab fever dream.',
  alternates: { canonical: '/' },
}

const retroBadges = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'HTML/CSS/JS']

export default function HomePage() {
  return (
    <div className="retro-home" aria-labelledby="home-title">
      <section className="retro-hero" aria-label="Homepage intro">
        <p className="retro-status"><InteractiveVisitorCounter /></p>

        <div className="retro-window" role="presentation">
          <div className="retro-window-bar">
            <span>index.html - Netscape Navigator</span>
            <span aria-hidden="true">_ ▢ ✕</span>
          </div>

          <div className="retro-window-body">
            <p className="retro-hero-kicker">Welcome to the digital clubhouse!</p>
            <h1 id="home-title">Welcome to CHADDYTWICEOVER!</h1>
            <h2 className="retro-subtitle">Front-end experiments, web builds, and digital doodads from my corner of the internet.</h2>
            <p className="retro-hero-copy">
              Built with modern tools. Styled like your favorite 90s computer lab fever dream.
            </p>

            <div className="retro-badge-row" aria-label="Stack badges">
              {retroBadges.map((badge) => (
                <span key={badge} className="retro-badge sticker-badge">
                  {badge}
                </span>
              ))}
            </div>

            <div className="retro-hero-actions">
              <Link href="/projects" className="retro-button retro-button-primary">
                ENTER THE PORTFOLIO
              </Link>
              <Link href="/contact" className="retro-button retro-button-secondary">
                SIGN GUESTBOOK
              </Link>
            </div>
          </div>
        </div>

        <p className="retro-marquee" aria-label="Retro announcement">
          <div className="marquee-content">★ Welcome to Chaddy&apos;s Cyber Book Fair ★ Check out the new builds in the lab ★ Don&apos;t forget to sign the guestbook! ★</div>
        </p>
      </section>

      <section className="retro-links" aria-labelledby="lab-title">
        <header className="retro-section-header">
          <p className="retro-section-label">Secret Experiment Shelf</p>
          <h2 id="lab-title">Featured Experiments from the Lab</h2>
          <p className="retro-section-desc">Tiny builds, weird UI ideas, JavaScript games, and interaction experiments — shipped one pixel at a time.</p>
        </header>

        <div className="retro-card-grid">
          <Link className="retro-card book-fair-card" href="/lab/pixel-art/">
            <div className="sticker-label">HOT BUILD!</div>
            <h3>Pixel Art Editor</h3>
            <p>Make tiny pixel art right in the browser.</p>
          </Link>
          <Link className="retro-card book-fair-card" href="/lab/tic-tac-toe/">
            <div className="sticker-label">LAB PICK!</div>
            <h3>Tic Tac Toe Neural Grid</h3>
            <p>A small game experiment from the lab.</p>
          </Link>
          <Link className="retro-card book-fair-card" href="/projects">
            <div className="sticker-label">COOL!</div>
            <h3>View All Projects</h3>
            <p>See the full catalog of featured work.</p>
          </Link>
        </div>
      </section>

      <GuestbookCTA />
    </div>
  )
}
