import type { Metadata } from "next"
import AdmissionsClientPage from "./AdmissionsClientPage"

export const metadata: Metadata = {
  title: "Admissions - Ravindra High School Waidhan",
  description:
    "Join Ravindra High School Waidhan. Learn about our admission process, requirements, and how to enroll your child in our quality education program.",
  keywords: "school admission, enrollment, admission process, join RHS, school fees, admission requirements",
  alternates: {
    canonical: "https://rhswaidhan.com/admissions",
  },
}

export default function AdmissionsPage() {
  return <AdmissionsClientPage />
}
