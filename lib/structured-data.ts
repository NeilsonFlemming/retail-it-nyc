export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://retailit.nyc/#organization",
        name: "Retail IT NYC",
        url: "https://retailit.nyc",
        logo: {
          "@type": "ImageObject",
          url: "https://retailit.nyc/images/logo.png",
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "support@retailit.nyc",
          contactType: "customer service",
          availableLanguage: "English",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "New York",
          addressRegion: "NY",
          addressCountry: "US",
        },
        sameAs: [],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://retailit.nyc/#service",
        name: "Retail IT NYC",
        description:
          "Retail IT consulting firm helping retailers develop and implement technology strategies across commerce, supply chain, ecommerce, and brick & mortar operations.",
        url: "https://retailit.nyc",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "New York",
          addressRegion: "NY",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.7128,
          longitude: -74.006,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Retail IT Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Consultation",
                description:
                  "Strategic retail IT consulting across commerce strategy, supply chain, wholesale, ecommerce, and brick & mortar ecosystems.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Development",
                description:
                  "Tailored system integrations and custom development services for retail technology platforms.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Support",
                description:
                  "24/7 support for POS, e-commerce, order management, and CRM systems.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://retailit.nyc/#website",
        url: "https://retailit.nyc",
        name: "Retail IT NYC",
        publisher: {
          "@id": "https://retailit.nyc/#organization",
        },
      },
    ],
  };
}
