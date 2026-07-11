# 🎨 Customization Guide

## Updating Your Avatar Image

The avatar image is displayed on the home page in a polaroid-style frame.

### Method 1: Replace the Existing File

1. **Replace the image**:
   - Find a square image (recommended: 640x640px or larger)
   - Save it as `avatar.jpg` 
   - Replace the file at: `src/assets/avatar.jpg`

2. **The dev server will auto-reload** - check http://localhost:8080/

### Method 2: Use a Different File Name

1. **Add your image** to `src/assets/` folder (e.g., `my-photo.jpg`)

2. **Update Polaroid component** (`src/components/Polaroid.tsx`):
   ```tsx
   // Change this line:
   import avatarImg from "@/assets/avatar.jpg";
   
   // To:
   import avatarImg from "@/assets/my-photo.jpg";
   ```

### Recommended Image Specs

- **Format**: JPG, PNG, or WebP
- **Size**: 640x640px (square) - minimum 400x400px
- **File size**: Under 500KB for fast loading
- **Style**: Portrait photo or illustration with good lighting

---

## Updating Personal Information

### Contact Information

**File**: `src/components/SiteFooter.tsx`

Update email and social links:
```tsx
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>

<a href="https://www.linkedin.com/in/your-profile/">
  {/* LinkedIn */}
</a>

<a href="https://github.com/your-username">
  {/* GitHub */}
</a>
```

### Home Page Content

**File**: `src/routes/index.tsx`

Update your manifesto statements:
```tsx
const lines = [
  "i build intelligent systems.",
  "i work on models that think.",
  // Add or modify lines here
];
```

Update the greeting sticker:
```tsx
// In src/components/Polaroid.tsx
<span className="text-lg leading-none text-foreground">
  Hey, I'm Dhruv  {/* Change name here */}
</span>
```

---

## Updating Projects

**File**: `src/routes/projects.tsx`

Add, remove, or modify projects in the `projects` array:

```tsx
const projects = [
  {
    title: "Your Project Name",
    year: "2024",
    description: "A brief one-line description of your project.",
    tags: ["Technology", "Stack", "Used"],
    github: "https://github.com/username/repo",
    demo: "https://your-demo-url.com", // Optional
  },
  // Add more projects...
];
```

**Tips**:
- Keep descriptions to one line for consistency
- Use 2-4 tags per project
- Demo link is optional (remove if not applicable)

---

## Updating Skills

**File**: `src/routes/skills.tsx`

Modify the `groups` array:

```tsx
const groups = [
  { 
    title: "languages", 
    items: ["Python", "TypeScript", "JavaScript"] 
  },
  { 
    title: "your category", 
    items: ["Tool 1", "Tool 2", "Tool 3"] 
  },
  // Add more groups...
];
```

**Tips**:
- Keep category titles lowercase for consistency
- Order skills by proficiency or preference
- Group related technologies together

---

## Changing Colors

**File**: `src/styles.css`

The design uses OKLCH color space for better color management.

### Main Colors

```css
:root {
  --background: oklch(0.985 0.005 85);  /* Warm off-white */
  --foreground: oklch(0.22 0.01 60);     /* Dark text */
  --muted: oklch(0.94 0.008 85);         /* Light gray */
  --muted-foreground: oklch(0.5 0.015 60); /* Muted text */
  
  /* Modify these values to change colors */
}
```

### Understanding OKLCH

`oklch(L C H)` where:
- **L** = Lightness (0-1): 0 = black, 1 = white
- **C** = Chroma (0-0.4): color intensity
- **H** = Hue (0-360): color angle

**Examples**:
```css
/* Warmer background */
--background: oklch(0.985 0.01 75);

/* Cooler tones */
--background: oklch(0.985 0.01 240);

/* More vibrant */
--muted: oklch(0.94 0.05 85);
```

**Tool**: Use [oklch.com](https://oklch.com) to preview colors

---

## Changing Fonts

**File**: `src/routes/__root.tsx`

### Current Fonts
- **Inter** - Body text
- **Caveat** - Handwritten sticker

### To Change Fonts

1. **Find a Google Font**: Browse [fonts.google.com](https://fonts.google.com)

2. **Update the font link** in `__root.tsx`:
   ```tsx
   {
     rel: "stylesheet",
     href: "https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600&display=swap",
   }
   ```

3. **Update CSS** in `src/styles.css`:
   ```css
   @theme inline {
     --font-sans: "Your Font", ui-sans-serif, system-ui, sans-serif;
   }
   ```

---

## Adding New Pages

1. **Create route file**: `src/routes/your-page.tsx`

```tsx
import { createFileRoute } from "@tanstack/react-router";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/your-page")({
  head: () => ({
    meta: [
      { title: "Page Title — Dhruv Patel" },
      { name: "description", content: "Page description" },
    ],
  }),
  component: YourPage,
});

function YourPage() {
  return (
    <main className="mx-auto max-w-xl px-6 pt-32 pb-20 sm:pt-40">
      <h1 className="text-xl font-medium text-foreground">
        Your Page Title
      </h1>
      <p className="mt-4 text-base text-foreground">
        Your content here...
      </p>
      <SiteFooter />
    </main>
  );
}
```

2. **Add to navigation** in `src/components/PillNav.tsx`:
```tsx
const items = [
  { to: "/", label: "home" },
  { to: "/projects", label: "projects" },
  { to: "/skills", label: "skills" },
  { to: "/your-page", label: "your page" }, // Add this
] as const;
```

---

## Changing SEO Metadata

**File**: `src/routes/__root.tsx`

Update meta tags for better SEO:

```tsx
head: () => ({
  meta: [
    { title: "Your Name — Your Title" },
    { name: "description", content: "Your description" },
    { property: "og:title", content: "Your Name — Your Title" },
    { property: "og:description", content: "Your description" },
    { property: "og:image", content: "https://your-site.com/og-image.png" },
    // Update other meta tags...
  ],
}),
```

**Tips**:
- Keep title under 60 characters
- Keep description under 160 characters
- Add an Open Graph image (1200x630px) for social sharing

---

## Testing Changes Locally

After making changes:

```bash
# Development server (auto-reloads)
bun run dev

# Test production build
bun run build
bun run preview
```

Visit http://localhost:8080/ to see your changes.

---

## Need Help?

- **Styling issues?** Check Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
- **Routing issues?** Check TanStack Router: [tanstack.com/router](https://tanstack.com/router)
- **Component help?** Check Radix UI: [radix-ui.com](https://radix-ui.com)

---

**Happy customizing! 🎨**
