#!/bin/bash

# Deployment Script for Campus Carbon Pulse
# This script helps prepare your project for deployment

echo "🚀 Campus Carbon Pulse - Deployment Preparation"
echo "================================================"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "⚠️  Warning: Git repository not initialized"
    echo "Please run: git init && git add . && git commit -m 'Initial commit'"
    exit 1
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes. Please commit them first:"
    echo "   git add ."
    echo "   git commit -m 'Prepare for deployment'"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "✅ Deployment Checklist:"
echo ""
echo "1. Backend Deployment (Railway):"
echo "   - Go to: https://railway.app"
echo "   - Click 'New Project' → 'Deploy from GitHub repo'"
echo "   - Select your repository"
echo "   - Set Root Directory: backend"
echo "   - Add Environment Variables:"
echo "     * GEMINI_API_KEY=your_key_here"
echo "     * PORT=8000"
echo "     * CORS_ORIGINS=https://your-frontend-url.vercel.app"
echo ""
echo "2. Frontend Deployment (Vercel):"
echo "   - Go to: https://vercel.com"
echo "   - Click 'Add New Project'"
echo "   - Import your GitHub repository"
echo "   - Framework: Vite"
echo "   - Root Directory: ./"
echo "   - Add Environment Variable:"
echo "     * VITE_API_URL=https://your-railway-url.railway.app"
echo ""
echo "3. After Backend Deployment:"
echo "   - Copy the Railway URL"
echo "   - Update Vercel env var: VITE_API_URL"
echo "   - Update Railway env var: CORS_ORIGINS (with your Vercel URL)"
echo ""
echo "📝 For detailed instructions, see: DEPLOYMENT_GUIDE.md"
echo ""
echo "✨ Your project is ready for deployment!"
