"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to main page with contact section
    router.replace("/?section=contact")
  }, [router])

  return null
}
