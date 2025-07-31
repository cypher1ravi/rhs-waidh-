"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PortalPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to main page with portal section
    router.replace("/?section=portal")
  }, [router])

  return null
}
