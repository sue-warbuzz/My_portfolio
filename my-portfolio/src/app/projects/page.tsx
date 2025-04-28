import ProjectCard from '../components/ProjectCard'

import { headers } from 'next/headers'

async function fetchRepos() {
  const host = (await headers()).get('host')
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  const res = await fetch(`${protocol}://${host}/api/github`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch repos')

  return res.json()
}

  

export default async function ProjectsPage() {
  const repos = await fetchRepos()
  interface Repo {
    fork: boolean;
    private: boolean;
    description: string;
    language: string;
    name: string;
    html_url: string;
    stargazers_count: number;
    id: number;
  }

  const filteredRepos = repos.filter(
    (repo: Repo) =>
      !repo.fork &&
      !repo.private &&
      repo.description &&
      repo.language &&
      !repo.name.includes('config') // optional filters
  )

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-cyan-400">
        GitHub Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredRepos.map((repo: Repo) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            html_url={repo.html_url}
            language={repo.language}
            stargazers_count={repo.stargazers_count}
          />
        ))}
      </div>
    </section>
  )
}
