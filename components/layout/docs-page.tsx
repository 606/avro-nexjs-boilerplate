import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface DocsPageProps {
  title?: string
  markdown: string
}

export function DocsPage({ markdown }: DocsPageProps) {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h1
              className="mb-4 text-3xl font-semibold tracking-tight"
              {...props}
            />
          ),
          h2: (props) => (
            <h2
              className="mt-8 mb-3 text-2xl font-semibold tracking-tight"
              {...props}
            />
          ),
          h3: (props) => (
            <h3
              className="mt-6 mb-2 text-xl font-semibold tracking-tight"
              {...props}
            />
          ),
          p: (props) => <p className="leading-relaxed" {...props} />,
          ul: (props) => (
            <ul className="my-3 ml-5 list-disc space-y-1" {...props} />
          ),
          ol: (props) => (
            <ol className="my-3 ml-5 list-decimal space-y-1" {...props} />
          ),
          blockquote: (props) => (
            <blockquote
              className="my-4 border-l-2 border-muted-foreground/40 pl-4 italic text-muted-foreground"
              {...props}
            />
          ),
          pre: (props) => (
            <pre
              className="my-4 overflow-x-auto rounded-md bg-muted px-3 py-2 text-xs leading-relaxed"
              {...props}
            />
          ),
          code: ({ className, ...props }) => (
            <code
              className={className ?? 'rounded bg-muted px-1 py-0.5 font-mono text-xs'}
              {...props}
            />
          ),
          table: (props) => (
            <div className="my-4 overflow-x-auto">
              <table
                className="w-full border-collapse text-sm"
                {...props}
              />
            </div>
          ),
          thead: (props) => (
            <thead className="bg-muted" {...props} />
          ),
          th: (props) => (
            <th
              className="border-b px-3 py-2 text-left font-medium"
              {...props}
            />
          ),
          td: (props) => (
            <td
              className="border-b px-3 py-2 align-top"
              {...props}
            />
          ),
          hr: (props) => <hr className="my-6 border-border" {...props} />,
          a: (props) => (
            <a
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              {...props}
            />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  )
}
