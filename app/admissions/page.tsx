"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdmissionsPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to main page with admissions section
    router.replace("/?section=admissions")
  }, [router])

  return null
}
