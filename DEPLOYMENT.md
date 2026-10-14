# 🚀 Vercel Deployment Guide

Complete guide to deploy your portfolio to Vercel.

## 📋 Pre-Deployment Checklist

### 1. Replace Avatar Photo

**IMPORTANT:** Before deploying, replace the cartoon avatar with your real photo:

```bash
# Replace the avatar image
# Save your real photo as avatar.png (1024x1024 recommended)
cp /path/to/your/real-photo.jpg src/assets/avatar.png
```

The photo will be used:
- On the home page (Polaroid component)
- As the favicon
- In social media previews

### 2. Environment Variables

Set the admin password in Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add: `VITE_ADMIN_PASSWORD` = `Dhruv@2004` (or your secure password)
4. Apply to: Production, Preview, Development

### 3. Test Build Locally

```bash
# Clean install
rm -rf node_modules
bun install

# Test build
bun run build

# Test preview
bun run preview
```

If the build succeeds, you're ready to deploy!

## 🌐 Deploy to Vercel

### Option 1: Via GitHub (Recommended)

1. **Push to GitHub** (already done):
   ```bash
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings

3. **Configure Environment Variables:**
   - In project settings, add `VITE_ADMIN_PASSWORD`
   - Set value to your admin password

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# For production
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

1. **Test the site:**
   - Home page loads correctly
   - Navigation works (smooth scrolling)
   - Your photo appears correctly
   - Favicon shows your photo

2. **Test admin panel:**
   - Go to `/admin`
   - Login with your password
   - Create/edit a blog post
   - Verify changes appear on `/blog`

3. **Test all pages:**
   - `/` - Home (with all sections)
   - `/blog` - Blog listing
   - `/projects` - Projects (if you kept the page)
   - `/admin` - Admin panel

### Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. SSL is automatic

## 🔒 Security Reminders

1. ✅ Environment variables are set in Vercel (not in code)
2. ✅ `.env` file is in `.gitignore`
3. ✅ Admin password is secure
4. ⚠️ Current auth is client-side only (suitable for personal portfolios)

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules .output
bun install
bun run build
```

**Error: Environment variable not found**
- Make sure `VITE_ADMIN_PASSWORD` is set in Vercel
- Redeploy after adding env vars

### Admin Login Not Working

1. Check environment variable is set in Vercel
2. Try clearing browser localStorage
3. Use incognito/private mode to test

### Photos Not Showing

1. Verify files exist in `public/` folder
2. Check file paths are correct
3. Rebuild and redeploy

## 📊 Vercel Dashboard Features

After deployment, you'll have access to:

- **Analytics** - Visitor stats
- **Speed Insights** - Performance metrics
- **Deployments** - History and rollback
- **Logs** - Build and runtime logs
- **Environment Variables** - Manage secrets

## 🔄 Continuous Deployment

Every push to `main` branch will automatically:
1. Trigger a new build
2. Run in preview mode first
3. Deploy to production if successful

Preview deployments are created for:
- Pull requests
- Branch pushes
- Manual triggers

## 🎯 What's Deployed

Your portfolio includes:

✅ Single-page layout (about, work, writing, contact)
✅ Hide-on-scroll navigation
✅ Blog system with admin CMS
✅ Projects section
✅ Resume download
✅ Dark theme (system default)
✅ Your photo as favicon
✅ Responsive design
✅ Social media metadata

## 📱 Mobile Optimization

Vercel automatically optimizes for:
- Image compression
- Code splitting
- Asset caching
- Edge network delivery

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Custom Domains Guide](https://vercel.com/docs/custom-domains)

---

**Ready to Deploy?** Just push to GitHub and let Vercel handle the rest! 🚀
