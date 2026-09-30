# 🔐 Environment Variables Setup

This guide explains how to set up environment variables for your portfolio.

## Quick Start

### 1. Create Environment File

Copy the example file:
```bash
cp .env.example .env
```

### 2. Set Your Password

Edit `.env` and add your secure password:
```bash
VITE_ADMIN_PASSWORD=your_secure_password_here
```

### 3. Restart Server

```bash
bun run dev
```

That's it! Your admin panel now uses your custom password.

## Environment Variables

### Available Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_ADMIN_PASSWORD` | Admin panel password | Yes | `admin123` |

### Adding More Variables

To add new environment variables:

1. Add to `.env`:
   ```bash
   VITE_YOUR_VARIABLE=value
   ```

2. Add to `.env.example` (without the actual value):
   ```bash
   VITE_YOUR_VARIABLE=example_value
   ```

3. Use in your code:
   ```typescript
   const value = import.meta.env.VITE_YOUR_VARIABLE;
   ```

⚠️ **Important:** Vite requires variables to start with `VITE_` to be exposed to the client.

## Security Best Practices

### ✅ DO

- ✅ Keep `.env` in `.gitignore`
- ✅ Use strong, unique passwords
- ✅ Share `.env.example` with your team
- ✅ Document all environment variables
- ✅ Use different values for dev/staging/production

### ❌ DON'T

- ❌ Commit `.env` to version control
- ❌ Share `.env` files publicly
- ❌ Use weak passwords
- ❌ Hardcode sensitive data in your code
- ❌ Use production passwords in development

## Deployment

### Local Development

Your `.env` file is automatically loaded when running:
```bash
bun run dev
```

### Production Deployment

For production deployments, set environment variables in your hosting platform:

#### Vercel
1. Go to Project Settings → Environment Variables
2. Add `VITE_ADMIN_PASSWORD` with your production password
3. Deploy

#### Netlify
1. Go to Site Settings → Environment Variables
2. Add `VITE_ADMIN_PASSWORD` with your production password
3. Deploy

#### Cloudflare Pages
1. Go to Settings → Environment Variables
2. Add `VITE_ADMIN_PASSWORD` with your production password
3. Deploy

#### Other Platforms
Check your platform's documentation for setting environment variables.

## File Structure

```
portfolio-v2/
├── .env                 ← Your local config (DO NOT COMMIT)
├── .env.example         ← Template (safe to commit)
├── .gitignore           ← Ensures .env is not committed
└── src/
    └── lib/
        └── auth.ts      ← Uses environment variables
```

## Troubleshooting

### Password Not Working

1. Check `.env` file exists in project root
2. Verify `VITE_ADMIN_PASSWORD` is set correctly
3. Restart the dev server (environment variables are loaded at startup)
4. Clear browser cache and localStorage

### Environment Variable Not Loading

1. Make sure variable name starts with `VITE_`
2. Restart the development server
3. Check `.env` file is in the project root (not in subdirectories)
4. Verify there are no spaces around the `=` sign

### Changes Not Taking Effect

Environment variables are loaded when the server starts. After changing `.env`:
```bash
# Stop the server (Ctrl+C)
bun run dev  # Start again
```

## Example .env File

```bash
# Admin Panel
VITE_ADMIN_PASSWORD=MySecurePassword123!

# Add more variables as needed
# VITE_API_URL=https://api.example.com
# VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

## Git Ignore

The `.gitignore` file includes:
```
.env
.env.local
.env.*.local
```

This ensures your sensitive data stays private.

## Need Help?

- Check if `.env` exists: `ls -la .env`
- View `.env` contents: `cat .env` (locally only!)
- Test environment variable: `console.log(import.meta.env.VITE_ADMIN_PASSWORD)`

---

**Remember:** Never commit your `.env` file or share it publicly! 🔒
