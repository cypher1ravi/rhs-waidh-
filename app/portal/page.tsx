import type { Metadata } from "next"
import PortalPageClient from "./PortalPageClient"

export const metadata: Metadata = {
  title: "Student Portal - Ravindra High School Waidhan",
  description:
    "Access student portal for assignments, results, announcements, and school resources at Ravindra High School Waidhan.",
  keywords: "student portal, assignments, results, announcements, school resources",
  alternates: {
    canonical: "https://rhswaidhan.com/portal",
  },
}

export default function PortalPage() {
  return <PortalPageClient />
}
