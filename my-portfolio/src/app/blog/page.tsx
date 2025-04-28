import { getAllPosts } from '@/app/api/blog/route'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-10 text-center">📚 My Learning Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-[#1e293b] hover:bg-[#334155] p-6 rounded-lg shadow-md border border-gray-700 transition">
                <h2 className="text-xl font-semibold text-cyan-300">{post.title}</h2>
                <p className="text-gray-400 text-sm mt-2">{post.date}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(post.tags || []).map((tag) => (
                    <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded">
                        {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
