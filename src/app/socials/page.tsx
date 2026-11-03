import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../section-theme.module.css'

export const metadata: Metadata = { title: 'Socials', description: 'Find Twiceover around the internet.' }

const socials = [
  { label: 'TikTok', handle: '@chaddytwiceover', href: 'https://www.tiktok.com/@chaddytwiceover' },
  { label: 'Instagram', handle: '@chaddytwiceover', href: 'https://www.instagram.com/chaddytwiceover/' },
  { label: 'Twitter', handle: '@chaddytwiceover', href: 'https://x.com/chaddytwiceover' },
  { label: 'GitHub', handle: 'chaddytwiceover', href: 'https://github.com/chaddytwiceover' },
  { label: 'Email', handle: 'contact@chaddytwiceover.com', href: 'mailto:contact@chaddytwiceover.com' },
]

export default function SocialsPage() {
  return (
    <div className={`${styles.page} autumn-page`}>
      <div className={styles.topline}><span>TWICEOVER® / ELSEWHERE ONLINE</span><span>02 — CONNECTIONS</span></div>
      <header className={styles.header}>
        <div><p className={styles.eyebrow}>FIND ME / FOLLOW ALONG / SAY HELLO ✳</p><h1 className={styles.title}>LET'S <em>TALK.</em></h1></div>
        <p className={styles.intro}>Different corners of the internet, same creative curiosity. Follow the process or come say hello.</p>
      </header>
      <div className={styles.rule}>✳ &nbsp; FIND ME AROUND THE INTERNET &nbsp; ✳</div>
      <section className={styles.socialGrid} aria-label="Social profiles">
        {socials.map((social,index)=>(
          <a key={social.label} className={styles.social} href={social.href} target={social.label === 'Email' ? undefined : '_blank'} rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}>
            <div className={styles.socialTop}><span className={styles.number}>{String(index+1).padStart(2,'0')} / CONNECT</span><span className={styles.socialArrow} aria-hidden="true">↗</span></div>
            <div><h2 className={styles.socialName}>{social.label}</h2><p className={styles.socialHandle}>{social.handle}</p></div>
          </a>
        ))}
      </section>
      <div className={styles.end}><span className={styles.footerLabel}>TWICEOVER.DEV</span><Link className={styles.footerLabel} href="/">BACK HOME ↗</Link></div>
    </div>
  )
}
