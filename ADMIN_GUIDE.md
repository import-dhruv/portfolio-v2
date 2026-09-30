# 🔐 Admin Panel Guide

Complete guide to using the blog CMS admin panel.

## 🚀 Quick Start

### Accessing Admin Panel

1. Navigate to: **http://localhost:8080/admin** (or your deployed URL + `/admin`)
2. Enter the admin password
3. Start managing your blog posts!

### Default Password

**Password:** `admin123`

⚠️ **IMPORTANT:** Change this password before deploying to production!

To change the password:
1. Open `src/lib/auth.ts`
2. Change the `ADMIN_PASSWORD` value
3. Use a strong, unique password

## 📝 Managing Blog Posts

### Creating a New Post

1. Click **"New Post"** button in the admin panel
2. Fill in the form:
   - **Title:** Your blog post title
   - **Excerpt:** Short description (shown in blog list)
   - **Slug:** URL-friendly version (auto-generated if left empty)
   - **Date:** Publication date
   - **Tags:** Comma-separated tags (e.g., "ai, engineering, tutorial")
   - **Published:** Check to publish, uncheck to save as draft
3. Click **"Save Post"**

### Editing a Post

1. Click the **Edit** icon (✏️) next to any post
2. Make your changes
3. Click **"Save Post"**

### Deleting a Post

1. Click the **Delete** icon (🗑️) next to any post
2. Confirm the deletion

### Draft Posts

- Uncheck the "Published" checkbox to save a post as a draft
- Draft posts won't appear on the public blog page
- You can see all drafts in the admin panel (marked with a "Draft" badge)

## 💾 How Data is Stored

The admin panel uses **localStorage** to store blog posts:
- Posts are saved in your browser's local storage
- Data persists across sessions
- Initial posts come from `src/data/blogPosts.ts`
- Any changes you make in the admin panel override the default data

### Important Notes

- Each browser has its own local storage
- Clearing browser data will reset posts to defaults
- For production, consider using a database or CMS backend

## 🔒 Security

### Current Setup (Development)

- Simple password authentication
- Stored in localStorage
- Suitable for local development only

### For Production

**⚠️ DO NOT use this setup in production without proper security!**

Recommended improvements:
1. Use a proper authentication service (Auth0, Firebase Auth, etc.)
2. Store blog posts in a database
3. Add user management
4. Implement HTTPS
5. Add rate limiting
6. Use environment variables for credentials

## 🎨 Features

### ✅ What You Can Do

- ✏️ Create, edit, delete blog posts
- 📝 Save drafts (unpublished posts)
- 🏷️ Add tags to posts
- 📅 Set publication dates
- 🔍 View all posts at a glance
- 🔐 Password-protected access

### 🔄 Auto-Features

- **Auto-slug generation:** Leave slug empty to auto-generate from title
- **Auto-sorting:** Posts automatically sorted by date (newest first)
- **Auto-save:** Changes saved immediately to localStorage
- **Validation:** Required fields are enforced

## 📱 Interface

### Admin Dashboard

- **Header:** Shows "Admin Panel" title with post count
- **New Post button:** Create new blog posts
- **Logout button:** End your admin session
- **Post cards:** Display all posts with edit/delete actions

### Post Form

- Clean, simple form for creating/editing posts
- Required fields marked with *
- Helpful hints for each field
- Save/Cancel buttons

## 🛠️ Troubleshooting

### Can't Login

- Check that password is correct (default: `admin123`)
- Try clearing browser cache
- Check browser console for errors

### Posts Not Showing

- Verify post is marked as "Published" (not draft)
- Check that the date is not in the future
- Refresh the blog page

### Changes Not Saving

- Check browser console for errors
- Verify localStorage is enabled in your browser
- Try a different browser

### Lost Posts

- Posts are stored in localStorage
- Clearing browser data removes posts
- Default posts are in `src/data/blogPosts.ts`

## 📂 File Structure

```
src/
├── routes/
│   └── admin.tsx          ← Admin panel UI
├── lib/
│   ├── auth.ts            ← Authentication logic
│   └── blogStorage.ts     ← Data storage functions
└── data/
    └── blogPosts.ts       ← Default blog posts
```

## 🚀 Deployment Notes

Before deploying:

1. **Change the password** in `src/lib/auth.ts`
2. Consider implementing proper authentication
3. Add a real database for production use
4. Set up proper environment variables
5. Add backup mechanisms for your content

## 💡 Tips

1. **Write drafts first:** Create posts with `published: false` to work on them
2. **Use tags consistently:** Stick to lowercase, single words
3. **Preview before publishing:** Check how posts look on the blog page
4. **Keep excerpts short:** Aim for 1-2 sentences
5. **Regular backups:** Export your localStorage data periodically

## 🔗 URLs

- **Admin Panel:** `/admin`
- **Public Blog:** `/blog`
- **Home:** `/`

---

Need help? Check the main documentation or open an issue on GitHub.
