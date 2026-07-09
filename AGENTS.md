# portfolio-website

The active app is **`portfolio/`** (Next.js 14, Tailwind 3.4) — `cd portfolio && npm run dev`. `joey-portfolio/` and `joey_portfolio_site_v_1.html` are legacy scaffolds; don't edit them.

UI work follows the shared cross-project standard at `~/Code/hark/docs/web-conventions.md` (tap targets, focus, safe areas, tokens, layout). Intentional exceptions to that standard: the four-surface ChatKit assistant, the fading blur header, hover-decorative arrows/glows, dark-only theme, the full-screen staggered mobile nav, the violet `shadow-glow-*` scale (deliberately warmer than the indigo accent), inline styles in `opengraph-image.tsx` (Satori), and ContactModal's solid `bg-card` override on `.card` (translucent fill is illegible over the backdrop).
