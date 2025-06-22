import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Playfair_Display, Roboto, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-roboto" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "Ravindra High School - Excellence in Education | Waidhan, Singrauli",
  description:
    "Providing quality education with modern facilities, experienced faculty, and holistic development for students from primary to high school levels (Classes I-X).",
  keywords: "Ravindra High School, RHS, Waidhan, Singrauli, school, education, admission, CBSE, Madhya Pradesh",
  authors: [{ name: "Ravindra High School" }],
  openGraph: {
    title: "Ravindra High School - Excellence in Education",
    description: "Quality education in Waidhan, Singrauli with modern facilities and experienced faculty.",
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${roboto.variable} ${montserrat.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
