# Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: Using Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

No environment variables are required for this project since we're using mailto links for contact.

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Build Configuration

The project uses these settings (already configured in `vercel.json`):

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Framework**: Vite

## Performance Optimizations

✅ Font preloading
✅ Image optimization
✅ Code splitting
✅ Minification
✅ Tree shaking
✅ Lazy loading

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify social media links work
- [ ] Test mailto links open email client
- [ ] Check responsive design on mobile
- [ ] Verify all project demo links work
- [ ] Test on different browsers
- [ ] Check page load speed
- [ ] Verify SEO meta tags

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### 404 on Refresh
- Already handled by `vercel.json` rewrites configuration

### Fonts Not Loading
- Fonts are loaded from Google Fonts CDN
- Check network tab for any blocked requests

## Support

For issues, contact: dhruvvcodess@gmail.com
