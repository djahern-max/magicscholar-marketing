import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MagicScholar - College Application & Scholarship Tracking',
  description: 'Navigate college applications and scholarships with confidence. AI-powered tools for just 4¢. Track deadlines, manage applications, and discover opportunities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
