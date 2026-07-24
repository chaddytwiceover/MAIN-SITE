import Link from 'next/link'
import SectionCard from '@/components/SectionCard'
import { labProjects } from '@/lib/lab-projects'
import { posts } from '@/lib/posts'
import { socialLinks } from '@/lib/social-links'

export default function HomePage() {
  const featuredProjects = labProjects.filter((project) => project.featured).slice(0, 3)
  const recentPosts = [...posts].slice(0, 3)
  const socialPreview = socialLinks.filter((link) => link.url.startsWith('http')).slice(0, 4)

  return (
    <>
      <section className="max-w-[var(--max-width-content)] mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-text-dim mb-6">// personal digital clubhouse</p>
        <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-heading leading-[0.95] tracking-[-0.04em] text-text mb-6">
          chaddytwiceover
        </h1>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mb-10">
          front-end experiments, digital doodads, and whatever else ends up here.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/lab" className="px-5 py-3 border border-accent bg-accent text-bg font-mono text-xs tracking-[0.12em] uppercase hover:bg-transparent hover:text-accent transition-colors">
            open lab
          </Link>
          <Link href="/whatever" className="px-5 py-3 border border-border text-text font-mono text-xs tracking-[0.12em] uppercase hover:border-border-strong hover:text-accent transition-colors">
            read whatever
          </Link>
          <Link href="/links" className="px-5 py-3 border border-border text-text font-mono text-xs tracking-[0.12em] uppercase hover:border-border-strong hover:text-accent transition-colors">
            social links
          </Link>
        </div>
      </section>

      <section className="max-w-[var(--max-width-content)] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border border border-border">
          <SectionCard href="/lab" label="01" title="Lab" description="experiments, builds, and tiny weird web toys" />
          <SectionCard href="/whatever" label="02" title="Whatever" description="short notes, updates, and random thoughts" />
          <SectionCard href="/links" label="03" title="Links" description="socials, profiles, and contact lanes" />
        </div>
      </section>

      <section className="max-w-[var(--max-width-content)] mx-auto px-6 py-16 border-t border-border">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl font-heading">featured lab builds</h2>
          <Link href="/lab" className="font-mono text-xs uppercase tracking-[0.12em] text-accent hover:text-accent-hover">see all →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border border border-border">
          {featuredProjects.map((project) => (
            <a key={project.slug} href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-5 bg-bg-raised hover:bg-bg transition-colors border border-transparent hover:border-border-strong no-underline">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-dim mb-2">{project.tags.join(' / ')}</p>
              <h3 className="text-text font-heading text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-text-muted mb-4">{project.description}</p>
              {project.techNotes && <p className="font-mono text-xs text-text-dim">{project.techNotes}</p>}
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-[var(--max-width-content)] mx-auto px-6 py-16 border-t border-border">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl font-heading">recent whatever posts</h2>
          <Link href="/whatever" className="font-mono text-xs uppercase tracking-[0.12em] text-accent hover:text-accent-hover">read more →</Link>
        </div>
        <div className="space-y-[1px] bg-border border border-border">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-bg-raised px-5 py-5">
              <p className="font-mono text-xs text-text-dim tracking-[0.12em] uppercase mb-2">{post.date}</p>
              <h3 className="text-text font-heading text-xl mb-2">{post.title}</h3>
              <p className="text-sm text-text-muted">{post.content}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-[var(--max-width-content)] mx-auto px-6 py-16 border-t border-border">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl font-heading">social hub</h2>
          <Link href="/links" className="font-mono text-xs uppercase tracking-[0.12em] text-accent hover:text-accent-hover">all links →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-border border border-border">
          {socialPreview.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-bg-raised hover:bg-bg transition-colors no-underline">
              <p className="font-heading text-text text-base mb-1">{link.name}</p>
              <p className="font-mono text-xs text-text-dim">{link.handle || link.description}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
