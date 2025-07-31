"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to main page with home section
    router.replace("/?section=home")
  }, [router])

  return null
}
