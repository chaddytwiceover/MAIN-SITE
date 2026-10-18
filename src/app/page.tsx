import type { Metadata } from 'next'
import Link from 'next/link'
import { labProjects } from '@/lib/lab-projects'
import { posts } from '@/lib/posts'
import styles from './home.module.css'

export const metadata: Metadata = {
  title: { absolute: 'chaddytwiceover' },
  description: 'My little corner of the internet. Games, experiments, notes, and whatever comes next.',
}

function Arrow() {
  return <span className={styles.arrow} aria-hidden="true">↗</span>
}

export default function HomePage() {
  const flower = labProjects.find(project => project.slug === 'flowerquest')!
  const ticTacToe = labProjects.find(project => project.slug === 'tic-tac-toe')!
  const latestPost = [...posts].sort((a, b) => b.date.localeCompare(a.date))[0]

  return (
    <div className={`${styles.home} bento-home`}>
      <div className={styles.pageIntro}>
        <p><span className={styles.statusDot} /> a personal space on the internet</p>
        <span>built with curiosity.</span>
      </div>
      <section className={styles.grid} aria-label="A little bit of everything">
        <article className={`${styles.card} ${styles.intro}`}>
          <div className={styles.introTop}>
            <span className={styles.monogram} aria-hidden="true">c<span>↗</span></span>
            <span className={styles.eyebrow}>hello, internet</span>
          </div>
          <div>
            <h1>chaddy,<br />twice over<span className={styles.period}>.</span></h1>
            <p className={styles.tagline}>see the world in my eyes / web development</p>
            <p className={styles.introCopy}>a little code, a lot of curiosity.<br />this is where my ideas end up.</p>
          </div>
          <a className={styles.textLink} href="https://x.com/chaddytwiceover" target="_blank" rel="noopener noreferrer">follow the process <span aria-hidden="true">↗</span></a>
        </article>
        <Link href={flower.demoUrl} className={`${styles.card} ${styles.flower}`}>
          <div className={styles.cardTop}><span className={styles.eyebrow}>a little escape</span><Arrow /></div>
          <div className={styles.garden} aria-hidden="true">
            <span className={styles.orbit} /><span className={styles.orbitTwo} />
            <div className={styles.bloom}><i /><i /><i /><i /><i /><i /><b /></div>
            <span className={styles.stem} /><span className={styles.leaf} />
            <span className={styles.sparkOne}>✳</span><span className={styles.sparkTwo}>+</span>
          </div>
          <div className={styles.cardBottom}><span className={styles.pill}>play something</span><h2>monnie’s flower quest</h2><p>a small adventure. a garden to explore.</p></div>
        </Link>
        <Link href="/lab" className={`${styles.card} ${styles.lab}`}>
          <div className={styles.cardTop}><span className={styles.eyebrow}>the playground</span><Arrow /></div>
          <div className={styles.labGlyph} aria-hidden="true">✳</div>
          <div><h2>made for the<br />fun of it.</h2><p>games, experiments & happy accidents.</p></div>
          <span className={styles.labFooter}>explore the lab <span>{String(labProjects.filter(p => !p.hidden).length).padStart(2, '0')} builds ↗</span></span>
        </Link>
        <Link href={ticTacToe.demoUrl} className={`${styles.card} ${styles.game}`}>
          <div className={styles.cardTop}><span className={styles.eyebrow}>your move</span><Arrow /></div>
          <div className={styles.ticGrid} aria-hidden="true">{['×', '', '○', '', '×', '', '○', '', '×'].map((cell, index) => <span key={index} className={cell === '×' ? styles.cross : ''}>{cell}</span>)}</div>
          <div><h2>one more round?</h2><p>you vs. the machine. tic tac toe.</p></div>
        </Link>
        <Link href="/whatever" className={`${styles.card} ${styles.note}`}>
          <div className={styles.cardTop}><span className={styles.eyebrow}>a note to the internet</span><Arrow /></div>
          <div className={styles.noteContent}><span className={styles.noteMark} aria-hidden="true">“</span><h2>{latestPost.title}</h2><p>{latestPost.content}</p></div>
          <span className={styles.noteDate}>{new Date(`${latestPost.date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).toLowerCase()} <span>read the notes ↗</span></span>
        </Link>
        <article className={`${styles.card} ${styles.elsewhere}`}>
          <div className={styles.cardTop}><span className={styles.eyebrow}>same chaddy, elsewhere</span><span aria-hidden="true">↗</span></div>
          <h2>let’s cross paths.</h2>
          <div className={styles.socialLinks}>
            {[
              { name: 'x / twitter', href: 'https://x.com/chaddytwiceover' },
              { name: 'github', href: 'https://github.com/chaddytwiceover' },
              { name: 'instagram', href: 'https://instagram.com/chaddytwiceover' },
            ].map(social => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">{social.name}<span aria-hidden="true">↗</span></a>)}
          </div>
          <Link className={styles.allSocials} href="/socials">all the places <span aria-hidden="true">→</span></Link>
        </article>
        <a href="mailto:contact@chaddytwiceover.com" className={`${styles.card} ${styles.hello}`}>
          <span className={styles.helloIcon} aria-hidden="true">☺</span>
          <div><span className={styles.eyebrow}>a good place to start</span><h2>say hello.</h2><p>an idea, a question, or just a wave.</p></div>
          <Arrow />
        </a>
      </section>
      <div className={styles.pageOutro}><span>always a work in progress.</span><span>thanks for stopping by <span aria-hidden="true">✳</span></span></div>
    </div>
  )
}
