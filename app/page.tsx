import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-start gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">avro-nextjs-boilerplate</h1>
        <p className="mt-2 text-muted-foreground">
          A minimal Next.js + shadcn/ui template configured for GitHub Pages, with a sidebar-based docs layout.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Next.js docs
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://ui.shadcn.com/docs" target="_blank" rel="noreferrer">
            shadcn/ui docs
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/getting-started">View example docs</Link>
        </Button>
      </div>
    </section>
  )
}
