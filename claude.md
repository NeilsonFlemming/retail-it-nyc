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

- **Framework:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Playfair Display (serif, headings) + DM Sans (sans-serif, body) via next/font
- **Analytics:** Google Analytics 4 via Next.js Script
- **Images:** Optimized via next/image (WebP/AVIF, responsive srcsets)
- **Rendering:** Static Generation (SSG) for maximum performance

## Design Direction: Luxury / Refined

**Aesthetic:** Dark-dominant palette with warm gold accents. Classical serif authority meets modern sans clarity. Think: a high-end consulting firm's office at night -- warm lighting, dark wood, gold details.

**Memorable element:** The contrast between a rich, dark atmosphere and crisp gold typography.

### Colors
- Background Primary (Rich Black): `#0A0A0B`
- Background Elevated (Charcoal): `#141416`
- Background Subtle: `#1C1C1F`
- Gold Accent: `#C9A84C`
- Gold Light (hover): `#E8D48B`
- Gold Muted: `rgba(201, 168, 76, 0.2)`
- Text Primary (Warm White): `#F5F0E8`
- Text Secondary (Warm Gray): `#9A958A`
- Text Tertiary (Dim): `#5C5850`
- Border: `#2A2A2E`
- Border Gold: `rgba(201, 168, 76, 0.3)`

### Typography
- **Display/Headings:** Playfair Display (serif, 400/700 weight)
- **Body:** DM Sans (sans-serif, 400/500/700 weight)

### Atmosphere
- Subtle noise/grain texture overlay on body (2.5% opacity) for analog warmth
- Radial gold glows behind key content at very low opacity
- Geometric grid pattern in Contact section background
- Gold gradient dividers (fade from transparent via gold to transparent)

### Motion
- Hero entrance: staggered CSS fadeUp animations (150ms delays)
- Gold decorative line: expandFromCenter keyframe
- Scroll reveals: 16px translateY, 0.8s duration, IntersectionObserver
- Hover states: 500ms transitions, gold border glow on cards
- No bouncy or playful animations -- deliberate and slow

## Project Structure

```
app/
  layout.tsx          # Root layout -- fonts, metadata, skip link, analytics
  page.tsx            # Home page (SSG)
  globals.css         # Tailwind theme, colors, noise texture, keyframes
  sitemap.ts          # Dynamic sitemap generation
  robots.ts           # robots.txt configuration
components/
  Header.tsx          # Responsive nav, transparent-to-dark scroll (client)
  Hero.tsx            # Hero with NYC background, serif headline, gold accents
  Services.tsx        # 3 dark cards with gold icons and hover glow
  Differentiators.tsx # Alternating image/text with gold step numbers
  Contact.tsx         # CTA with geometric grid, gold trust signals
  Footer.tsx          # Dark footer with border separation
  Analytics.tsx       # GA4 script loader
  ScrollAnimations.tsx# IntersectionObserver scroll animations (client)
lib/
  structured-data.ts  # JSON-LD schemas (Organization, ProfessionalService)
public/
  images/             # Optimized image assets, OG image
```

## Conventions

- Use React Server Components by default; only add `"use client"` when interactivity is required.
- All components use TypeScript with explicit prop types.
- Use semantic HTML elements (section, article, nav, header, footer, main).
- All images must have descriptive alt text.
- Follow mobile-first responsive design.
- Use `font-display` class for headings, default `font-body` for everything else.
- Headings: `font-bold` for h1/h2, `font-semibold` for h3.
- Gold accent for eyebrow text, decorative lines, icons, and interactive elements.
- Warm white (`text-warm-white`) for primary text, warm gray (`text-warm-gray`) for body.
- Performance budget: LCP < 2.5s, CLS < 0.1, FID < 100ms.

## SEO Requirements

- Unique, descriptive title and meta description.
- Open Graph and Twitter Card meta tags with branded OG image.
- JSON-LD structured data (Organization, ProfessionalService, WebSite).
- Auto-generated sitemap.xml and robots.txt.
- Canonical URLs on all pages.
- Proper heading hierarchy (single h1 per page).
- Skip-to-content link for accessibility.
