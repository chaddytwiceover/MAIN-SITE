import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'chaddytwiceover — my corner of the internet',
  description:
    'chaddytwiceover is a simple personal landing page for links, experiments, socials, and random things I make.',
  alternates: { canonical: '/' },
}

const portalLinks = [
  {
    title: 'The Lab',
    href: 'https://lab.chaddytwiceover.com',
    description: 'experiments, prototypes, and weird little builds',
    type: 'subdomain',
    external: true,
  },
  {
    title: 'Socials',
    href: '/socials',
    description: 'find me around the internet',
    type: 'internal link',
  },
  {
    title: 'Creations',
    href: '/lab',
    description: 'games, tools, and things I’m building',
    type: 'internal link',
  },
  {
    title: 'Pixel Art Editor',
    href: '/lab/pixel-art/',
    description: 'make tiny pixel art right in the browser',
    type: 'lab demo',
  },
  {
    title: 'Tic Tac Toe Neural Grid',
    href: '/lab/tic-tac-toe/',
    description: 'a small game experiment from the lab',
    type: 'lab demo',
  },
]

const retroBadges = ['best viewed with curiosity', 'hand-coded vibes', 'creator-approved']

export default function HomePage() {
  return (
    <div className="retro-home" aria-labelledby="home-title">
      <section className="retro-hero" aria-label="Homepage intro">
        <p className="retro-status">[ online now ]</p>

        <div className="retro-window" role="presentation">
          <div className="retro-window-bar">
            <span>chaddytwiceover.exe</span>
            <span aria-hidden="true">▢ ✕</span>
          </div>

          <div className="retro-window-body">
            <p className="retro-hero-kicker">my corner of the internet</p>
            <h1 id="home-title">A retro home base for creators, experiments, and links</h1>
            <p className="retro-hero-copy">
              chaddytwiceover is where I share projects, web experiments, socials, and random
              things I make while learning in public.
            </p>

            <div className="retro-hero-actions">
              <Link href="/projects" className="retro-button retro-button-primary">
                view creator work
              </Link>
              <Link href="/contact" className="retro-button retro-button-secondary">
                contact me
              </Link>
              <Link href="/socials" className="retro-text-link">
                follow socials →
              </Link>
            </div>
          </div>
        </div>

        <p className="retro-marquee" aria-label="Retro announcement">
          ★ welcome to the digital clubhouse ★ new builds in the lab ★ say hi any time ★
        </p>
      </section>

      <section className="retro-links" aria-labelledby="portal-title">
        <header className="retro-section-header">
          <p className="retro-section-label">quick portals</p>
          <h2 id="portal-title">Pick a door</h2>
        </header>

        <div className="retro-card-grid">
          {portalLinks.map((card) => {
            const content = (
              <>
                <p className="retro-card-type">{card.type}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </>
            )

            if (card.external) {
              return (
                <a
                  key={card.title}
                  className="retro-card"
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </a>
              )
            }

            return (
              <Link key={card.title} className="retro-card" href={card.href}>
                {content}
              </Link>
            )
          })}
        </div>
      </section>

      <section className="retro-community" aria-labelledby="community-title">
        <header className="retro-section-header">
          <p className="retro-section-label">web ring energy</p>
          <h2 id="community-title">Stay in the loop</h2>
        </header>

        <div className="retro-community-panel">
          <p>
            Building playful web projects, sharing progress, and collaborating with people who love
            making things online.
          </p>
          <ul>
            <li>
              <Link href="/lab">Browse recent lab builds</Link>
            </li>
            <li>
              <Link href="/socials">Find every social link in one place</Link>
            </li>
            <li>
              <Link href="/contact">Drop a message for collaborations</Link>
            </li>
          </ul>
          <div className="retro-badge-row" aria-label="Retro badges">
            {retroBadges.map((badge) => (
              <span key={badge} className="retro-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
