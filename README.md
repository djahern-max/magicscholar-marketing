# MagicScholar Marketing Site

Clean, professional marketing website for magicscholar.com. This is a separate Next.js application from the main app (app.magicscholar.com).

## Features

- Modern, responsive landing page
- No fake testimonials or placeholder content
- Fast, optimized performance
- SEO-friendly
- Docker ready for production

## Tech Stack

- Next.js 15.1.2
- React 19
- TypeScript
- Tailwind CSS
- Lucide Icons

## Development

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
# Install dependencies
npm install

# Run development server (on port 3001 to avoid conflict with main app)
npm run dev
```

Visit http://localhost:3001

### Build for Production

```bash
npm run build
npm start
```

## Docker Deployment

### Build and Run with Docker Compose

```bash
# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

The marketing site will be available on port 3001.

### Manual Docker Build

```bash
# Build image
docker build -t magicscholar-marketing .

# Run container
docker run -p 3001:3000 magicscholar-marketing
```

## Deployment to DigitalOcean

### Option 1: Add to Existing docker-compose.prod.yml

Add this service to your existing `/var/www/magicscholar/docker-compose.prod.yml`:

```yaml
services:
  # ... existing services (db, api, frontend) ...

  marketing:
    build:
      context: ./marketing
      dockerfile: Dockerfile
    container_name: magicscholar_marketing
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    networks:
      - magicscholar_network
    ports:
      - "3001:3000"
    healthcheck:
      test: ["CMD-SHELL", "node -e \"require('http').get('http://localhost:3000', (r) => process.exit(r.statusCode === 200 ? 0 : 1))\""]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Option 2: Nginx Configuration

Configure Nginx to route:
- `magicscholar.com` → marketing site (port 3001)
- `app.magicscholar.com` → main application (port 3000)

Example Nginx config for `magicscholar.com`:

```nginx
server {
    listen 80;
    server_name magicscholar.com www.magicscholar.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Updating Content

The main content is in `src/app/page.tsx`. Edit this file to update:
- Hero text
- Features
- Benefits
- Call-to-action buttons

## Links to Main Application

All "Launch App" and "Get Started" buttons link to `https://app.magicscholar.com`

## Structure

```
magicscholar-marketing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
├── public/                  # Static assets (add images here)
├── Dockerfile              # Production Docker build
├── docker-compose.yml      # Docker Compose config
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Dependencies
```

## Future Enhancements

When ready to add:
- Customer testimonials (once you have real ones)
- Case studies
- Pricing page
- Blog
- About page
- Contact form
- Analytics
