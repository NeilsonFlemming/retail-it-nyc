import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
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
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Retail IT NYC - Retail Technology Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail IT NYC | Retail IT Consulting & Technology Solutions",
    description:
      "Helping retailers develop and implement IT strategies that address today's challenges and tomorrow's opportunities.",
    images: ["/images/og-image.jpg"],
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
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
