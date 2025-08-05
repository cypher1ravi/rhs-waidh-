import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Ravindra High School Waidhan",
  description:
    "Get in touch with Ravindra High School Waidhan. Find our address, phone numbers, email, and school hours for inquiries and admissions.",
  keywords: "contact RHS, school address, phone number, email, school hours, Waidhan Singrauli",
  alternates: {
    canonical: "https://rhswaidhan.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
