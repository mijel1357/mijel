## Identity
- Brand: Mijel.id
- Domain: https://mijel.id
- Business: Pengepul Minyak Jelantah (Used Cooking Oil Collector)
- Tagline: "Jual Minyak Jelantah, Kami Jemput & Bayar Tunai"

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript (strict mode)
- Sanity.io v3 (CMS)
- Tailwind CSS 3+
- Vercel (hosting)
- pnpm (package manager)

## Code Rules
- TypeScript strict mode, NEVER use `any`
- Server components by default, `"use client"` only when needed
- Named exports for components, default export only for page.tsx
- Use next/image for all images
- Use next/font/google for fonts (Inter)
- Use clsx + tailwind-merge for className utility (cn function)
- No inline styles, Tailwind only
- No external UI libraries, pure Tailwind components
- Every component must have TypeScript interface/type for props
- Handle loading and error states
- Comment complex logic only

## Design System
### Colors
- Primary: green-600 (#16a34a), dark: green-700, light: green-500
- Secondary: amber-500 (#f59e0b), dark: amber-600
- Accent: sky-500 (#0ea5e9)
- Neutrals: gray-900 to gray-50

### Typography
- Font: Inter
- H1: text-3xl md:text-4xl lg:text-5xl font-bold
- H2: text-2xl md:text-3xl font-bold
- H3: text-xl md:text-2xl font-semibold
- Body: text-base leading-relaxed

### Layout
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Section padding: py-12 md:py-16 lg:py-20
- Cards: bg-white rounded-xl shadow-sm border border-neutral-200 p-6
- Buttons primary: bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition
- WhatsApp button: bg-[#25D366] text-white rounded-full

## SEO Rules
- Every page MUST have unique meta title (max 60 char)
- Every page MUST have unique meta description (max 160 char)
- Every page MUST have exactly 1 H1
- Every page MUST have schema markup JSON-LD
- Every page MUST have breadcrumb (except homepage)
- Every page MUST have canonical tag (self-referencing)
- Every page MUST have at least 3 internal links
- Every page MUST have CTA (WhatsApp or form)
- All images MUST have descriptive alt text
- Use descriptive anchor text, NEVER "klik di sini"

## URL Patterns
- Geo pages: /pengepul-minyak-jelantah-di-[lokasi]/
- Blog: /blog/[slug]/
- All lowercase, kebab-case
- No trailing slashes except root

## Content Language
- Bahasa Indonesia, natural, mudah dipahami
- Use "Anda" (capital) for reader, "kami" for Mijel.id
- Short paragraphs (2-3 sentences max)
- No duplicate content between pages

## WhatsApp Integration
- Number from env: NEXT_PUBLIC_WHATSAPP_NUMBER
- Floating button on all pages, bottom-right, z-50
- Auto-message varies per page context

## Performance
- Target Lighthouse 90+ all metrics
- Static generation (SSG) for all geo pages and blog posts
- ISR revalidate: 3600 for dynamic content
- Lazy load below-fold content
- Minimize client-side JavaScript

## Git
- Commits: feat: / fix: / content: / chore:
- Never commit .env files

## Do Not
- No `any` types
- No pages without meta tags
- No pages without schema markup
- No duplicate content across geo pages
- No hardcoded WhatsApp numbers
- No inline styles
- No images without alt text
- No pages without breadcrumb (except homepage)
- No skipping heading levels