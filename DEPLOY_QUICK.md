# 🚀 Quick Deployment Steps

## Prerequisites
- GitHub account
- Vercel account (https://vercel.com)
- Railway account (https://railway.app)
- Gemini API key

## Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Step 2: Deploy Backend (Railway)

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `carbon-twin-history`
4. Set Root Directory: `backend`
5. Add Environment Variables:
   ```
   GEMINI_API_KEY=your_actual_key
   PORT=8000
   ```
6. Deploy and copy the Railway URL

## Step 3: Deploy Frontend (Vercel)

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import `carbon-twin-history`
4. Framework: Vite
5. Root Directory: `./`
6. Add Environment Variable:
   ```
   VITE_API_URL=https://your-railway-url.railway.app
   ```
7. Deploy

## Step 4: Update CORS

In Railway, update environment variable:
```
CORS_ORIGINS=https://your-vercel-url.vercel.app
```

## Done! 🎉

Your app is live at:
- Frontend: https://your-app.vercel.app
- Backend: https://your-app.railway.app

For detailed instructions, see DEPLOYMENT_GUIDE.md
