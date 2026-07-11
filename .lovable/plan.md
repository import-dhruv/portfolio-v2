# Minimal Portfolio Rebuild

Rebuild the site around **Dhruv Patel's content** (from the uploaded zip) using the **visual language of the reference image**: quiet, off-white background, a floating pill nav, a small polaroid-style avatar with a "Hey, I'm..." sticker, and short one-line manifesto statements. Strip out the current heavy AI aesthetic (animated gradients, glowing borders, typing effect, background lines, terminal, dark theme).

## Visual language

- Background: warm off-white `#fcfbf8`, dark neutral text `#1a1a1a`, muted `#6b6b6b`.
- Typography: single sans-serif (Inter), lowercase body copy, normal weight; only the "Hey, I'm Dhruv" sticker and section labels get emphasis.
- Generous whitespace, left-aligned content column (max-w ~640px), no cards, no gradients, no glow.
- Floating pill nav centered at top with subtle border and soft shadow; active pill filled light gray.
- Avatar rendered as a small polaroid: rounded photo with a hand-drawn scribble frame (SVG) and a small "Hey, I'm Dhruv 👋" sticker rotated slightly, pinned above it.

## Pages / routes

Three routes matching the reference nav:

- `/` — home
- `/work` — projects list
- `/sidekicks` — skills + tools

Each is its own TanStack route file with unique `head()` metadata. Shared floating pill nav + footer live in a pathless layout (`src/routes/_layout.tsx`) or the root `__root.tsx`.

## Content mapping (from the zip)

**Home (`/`)** — polaroid avatar + sticker, then short lines:
- "i build intelligent systems."
- "i work on models that think."
- "i help data become decisions."
- "i believe good engineering removes noise."
- "i think there are too many tools."
- "i think there should be fewer.*"
- footnote: "*better ones."
- "Let's work together!" + `dhruvvcodess@gmail.com`
- GitHub + LinkedIn icons (from HeroSection.tsx URLs)

**Work (`/work`)** — minimal list (not cards), one row per project with title, one-line description, small tag row, and text links to GitHub / demo. Projects: MidShield, Musila, Todo Agent, DataGuy (from `ProjectsSection.tsx`).

**Sidekicks (`/sidekicks`)** — minimal grouped list of tools/skills pulled from `SkillsSection.tsx` (Languages, ML/AI, Backend, Tools). Rendered as plain text groups, no progress bars or badges.

## Files to change

- `src/styles.css` — replace tokens with off-white light theme; remove dark-mode-first values; add Inter via `<link>` in `__root.tsx` head; remove Jersey 10 / animated gradient utilities.
- `src/routes/__root.tsx` — set real title/description ("Dhruv Patel — AI Engineer"), og/twitter tags; add Inter `<link>` tags; light background.
- `src/routes/index.tsx` — new home content per above.
- `src/routes/work.tsx` — new route, projects list.
- `src/routes/sidekicks.tsx` — new route, tools/skills.
- `src/components/PillNav.tsx` — floating pill nav using `<Link>` from `@tanstack/react-router` with active-state styling via `activeProps`.
- `src/components/Polaroid.tsx` — avatar with scribble SVG frame + sticker.
- `src/components/Footer.tsx` (small) — email + socials, reused on each page.
- Avatar image: generate a friendly headshot illustration into `src/assets/avatar.jpg` (Dhruv doesn't have a photo in the zip).

Nothing else from the old codebase (BackgroundLines, HoverBorderGradient, InteractiveTerminal, Navbar, HeroSection, etc.) is carried over — the new design is deliberately quieter.

## Technical notes

- TanStack Start file-based routing; each route file exports `createFileRoute` with its own `head()` for SEO.
- Pill nav uses `Link`'s `activeProps={{ className: "bg-muted" }}` for the filled active state; exact match on `/`.
- No dark mode toggle (reference is single-tone light).
- Semantic tokens only — no hardcoded hex in components; palette lives in `src/styles.css`.
