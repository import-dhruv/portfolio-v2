# 🚀 Vercel Deployment Guide

Complete guide to deploy your portfolio to Vercel.

## 📋 Pre-Deployment Checklist

### 1. Replace Avatar Photo

Before deploying, verify your avatar photo in `src/assets/avatar.png`:

```bash
# Save your photo as avatar.png (1024x1024 recommended)
cp /path/to/your/real-photo.jpg src/assets/avatar.png
```

The photo will be used:

- On the home page (Polaroid component)
- As the favicon
- In social media previews

### 2. Test Build Locally

```bash
bun --bun run build
bun run preview
```

If the build succeeds, you're ready to deploy!

## 🌐 Deploy to Vercel

### Option 1: Via GitHub (Recommended)

1. **Push to GitHub**:

   ```bash
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings

3. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 🔧 Vercel Configuration

The project includes `vercel.json` with optimal settings:

```json
{
  "buildCommand": "bun run build",
  "outputDirectory": ".output/public",
  "framework": null,
  "installCommand": "bun install"
}
```

## 📝 Post-Deployment

### Verify Everything Works

1. **Home page:**
   - Home page loads correctly
   - Navigation works (smooth scrolling to about, work, writing, contact)
   - Polaroid photo appears correctly
   - Favicon shows your photo
   - Project links and X article links open correctly

2. **Projects page:**
   - `/projects` - Full projects showcase

### Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. SSL is automatic

## 🎯 What's Deployed

Your portfolio includes:

✅ Single-page layout (about, experience, work, writing, contact)
✅ Hide-on-scroll navigation
✅ Direct links to X articles and external publications
✅ Projects showcase
✅ Resume download
✅ Dark/light theme support
✅ Responsive design
✅ Social media metadata
