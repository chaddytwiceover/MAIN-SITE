import type { Metadata } from 'next'
import Link from 'next/link'
import { labProjects } from '@/lib/lab-projects'
import { posts } from '@/lib/posts'
import styles from './home.module.css'

export const metadata: Metadata = {
  title: { absolute: 'TWICEOVER — Creative developer & digital experiments' },
  description: 'Software, games, and creative experiments. A digital playground by Chaddy Twiceover.',
}

export default function HomePage() {
  const featured = labProjects.filter(project => !project.hidden).slice(0, 3)
  const latestPost = [...posts].sort((a, b) => b.date.localeCompare(a.date))[0]
  return (
    <div className={`${styles.home} bento-home`}>
      <div className={styles.utility}><span><span className={styles.liveDot} /> INDEPENDENT DEVELOPER / DIGITAL MAKER</span><span>EST. 2025 — ALWAYS IN PROGRESS</span></div>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroMeta}><span>TWICEOVER® / PORTFOLIO 2026</span><span>01 — INTRODUCTION</span></div>
        <div className={styles.heroBody}>
          <p className={styles.kicker}>CODE / CURIOSITY / CREATIVE CHAOS ✳</p>
          <h1 id="hero-title">BUILDING<br />WHAT&apos;S<br /><em>NEXT<span>.</span></em></h1>
          <div className={styles.heroBottom}><p>Hey, I&apos;m Chaddy. I make things for the web, build playful experiences, and experiment with what technology can become.</p><Link className={styles.primaryButton} href="/lab">EXPLORE MY WORK <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className={styles.heroFooter}><span>DESIGN × ENGINEERING</span><span>SCROLL TO EXPLORE ↓</span></div>
        <span className={styles.heroStar} aria-hidden="true">✳</span>
      </section>
      <div className={styles.marquee} aria-label="Software, games, and experiments"><span>SOFTWARE ✳ GAMES ✳ EXPERIMENTS ✳ CREATIVE CODE ✳ ALWAYS BUILDING ✳</span></div>
      <section className={styles.section} aria-labelledby="work-title">
        <div className={styles.sectionHeading}><div><p className={styles.overline}>02 / SELECTED WORK</p><h2 id="work-title">THE GOOD<br /><i>STUFF.</i></h2></div><Link href="/lab" className={styles.inlineLink}>ALL PROJECTS ↗</Link></div>
        <div className={styles.workGrid}>
          <Link href="/lab" className={`${styles.featureCard} ${styles.olive}`}><span className={styles.cardIndex}>01 / THE PLAYGROUND</span><span className={styles.cardSymbol} aria-hidden="true">✳</span><div><h3>THE LAB<span>↗</span></h3><p>Games, prototypes, experiments, and happy accidents. {labProjects.filter(p => !p.hidden).length} builds and counting.</p></div></Link>
          <div className={styles.sideStack}>
            {featured.slice(0,2).map((project,index)=><Link key={project.slug} href={project.demoUrl} className={`${styles.featureCard} ${index === 0 ? styles.amber : styles.cream}`}><span className={styles.cardIndex}>0{index+2} / INTERACTIVE PROJECT</span><div><span className={styles.smallSymbol} aria-hidden="true">{index===0?'↗':'✦'}</span><h3>{project.title.toUpperCase()} <span>↗</span></h3><p>OPEN EXPERIENCE →</p></div></Link>)}
          </div>
        </div>
      </section>
      <section className={styles.aboutGrid} aria-label="About and notes">
        <div className={styles.about}><p className={styles.overline}>03 / THE PERSON BEHIND THE PIXELS</p><h2>CURIOUS<br />BY <i>DESIGN.</i></h2><p>I&apos;m a developer who likes the space between useful software and unexpected ideas. This is my corner of the internet—part portfolio, part playground, always evolving.</p><Link href="/socials" className={styles.inlineLink}>FIND ME ONLINE ↗</Link></div>
        <Link href="/whatever" className={styles.notes}><span className={styles.overline}>LATEST FIELD NOTE / ↗</span><span className={styles.quoteMark}>“</span><h3>{latestPost?.title ?? 'THOUGHTS IN PROGRESS'}</h3><p>{latestPost?.content ?? 'Notes from the process of making things.'}</p><span className={styles.noteFooter}>READ THE NOTES ↗</span></Link>
      </section>
      <section className={styles.contact}><div><span className={styles.overline}>04 / LET&apos;S CONNECT</span><h2>GOT AN<br /><i>IDEA?</i></h2></div><div><p>Projects, collaborations, questions, or just saying hello—my inbox is open.</p><Link href="/socials" className={styles.primaryButton}>LET&apos;S TALK ↗</Link></div></section>
      <div className={styles.endline}><span>TWICEOVER.DEV © 2026</span><span>MADE WITH CURIOSITY ✳</span></div>
    </div>
  )
}
