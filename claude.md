# RetailIT.nyc - Project Context

## Business Overview

RetailIT NYC is a retail IT consulting firm based in New York City. The company specializes in helping retailers develop and implement IT strategies across commerce, supply chain, wholesale, ecommerce, and brick-and-mortar operations. With over 25 years of retail IT experience, the firm provides consultation, custom development, and 24/7 support services.

**Contact:** support@retailit.nyc
**Domain:** retailit.nyc

## Core Services

1. **Consultation** - Strategic retail IT consulting across commerce strategy, supply chain, wholesale, ecommerce, and brick & mortar ecosystems.
2. **Custom Development** - Tailored integrations between systems (POS, OMS, CRM, ecommerce) to match specific business cases.
3. **Support** - 24/7 support for POS, e-commerce, order management, and CRM systems.

## Key Differentiators

- **Collaborative Approach** - Deep client partnerships to tailor solutions to specific needs.
- **Native and Integrated Solutions** - Global network of strategic partners; diverse strategic, functional, and technical expertise focused exclusively on retail IT.
- **On-Time, On Budget** - Agile project management ensuring projects stay within budget and launch on schedule.

## Brand Positioning

"Experts in Commerce" - Unified Commerce specialists helping retailers simplify selling across all channels (brick & mortar, online, wholesale).

## Tech Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Inter (self-hosted via next/font)
- **Analytics:** Google Analytics 4 via Next.js Script
- **Images:** Optimized via next/image (WebP/AVIF, responsive srcsets)
- **Deployment:** Static Generation (SSG) for maximum performance

## Design Tokens

### Colors
- Primary (Navy): `#0F172A`
- Accent (Blue): `#3B82F6`
- Accent Hover: `#2563EB`
- Secondary Accent (Emerald): `#10B981`
- Background: `#FFFFFF`
- Background Alt: `#F8FAFC`
- Text Primary: `#0F172A`
- Text Secondary: `#475569`
- Text Muted: `#94A3B8`
- Border: `#E2E8F0`

### Typography
- Font Family: Inter
- Headings: 700-800 weight
- Body: 400-500 weight

## Project Structure

```
app/
  layout.tsx          # Root layout with metadata, fonts, analytics
  page.tsx            # Home page (SSG)
  globals.css         # Tailwind imports + custom styles
  sitemap.ts          # Dynamic sitemap generation
  robots.ts           # robots.txt configuration
components/
  Header.tsx          # Responsive nav with mobile menu (client component)
  Footer.tsx          # Site footer (server component)
  Hero.tsx            # Hero section (server component)
  Services.tsx        # Service cards (server component)
  Differentiators.tsx # Why choose us section (server component)
  Contact.tsx         # Contact CTA section (server component)
lib/
  metadata.ts         # Shared SEO metadata configuration
  structured-data.ts  # JSON-LD schema definitions
public/
  images/             # Optimized image assets
```

## Conventions

- Use React Server Components by default; only add `"use client"` when interactivity is required.
- All components use TypeScript with explicit prop types.
- Use semantic HTML elements (section, article, nav, header, footer, main).
- All images must have descriptive alt text.
- Follow mobile-first responsive design.
- Tailwind classes ordered: layout > sizing > spacing > typography > colors > effects.
- No inline styles; all styling through Tailwind utility classes.
- Performance budget: LCP < 2.5s, CLS < 0.1, FID < 100ms.

## SEO Requirements

- Unique, descriptive title and meta description.
- Open Graph and Twitter Card meta tags.
- JSON-LD structured data (Organization, LocalBusiness, ProfessionalService).
- Auto-generated sitemap.xml and robots.txt.
- Canonical URLs on all pages.
- Proper heading hierarchy (single h1 per page).
