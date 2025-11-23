// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#2563eb',
};

export const metadata: Metadata = {
  title: 'MagicScholar - College Planning & Scholarship Discovery Platform',
  description:
    'The complete college planning platform connecting students with opportunities and institutions with qualified prospects.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.magicscholar.com'
  ),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'MagicScholar - College Planning & Student-Institution Connection',
    description:
      'Connect students with opportunities and institutions with qualified prospects.',
    url: 'https://www.magicscholar.com',
    siteName: 'MagicScholar',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image', // Next.js will handle this route
        width: 1200,
        height: 630,
        alt: 'MagicScholar - College Planning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MagicScholar - College Planning & Student-Institution Connection',
    description:
      'Free college application tracking, AI scholarship matching, and CampusConnect for institutions.',
  },
};

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
        description: 'Free for students - Core platform features',
      },
      {
        '@type': 'Offer',
        price: '19.99',
        priceCurrency: 'USD',
        description: 'Scholarship providers - Monthly subscription',
      },
      {
        '@type': 'Offer',
        price: '39.99',
        priceCurrency: 'USD',
        description: 'Colleges and universities - Monthly subscription',
      },
    ],
  };

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
  );
}
