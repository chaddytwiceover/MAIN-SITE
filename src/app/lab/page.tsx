import type { Metadata } from 'next'
import Link from 'next/link'
import { labProjects } from '@/lib/lab-projects'
import styles from '../section-theme.module.css'

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Games, experiments, prototypes, and creative code from Twiceover.',
}

export default function LabPage() {
  const projects = labProjects.filter(project => !project.hidden)
  return (
    <div className={`${styles.page} autumn-page`}>
      <div className={styles.topline}><span>TWICEOVER® / CREATIVE ARCHIVE</span><span>01 — EXPERIMENTS</span></div>
      <header className={styles.header}>
        <div><p className={styles.eyebrow}>GAMES / PROTOTYPES / CREATIVE CODE ✳</p><h1 className={styles.title}>THE <em>LAB.</em></h1></div>
        <p className={styles.intro}>A collection of playable ideas, strange little experiments, and things built just to see what happens.</p>
      </header>
      <div className={styles.rule}>✳ &nbsp; {String(projects.length).padStart(2, '0')} PROJECTS & COUNTING &nbsp; ✳</div>
      <section className={styles.grid} aria-label="Lab experiments">
        {projects.map((project,index) => (
          <article key={project.slug} className={styles.project}>
            <div className={styles.projectTop}><span className={styles.number}>{String(index+1).padStart(2,'0')} / PROJECT</span><span className={styles.tag}>{project.status} · {project.tags.slice(0,2).join(' + ')}</span></div>
            <div className={styles.projectBody}><h2 className={styles.projectTitle}>{project.title}</h2><p className={styles.description}>{project.description}</p></div>
            <div className={styles.projectBottom}><span className={styles.number}>INTERACTIVE EXPERIENCE</span><Link href={`/lab/${project.slug}`} className={styles.action}>PLAY NOW ↗</Link></div>
          </article>
        ))}
      </section>
      <div className={styles.end}><span className={styles.footerLabel}>TWICEOVER.DEV</span><Link className={styles.footerLabel} href="/">BACK HOME ↗</Link></div>
    </div>
  )
}
