import PortfolioClient from '@/app/portfolio-client'
import { getGitHubProjects, getPortfolioContent } from '@/lib/github-data'
import { profile, skills, work, learning, achievements, links } from '@/lib/portfolio-data'

export const revalidate = 86400

export default async function Page() {
  const [projects, remoteContent] = await Promise.all([getGitHubProjects(), getPortfolioContent()])
  const content = remoteContent ?? { profile, skills, work, learning, achievements, links }
  return <PortfolioClient projects={projects} content={content} />
}
