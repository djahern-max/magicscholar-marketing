#!/bin/bash
set -e  # Exit on any error

echo "🚀 Deploying Marketing Site to Production..."

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "⚠️  You have uncommitted changes. Please commit or stash them first."
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

# Deploy to server
echo "🔄 Deploying to server..."
ssh magicscholar-do << 'ENDSSH'
set -e

cd /var/www/magicscholar/marketing

echo "📥 Pulling latest changes..."
git pull origin main

echo "🧹 Clearing Next.js cache..."
rm -rf .next

echo "📦 Installing dependencies (including dev dependencies for build)..."
npm install

echo "🏗️  Building Next.js application..."
npm run build

echo "🔄 Restarting marketing container..."
cd /var/www/magicscholar
docker-compose -f docker-compose.prod.yml up -d --build marketing

echo "✅ Marketing site deployed successfully!"
ENDSSH

echo "✨ Deployment complete!"
echo "🌐 Visit: https://www.magicscholar.com"