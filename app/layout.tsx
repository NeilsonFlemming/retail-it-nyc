import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://retailit.nyc"),
  title: {
    default: "Retail IT NYC | Retail IT Consulting & Technology Solutions",
    template: "%s | Retail IT NYC",
  },
  description:
    "Retail IT NYC is a New York City-based IT consulting firm helping retailers develop and implement technology strategies across commerce, supply chain, ecommerce, and brick & mortar operations.",
  keywords: [
    "retail IT consulting",
    "retail technology",
    "POS systems",
    "ecommerce consulting",
    "unified commerce",
    "retail IT support",
    "NYC IT consulting",
    "retail custom development",
    "order management systems",
    "CRM integration",
  ],
  authors: [{ name: "Retail IT NYC" }],
  creator: "Retail IT NYC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://retailit.nyc",
    siteName: "Retail IT NYC",
    title: "Retail IT NYC | Retail IT Consulting & Technology Solutions",
    description:
      "Helping retailers develop and implement IT strategies that address today's challenges and tomorrow's opportunities. 25+ years of retail IT experience.",
  },
  twitter: {
    card: "summary",
    title: "Retail IT NYC | Retail IT Consulting & Technology Solutions",
    description:
      "Helping retailers develop and implement IT strategies that address today's challenges and tomorrow's opportunities.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://retailit.nyc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-void text-stone">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-void focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <Analytics />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
