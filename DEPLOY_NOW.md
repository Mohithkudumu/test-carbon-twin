# 🚀 Deploy Now - Step by Step Guide

This guide will help you deploy your Campus Carbon Pulse application right now.

## ✅ Pre-Flight Check

Your project is ready for deployment! The following have been prepared:
- ✅ CORS configuration updated to support production environment variables
- ✅ `vercel.json` configured for frontend deployment
- ✅ `railway.json` configured for backend deployment
- ✅ `Procfile` ready for Railway
- ✅ API configuration uses environment variables

---

## 🎯 Quick Deployment (5 Steps)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

> **Note:** Make sure your repository is pushed to GitHub. Both Vercel and Railway need access to your GitHub repository.

---

### Step 2: Deploy Backend to Railway

1. **Go to Railway**: https://railway.app
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"** → **"Deploy from GitHub repo"**
4. **Select your repository**: `carbon-twin-history`
5. **Configure the service**:
   - **Root Directory**: Set to `backend`
   - Railway will auto-detect Python
6. **Add Environment Variables** (Settings → Variables):
   ```
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   PORT=8000
   CORS_ORIGINS=https://your-app.vercel.app
   ```
   > Note: Add `CORS_ORIGINS` after you get your Vercel URL (Step 4)
7. **Wait for deployment** to complete
8. **Copy your Railway URL** from the dashboard (e.g., `https://your-app.railway.app`)

---

### Step 3: Deploy Frontend to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with your GitHub account
3. **Click "Add New Project"**
4. **Import your repository**: `carbon-twin-history`
5. **Configure the project**:
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (leave as root)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
6. **Add Environment Variable** (before deploying):
   - Click "Environment Variables"
   - Add: `VITE_API_URL` = `https://your-railway-url.railway.app`
   - (Use the URL from Step 2)
7. **Click "Deploy"**
8. **Copy your Vercel URL** from the dashboard (e.g., `https://your-app.vercel.app`)

---

### Step 4: Update CORS Settings

1. **Go back to Railway dashboard**
2. **Open your project** → **Variables** tab
3. **Update `CORS_ORIGINS`**:
   ```
   CORS_ORIGINS=https://your-app.vercel.app,http://localhost:8080
   ```
   (Replace with your actual Vercel URL)
4. **Railway will automatically redeploy** with the new settings

---

### Step 5: Test Your Deployment

1. **Visit your frontend URL**: `https://your-app.vercel.app`
2. **Test the features**:
   - ✅ Dashboard loads
   - ✅ 3D map renders
   - ✅ Time slider works
   - ✅ Click "GET INSIGHTS" to test AI feature
3. **Check backend health**:
   ```bash
   curl https://your-railway-url.railway.app/docs
   ```
   You should see the FastAPI docs page

---

## 🎉 Success!

Your Campus Carbon Pulse is now live! 🚀

- **Frontend**: https://your-app.vercel.app
- **Backend**: https://your-railway-url.railway.app
- **API Docs**: https://your-railway-url.railway.app/docs

---

## 🔧 Troubleshooting

### Backend Issues

**Problem**: Build fails on Railway
- Check Railway logs: Dashboard → Deployments → View Logs
- Verify `backend/requirements.txt` has all dependencies
- Ensure all model files (`.keras`, `.joblib`) are in `backend/models/`
- Ensure `snuc_carbon_year_2025.csv` is in `backend/` directory

**Problem**: 500 errors when calling API
- Check Railway logs for error messages
- Verify `GEMINI_API_KEY` is set correctly
- Check if `emissions.json` is being generated (check logs)

**Problem**: CORS errors
- Verify `CORS_ORIGINS` includes your Vercel URL
- Make sure the URL starts with `https://`
- Check Railway logs to see what origins are allowed

### Frontend Issues

**Problem**: Can't connect to backend
- Verify `VITE_API_URL` is set correctly in Vercel
- Check browser console for CORS errors
- Ensure Railway URL is accessible (try opening it in browser)

**Problem**: Build fails on Vercel
- Check Vercel build logs
- Verify all dependencies in `package.json`
- Check for TypeScript errors

**Problem**: API calls return 404
- Verify the backend URL is correct
- Check that Railway deployment is running (Status should be "Active")
- Test backend directly: `curl https://your-railway-url.railway.app/get-emissions/10`

---

## 📋 Environment Variables Summary

### Railway (Backend)
```
GEMINI_API_KEY=your_gemini_api_key
PORT=8000
CORS_ORIGINS=https://your-app.vercel.app,http://localhost:8080
```

### Vercel (Frontend)
```
VITE_API_URL=https://your-railway-url.railway.app
```

---

## 🔐 Security Notes

- ✅ Never commit `.env` files (they're in `.gitignore`)
- ✅ Use environment variables for all secrets
- ✅ Keep your Gemini API key secure
- ✅ HTTPS is automatic on both Vercel and Railway
- ✅ CORS is configured to only allow your frontend domain

---

## 📝 Need Help?

- **Railway Docs**: https://docs.railway.app
- **Vercel Docs**: https://vercel.com/docs
- **FastAPI Docs**: https://fastapi.tiangolo.com
- **Check the logs**: Both platforms provide detailed logs in their dashboards

---

## 🎯 Next Steps (Optional)

1. **Custom Domain**: Add your own domain in Vercel/Railway settings
2. **Monitoring**: Set up logging and monitoring
3. **CI/CD**: Already set up! Every push to main triggers a new deployment
4. **Analytics**: Add analytics to track usage

---

**Ready to deploy? Follow the steps above and your app will be live in minutes!** 🚀
