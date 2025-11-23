// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'MagicScholar - College Planning Platform';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Top: Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 24,
            color: '#6b7280',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 9999,
              border: '1px solid #d1d5db',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 22 }}>✨</span>
          </div>
          <span style={{ fontWeight: 600, color: '#111827' }}>MagicScholar</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span style={{ fontWeight: 500, color: '#4b5563' }}>Abacadaba</span>
        </div>

        {/* Main Message - Simplified without inline-flex */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: 900,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              gap: 16,
            }}
          >
            <span>Choosing a college</span>
            <span>shouldn't be</span>
          </div>
          
          {/* A B C D on separate line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 16,
            }}
          >
            <span style={{ fontSize: 96, fontWeight: 800, letterSpacing: '-0.05em' }}>
              A
            </span>
            <span style={{ fontSize: 40, fontWeight: 600, color: '#9ca3af' }}>
              B
            </span>
            <span style={{ fontSize: 32, fontWeight: 600, color: '#9ca3af', opacity: 0.8 }}>
              C
            </span>
            <span style={{ fontSize: 26, fontWeight: 600, color: '#9ca3af', opacity: 0.6 }}>
              D
            </span>
            <span style={{ fontSize: 56, fontWeight: 600, color: '#111827' }}>
              guess.
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ fontSize: 24, color: '#6b7280' }}>
          Real data from institutions & scholarships—no more guessing games.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
