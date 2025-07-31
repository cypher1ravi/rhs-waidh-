"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AcademicsPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to main page with academics section
    router.replace("/?section=academics")
  }, [router])

  return null
}
