import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SALINAS | Yard Cleaning, Handyman & Hauling Services",
  description:
    "Professional yard cleaning, handyman repairs, and junk removal services across Central New Mexico. Serving Los Lunas, Albuquerque, Rio Rancho, and more.",
  generator: "v0.app",
  keywords: "junk removal, handyman services, yard cleaning, hauling, Albuquerque, Los Lunas, Rio Rancho",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SALINAS Yard Cleaning, Handyman & Hauling Services",
            image: "/images/salinas.jpg",
            description: "Professional yard cleaning, handyman repairs, and junk removal services",
            telephone: "505-619-3506",
            email: "salinasbusiness2015@gmail.com",
            areaServed: ["Los Lunas", "Albuquerque", "Rio Rancho", "Belen", "Bernalillo", "Eldorado at Santa Fe"],
            priceRange: "$$",
            url: "https://salinas.vercel.app",
          })}
        </script>
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
