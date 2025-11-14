#!/bin/bash

# MagicScholar Marketing Site Deployment Script
# Usage: ./deploy.sh

set -e

echo "🚀 Starting MagicScholar Marketing deployment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Pull latest changes (if using git)
if [ -d .git ]; then
    echo "📥 Pulling latest changes..."
    git pull
fi

# Stop existing container
echo "🛑 Stopping existing container..."
docker-compose down

# Build and start
echo "🔨 Building and starting container..."
docker-compose up -d --build

# Wait for health check
echo "⏳ Waiting for service to be healthy..."
sleep 10

# Check if container is running
if docker-compose ps | grep -q "Up"; then
    echo "✅ Deployment successful!"
    echo "📱 Marketing site is running on port 3001"
    echo "🌐 Visit: http://localhost:3001"
else
    echo "❌ Deployment failed. Checking logs..."
    docker-compose logs
    exit 1
fi
