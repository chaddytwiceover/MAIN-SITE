'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'

/**
 * Nav — Main site navigation
 *
 * Solid soft brutalist header with scroll progress bar.
 * Mobile: slide-down menu with focus trap and Escape-to-close.
 * Active route has a solid bottom border indicator.
 */

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/lab', label: 'Lab' },
  { href: '/whatever', label: 'Whatever' },
  { href: '/links', label: 'Links' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Escape to close + focus trap
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
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        aria-label="Main navigation"
        ref={navRef}
        className="
          fixed top-1 w-full z-50
          bg-bg-raised border-b border-border
          transition-colors duration-300
        "
      >
        <div className="max-w-[var(--max-width-content)] mx-auto flex items-center justify-between px-5 py-3.5">
          {/* Logo / site name */}
          <Link
            href="/"
            className="
              font-heading font-bold text-text text-xl tracking-tighter
              hover:text-accent transition-colors duration-200
              no-underline
            "
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            chaddytwiceover
          </Link>

          {/* Hamburger toggle (mobile) */}
          <button
            id="menu-toggle"
            type="button"
            className={`
              relative w-8 h-8 flex flex-col items-center justify-center gap-1.5
              md:hidden rounded-none transition-colors duration-200
              hover:bg-bg focus-visible:outline-2 focus-visible:outline-accent
              ${menuOpen ? 'z-50' : ''}
            `}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`
                block w-5 h-0.5 bg-text-muted transition-all duration-300 origin-center
                ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}
              `}
            />
            <span
              className={`
                block w-5 h-0.5 bg-text-muted transition-all duration-300 origin-center
                ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}
              `}
            />
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname === `${href}/`
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      font-mono text-sm tracking-wide uppercase
                      pb-1 border-b-2 transition-colors duration-200 no-underline
                      ${isActive
                        ? 'border-accent text-accent'
                        : 'border-transparent text-text-muted hover:text-text hover:border-border-strong'
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`
            md:hidden fixed inset-0 top-[53px] z-40
            bg-bg-raised border-b border-border
            transition-all duration-300
            ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
          id="nav-links"
        >
          <ul className="flex flex-col items-center justify-start pt-12 h-full gap-8 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname === `${href}/`
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      block font-mono text-xl tracking-wide uppercase
                      pb-1 border-b-2 transition-colors duration-200 no-underline
                      ${isActive
                        ? 'border-accent text-accent'
                        : 'border-transparent text-text-muted hover:text-text hover:border-border-strong'
                      }
                    `}
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
