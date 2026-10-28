# 📁 Projects & Resume Guide

Guide for managing your projects and resume.

## 🚀 Projects Section

### Adding a New Project

Edit `src/data/projects.ts` and add your project:

```typescript
{
  id: 4,
  title: "Your Project Name",
  description: "Brief description of what the project does and the problem it solves.",
  tags: ["React", "Node.js", "MongoDB"],
  link: "https://project-demo.com",  // Optional
  github: "https://github.com/yourusername/repo",  // Optional
  featured: true,  // Optional: shows "Featured" badge
}
```

### Project Properties

| Property      | Type     | Required | Description                |
| ------------- | -------- | -------- | -------------------------- |
| `id`          | number   | ✅ Yes   | Unique identifier          |
| `title`       | string   | ✅ Yes   | Project name               |
| `description` | string   | ✅ Yes   | What the project does      |
| `tags`        | string[] | ✅ Yes   | Technologies used          |
| `link`        | string   | ❌ No    | Live demo URL              |
| `github`      | string   | ❌ No    | GitHub repository URL      |
| `image`       | string   | ❌ No    | Project image (future use) |
| `featured`    | boolean  | ❌ No    | Highlight this project     |

### Example Projects

**Web Application:**

```typescript
{
  id: 5,
  title: "E-commerce Platform",
  description: "Full-stack e-commerce platform with payment integration, real-time inventory, and admin dashboard.",
  tags: ["React", "Express", "Stripe", "PostgreSQL"],
  link: "https://myshop.com",
  github: "https://github.com/username/ecommerce",
  featured: true,
}
```

**Machine Learning Project:**

```typescript
{
  id: 6,
  title: "Sentiment Analysis API",
  description: "REST API for real-time sentiment analysis using transformer models with 95% accuracy.",
  tags: ["Python", "FastAPI", "Transformers", "Docker"],
  github: "https://github.com/username/sentiment-api",
  featured: false,
}
```

**Open Source Contribution:**

```typescript
{
  id: 7,
  title: "Contributing to TensorFlow",
  description: "Added new optimization algorithms and improved documentation for the core library.",
  tags: ["Python", "C++", "Machine Learning"],
  github: "https://github.com/tensorflow/tensorflow",
}
```

## 📄 Resume Setup

### Adding Your Resume

**Step 1:** Prepare your resume as a PDF file

**Step 2:** Replace the placeholder file

```bash
# Remove the placeholder
rm public/resume.pdf

# Add your resume (rename it to resume.pdf)
cp /path/to/your/resume.pdf public/resume.pdf
```

**Step 3:** The download button will automatically use your resume!

### Resume Button

The resume button appears on the home page with:

- 📄 File icon
- "Download Resume" text
- Automatic download when clicked
- Opens in new tab option

### Customizing the Button

Edit `src/routes/index.tsx` to customize:

**Change button text:**

```typescript
<Button>
  <FileText className="h-4 w-4" />
  View My Resume
</Button>
```

**Change button style:**

```typescript
<Button variant="outline">  // or "ghost", "secondary"
  Download Resume
</Button>
```

**Add multiple resume formats:**

```typescript
<div className="flex gap-3">
  <Button asChild>
    <a href="/resume.pdf" download>PDF</a>
  </Button>
  <Button asChild variant="outline">
    <a href="/resume.docx" download>DOCX</a>
  </Button>
</div>
```

## 🎨 Navigation

The navigation now includes:

- **home** - Your main page with resume button
- **projects** - Showcase of your work
- **blog** - Your blog posts

## 📂 File Structure

```
portfolio-v2/
├── public/
│   └── resume.pdf          ← Your resume (replace this)
├── src/
│   ├── data/
│   │   └── projects.ts     ← Edit to add projects
│   └── routes/
│       ├── index.tsx       ← Home page with resume button
│       └── projects.tsx    ← Projects page
└── PROJECTS_RESUME.md      ← This file
```

## 💡 Tips

### Projects

1. **Start with featured projects** - Highlight your best work
2. **Keep descriptions concise** - 1-2 sentences max
3. **Use relevant tags** - Technologies recruiters search for
4. **Include live demos** - Shows your work in action
5. **Link GitHub repos** - Demonstrates your code quality

### Resume

1. **Keep it updated** - Replace when you add new skills/experience
2. **Use a professional format** - Clean, ATS-friendly design
3. **Optimize file size** - Compress PDF if over 1MB
4. **Test the download** - Make sure it works on different devices
5. **Consider multiple versions** - Different roles may need different resumes

## 🔄 Quick Updates

### Add a project quickly:

```bash
# Edit the projects file
nano src/data/projects.ts

# Add your project to the array
# Save and the site updates automatically!
```

### Update resume quickly:

```bash
# Replace the PDF
cp ~/Downloads/my-new-resume.pdf public/resume.pdf

# Done! No code changes needed
```

## 🎯 Best Practices

### Project Descriptions

- ✅ Focus on impact and results
- ✅ Mention specific technologies
- ✅ Keep it under 150 characters
- ✅ Use action verbs (built, designed, implemented)

### Tags

- ✅ Use exact technology names
- ✅ Include frameworks and tools
- ✅ 3-6 tags per project is ideal
- ✅ Order by importance

### Links

- ✅ Always test your links
- ✅ Use HTTPS when available
- ✅ Make sure demos are live
- ✅ Keep GitHub repos public

## 📱 Features

### Projects Page

- Grid layout (2 columns on desktop)
- "Featured" badges for highlights
- Technology tags
- Live Demo and GitHub buttons
- Responsive design

### Resume Button

- Prominent placement on home page
- Icon for visual clarity
- Download attribute for immediate save
- Opens in new tab option

## 🚀 What's Next?

Consider adding:

- Project images/screenshots
- Case studies for featured projects
- Filter projects by technology
- Project categories
- Detailed project pages

---

Need help? Check the other documentation files or open an issue on GitHub!
