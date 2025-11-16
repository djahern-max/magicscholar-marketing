// src/app/layout.tsx
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'MagicScholar',
  description:
    'The complete college planning platform connecting students with opportunities and institutions with qualified prospects. Free application tracking, AI-powered scholarship matching, and CampusConnect for colleges. Start your 30-day free trial.',
  keywords: [
    'college application tracking',
    'scholarship finder',
    'college planning',
    'higher education marketing',
    'student recruitment',
    'college admissions',
    'scholarship matching',
    'AI college planning',
    'campus recruitment platform',
    'college counseling tools',
    'institution marketing',
    'student engagement platform'
  ],
  authors: [{ name: 'MagicScholar' }],
  creator: 'MagicScholar',
  publisher: 'MagicScholar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://www.magicscholar.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'MagicScholar - College Planning & Student-Institution Connection',
    description:
      'Connect students with opportunities and institutions with qualified prospects. Free college application tracking, AI-powered scholarship matching, and CampusConnect for colleges.',
    url: 'https://www.magicscholar.com',
    siteName: 'MagicScholar',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MagicScholar - College Planning Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MagicScholar - College Planning & Student-Institution Connection',
    description:
      'Free college application tracking, AI scholarship matching, and CampusConnect for institutions.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  },
  manifest: '/site.webmanifest',
  themeColor: '#2563eb',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MagicScholar'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MagicScholar',
    description:
      'College planning platform connecting students with opportunities and institutions with qualified prospects',
    url: 'https://www.magicscholar.com',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free for students - Core platform features'
      },
      {
        '@type': 'Offer',
        price: '19.99',
        priceCurrency: 'USD',
        description: 'Scholarship providers - Monthly subscription'
      },
      {
        '@type': 'Offer',
        price: '39.99',
        priceCurrency: 'USD',
        description: 'Colleges and universities - Monthly subscription'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1'
    }
  }

  return (
    <html lang="en">
      <body>
        {children}

        {/* JSON-LD for rich results */}
        <Script
          id="magicscholar-ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
