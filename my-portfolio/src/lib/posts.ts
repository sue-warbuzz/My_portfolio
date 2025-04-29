import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface Post {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  subtopic: string[];
  description: string[];
  subsubtopic: string[];
  contentHtml: string;
  codeBlocks: string[];
}

export interface PostPreview {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  subtopic: string[];
  description: string[];
  subsubtopic: string[];
}

export function getAllPosts(): PostPreview[] {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags,
      subtopic: data.subtopic,
      description: data.description,
      subsubtopic: data.subsubtopic,
    }
  })
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()
  const codeBlocks = []
  const codeRegex = /```python([\s\S]*?)```/g
  let match
  while ((match = codeRegex.exec(content)) !== null) {
    codeBlocks.push(match[1].trim())
  }

  return {
    title: data.title,
    slug,
    date: data.date,
    tags: data.tags,
    subtopic: data.subtopic,
    description: data.description,
    subsubtopic: data.subsubtopic,
    contentHtml,
    codeBlocks
  }
}
