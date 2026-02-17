# Retail IT NYC

Marketing website for **Retail IT NYC**, a New York City-based retail IT consulting firm with 25+ years of experience helping retailers develop and implement technology strategies across commerce, supply chain, ecommerce, and brick & mortar operations.

**Live site:** [retailit.nyc](https://retailit.nyc)

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, static export)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Fonts:** Inter (self-hosted via `next/font`)
- **Analytics:** Google Analytics 4

## Project Structure

```
app/
  layout.tsx          # Root layout — metadata, fonts, analytics
  page.tsx            # Home page (statically generated)
  globals.css         # Tailwind imports and custom styles
  sitemap.ts          # Auto-generated sitemap.xml
  robots.ts           # robots.txt configuration
components/
  Header.tsx          # Responsive nav with mobile menu
  Hero.tsx            # Hero section with NYC background
  Services.tsx        # Service cards (Consultation, Custom Dev, Support)
  Differentiators.tsx # Why-choose-us section
  Contact.tsx         # Contact CTA with trust signals
  Footer.tsx          # Site footer
  Analytics.tsx       # GA4 script loader
  ScrollAnimations.tsx# Intersection Observer scroll animations
lib/
  structured-data.ts  # JSON-LD schemas (Organization, ProfessionalService)
public/
  images/             # Optimized image assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID | No |

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## SEO

The site includes:

- Server-rendered HTML via static generation (SSG)
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (`Organization`, `ProfessionalService`, `WebSite`)
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic HTML with proper heading hierarchy
- Descriptive alt text on all images

## Performance

- **Static Generation** — pages are pre-rendered at build time
- **Optimized Images** — hero compressed from 2.7 MB to ~290 KB; all images served via `next/image`
- **Self-hosted Fonts** — Inter loaded via `next/font/google` with zero layout shift
- **Minimal Client JS** — React Server Components by default; only `Header` and `ScrollAnimations` are client components
- **Core Web Vitals targets** — LCP < 2.5 s, CLS < 0.1, FID < 100 ms
