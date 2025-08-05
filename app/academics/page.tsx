import type { Metadata } from "next"
import AcademicsClientPage from "./AcademicsClientPage"

export const metadata: Metadata = {
  title: "Academics - Ravindra High School Waidhan",
  description:
    "Comprehensive academic programs from Classes I-X following NCERT curriculum with experienced faculty and modern teaching methods.",
  keywords: "NCERT curriculum, Classes I-X, academic programs, quality education, experienced faculty",
  alternates: {
    canonical: "https://rhswaidhan.com/academics",
  },
}

export default function AcademicsPage() {
  return <AcademicsClientPage />
}
