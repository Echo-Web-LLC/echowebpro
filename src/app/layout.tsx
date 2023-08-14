import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Echo Web, LLC',
  description: 'Local Web Design Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="0poeB3mZqFSOzG3UaG8rEL3sKHws40T4rD_K0aculBs" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
