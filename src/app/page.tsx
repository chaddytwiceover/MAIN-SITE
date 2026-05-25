import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'chaddytwiceover — my corner of the internet',
  description:
    'chaddytwiceover is a simple personal landing page for links, experiments, socials, and random things I make.',
  alternates: { canonical: '/' },
}

const linkCards = [
  {
    title: 'The Lab',
    href: 'https://lab.chaddytwiceover.com',
    description: 'experiments, prototypes, and weird little builds',
    external: true,
  },
  {
    title: 'Socials',
    href: '/socials',
    description: 'find me around the internet',
  },
  {
    title: 'Creations',
    href: '/lab',
    description: 'games, tools, and things I’m building',
  },
  {
    title: 'Pixel Art Editor',
    href: '/lab/pixel-art/',
    description: 'make tiny pixel art right in the browser',
  },
  {
    title: 'Tic Tac Toe Neural Grid',
    href: '/lab/tic-tac-toe/',
    description: 'a small game experiment from the lab',
  },
]

export default function HomePage() {
  return (
    <>
      <section id="hero" aria-labelledby="home-title">
        <div className="hero-content">
          <p className="hero-label">my corner of the internet</p>
          <h1 id="home-title">chaddytwiceover</h1>
          <p className="hero-subcopy">
            links, experiments, socials, and random things I make
          </p>
        </div>
      </section>

      <section className="home-sections" aria-labelledby="main-links-title">
        <div className="section-content">
          <p className="section-label">start here</p>
          <h2 id="main-links-title">Pick a door</h2>

          <div className="section-card-grid">
            {linkCards.map((card) => {
              const content = (
                <>
                  <span className="section-card-label">
                    {card.external ? 'subdomain' : 'link'}
                  </span>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </>
              )

              if (card.external) {
                return (
                  <a
                    key={card.title}
                    className="section-card"
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <Link key={card.title} className="section-card" href={card.href}>
                  {content}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="about-title">
        <div className="section-content">
          <p className="section-label">about</p>
          <h2 id="about-title">Online home base</h2>
          <p>
            chaddytwiceover is my online home for creative experiments, links,
            and whatever I’m into next.
          </p>
        </div>
      </section>
    </>
  )
}
