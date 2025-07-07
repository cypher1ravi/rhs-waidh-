import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Playfair_Display, Roboto, Montserrat, Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-roboto" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata: Metadata = {
  title: "Ravindra High School - Excellence in Education | Waidhan, Singrauli",
  description:
    "Providing quality education with modern facilities, experienced faculty, and holistic development for students from primary to high school levels (Classes I-X) following NCERT curriculum.",
  keywords: "Ravindra High School, RHS,rhswaidhan, Waidhan, Singrauli, school, education, admission, NCERT, Madhya Pradesh ",
  authors: [{ name: "Ravindra High School" }],
  openGraph: {
    title: "Ravindra High School - Excellence in Education",
    description:
      "Quality education in Waidhan, Singrauli with modern facilities and experienced faculty following NCERT curriculum.",
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
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${roboto.variable} ${montserrat.variable} ${nunito.variable}`}
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
