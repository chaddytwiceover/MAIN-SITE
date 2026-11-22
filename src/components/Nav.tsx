'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/lab/', label: 'Lab' },
  { href: '/socials/', label: 'Socials' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <header className="site-header sheet">
      <Link className="signature" href="/">chaddytwiceover</Link>
      <nav aria-label="Primary navigation">
        {links.map(({ href, label }) => {
          const current = pathname === href || pathname + '/' === href
          const section = href !== '/' && pathname.startsWith(href)
          return (
            <Link key={href} href={href} aria-current={current ? 'page' : section ? 'location' : undefined}>
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
