export type WorkItem = { company: string; role: string; period: string; summary: string; bullets: string[]; stack: string[] }
export type ProjectItem = { name: string; status: string; problem: string; solution: string; stack: string[]; href?: string }

export const profile = {
  name: 'Kiran Chaudhary',
  role: 'Software Engineer — Web3 / Solana',
  location: 'India',
  email: 'kiranchaudhary537@gmail.com',
  phone: '+91 63544 06160',
  intro: 'Backend developer building systems across Web3, blockchain infrastructure, and developer tooling.',
  github: 'https://github.com/kiranchaudhary537',
  linkedin: 'https://linkedin.com/in/kiranchaudhary537',
}

export const skills = [
  { label: 'Solana / SVM', items: ['Anchor', 'LiteSVM', 'Web3.js', 'CCTP'] },
  { label: 'Chain systems', items: ['EVM', 'Bitcoin', 'Sui', 'DEX routing', 'AMMs'] },
  { label: 'Backend', items: ['Node.js', 'TypeScript', 'Python', 'Rust', 'Java', 'Go'] },
  { label: 'Data + infra', items: ['PostgreSQL', 'Redis', 'Kafka', 'Docker', 'AWS KMS', 'CI/CD'] },
]

export const work: WorkItem[] = [
  { company: 'DZap', role: 'Software Engineer, Web3 / Blockchain', period: 'JUL 2024 — PRESENT', summary: 'Building transaction infrastructure across Solana, EVM, Bitcoin, and Sui.', bullets: ['Reduced failed transactions by 35% across 200K+ monthly simulated routes with a state-override simulation engine.', 'Built a CCTP relayer delivering sub-1s settlement and 50× lower costs across $60M+ transfer volume.', 'Processed 500K+ events/month through normalized WebSocket/RPC ingestion and queue-backed downstream routing.', 'Lowered API latency by 30% at 500+ RPS through backend refactoring and monorepo consolidation.', 'Built chain-agnostic transaction and DEX routing powering $300M+ routed volume.'], stack: ['Solana Web3.js', 'Anchor', 'Rust', 'CCTP', 'AWS KMS', 'Redis', 'PostgreSQL'] },
  { company: 'Abolyn Inc', role: 'Software Engineer', period: 'APR 2024 — JUN 2024', summary: 'Reworked high-volume scraping and deployment automation.', bullets: ['Reduced product-page scraping time by 83% (3s → 0.5s) with async programming, multithreading, and event streaming.', 'Enabled reliable extraction from 200+ protected/lazy-loaded pages daily with headless browsers and rotating proxies.', 'Automated 50+ deployments per day with Docker, GitHub Actions, and AWS EC2.'], stack: ['Python', 'Node.js', 'Kafka', 'Redis Streams', 'Playwright', 'Docker', 'AWS EC2'] },
  { company: 'Promact Infotech', role: 'Software Engineer Intern', period: 'JAN 2024 — APR 2024', summary: 'Built a customer success platform around secure microservices.', bullets: ['Reduced manual customer-progress tracking by 70% with a Spring Boot and Angular platform.', 'Delivered 10k+ automated progress reports/month with PDF generation and email delivery.'], stack: ['Spring Boot', 'Java', 'Angular', 'Auth0', 'REST APIs', 'PDFBox', 'JavaMail'] },
]

export const projects: ProjectItem[] = [
  { name: 'PROJECT_01', status: 'TODO / REPLACE', problem: 'Add a public project with a concrete engineering problem.', solution: 'Replace this structured placeholder with the real solution, architecture notes, and links.', stack: ['GitHub-backed', 'Replace me'] },
  { name: 'PROJECT_02', status: 'TODO / REPLACE', problem: 'Add a second project when the repository or demo is ready.', solution: 'Keep this shape: problem, solution, tradeoffs, stack, source, status.', stack: ['Source pending'] },
]

export const learning = ['Solana runtime and simulation', 'Distributed systems + event pipelines', 'System design and clean architecture', 'AI-assisted development']
export const achievements = ['Codeforces — PROFILE TODO / REPLACE', 'CodeChef — PROFILE TODO / REPLACE', 'LeetCode — PROFILE TODO / REPLACE']
export const links = [
  { label: 'GitHub', value: 'github.com/kiranchaudhary537', href: profile.github },
  { label: 'LinkedIn', value: 'linkedin.com/in/kiranchaudhary537', href: profile.linkedin },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'X / Twitter', value: 'PROFILE TODO / REPLACE', href: '#' },
]

export const navItems = ['home', 'whoami', 'work', 'projects', 'learning', 'blog', 'achievements', 'links'] as const
export type NavItem = typeof navItems[number]
