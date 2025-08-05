import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Home - Ravindra High School Waidhan",
  description:
    "Welcome to Ravindra High School Waidhan - Quality education in Singrauli with NCERT curriculum and modern facilities.",
  alternates: {
    canonical: "https://rhswaidhan.com/home",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
