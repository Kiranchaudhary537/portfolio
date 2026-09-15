'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Terminal, X } from 'lucide-react'
import { achievements, learning, links, navItems, profile, skills, work, type NavItem, type ProjectItem } from '@/lib/portfolio-data'

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>
}

export default function PortfolioClient({ projects }: { projects: ProjectItem[] }) {
  const [active, setActive] = useState<NavItem>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id as NavItem)), { rootMargin: '-25% 0px -65% 0px' })
    navItems.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)!))
    return () => observer.disconnect()
  }, [])

  const jump = (id: NavItem) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return <main className="site-shell">
    <header className="topbar"><a className="wordmark" href="#home" onClick={() => jump('home')}><span className="signal-dot" /> KIRAN.CHAUDHARY</a><div className="top-status">[ ONLINE / INDIA ]</div><button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></header>
    <nav className={`nav-panel ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">{navItems.map((id, i) => <button key={id} className={active === id ? 'active' : ''} onClick={() => jump(id)}><span>0{i + 1}</span>{id.toUpperCase()}</button>)}</nav>
    <section id="home" className="hero section-grid"><div className="hero-copy"><p className="eyebrow"><Terminal size={14} /> /usr/bin/whoami</p><h1>KIRAN<br /><em>CHAUDHARY</em></h1><p className="hero-role">BACKEND ENGINEER <span>//</span> WEB3 BUILDER</p><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><button className="solid-button" onClick={() => jump('work')}>EXPLORE WORK <ArrowUpRight size={16} /></button><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GITHUB ↗</a></div></div><div className="hero-index"><span>V.01</span><div className="crosshair">＋</div><span>SCROLL TO INITIALIZE ↓</span></div></section>
    <section id="whoami" className="content-section"><SectionLabel index="01">WHO AM I</SectionLabel><div className="split"><h2>Systems first.<br /><span>Curiosity always.</span></h2><div className="prose"><p>I work close to the protocol layer: transaction composition, cross-chain relayers, event ingestion, and the backend systems that make Web3 products dependable.</p><p>My toolkit moves between Solana, EVM, Bitcoin, and Sui. I care about clean interfaces, measurable outcomes, and software that can explain itself six months later.</p><div className="chip-row">{skills.flatMap((group) => group.items).map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div></div></div></section>
    <section id="work" className="content-section"><SectionLabel index="02">MY WORK / EXPERIENCE</SectionLabel><div className="work-list">{work.map((item, i) => <article className="work-item" key={item.company}><div className="work-meta"><span>0{i + 1}</span><span>{item.period}</span></div><div><h3>{item.company}</h3><p className="role">{item.role}</p><p className="summary">{item.summary}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="chip-row">{item.stack.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
    <section id="projects" className="content-section"><SectionLabel index="03">PROJECTS / REPOSITORIES</SectionLabel>{projects.length ? <div className="project-grid">{projects.map((project) => <a className="brutal-card" key={project.name} href={project.href} target="_blank" rel="noreferrer"><div className="card-top"><span>{project.name}</span><span>{project.status}</span></div><h3>{project.name.replaceAll('_', ' ')}</h3><p className="micro-label">DESCRIPTION</p><p>{project.problem}</p><p className="micro-label">REPOSITORY</p><p>{project.solution}</p><div className="chip-row">{project.stack.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div></a>)}</div> : <div className="empty-state"><span>GITHUB_REPOSITORIES_UNAVAILABLE</span><p>GitHub could not be reached. Try again after the daily cache expires.</p></div>}</section>
    <section id="learning" className="content-section compact"><SectionLabel index="04">LEARNING LOG</SectionLabel><div className="log-list">{learning.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><span className="log-status">IN PROGRESS</span></div>)}</div></section>
    <section id="blog" className="content-section compact"><SectionLabel index="05">BLOG / NOTES</SectionLabel><div className="empty-state"><span>GITHUB_SOURCE_READY</span><p>Projects are synced from GitHub once per day. Add or update public repositories there to change this section.</p><code>&gt; github.com/{'kiranchaudhary537'}</code></div></section>
    <section id="achievements" className="content-section compact"><SectionLabel index="06">ACHIEVEMENTS</SectionLabel><div className="achievement-grid">{achievements.map((item) => <div className="achievement" key={item}><span className="trophy">[ ]</span><span>{item}</span></div>)}</div></section>
    <section id="links" className="content-section links-section"><SectionLabel index="07">LINKS / CONNECT</SectionLabel><div className="links-grid">{links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto') || link.href === '#' ? undefined : '_blank'} rel="noreferrer"><span>{link.label}</span><strong>{link.value} ↗</strong></a>)}</div></section>
    <footer><span>© {new Date().getFullYear()} KIRAN CHAUDHARY</span><span>BUILT WITH INTENT / NO TRACKING</span><a href="#home">BACK TO TOP ↑</a></footer>
  </main>
}
