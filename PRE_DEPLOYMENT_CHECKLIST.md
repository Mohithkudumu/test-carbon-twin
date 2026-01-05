# 📋 Pre-Deployment Checklist

Before deploying to production, verify the following:

## ✅ Code Preparation

- [ ] All API URLs updated to use `API_ENDPOINTS` from `src/lib/api.ts`
- [ ] Environment variables configured in `.env.production.example`
- [ ] Deployment config files created:
  - [ ] `vercel.json`
  - [ ] `railway.json`
  - [ ] `Procfile`
- [ ] `requirements.txt` includes `uvicorn[standard]`
- [ ] `.gitignore` includes `.env` files

## ✅ Environment Variables

### Backend (Railway):
- [ ] `GEMINI_API_KEY` - Your actual Gemini API key
- [ ] `PORT` - Set to `8000` (or use Railway's `$PORT`)
- [ ] `CORS_ORIGINS` - Your Vercel frontend URL

### Frontend (Vercel):
- [ ] `VITE_API_URL` - Your Railway backend URL

## ✅ Git Repository

- [ ] All changes committed
- [ ] Pushed to GitHub main branch
- [ ] `.env` files NOT committed (check `.gitignore`)
- [ ] Repository is public or accessible to Vercel/Railway

## ✅ Accounts Setup

- [ ] GitHub account ready
- [ ] Vercel account created (https://vercel.com)
- [ ] Railway account created (https://railway.app)
- [ ] Gemini API key obtained (https://aistudio.google.com/app/apikey)

## ✅ Testing Locally

Before deploying, test locally:

```bash
# Backend
cd backend
python -m uvicorn main:app --reload --port 8000

# Frontend (new terminal)
npm run dev
```

Test these features:
- [ ] Dashboard loads
- [ ] 3D map renders
- [ ] Time slider works
- [ ] Historical data chart displays
- [ ] AI Insights generates (if API key is set)

## ✅ Build Test

Test production build locally:

```bash
# Frontend build test
npm run build
npm run preview
```

- [ ] Build completes without errors
- [ ] Preview works correctly

## 🚀 Ready to Deploy!

If all items are checked, you're ready to deploy:

1. **Deploy Backend First** → Railway
2. **Get Backend URL** → Copy from Railway
3. **Deploy Frontend** → Vercel (with backend URL)
4. **Update CORS** → Add Vercel URL to Railway env vars
5. **Test Production** → Verify everything works

---

## 📝 Quick Commands

```bash
# Commit and push
git add .
git commit -m "Ready for production deployment"
git push origin main

# Then follow DEPLOY_QUICK.md for deployment steps
```

---

**Good luck with your deployment! 🎉**
