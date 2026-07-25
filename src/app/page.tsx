import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionCard from '@/components/SectionCard'
import { labProjects } from '@/lib/lab-projects'
import { posts } from '@/lib/posts'

export default function HomePage() {
  const featuredProjects = labProjects.filter((project) => project.featured).slice(0, 3)
  const recentPosts = posts.slice(0, 3)

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-[var(--max-width-content)] px-6 pb-20">
        <div className="grid grid-cols-1 gap-[1px] border border-border bg-border md:grid-cols-4">
          <SectionCard href="/lab" number="01" title="Lab" description="experiments, tiny builds, weird UI ideas" />
          <SectionCard href="/whatever" number="02" title="Whatever" description="quick notes, updates, random thoughts" />
          <SectionCard href="/links" number="03" title="Links" description="socials and corners of the internet" />
          <SectionCard href="/guestbook" number="04" title="Guestbook" description="say hi or leave a quick message" />
        </div>
      </section>

      <section className="border-y border-border bg-bg-raised px-6 py-16">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">{'// featured experiments'}</p>
              <h2 className="text-2xl">lab highlights</h2>
            </div>
            <Link href="/lab" className="font-mono text-xs uppercase tracking-widest text-text-dim hover:text-text">
              see all →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-[1px] border border-border bg-border md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="bg-bg p-5">
                <h3 className="mb-3 text-lg">{project.title}</h3>
                <p className="mb-4 text-sm">{project.description}</p>
                <Link href={`/lab/${project.slug}`} className="font-mono text-xs uppercase tracking-widest text-accent hover:text-accent-hover">
                  open details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--max-width-content)] px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">{'// recent whatever'}</p>
            <h2 className="text-2xl">latest notes</h2>
          </div>
          <Link href="/whatever" className="font-mono text-xs uppercase tracking-widest text-text-dim hover:text-text">
            read more →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {recentPosts.map((post) => (
            <article key={post.id} className="border border-border p-5">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-text-dim">{post.date}</p>
              <h3 className="mb-3 text-lg">{post.title}</h3>
              <p className="text-sm">{post.content}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
