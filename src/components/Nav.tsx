'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useNeon } from './NeonProvider'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const { neonOn, toggle } = useNeon()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Keyboard: Escape to close, focus trap within nav when menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        document.getElementById('menu-toggle')?.focus()
        return
      }

      if (e.key === 'Tab' && menuOpen && navRef.current) {
        const focusable = navRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <nav aria-label="Main navigation" ref={navRef}>
      <div className="nav-container">
        <Link
          href="/"
          className="logo"
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          CHADDYTWICEOVER
        </Link>
        <button
          className="theme-toggle"
          type="button"
          aria-label={neonOn ? 'Turn neon off' : 'Turn neon on'}
          onClick={toggle}
        >
          {neonOn ? 'NEON ON' : 'NEON OFF'}
        </button>
        <button
          className={`menu-toggle${menuOpen ? ' active' : ''}`}
          id="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
        <ul
          className={`nav-links${menuOpen ? ' active' : ''}`}
          id="nav-links"
          role="list"
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={
                  pathname === href || pathname === `${href}/`
                    ? 'page'
                    : undefined
                }
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
