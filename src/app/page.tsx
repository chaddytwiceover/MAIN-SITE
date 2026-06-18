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

        <p className="retro-marquee" aria-label="Retro announcement">
          <div className="marquee-content">★ Welcome to Chaddy&apos;s Cyber Book Fair ★ Check out the new builds in the lab ★ Don&apos;t forget to sign the guestbook! ★</div>
        </p>
      </section>

      <section className="retro-links" aria-labelledby="lab-title">
        <header className="retro-section-header">
          <p className="retro-section-label">Secret Experiment Shelf</p>
          <h2 id="lab-title">Featured Experiments from the Lab</h2>
          <p className="retro-section-desc">Tiny builds, weird UI ideas, JavaScript games, and interaction experiments — shipped one pixel at a time.</p>
        </header>

        <div className="retro-card-grid">
          <Link className="retro-card book-fair-card" href="/lab/pixel-art/">
            <div className="sticker-label">HOT BUILD!</div>
            <h3>Pixel Art Editor</h3>
            <p>Make tiny pixel art right in the browser.</p>
          </Link>
          <Link className="retro-card book-fair-card" href="/lab/tic-tac-toe/">
            <div className="sticker-label">LAB PICK!</div>
            <h3>Tic Tac Toe Neural Grid</h3>
            <p>A small game experiment from the lab.</p>
          </Link>
          <Link className="retro-card book-fair-card" href="/projects">
            <div className="sticker-label">COOL!</div>
            <h3>View All Projects</h3>
            <p>See the full catalog of featured work.</p>
          </Link>
        </div>
      </section>
    </>
  )
}
