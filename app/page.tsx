import PortfolioClient from '@/app/portfolio-client'
import { getGitHubProjects } from '@/lib/github-data'

export const revalidate = 86400

export default async function Page() {
  const projects = await getGitHubProjects()
  return <PortfolioClient projects={projects} />
}
