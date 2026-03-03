import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import SectionCard from '@/components/SectionCard'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <section className="home-sections">
        <div className="section-content">
          <div className="section-card-grid">
            <SectionCard
              href="/about"
              label="About"
              title="Learning in public."
              description="Who I am, what I'm learning, and how this site helps me practice web development."
            />
            <SectionCard
              href="/projects"
              label="Work"
              title="Experiments & Projects"
              description="Live builds, UI experiments, and ongoing iterations I'm actively working on."
            />
            <SectionCard
              href="/socials"
              label="Socials"
              title="Connect"
              description="Find me across the web — GitHub, email, and more."
            />
            <SectionCard
              href="/contact"
              label="Contact"
              title="Say Hi"
              description="Want to share feedback, resources, or ideas? Reach out and connect."
            />
          </div>
        </div>
      </section>
    </>
  )
}
