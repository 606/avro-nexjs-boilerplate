"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const items = [
  { href: '/', label: 'Home' },
  { href: '/getting-started', label: 'Getting started' },
  { href: '/configuration', label: 'Configuration' },
  { href: '/components', label: 'Components' },
  { href: '/theming', label: 'Theming' },
  { href: '/faq', label: 'FAQ' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-60 shrink-0 border-r bg-muted/20 p-4 text-sm md:block">
      <div className="mb-4 font-semibold tracking-tight">Docs</div>
      <nav className="space-y-1">
        {items.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center rounded-md px-2 py-1.5 transition-colors hover:bg-accent hover:text-accent-foreground',
                active && 'bg-accent text-accent-foreground'
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
