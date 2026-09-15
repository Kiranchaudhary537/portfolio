import type { ProjectItem, WorkItem } from '@/lib/portfolio-data'

export type PortfolioContent = {
  profile: typeof import('@/lib/portfolio-data').profile
  skills: { label: string; items: string[] }[]
  work: WorkItem[]
  learning: string[]
  achievements: string[]
  links: { label: string; value: string; href: string }[]
}

type GitHubRepository = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics?: string[]
  fork: boolean
  archived: boolean
  pushed_at: string
  stargazers_count: number
}

const GITHUB_USERNAME = 'kiranchaudhary537'
const GITHUB_CONTENT_URL = process.env.GITHUB_CONTENT_URL ?? 'https://raw.githubusercontent.com/Kiranchaudhary537/portfolio/main/data/portfolio.json'
const ONE_DAY = 60 * 60 * 24

export async function getPortfolioContent(): Promise<PortfolioContent | null> {
  const response = await fetch(GITHUB_CONTENT_URL, {
    next: { revalidate: ONE_DAY },
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) return null
  return (await response.json()) as PortfolioContent
}

export async function getGitHubProjects(): Promise<ProjectItem[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=12`,
    {
      next: { revalidate: ONE_DAY },
      headers: { Accept: 'application/vnd.github+json' },
    },
  )

  if (!response.ok) return []

  const repositories = (await response.json()) as GitHubRepository[]

  return repositories
    .filter((repo) => !repo.fork && !repo.archived)
    .map((repo) => ({
      name: repo.name.toUpperCase().replace(/[^A-Z0-9]+/g, '_'),
      status: repo.language ? `ACTIVE / ${repo.language.toUpperCase()}` : 'ACTIVE',
      problem: repo.description || 'A public engineering project from GitHub.',
      solution: `Open the repository to inspect the implementation, history, and current direction. ${repo.stargazers_count} public star${repo.stargazers_count === 1 ? '' : 's'}.`,
      stack: [repo.language, ...(repo.topics ?? [])].filter(Boolean).slice(0, 5) as string[],
      href: repo.html_url,
    }))
}

export const githubCacheSeconds = ONE_DAY
