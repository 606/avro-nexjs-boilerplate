import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { AppSidebar } from '@/components/components/app-sidebar'
import { SidebarProvider, SidebarInset } from '@/components/components/ui/sidebar'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'avro-nextjs-boilerplate',
  description: 'Basic shadcn/ui app for GitHub Pages',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        <SidebarProvider>
          <div className="flex min-h-screen flex-col">
            <header className="border-b bg-background/80 backdrop-blur">
              <div className="container flex h-14 items-center justify-between">
                <span className="text-sm font-semibold tracking-tight">avro-nextjs-boilerplate</span>
                <ThemeToggle />
              </div>
            </header>
            <div className="flex flex-1">
              <AppSidebar />
              <SidebarInset>
                <div className="container py-10">
                  {children}
                </div>
              </SidebarInset>
            </div>
            <footer className="border-t py-4 text-center text-xs text-muted-foreground">
              Deployed via GitHub Pages · shadcn/ui starter
            </footer>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
