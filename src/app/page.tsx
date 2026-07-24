import Hero from '@/components/Hero'
import CurrentlyBuilding from '@/components/CurrentlyBuilding'
import SectionCard from '@/components/SectionCard'
import { socialLinks } from '@/lib/social-links'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="max-w-[var(--max-width-content)] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border border border-border">
          <SectionCard
            href="/lab"
            label="01"
            title="Lab"
            description="experiments, builds, and digital doodads"
          />
          <SectionCard
            href="/whatever"
            label="02"
            title="Whatever"
            description="notes, thoughts, and random stuff"
          />
          <SectionCard
            href="/links"
            label="03"
            title="Links"
            description="find me elsewhere on the internet"
          />
        </div>
      </section>

      <CurrentlyBuilding />

      <section className="py-24 px-6">
        <div className="max-w-[var(--max-width-narrow)] mx-auto text-center">
          <p className="text-text-muted text-lg leading-relaxed font-sans">
            this is chaddytwiceover — a personal corner of the internet where i post experiments, notes, and whatever else. not a portfolio. not a business. just a place to build and share.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-[var(--max-width-content)] mx-auto flex flex-wrap justify-center gap-4">
          {socialLinks
            .filter((link) => link.url.startsWith('http'))
            .map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2 px-4 py-2 rounded-none
                  bg-bg border border-border text-text-muted text-sm
                  hover:bg-text hover:text-bg
                  transition-colors duration-150 no-underline
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
              </a>
            ))}
        </div>
      </section>
    </>
  )
}
