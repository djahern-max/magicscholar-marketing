import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MagicScholar - Let&apos;s Make College Magical'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage:
            'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #06b6d4 100%)',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Decorative sparkles/stars */}
        <div
          style={{
            position: 'absolute',
            top: '100px',
            left: '150px',
            fontSize: '48px',
            opacity: 0.4,
          }}
        >
          ✨
        </div>
        <div
          style={{
            position: 'absolute',
            top: '180px',
            right: '200px',
            fontSize: '36px',
            opacity: 0.3,
          }}
        >
          ⭐
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '120px',
            left: '200px',
            fontSize: '42px',
            opacity: 0.35,
          }}
        >
          ✨
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '200px',
            right: '150px',
            fontSize: '38px',
            opacity: 0.3,
          }}
        >
          ⭐
        </div>
        <div
          style={{
            position: 'absolute',
            top: '150px',
            right: '400px',
            fontSize: '32px',
            opacity: 0.25,
          }}
        >
          ✨
        </div>

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <span style={{ fontSize: '48px' }}>✨</span>
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.5px',
            }}
          >
            MagicScholar
          </div>
        </div>

        {/* Main magical heading */}
        <div
          style={{
            fontSize: '92px',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '32px',
            textAlign: 'center',
            letterSpacing: '-2px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Let&apos;s Make</span>
          <span>College Magical</span>
        </div>

        {/* Simple subheading */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.95)',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          Free Tools for Students & Families
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '0.5px',
            background: 'rgba(255, 255, 255, 0.15)',
            padding: '16px 32px',
            borderRadius: '12px',
            border: '2px solid rgba(255, 255, 255, 0.25)',
          }}
        >
          magicscholar.com
        </div>
      </div>
    ),
    { ...size }
  )
}
