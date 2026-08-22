'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/lab', label: 'Lab' },
  { href: '/socials', label: 'Socials' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-border/90 bg-bg/85 backdrop-blur-sm" aria-label="Primary navigation">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-6 px-6 py-4 md:px-12">
        <Link href="/" className="min-h-11 content-center font-mono text-[11px] uppercase tracking-[0.08em] text-textDim transition-colors hover:text-text">
          chaddytwiceover
        </Link>

        <ul className="flex items-center gap-1 sm:gap-3">
          {links.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex min-h-11 items-center rounded-full px-3 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors sm:px-4 ${
                    active ? 'bg-text text-bg' : 'text-textDim hover:bg-bgSoft hover:text-text'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
