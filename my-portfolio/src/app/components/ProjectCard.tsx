type ProjectProps = {
    name: string
    description: string
    html_url: string
    language: string
    stargazers_count: number
  }
  
  export default function ProjectCard({
    name,
    description,
    html_url,
    language,
    stargazers_count,
  }: ProjectProps) {
    return (
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1e293b] hover:bg-[#334155] transition rounded-xl p-6 shadow-md border border-gray-700 flex flex-col justify-between"
      >
        <h2 className="text-xl font-semibold text-cyan-400">{name}</h2>
        <p className="text-gray-400 text-sm mt-2 mb-4">{description}</p>
        <div className="text-sm text-gray-500 flex justify-between">
          <span>{language}</span>
          <span>⭐ {stargazers_count}</span>
        </div>
      </a>
    )
  }
  