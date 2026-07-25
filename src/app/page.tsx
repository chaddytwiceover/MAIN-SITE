import Link from 'next/link'
import Hero from '@/components/Hero'
import LabCard from '@/components/LabCard'
import { labProjects } from '@/lib/lab-projects'
import { posts } from '@/lib/posts'

export default function HomePage() {
  const featuredProjects = labProjects.filter((project) => project.featured).slice(0, 4)
  const recentPosts = posts.slice(0, 2)

  return (
    <>
      <Hero />

      {/* 02 — EXPERIMENTS */}
      <section className="mx-auto max-w-[var(--max-width-content)] px-6 pb-24">
        <div className="mb-8 flex items-end justify-between border-b-[3px] border-border pb-4">
          <div className="flex items-baseline gap-4">
            <span className="section-num text-3xl">02</span>
            <h2 className="font-heading text-4xl font-bold uppercase tracking-tight text-text">Experiments</h2>
          </div>
          <Link href="/lab" className="font-mono text-sm font-bold uppercase tracking-widest text-text-dim hover:text-accent transition-colors duration-0">
            SEE ALL →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <LabCard key={project.slug} project={project} />
          ))}
        </div>
      </section>



      {/* 04 — WHATEVER */}
      <section className="mx-auto max-w-[var(--max-width-content)] px-6 pb-16">
        <div className="mb-8 flex items-end justify-between border-b-[3px] border-border pb-4">
          <div className="flex items-baseline gap-4">
            <span className="section-num text-3xl">04</span>
            <h2 className="font-heading text-4xl font-bold uppercase tracking-tight text-text">Whatever</h2>
          </div>
          <Link href="/whatever" className="font-mono text-sm font-bold uppercase tracking-widest text-text-dim hover:text-accent transition-colors duration-0">
            READ MORE →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {recentPosts.map((post) => (
            <article key={post.id} className="neo-card bg-bg p-6 transition-shadow duration-0 hover:neo-shadow-hover flex flex-col">
              <div className="mb-4 inline-block neo-border border-x-0 border-t-0 px-1 py-1 font-mono text-[10px] font-bold tracking-widest text-accent">
                {post.date}
              </div>
              <h3 className="mb-3 font-heading text-2xl font-bold uppercase text-text">{post.title}</h3>
              <p className="text-sm text-text-muted">{post.content}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
