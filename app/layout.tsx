import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'North* | Automated Visual Documentation for GitHub',
  description: 'Automatically generate end-user documentation by visually analyzing your running application from pull requests.',
  keywords: ['documentation', 'github', 'automation', 'visual analysis', 'pull requests'],
  authors: [{ name: 'North*' }],
  openGraph: {
    title: 'North* | Automated Visual Documentation',
    description: 'Automatically generate end-user documentation by visually analyzing your running application.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
