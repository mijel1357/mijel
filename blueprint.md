FILE 2: BLUEPRINT (Prompt Step-by-Step untuk Claude Code)
STEP 1: Init Project
text

Baca CLAUDE.md untuk semua rules.

Init project dari nol:

1. Create Next.js 14+ project:
   - App Router, TypeScript strict, Tailwind CSS, ESLint, pnpm

2. Install dependencies:
   - next-sanity @sanity/image-url @sanity/vision sanity
   - lucide-react clsx tailwind-merge @vercel/analytics

3. Setup tailwind.config.ts dengan colors dari CLAUDE.md design system

4. Setup globals.css base styles

5. Create .env.local.example:
   NEXT_PUBLIC_SANITY_PROJECT_ID=
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   SANITY_API_TOKEN=
   NEXT_PUBLIC_SITE_URL=https://mijel.id
   NEXT_PUBLIC_WHATSAPP_NUMBER=62XXXXXXXXXXX

6. Create lib/constants.ts:
   - Site name, URL, description
   - WhatsApp number from env
   - Default SEO values
   - Navigation structure

7. Create lib/utils.ts:
   - cn() className merge
   - formatCurrency() Rupiah formatter
   - generateWhatsAppLink(message) WA link generator
   - slugify()

8. Setup next.config.js:
   - Image domains: cdn.sanity.io

9. Create .gitignore, init git

Foundation only, no components yet.
STEP 2: Sanity CMS Setup
text

Baca CLAUDE.md.

Setup Sanity CMS:

1. Init Sanity di /sanity folder

2. Create schemas:

   a. blog.ts:
      title, slug, excerpt, content (portable text), featuredImage,
      category (edukasi|cara-jual|faq|regulasi|industri), tags,
      publishedAt, seo {metaTitle, metaDescription, focusKeyword},
      faq [{question, answer}], relatedPosts

   b. location.ts:
      name, slug, type (kecamatan|kota|provinsi), parentLocation (ref),
      city, province, description, content, nearbyLocations (ref[]),
      kelurahan[], postalCodes[], geoCoordinates, seo, faq[], isActive

   c. price.ts:
      type (rumahan|restoran|industri|premium), pricePerKg, pricePerLiter,
      updatedAt, notes

   d. testimonial.ts:
      name, role, location, content, rating, image

   e. faq.ts:
      question, answer, category, order

   f. siteSettings.ts:
      siteName, siteDescription, whatsappNumber, email, address, socialMedia

3. Register schemas, configure sanity.config.ts

4. Create lib/sanity/client.ts - Sanity client
5. Create lib/sanity/queries.ts - All GROQ queries
6. Create lib/sanity/types.ts - TypeScript types
7. Create lib/sanity/image.ts - Image URL builder
8. Setup Sanity Studio route at /studio
STEP 3: Layout & Core Components
text

Baca CLAUDE.md.

Build layout and core components:

LAYOUT:
1. components/layout/Header.tsx
   - Sticky, logo, desktop nav with dropdowns, mobile hamburger
   - CTA button "Jual Sekarang" (WhatsApp)

2. components/layout/Footer.tsx
   - 4 columns: About, Layanan, Area, Info
   - Bottom bar copyright

3. components/layout/Breadcrumb.tsx
   - Props: items[{label, href?}], includes BreadcrumbList schema

4. components/layout/Container.tsx
   - Props: size (default|narrow|wide), children

5. components/layout/Section.tsx
   - Props: bg (white|gray|primary), children

6. app/(site)/layout.tsx
   - Header + Footer + WhatsApp float + Analytics

UI COMPONENTS:
7. components/ui/Button.tsx - variants: primary, secondary, outline, whatsapp
8. components/ui/Card.tsx
9. components/ui/CTABox.tsx - reusable CTA with WhatsApp
10. components/ui/StepCard.tsx - numbered step cards
11. components/ui/FeatureCard.tsx - icon + title + desc
12. components/ui/PriceTable.tsx - responsive price table
13. components/ui/FAQAccordion.tsx - animated, accessible, no dependencies
14. components/ui/TestimonialCard.tsx
15. components/ui/ServiceCard.tsx

SEO COMPONENTS:
16. components/seo/SchemaMarkup.tsx - generic JSON-LD injector
17. components/seo/LocalBusinessSchema.tsx
18. components/seo/ArticleSchema.tsx
19. components/seo/FAQSchema.tsx
20. lib/seo.ts - generateMetadata helper

