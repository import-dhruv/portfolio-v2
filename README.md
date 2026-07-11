# Portfolio — Dhruv Patel

A minimal, elegant portfolio website built with modern web technologies. Features a quiet, off-white aesthetic with a floating pill navigation, polaroid-style avatar, and clean typography.

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) - Modern React framework with file-based routing
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens
- **Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd "Portfolio Reimagined"
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

## 🛠️ Development

Start the development server:

```bash
bun run dev
```

The site will be available at `http://localhost:8080/`

## 🏗️ Building

Build the project for production:

```bash
bun run build
```

Preview the production build:

```bash
bun run preview
```

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Install Vercel CLI** (optional):
   ```bash
   bun add -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or simply push to your connected GitHub repository and Vercel will automatically deploy.

### Configuration

The project includes a `vercel.json` configuration file that specifies:
- Build command: `bun run build`
- Output directory: `.output/public`

No additional configuration is needed!

## 📁 Project Structure

```
Portfolio Reimagined/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── ui/         # Radix UI components
│   │   ├── PillNav.tsx # Navigation component
│   │   ├── Polaroid.tsx # Avatar component
│   │   └── SiteFooter.tsx # Footer component
│   ├── lib/            # Utilities and helpers
│   ├── routes/         # File-based routes
│   │   ├── __root.tsx  # Root layout
│   │   ├── index.tsx   # Home page
│   │   ├── projects.tsx # Projects page
│   │   └── skills.tsx  # Skills page
│   ├── router.tsx      # Router configuration
│   ├── server.ts       # Server entry point
│   └── styles.css      # Global styles and design tokens
├── public/             # Static files
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## 🎨 Design System

The portfolio uses a minimal, warm aesthetic:

- **Background**: Warm off-white (`oklch(0.985 0.005 85)`)
- **Text**: Dark neutral (`oklch(0.22 0.01 60)`)
- **Typography**: Inter font family
- **Components**: Floating pill navigation, polaroid avatar, clean lists

## 🔧 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run build:dev` - Build in development mode
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier

## 📝 Content Pages

- **Home (`/`)**: Introduction with manifesto statements
- **Projects (`/projects`)**: Showcase of selected projects with links
- **Skills (`/skills`)**: Technologies and tools used

## 🔗 Links

- **Email**: dhruvvcodess@gmail.com
- **GitHub**: [@import-dhruv](https://github.com/import-dhruv)
- **LinkedIn**: [Dhruv Patel](https://www.linkedin.com/in/dhruv-patel-2562bb369/)

## 📄 License

This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history to maintain project sync.

---

Built with ❤️ by Dhruv Patel
