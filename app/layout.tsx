import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true
})

export const metadata: Metadata = {
  title: "Ravindra High School - Excellence in Education | Waidhan, Singrauli | NCERT Curriculum",
  description:
    "Ravindra High School offers quality education with modern facilities, experienced faculty, and holistic development for Classes I-X following NCERT curriculum in Waidhan, Singrauli, Madhya Pradesh.",
  keywords: "Ravindra High School, RHS, rhswaidhan, Waidhan, Singrauli, school, education, admission, NCERT, Madhya Pradesh, Classes I-X, quality education, modern facilities",
  authors: [{ name: "Ravindra High School" }],
  openGraph: {
    title: "Ravindra High School - Excellence in Education | Waidhan, Singrauli",
    description:
      "Quality education in Waidhan, Singrauli with modern facilities and experienced faculty following NCERT curriculum for Classes I-X.",
    type: "website",
    locale: "en_IN",
    url: "https://rhswaidhan.com",
    siteName: "Ravindra High School",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.webp", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.webp",
    shortcut: "/favicon.ico",

  },
  manifest: "/site.webmanifest",
  alternates: { canonical: 'https://rhswaidhan.com/' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={nunito.variable}
      >
        <ThemeProvider>
          <Suspense fallback={null}>
            {children}
            {/* Analytics + performance */}
            <Analytics />
            <SpeedInsights />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
