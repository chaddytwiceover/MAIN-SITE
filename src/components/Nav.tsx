'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/lab', label: 'Lab' },
  { href: '/whatever', label: 'Whatever' },
  { href: '/links', label: 'Links' },
  { href: '/guestbook', label: 'Guestbook' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        document.getElementById('menu-toggle')?.focus()
        return
      }

      if (e.key === 'Tab' && menuOpen && navRef.current) {
        const focusable = navRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
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
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-accent" style={{ scaleX: scrollYProgress }} />

      <nav aria-label="Main navigation" ref={navRef} className="fixed top-1 z-50 w-full border-b border-border bg-bg-raised">
        <div className="mx-auto flex max-w-[var(--max-width-content)] items-center justify-between px-5 py-3.5">
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tighter text-text no-underline transition-colors duration-200 hover:text-accent"
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            chaddytwiceover
          </Link>

          <button
            id="menu-toggle"
            type="button"
            className={`relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 transition-colors duration-200 hover:bg-bg focus-visible:outline-2 focus-visible:outline-accent md:hidden ${menuOpen ? 'z-50' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`block h-0.5 w-5 origin-center bg-text-muted transition-all duration-300 ${menuOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 origin-center bg-text-muted transition-all duration-300 ${menuOpen ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </button>

          <ul className="m-0 hidden list-none items-center gap-6 p-0 md:flex">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname === `${href}/`
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`border-b-2 pb-1 font-mono text-sm uppercase tracking-wide no-underline transition-colors duration-200 ${
                      isActive
                        ? 'border-accent text-accent'
                        : 'border-transparent text-text-muted hover:border-border-strong hover:text-text'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div
          className={`fixed inset-0 top-[53px] z-40 border-b border-border bg-bg-raised transition-all duration-300 md:hidden ${
            menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
          id="nav-links"
        >
          <ul className="m-0 flex h-full list-none flex-col items-center justify-start gap-8 p-0 pt-12">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname === `${href}/`
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block border-b-2 pb-1 font-mono text-xl uppercase tracking-wide no-underline transition-colors duration-200 ${
                      isActive
                        ? 'border-accent text-accent'
                        : 'border-transparent text-text-muted hover:border-border-strong hover:text-text'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
