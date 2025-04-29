import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import AnimatedCard from '../AnimatedCard';

export const dynamic = 'force-dynamic';

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { params } = props;
  const { slug } = await params; // ✅ await params because it's a Promise now

  const post = await getPostBySlug(slug);
  let CodeIndex = 0;

  if (!post) return notFound();

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2 leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-gray-400 mb-8">{post.date}</p>
        <div>
          {post.subtopic.map((title, index) => {
            const currentDescription = post.description?.[index] ?? "";
            const currentSubsub = currentDescription === "" ? post.subsubtopic?.[index] ?? "" : "";
            let Code = "";
            if (currentDescription === "Code") {
                Code = post.codeBlocks[CodeIndex];
                CodeIndex++;
            }

            return (
              <AnimatedCard
                key={index}
                title={title}
                description={currentDescription}
                subsub={currentSubsub}
                CodeBlock={Code}
              />
            );
          })}
        </div>
      </div>
    </section>
  )
}


export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
