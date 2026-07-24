'use client'

import Link from 'next/link'
import { socialLinks } from '@/lib/social-links'

const footerNav = [
  { href: '/lab', label: 'Lab' },
  { href: '/whatever', label: 'Whatever' },
  { href: '/links', label: 'Links' },
  { href: '/guestbook', label: 'Guestbook' },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-bg">
      <div className="mx-auto max-w-[var(--max-width-content)] px-5 py-12">
        <nav aria-label="Footer navigation" className="mb-8">
          <ul className="m-0 flex list-none flex-wrap justify-center gap-x-8 gap-y-4 p-0">
            {footerNav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-mono text-sm uppercase tracking-wide text-text-dim no-underline transition-colors duration-200 hover:text-text"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-8 flex justify-center gap-6">
          {socialLinks
            .filter((link) => link.url.startsWith('http'))
            .map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-10 w-10 items-center justify-center border border-transparent text-text-dim transition-all duration-200 hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d={link.iconPath} />
                </svg>
                <span className="sr-only">(opens in new tab)</span>
              </a>
            ))}
        </div>

        <p className="m-0 text-center font-mono text-xs text-text-dim">&copy; {new Date().getFullYear()} chaddytwiceover</p>
      </div>
    </footer>
  )
}
