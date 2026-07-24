'use client'

import Link from 'next/link'
import { socialLinks } from '@/lib/social-links'

/**
 * Footer — Site footer with nav links, social icons, and copyright
 *
 * Soft brutalist style: solid borders, mono fonts.
 */

const footerNav = [
  { href: '/lab', label: 'Lab' },
  { href: '/whatever', label: 'Whatever' },
  { href: '/links', label: 'Links' },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-bg">
      <div className="max-w-[var(--max-width-content)] mx-auto px-5 py-12">
        {/* Nav links */}
        <nav aria-label="Footer navigation" className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 list-none m-0 p-0">
            {footerNav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-mono text-sm tracking-wide uppercase text-text-dim hover:text-text transition-colors duration-200 no-underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks
            .filter((link) => link.url.startsWith('http'))
            .map((link) => (
               <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="
                  w-10 h-10 flex items-center justify-center rounded-none
                  border border-transparent
                  text-text-dim hover:text-accent hover:border-accent
                  transition-all duration-200
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d={link.iconPath} />
                </svg>
                <span className="sr-only">(opens in new tab)</span>
              </a>
            ))}
        </div>

        {/* Copyright */}
        <p className="text-center font-mono text-xs text-text-dim m-0">
          &copy; {new Date().getFullYear()} chaddytwiceover
        </p>
      </div>
    </footer>
  )
}
