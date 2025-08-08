import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poppins, Playfair_Display, Roboto, Montserrat, Nunito } from "next/font/google"
import { ThemeProvider } from "@/contexts/theme-context"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-roboto" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata: Metadata = {
  title: {
    default: "Ravindra High School |  Waidhan, Singrauli",
    template: "%s | Ravindra High School",
  },
  description:
    "Ravindra High School in Waidhan, Singrauli provides quality education with NCERT curriculum, experienced faculty, and modern facilities for Classes I-X.",
  keywords:
    "Ravindra High School, RHS Waidhan, School Singrauli, Education Madhya Pradesh, NCERT curriculum, Classes I-X",
  manifest: "/site.webmanifest",
  themeColor: "#4f46e5",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "RHS Waidhan",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.ico",
      },
    ],
  },
  verification: {
    google: "verification_token",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rhswaidhan.com/",
    siteName: "Ravindra High School",
    title: "Ravindra High School | Quality Education in Waidhan, Singrauli",
    description:
      "Ravindra High School in Waidhan, Singrauli provides quality education with NCERT curriculum, experienced faculty, and modern facilities for Classes I-X.",
    images: [
      {
        url: "https://rhswaidhan.com/images/rhs-logo.webp",
        width: 800,
        height: 600,
        alt: "Ravindra High School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravindra High School | Quality Education in Waidhan, Singrauli",
    description:
      "Ravindra High School in Waidhan, Singrauli provides quality education with NCERT curriculum, experienced faculty, and modern facilities for Classes I-X.",
    images: ["https://rhswaidhan.com/images/rhs-logo.webp"],
  },
  alternates: {
    canonical: "https://rhswaidhan.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RHS Waidhan" />
        <meta name="application-name" content="RHS Waidhan" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${roboto.variable} ${montserrat.variable} ${nunito.variable}`}
      >
        <ThemeProvider>
          <Suspense fallback={null}>
            {children}
            <Analytics />
            <SpeedInsights />
          </Suspense>
        </ThemeProvider>

        {/* PWA Service Worker Registration */}
        <Script id="register-service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('Service Worker registered with scope:', registration.scope);
                  })
                  .catch(function(error) {
                    console.log('Service Worker registration failed:', error);
                  });
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
