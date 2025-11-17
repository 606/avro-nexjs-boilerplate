"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      {...props}
    >
      <path
        d="M12 4.5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm0 17a1 1 0 0 1-1-1V19a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm7.5-8.5a1 1 0 0 1 1 1H22a1 1 0 1 1 0 2h-1.5a1 1 0 1 1 0-2H19.5ZM4.5 13a1 1 0 0 1 1-1H7a1 1 0 1 1 0 2H5.5a1 1 0 0 1-1-1ZM17.657 6.343a1 1 0 0 1 1.414-1.414l1.06 1.06a1 1 0 0 1-1.414 1.415l-1.06-1.06ZM3.868 20.132a1 1 0 0 1 0-1.414l1.06-1.06A1 1 0 0 1 6.343 19.07l-1.06 1.06a1 1 0 0 1-1.415 0Zm0-15.264a1 1 0 0 1 1.415 0l1.06 1.06A1 1 0 1 1 4.93 7.404l-1.06-1.06a1 1 0 0 1 0-1.476Zm14.85 13.436a1 1 0 0 1-1.414 0l-1.06-1.06a1 1 0 0 1 1.414-1.415l1.06 1.06a1 1 0 0 1 0 1.415ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      {...props}
    >
      <path
        d="M21 12.79A9 9 0 0 1 12.21 3 7 7 0 1 0 21 12.79Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => 'light')

  useEffect(() => {
    setMounted(true)
    if (typeof window === 'undefined') return

    const stored = window.localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches

    const initial = stored ?? (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  const toggle = () => {
    const next = isDark ? 'light' : 'dark'
    setTheme(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', next)
    }
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={toggle}
      aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
   >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
