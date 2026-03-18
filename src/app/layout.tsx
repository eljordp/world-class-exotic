import type { Metadata } from "next";
import type { Viewport } from "next";
import MobileCTA from "@/components/MobileCTA";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512" },
    ],
  },
  title: "World Class Exotic | Luxury & Exotic Car Rentals in Los Angeles & Bay Area",
  description:
    "Premium exotic and luxury car rentals in Los Angeles and the Bay Area. Lamborghini, Rolls-Royce, Ferrari, McLaren, Mercedes & more. Daily rentals, chauffeur service, weddings & events.",
  keywords:
    "exotic car rental Los Angeles, luxury car rental Bay Area, Lamborghini rental LA, Rolls Royce rental, exotic car rental near me, supercar rental California",
  openGraph: {
    title: "World Class Exotic | Luxury & Exotic Car Rentals",
    description:
      "Premium exotic and luxury car rentals in Los Angeles and the Bay Area. Lamborghini, Rolls-Royce, Ferrari, McLaren & more.",
    url: "https://worldclassexotic.com",
    siteName: "World Class Exotic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Class Exotic | Luxury & Exotic Car Rentals",
    description:
      "Premium exotic and luxury car rentals in Los Angeles and the Bay Area.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRental",
              name: "World Class Exotic",
              description:
                "Premium exotic and luxury car rentals in Los Angeles and the Bay Area",
              url: "https://worldclassexotic.com",
              telephone: "+1-XXX-XXX-XXXX",
              areaServed: [
                {
                  "@type": "City",
                  name: "Los Angeles",
                  "@id": "https://www.wikidata.org/wiki/Q65",
                },
                {
                  "@type": "Place",
                  name: "San Francisco Bay Area",
                },
              ],
              priceRange: "$$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "08:00",
                closes: "22:00",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
<MobileCTA />
      </body>
    </html>
  );
}
