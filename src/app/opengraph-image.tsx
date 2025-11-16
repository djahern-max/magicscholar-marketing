import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'MagicScholar - College Planning Made Clear'
export const size = {
  width: 1200,
  height: 630,
}

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
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #06b6d4 100%)',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'white',
            opacity: 0.1,
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'white',
            opacity: 0.1,
            bottom: '-80px',
            left: '-80px',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '16px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <span style={{ fontSize: '36px' }}>✨</span>
          </div>
          <div
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.5px',
            }}
          >
            MagicScholar
          </div>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: '68px',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '24px',
            maxWidth: '900px',
            letterSpacing: '-1px',
          }}
        >
          College Planning
          <br />
          Made Clear
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '40px',
            maxWidth: '850px',
          }}
        >
          Free tools for students • CampusConnect for institutions
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '16px 24px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <span style={{ fontSize: '24px' }}>🎓</span>
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 600 }}>
              Application Tracking
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '16px 24px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <span style={{ fontSize: '24px' }}>💰</span>
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 600 }}>
              Scholarship Discovery
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '16px 24px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <span style={{ fontSize: '24px' }}>🤖</span>
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 600 }}>
              AI-Powered
            </span>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            fontSize: '24px',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '0.5px',
          }}
        >
          www.magicscholar.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