WHATSAPP:
21. components/whatsapp/WhatsAppFloat.tsx - floating button
22. components/whatsapp/WhatsAppCTA.tsx - inline CTA button
STEP 4: Location Data
text

Baca CLAUDE.md.

Create data/locations.json dengan semua lokasi.

Per entry format:
{
  "id": "cengkareng",
  "name": "Cengkareng",
  "slug": "pengepul-minyak-jelantah-di-cengkareng",
  "type": "kecamatan",
  "city": "Jakarta Barat",
  "citySlug": "pengepul-minyak-jelantah-di-jakarta-barat",
  "province": "DKI Jakarta",
  "description": "[UNIQUE 150+ kata tentang layanan di lokasi ini]",
  "kelurahan": ["Cengkareng Barat", "Cengkareng Timur", ...],
  "postalCodes": ["11710", "11720"],
  "nearbyIds": ["kalideres", "kembangan"],
  "landmarks": "Bandara Soekarno-Hatta",
  "metaTitle": "Pengepul Minyak Jelantah di Cengkareng | Mijel.id",
  "metaDescription": "Jual minyak jelantah di Cengkareng...",
  "faqs": [
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."}
  ],
  "isActive": true
}

INCLUDE:
- Jakarta Barat: 8 kecamatan
- Jakarta Pusat: 8 kecamatan
- Jakarta Selatan: 10 kecamatan
- Jakarta Timur: 10 kecamatan
- Jakarta Utara: 6 kecamatan
- Hub cities: JakBar, JakPus, JakSel, JakTim, JakUt, Bogor, Depok, Tangerang, TangSel, Bekasi
- Bogor: 5 area
- Bekasi: 5 area
- Tangerang: 5 area
- Depok: 4 area
- Kota besar: Bandung, Surabaya, Semarang, Yogyakarta, Medan, Makassar, Malang, Solo, Palembang, Denpasar

Total: ~80 entries

RULES:
- Every description MUST be unique
- Every FAQ answer must mention the location name
- nearbyIds must be geographically accurate
- kelurahan must be accurate per kecamatan
- metaTitle max 60 chars
- metaDescription max 160 chars
STEP 5: Homepage
text

Baca CLAUDE.md.

Build homepage at app/(site)/page.tsx

Sections:
1. Hero - H1, subtitle, 2 CTAs (WhatsApp + harga), trust badges
2. Harga widget - current prices, update date, link to full page
3. Cara kerja - 4 steps with StepCard
4. Layanan - 4 ServiceCards (rumahan, restoran, hotel, industri)
5. Mengapa Mijel.id - 6 FeatureCards
6. Area layanan - grid of cities linking to hub pages
7. Testimoni - 3 TestimonialCards
8. Artikel terbaru - 3 blog cards
9. FAQ - 6 items with FAQAccordion + schema
10. CTA final - WhatsApp + phone

Schema: Organization + LocalBusiness + WebSite + FAQ
Use all components from Step 3.
Hardcode data for now (prices, testimonials, posts).
STEP 6: Geo Pages
text

Baca CLAUDE.md.

Build dynamic geo pages at app/(site)/[slug]/page.tsx

Logic:
- generateStaticParams() reads data/locations.json, returns all slugs
- generateMetadata() from location data
- Different layout for type "kecamatan" vs type "kota"

KECAMATAN LAYOUT:
1. Breadcrumb: Home > Area Layanan > [City] > [Kecamatan]
2. Hero - H1: "Pengepul Minyak Jelantah di [Name]", CTA
3. Description - unique from data
4. Layanan - 4 service cards
5. Cara jual - 4 steps
6. Harga - PriceTable + CTA
7. Area dilayani - kelurahan list
8. FAQ - from data + schema
9. Area terdekat - cards linking to nearby locations
10. Artikel terkait - 3 blog cards
11. CTA final

KOTA/HUB LAYOUT:
1. Breadcrumb: Home > Area Layanan > [City]
2. Hero
3. Description (longer overview)
4. Grid of all kecamatan in this city with links
5. Harga, cara jual, FAQ, CTA

Schema per page: LocalBusiness + Service + FAQ + Breadcrumb
All pages SSG.
Every page content must be unique (pulled from data).
STEP 7: Blog System
text

Baca CLAUDE.md.

Build blog:

1. app/(site)/blog/page.tsx
   - Blog listing, category filter tabs, grid layout
   - Blog cards with image, category, title, excerpt, date

2. app/(site)/blog/[slug]/page.tsx
   - Blog detail with breadcrumb, TOC, portable text, FAQ, related posts
   - Schema: Article + FAQ + Breadcrumb

