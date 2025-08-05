import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us - Ravindra High School Waidhan",
  description:
    "Learn about Ravindra High School's history, mission, and commitment to quality education in Waidhan, Singrauli since 1988.",
  keywords: "RHS history, school mission, quality education, Waidhan school, Singrauli education",
  alternates: {
    canonical: "https://rhswaidhan.com/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
