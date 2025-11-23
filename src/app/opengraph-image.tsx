// app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 96px',
          backgroundColor: '#ffffff',
          color: '#111827',
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
        }}
      >
        {/* Top: subtle brand row with sparkle logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 24,
            color: '#6b7280',
          }}
        >
          {/* Sparkle-in-a-circle logo (simple OG version) */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '9999px',
              border: '1px solid #d1d5db',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 22 }}>✶</span>
          </div>

          <span style={{ fontWeight: 600, color: '#111827' }}>MagicScholar</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span style={{ fontWeight: 500, color: '#4b5563' }}>Abacadaba</span>
        </div>

        {/* Middle: main message + A/B/C/D visual */}
        <div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: 800,
            }}
          >
            Choosing a college
            <br />
            shouldn&apos;t be{' '}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: 12,
              }}
            >
              {/* Big A */}
              <span
                style={{
                  fontSize: 96,
                  fontWeight: 800,
                  letterSpacing: '-0.05em',
                }}
              >
                A
              </span>

              {/* B C D progressively smaller / lighter */}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'flex-end',
                  gap: 6,
                  color: '#9ca3af',
                }}
              >
                <span style={{ fontSize: 40, fontWeight: 600 }}>B</span>
                <span style={{ fontSize: 32, fontWeight: 600, opacity: 0.8 }}>
                  C
                </span>
                <span style={{ fontSize: 26, fontWeight: 600, opacity: 0.6 }}>
                  D
                </span>
              </span>

              <span style={{ fontSize: 48, fontWeight: 600, color: '#111827' }}>
                guess.
              </span>
            </span>
          </div>
        </div>

        {/* Bottom: tiny supporting line */}
        <div
          style={{
            fontSize: 24,
            color: '#6b7280',
          }}
        >
          Real data from institutions &amp; scholarships—no more guessing games.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
