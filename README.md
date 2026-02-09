# Mijel.id - Pengepul Minyak Jelantah Terpercaya

Website resmi Mijel.id, platform digital untuk layanan pengumpulan minyak jelantah (used cooking oil) yang berfokus pada keberlanjutan lingkungan dan ekonomi sirkular.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Features

- **Dynamic Geolocation Pages**: Halaman SEO-optimized untuk setiap area layanan (Kecamatan & Kota).
- **Blog System**: Artikel edukasi seputar lingkungan dan energi terbarukan dengan CMS.
- **Interactive Calculator**: Kalkulator estimasi pendapatan dari penjualan minyak jelantah.
- **WhatsApp Integration**: Floating button dan CTA yang terintegrasi langsung ke WhatsApp Admin.
- **Responsive Design**: Tampilan optimal di semua perangkat (Desktop, Tablet, Mobile).
- **SEO Optimized**: Metadata dinamis, Schema Markup (LocalBusiness, Organization, Article), dan Sitemap otomatis.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/mijel1357/mijel.git
    cd mijel
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    Allowed credentials in `.env.local` (see `.env.local.example`).

4.  Run the development server:
    ```bash
    npm run dev
    ```

## Project Structure

```
├── app/                 # App Router pages & layouts
│   ├── (site)/          # Website routes (homepage, about, etc.)
│   ├── studio/          # Sanity Studio embedded route
│   └── api/             # API routes
├── components/          # Reusable UI components
│   ├── layout/          # Header, Footer, Container
│   ├── ui/              # Buttons, Cards, Inputs
│   ├── features/        # Complex features (Calculator)
│   └── seo/             # Schema markup components
├── lib/                 # Utilities, constants, & helpers
├── sanity/              # Sanity configuration & schemas
│   └── schemas/         # Data models (blog, location, price)
└── data/                # Static data seeds (locations.json)
```

## Deployment

The project is optimized for deployment on **Vercel**.

1.  Push to GitHub.
2.  Import project in Vercel.
3.  Add Environment Variables.
4.  Deploy.

## CMS Management

Access the CMS at `/studio` (local) or via the deployed Studio URL to manage:
- Blog Posts
- Location Data
- Prices
- Testimonials
- FAQ

## License

[MIT](LICENSE)
