import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug,
      ...data,
    } as {
      title: string
      slug: string
      date: string
      tags: string[]
      subtopic: string[]
      description: string[]
      subsubtopic: string[]
    }
  })
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    ...data,
    contentHtml,
  }
}
export interface Post {
    title: string;
    slug: string;
    date: string;
    tags: string[];
    subtopic: string[];
    description: string[];
    subsubtopic: string[];
    contentHtml: string;
  }