3. Components:
   - components/blog/BlogCard.tsx
   - components/blog/TableOfContents.tsx
   - components/blog/ArticleContent.tsx (portable text renderer)

Data from Sanity. For now create dummy data in data/blog-posts.json
with 3 posts so pages render.
STEP 8: Harga + Kalkulator
text

Baca CLAUDE.md.

1. app/(site)/harga-minyak-jelantah/page.tsx
   - H1, price table, mini calculator, pricing factors, tips, FAQ
   - Data from data/prices.json
   - Schema: Product + FAQ + Breadcrumb

2. app/(site)/kalkulator-minyak-jelantah/page.tsx
   - "use client" - interactive calculator
   - Inputs: source type, quantity, unit (L/kg), quality
   - Realtime output: price per unit, total estimate
   - CTA: WhatsApp with auto-filled message
   - Monthly estimator section
   - Schema: WebApplication + FAQ
STEP 9: Area Layanan Master Hub
text

Baca CLAUDE.md.

Build app/(site)/area-layanan/page.tsx

- H1: "Area Layanan Pengepul Minyak Jelantah Mijel.id"
- Client-side search filter for locations
- Grouped by city: each city shows its kecamatan with links
- Kota besar section with "Segera Hadir" badges
- CTA for unlisted locations
- Data from locations.json
STEP 10: Static Pages
text

Baca CLAUDE.md.

Build:
1. /tentang/ - About page with company story, stats, values
2. /mitra/ - Partner program, benefits, registration form → WhatsApp
3. /kontak/ - Contact info, WhatsApp, email, form
4. /privacy-policy/ - Privacy policy
5. /terms/ - Terms of service

All with breadcrumb, schema, responsive.
STEP 11: Technical SEO
text

Baca CLAUDE.md.

1. app/sitemap.ts - dynamic sitemap with all pages, proper priority/changefreq
2. app/robots.ts - allow public, disallow /studio /api /_next
3. app/not-found.tsx - custom 404 with helpful links
4. app/api/revalidate/route.ts - Sanity webhook for ISR
STEP 12: Blog Content Seed
text

Baca CLAUDE.md.

Create 7 full blog articles in data/blog-posts.json (or seed to Sanity).

Each article must be REAL content, not placeholder:
1. "Panduan Lengkap Minyak Jelantah" - 3000+ kata
2. "Apa Itu Minyak Jelantah" - 1500+ kata
3. "Bahaya Minyak Jelantah" - 1500+ kata
4. "Cara Menyimpan Minyak Jelantah" - 1500+ kata
5. "Cara Menyaring Minyak Jelantah" - 1500+ kata
6. "Cara Jual Minyak Jelantah" - 2000+ kata
7. "Berapa Kali Minyak Goreng Boleh Dipakai" - 1200+ kata

Each with: full content, FAQ section, internal links, CTA boxes,
proper headings, natural Bahasa Indonesia.
STEP 13: Deploy & Audit
text

Baca CLAUDE.md.

1. Verify package.json scripts: dev, build, start, lint, type-check
2. Create vercel.json with security headers
3. Create README.md

4. Run audit:
   - pnpm lint → 0 errors
   - pnpm type-check → 0 errors
   - pnpm build → success

5. Check:
   - All pages have unique meta title + description
   - All pages have schema markup
   - All pages have breadcrumb (except homepage)
   - All geo pages link to hub + nearby + blog + harga
   - Sitemap includes all pages
   - No broken internal links
   - All WhatsApp links work
   - Mobile responsive all pages

6. Report total pages generated (target: 100+)
RINGKASAN
text

FILE DI PROJECT:
├── CLAUDE.md          ← Rules saja (behavior, standards, constraints)
│
└── BLUEPRINT:         ← Prompt execution (step-by-step di chat Claude Code)
    ├── STEP 1:  Init project
    ├── STEP 2:  Sanity setup
    ├── STEP 3:  Layout + components
    ├── STEP 4:  Location data (80 entries)
    ├── STEP 5:  Homepage
    ├── STEP 6:  Geo pages (dynamic)
    ├── STEP 7:  Blog system
    ├── STEP 8:  Harga + Kalkulator
    ├── STEP 9:  Area layanan hub
    ├── STEP 10: Static pages
    ├── STEP 11: Technical SEO
    ├── STEP 12: Blog content seed
    └── STEP 13: Deploy + audit

TOTAL OUTPUT: 100+ halaman, deploy-ready