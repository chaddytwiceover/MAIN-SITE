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
    <footer className="mt-24 neo-border border-x-0 border-b-0 bg-bg">
      <div className="mx-auto max-w-[var(--max-width-content)] px-5 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav aria-label="Footer navigation">
            <ul className="m-0 flex list-none flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 p-0">
              {footerNav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-mono text-sm uppercase tracking-wide text-text-dim no-underline transition-colors duration-0 hover:bg-accent hover:text-bg px-2 py-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {socialLinks
            .filter((link) => link.url.startsWith('http'))
            .map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-10 w-10 items-center justify-center neo-border text-text transition-all duration-0 hover:bg-accent hover:text-bg hover:neo-shadow"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d={link.iconPath} />
                </svg>
                <span className="sr-only">(opens in new tab)</span>
              </a>
            ))}
        </div>

          <p className="m-0 font-mono text-xs text-text-dim">&copy; {new Date().getFullYear()} chaddytwiceover</p>
        </div>
    </footer>
  )
}
