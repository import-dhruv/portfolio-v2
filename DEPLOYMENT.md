# Deployment Guide for Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier works great!)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com) and sign in
   - Click "Add New..." → "Project"

2. **Import Your Repository**:
   - Select your Git provider (GitHub recommended)
   - Find and import your portfolio repository
   - Vercel will automatically detect the framework

3. **Configure Build Settings**:
   - **Framework Preset**: Other (Vercel will use your vercel.json)
   - **Build Command**: `bun run build` (auto-detected from vercel.json)
   - **Output Directory**: `.output/public` (auto-detected from vercel.json)
   - **Install Command**: `bun install`

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `your-project-name.vercel.app`

## Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   bun add -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Environment Variables

This project doesn't require any environment variables for basic deployment. If you add external APIs or services later, you can configure them in:
- Vercel Dashboard → Project Settings → Environment Variables

## Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Once connected to your Git repository:
- **Push to main branch** → Automatically deploys to production
- **Push to other branches** → Creates preview deployments
- **Pull requests** → Generates preview URLs for testing

## Post-Deployment Checklist

- ✅ Check all pages load correctly (`/`, `/projects`, `/skills`)
- ✅ Verify navigation works properly
- ✅ Test external links (GitHub, LinkedIn, project demos)
- ✅ Check email link functionality
- ✅ Verify responsive design on mobile devices
- ✅ Test social media preview cards (Open Graph)

## Troubleshooting

### Build Fails

If your build fails on Vercel:

1. **Check Build Logs**: Review the deployment logs in Vercel dashboard
2. **Verify Local Build**: Run `bun run build` locally to catch errors
3. **Node Version**: Vercel uses Node.js 18.x by default with Bun support

### 404 Errors

If you get 404 errors on routes:
- Ensure your `vercel.json` is properly configured (it should be already!)
- The output directory should be `.output/public`

### Slow Build Times

First build might take longer. Subsequent builds are faster due to caching.

## Performance Tips

Your portfolio is already optimized, but here are some extras:

1. **Enable Vercel Analytics** (optional):
   - Go to your project → Analytics
   - Enable Web Analytics for visitor insights

2. **Add Speed Insights** (optional):
   - Go to your project → Speed Insights
   - Enable to track Core Web Vitals

3. **Set up CORS** (if needed for API routes):
   - Configure in `vercel.json` if you add API routes later

## Monitoring

Vercel provides:
- **Deployment History**: Track all deployments
- **Real-time Logs**: Debug production issues
- **Analytics**: Visitor metrics (optional)
- **Speed Insights**: Performance metrics (optional)

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [TanStack Start Deployment Guide](https://tanstack.com/start/latest/docs/deployment)
- [Vercel Support](https://vercel.com/support)

---

**Note**: This project is configured to work seamlessly with Vercel. The `vercel.json` file handles all routing and build configuration automatically!
