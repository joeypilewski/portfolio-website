# Joey Pilewski Portfolio

Modern Next.js portfolio site with App Router, TypeScript, and Tailwind CSS.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── globals.css         # Global styles + Tailwind
│   ├── projects/
│   │   ├── page.tsx        # Projects list
│   │   └── [slug]/
│   │       └── page.tsx    # Project detail pages
│   ├── experience/
│   │   └── page.tsx        # Experience page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/             # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── Card.tsx
│   ├── ProjectCard.tsx
│   ├── ExperienceItem.tsx
│   ├── SkillGroup.tsx
│   └── index.ts
└── content/                # Content data
    ├── projects.ts
    ├── experience.ts
    └── skills.ts
```

## Customization

### Update Your Info
1. Replace `YOUR_LINKEDIN` and `YOUR_GITHUB` placeholders in components
2. Update email in contact page and hero
3. Add your resume PDF to `/public` and link it

### Add Projects
Edit `src/content/projects.ts` to add/modify projects:

```typescript
{
  slug: "my-project",
  title: "My Project",
  tagline: "Short tagline",
  summary: "Longer description...",
  bullets: ["Feature 1", "Feature 2"],
  tags: ["React", "TypeScript"],
  links: { github: "https://..." },
  featured: true, // Show on homepage
}
```

## Optional Enhancements

- [ ] **Light/Dark Toggle**: Add theme provider with `next-themes`
- [ ] **Analytics**: Add Vercel Analytics or Plausible
- [ ] **Sitemap/Robots**: Use `next-sitemap` package
- [ ] **OG Image Generation**: Use `@vercel/og` for dynamic social images
- [ ] **MDX Case Studies**: Add `@next/mdx` for rich project write-ups
- [ ] **Contact Form**: Add Formspree or Resend for email submissions
- [ ] **Blog Section**: Extend with `/blog` route and MDX posts

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (via next/font)
- **Deployment**: Vercel (recommended)

## Deploy

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_GITHUB/portfolio)

Or manually:

```bash
npm run build
# Deploy .next folder to any Node.js host
```

## License

MIT
