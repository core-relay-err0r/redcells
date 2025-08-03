import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const siteConfig = {
  name: "RedCellAdvisory | Cross-Border Fraud Intelligence",
  description:
    "Paid AI + human intelligence reports for import/export pre-payments. We hunt cross-border fraud before it hits your balance sheet.",
  url: "https://www.redcelladvisory.com",
  ogImage: "/og.png", // Using a relative path is more robust with metadataBase
  author: "RedCellAdvisory",
}

export const metadata: Metadata = {
  // The metadataBase is crucial for resolving relative paths to absolute URLs
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteConfig.name,
    template: `%s | RedCellAdvisory`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
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
    generator: 'v0.dev'
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RedCellAdvisory",
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.png`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@redcell-advisory.com",
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </head>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}
        style={{
          backgroundImage: "radial-gradient(circle at top left, rgba(229, 9, 48, 0.05), transparent 25%)",
        }}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
