# Mijel.id - Pengepul Minyak Jelantah

Website untuk layanan pengepul minyak jelantah (used cooking oil collector) di Indonesia.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **CMS**: Sanity.io v3
- **Styling**: Tailwind CSS 3+
- **Package Manager**: pnpm
- **Hosting**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Copy `.env.local.example` to `.env.local` and fill in the values:

```bash
cp .env.local.example .env.local
```

4. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## Project Structure

```
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── ui/             # UI components (Button, Card, etc.)
│   ├── seo/            # SEO components (Schema markup)
│   └── whatsapp/       # WhatsApp integration components
├── lib/                # Utility functions and constants
├── sanity/             # Sanity CMS configuration and schemas
├── data/               # Static data (locations, prices, etc.)
└── public/             # Static assets
```

## Features

- 🗺️ **Geo-targeted Pages**: Dynamic location pages for 80+ areas
- 📝 **Blog System**: Content management with Sanity CMS
- 💰 **Price Calculator**: Interactive calculator for estimating prices
- 📱 **WhatsApp Integration**: Direct contact through WhatsApp
- 🚀 **SEO Optimized**: Full schema markup, meta tags, and sitemaps
- ⚡ **Performance**: Lighthouse score 90+ on all metrics

## License

© 2024 Mijel.id. All rights reserved.
