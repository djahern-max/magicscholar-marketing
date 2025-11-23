import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#2563eb'
}

export const metadata: Metadata = {
  title: 'MagicScholar - College Planning & Scholarship Discovery Platform',
  description:
    'The complete college planning platform connecting students with opportunities and institutions with qualified prospects.',

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.magicscholar.com'),

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  },

  openGraph: {
    title: 'MagicScholar - College Planning & Student-Institution Connection',
    description:
      'Connect students with opportunities and institutions with qualified prospects.',
    url: 'https://www.magicscholar.com',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MagicScholar - College Planning & Student-Institution Connection',
    description:
      'Free college application tracking, AI scholarship matching, and CampusConnect for institutions.',
  }
}
