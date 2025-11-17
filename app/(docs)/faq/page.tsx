import fs from 'node:fs'
import path from 'node:path'
import { DocsPage } from '@/components/layout/docs-page'

function loadMarkdown(slug: string) {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`)
  return fs.readFileSync(filePath, 'utf8')
}

export default function FaqPage() {
  const markdown = loadMarkdown('faq')
  return <DocsPage title="FAQ" markdown={markdown} />
}
