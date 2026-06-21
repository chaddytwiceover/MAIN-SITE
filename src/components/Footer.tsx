'use client'

import Link from 'next/link'
import { socialLinks } from '@/lib/social-links'

/**
 * Footer — Site footer with nav links, social icons, and copyright
 *
 * Pulls social links from the central data file.
 * Includes a subtle gradient accent line at the top.
 */

const footerNav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/lab', label: 'Lab' },
  { href: '/about', label: 'About' },
  { href: '/socials', label: 'Socials' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border">
      {/* Gradient accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-[var(--max-width-content)] mx-auto px-5 py-12">
        {/* Nav links */}
        <nav aria-label="Footer navigation" className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none m-0 p-0">
            {footerNav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-text-dim hover:text-text transition-colors duration-200 no-underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8">
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
                  w-9 h-9 flex items-center justify-center rounded-lg
                  text-text-dim hover:text-accent hover:bg-surface
                  transition-all duration-200
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d={link.iconPath} />
                </svg>
                <span className="sr-only">(opens in new tab)</span>
              </a>
            ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-text-dim m-0">
          &copy; {new Date().getFullYear()} chaddytwiceover
        </p>
      </div>
    </footer>
  )
}
