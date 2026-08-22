import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'chaddytwiceover' },
  description: 'my corner of the internet — links, experiments, socials, and random things I make',
}

const cards = [
  {
    title: 'The Lab',
    description: 'experiments, prototypes, and weird little builds',
    href: 'https://lab.chaddytwiceover.com',
    external: true,
  },
  {
    title: 'Socials',
    description: 'find me around the internet',
    href: '/socials',
  },
  {
    title: 'Creations',
    description: 'games, tools, and things I’m building',
    href: '/lab',
  },
  {
    title: 'Contact',
    description: 'say hi',
    href: '/contact',
  },
]

const cardClass =
  'group flex min-h-[168px] flex-col justify-between rounded-2xl border border-border bg-bgSoft/40 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-textDim hover:bg-bgSoft hover:shadow-[0_0_28px_rgba(237,235,230,0.08)] focus-visible:border-text md:p-7'

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-6 py-16 md:px-12 md:py-24">
      <section className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">
          my corner of the internet
        </p>
        <h1 className="mt-4 break-words font-serif text-[clamp(3.2rem,10vw,6.5rem)] lowercase leading-[0.88] tracking-[-0.035em] text-text">
          chaddytwiceover
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text md:text-xl">
          links, experiments, socials, and random things I make
        </p>
        <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-textDim">
          chaddytwiceover is my online home for creative experiments, links, and whatever I’m into next.
        </p>
      </section>

      <section aria-label="Main links" className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
        {cards.map((card) =>
          card.external ? (
            <a key={card.title} href={card.href} className={cardClass}>
              <span className="font-serif text-3xl lowercase text-text">{card.title}</span>
              <span className="mt-8 flex items-end justify-between gap-6">
                <span className="max-w-[34ch] text-sm leading-relaxed text-textDim">{card.description}</span>
                <span aria-hidden="true" className="font-mono text-sm text-textFaint transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </a>
          ) : (
            <Link key={card.title} href={card.href} className={cardClass}>
              <span className="font-serif text-3xl lowercase text-text">{card.title}</span>
              <span className="mt-8 flex items-end justify-between gap-6">
                <span className="max-w-[34ch] text-sm leading-relaxed text-textDim">{card.description}</span>
                <span aria-hidden="true" className="font-mono text-sm text-textFaint transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ),
        )}
      </section>
    </div>
  )
}
