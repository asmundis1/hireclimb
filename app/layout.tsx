import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'HireClimb - Executive & Contingent Search Recruiting',
    template: '%s | HireClimb',
  },
  description: 'HireClimb supplements your company\'s bandwidth with expert executive and contingent search recruiting services. Industry generalist recruiting consulting.',
  keywords: ['recruiting', 'executive search', 'contingent search', 'recruiting consulting', 'talent acquisition'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hireclimb.com',
    siteName: 'HireClimb',
    title: 'HireClimb - Executive & Contingent Search Recruiting',
    description: 'Expert recruiting consulting services to supplement your company\'s bandwidth',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HireClimb Recruiting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HireClimb - Executive & Contingent Search Recruiting',
    description: 'Expert recruiting consulting services to supplement your company\'s bandwidth',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
