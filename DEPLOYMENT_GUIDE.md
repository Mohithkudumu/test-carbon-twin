# 🚀 Campus Carbon Pulse - Deployment Guide

This guide will help you deploy your Campus Carbon Pulse application to production.

## 📋 Deployment Architecture

- **Frontend**: Vercel (React + Vite)
- **Backend**: Railway (FastAPI + Python)
- **Database**: Not required (uses CSV data and LSTM models)

---

## 🎯 Prerequisites

Before deploying, ensure you have:
- ✅ GitHub account
- ✅ Vercel account (free tier available)
- ✅ Railway account (free tier available)
- ✅ Your Gemini API key
- ✅ Project pushed to GitHub

---

## Part 1: Prepare for Deployment

### Step 1: Create Production Environment Files

We need to create configuration files for deployment.

#### 1.1 Create `vercel.json` for Frontend
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### 1.2 Create `railway.json` for Backend
```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "uvicorn main:app --host 0.0.0.0 --port $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

#### 1.3 Create `Procfile` for Railway
```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

#### 1.4 Update `requirements.txt`
Make sure all dependencies are listed:
```
fastapi
uvicorn[standard]
pandas
tensorflow
joblib
numpy
scikit-learn
google-generativeai
python-dotenv
```

---

## Part 2: Deploy Backend to Railway

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your `carbon-twin-history` repository
5. Railway will auto-detect it's a Python project

### Step 3: Configure Environment Variables

In Railway dashboard:
1. Go to your project → **Variables** tab
2. Add these environment variables:

```
GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=8000
CORS_ORIGINS=https://your-frontend-url.vercel.app,http://localhost:8080
```

### Step 4: Configure Build Settings

Railway should auto-detect, but verify:
- **Build Command**: (auto-detected)
- **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- **Root Directory**: `backend`

### Step 5: Get Your Backend URL

After deployment:
- Railway will provide a URL like: `https://your-app.railway.app`
- Copy this URL - you'll need it for frontend configuration

---

## Part 3: Deploy Frontend to Vercel

### Step 1: Update Frontend API URLs

Before deploying, update the backend URL in your frontend code.

**Option A: Environment Variables (Recommended)**

Create `.env.production` in the root:
```env
VITE_API_URL=https://your-app.railway.app
```

Update your API calls to use:
```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
```

**Option B: Direct Update**

Update these files:
- `src/pages/Index.tsx` (line 43)
- `src/pages/Insights.tsx` (line 36)
- `src/components/AnalyticsPanel.tsx` (line 33)

Replace `http://localhost:8000` with your Railway URL.

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Add Environment Variables

In Vercel dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add:
```
VITE_API_URL=https://your-app.railway.app
```

### Step 4: Deploy

Click **Deploy** and wait for Vercel to build your app.

---

## Part 4: Update CORS Settings

After getting your Vercel URL, update the backend CORS settings:

### In Railway Dashboard:

Update the `CORS_ORIGINS` environment variable:
```
CORS_ORIGINS=https://your-app.vercel.app,http://localhost:8080
```

Or update `backend/main.py` line 30:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://your-app.vercel.app",
        "http://localhost:8080",
        "http://127.0.0.1:8080"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## Part 5: Verify Deployment

### Test Backend
```bash
curl https://your-app.railway.app/get-emissions/10
```

Expected: JSON response with emissions data

### Test Frontend
1. Open `https://your-app.vercel.app`
2. Check if the 3D map loads
3. Test the time slider
4. Click "GET INSIGHTS" to test AI feature

---

## 🔧 Troubleshooting

### Backend Issues

**Problem**: 500 errors
- Check Railway logs: Dashboard → Deployments → View Logs
- Verify environment variables are set
- Check if all files uploaded correctly

**Problem**: Module not found
- Verify `requirements.txt` includes all dependencies
- Check Railway build logs

### Frontend Issues

**Problem**: Can't connect to backend
- Verify CORS settings in backend
- Check API URL is correct
- Open browser console for errors

**Problem**: Build fails
- Check `package.json` scripts
- Verify all dependencies installed
- Check Vercel build logs

---

## 📊 Post-Deployment Checklist

- [ ] Backend deployed to Railway
- [ ] Frontend deployed to Vercel
- [ ] Environment variables configured
- [ ] CORS settings updated
- [ ] API endpoints tested
- [ ] Frontend loads correctly
- [ ] Time slider works
- [ ] AI Insights generates successfully
- [ ] Custom domain configured (optional)

---

## 🎯 Optional: Custom Domain

### For Vercel (Frontend):
1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### For Railway (Backend):
1. Go to Railway Dashboard → Settings → Domains
2. Add custom domain
3. Update DNS records

---

## 🔒 Security Notes

- ✅ Never commit `.env` files
- ✅ Use environment variables for secrets
- ✅ Keep API keys secure
- ✅ Enable HTTPS (automatic on Vercel/Railway)
- ✅ Restrict CORS to your domain only

---

## 📝 Deployment Commands Summary

```bash
# 1. Prepare and push to GitHub
git add .
git commit -m "Deploy to production"
git push origin main

# 2. Deploy backend to Railway
# (Use Railway dashboard - no CLI needed)

# 3. Deploy frontend to Vercel
# (Use Vercel dashboard - no CLI needed)

# 4. Test deployment
curl https://your-backend.railway.app/get-emissions/10
```

---

## 🎉 Success!

Your Campus Carbon Pulse is now live! 🚀

- **Frontend**: https://your-app.vercel.app
- **Backend**: https://your-app.railway.app
- **API Docs**: https://your-app.railway.app/docs

Share your project with the world! 🌍
