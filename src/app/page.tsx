import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import CurrentlyBuilding from '@/components/CurrentlyBuilding'
import SectionCard from '@/components/SectionCard'
import { socialLinks } from '@/lib/social-links'

/**
 * Home page — Calm landing page that introduces the site
 */

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Featured projects */}
      <FeaturedProjects />

      {/* Currently building */}
      <CurrentlyBuilding />

      {/* Quick link cards */}
      <section className="py-20 px-5" aria-labelledby="explore-title">
        <div className="max-w-[var(--max-width-content)] mx-auto">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent mb-3">
            Explore
          </span>
          <h2 id="explore-title" className="text-text text-2xl sm:text-3xl font-bold mb-8">
            Around the Site
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SectionCard
              href="/about"
              label="About"
              title="Learning in public."
              description="Who I am, what I'm learning, and how this site helps me practice web development."
            />
            <SectionCard
              href="/lab"
              label="Lab"
              title="Experiments & Prototypes"
              description="Small builds, weird UI ideas, and things I made while learning."
            />
            <SectionCard
              href="/socials"
              label="Socials"
              title="Find me online."
              description="Links to everywhere I post — GitHub, socials, and more."
            />
            <SectionCard
              href="/contact"
              label="Contact"
              title="Say hi."
              description="Want to share feedback, ideas, or just chat? Reach out anytime."
            />
          </div>
        </div>
      </section>

      {/* Compact social strip */}
      <section className="py-12 px-5 border-t border-border" aria-label="Social links">
        <div className="max-w-[var(--max-width-content)] mx-auto flex flex-wrap justify-center gap-4">
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
                  flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-surface border border-border text-text-muted text-sm
                  hover:bg-surface-hover hover:text-text hover:border-border-hover
                  transition-all duration-200 no-underline
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
                {link.name}
                <span className="sr-only">(opens in new tab)</span>
              </a>
            ))}
        </div>
      </section>
    </>
  )
}
