# 📸 Avatar Photo Replacement

## Quick Guide to Replace Your Avatar

Your portfolio currently uses a cartoon/illustration avatar. To use your real photo:

### Step 1: Prepare Your Photo

**Recommended specs:**

- Format: PNG or JPG
- Size: 1024x1024 pixels (square)
- File size: Under 1MB (compress if needed)
- Background: Any (will be cropped to circle)

### Step 2: Replace the File

```bash
# Navigate to the project
cd /home/dhruv2004/Codes/Programmes/portfolio-v2

# Replace the avatar
cp /path/to/your/real-photo.jpg src/assets/avatar.png

# Or if using the second photo from today:
# Save the bus selfie as src/assets/avatar.png
```

### Step 3: Update Favicon

```bash
# The favicon should also be updated
cp src/assets/avatar.png public/favicon.png
```

### Step 4: Rebuild and Deploy

```bash
# Test locally
bun run dev

# Build for production
bun run build

# Commit and push
git add src/assets/avatar.png public/favicon.png
git commit -m "Update avatar to real photo"
git push
```

## Where Your Photo Appears

Your avatar/photo is used in 3 places:

1. **Home Page** - The Polaroid-style frame with "Hey, I'm Dhruv" sticker
2. **Favicon** - Browser tab icon
3. **Social Media** - When your site is shared (meta tags)

## Photo Tips

✅ **DO:**

- Use a clear, well-lit photo
- Smile and look professional
- Ensure your face is centered
- Use recent photo

❌ **DON'T:**

- Use blurry or dark photos
- Include multiple people
- Use heavily filtered images
- Use photos with lots of background distractions

## Compression Tools

If your photo is too large:

- [TinyPNG](https://tinypng.com) - Free online compression
- [Squoosh](https://squoosh.app) - Google's image optimizer
- Or use command line:
  ```bash
  # Using ImageMagick (if installed)
  convert input.jpg -resize 1024x1024^ -gravity center -extent 1024x1024 avatar.png
  ```

## Current Status

- ✅ Polaroid component configured
- ✅ Favicon setup complete
- ⏳ **TODO:** Replace `src/assets/avatar.png` with your real photo

---

**Your photo from the bus (the second image you showed) would work perfectly!**

Just save it as `src/assets/avatar.png` and rebuild.
