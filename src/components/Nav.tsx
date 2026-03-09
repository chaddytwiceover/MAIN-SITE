'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ACCENT_GRADIENT = 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)'
const ACCENT_GRADIENT_HOVER = 'linear-gradient(90deg, #4E85BF 0%, #89AACC 100%)'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/resume', label: 'Resume' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)
  const [sayHiHovered, setSayHiHovered] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = useCallback(
    (href: string) => pathname === href || pathname === `${href}/`,
    [pathname]
  )

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      aria-label="Main navigation"
    >
      <div
        className={`inline-flex items-center rounded-full border border-white/10 bg-[#141414] px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/10' : ''
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="CHADDYTWICEOVER home"
          className="flex-shrink-0"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <div
            className="w-9 h-9 rounded-full p-[2px] transition-all duration-300"
            style={{ background: logoHovered ? ACCENT_GRADIENT_HOVER : ACCENT_GRADIENT }}
          >
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
              <span
                className="text-[13px] font-display italic tracking-tighter text-[#f5f5f5] transition-transform duration-300"
                style={{ transform: logoHovered ? 'scale(1.1)' : 'scale(1)' }}
              >
                CW
              </span>
            </div>
          </div>
        </Link>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-[#1f1f1f] mx-1" aria-hidden="true" />

        {/* Nav links */}
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 font-body ${
              isActive(href)
                ? 'text-[#f5f5f5] bg-[#1f1f1f]/50'
                : 'text-[#888888] hover:text-[#f5f5f5] hover:bg-[#1f1f1f]/50'
            }`}
            aria-current={isActive(href) ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-[#1f1f1f] mx-1" aria-hidden="true" />

        {/* Say hi button */}
        <div className="relative">
          {/* Gradient border ring — visible on hover */}
          <span
            className="absolute rounded-full pointer-events-none transition-opacity duration-200"
            style={{
              inset: '-2px',
              background: ACCENT_GRADIENT,
              opacity: sayHiHovered ? 1 : 0,
            }}
            aria-hidden="true"
          />
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-1 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-body text-[#888888] hover:text-[#f5f5f5] transition-colors duration-200 bg-[#141414] backdrop-blur-md"
            onMouseEnter={() => setSayHiHovered(true)}
            onMouseLeave={() => setSayHiHovered(false)}
          >
            Say hi
            <motion.span
              animate={{ x: sayHiHovered ? 1 : 0, y: sayHiHovered ? -1 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
              aria-hidden="true"
            >
              ↗
            </motion.span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
