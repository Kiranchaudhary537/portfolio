import type { ProjectItem } from '@/lib/portfolio-data'

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
const ONE_DAY = 60 * 60 * 24

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
