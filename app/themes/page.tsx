"use client"

import { useState } from "react"
import ThemeSelector from "@/components/theme-selector"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ThemesPage() {
  const [currentTheme, setCurrentTheme] = useState("blue")
  const [currentLayout, setCurrentLayout] = useState("modern")

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme)
    // Here you would typically update a global state or context
    console.log("Theme changed to:", theme)
  }

  const handleLayoutChange = (layout: string) => {
    setCurrentLayout(layout)
    console.log("Layout changed to:", layout)
  }

  return (
    <div>
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Website
          </Button>
        </Link>
      </div>

      <ThemeSelector
        onThemeChange={handleThemeChange}
        onLayoutChange={handleLayoutChange}
      />
    </div>
  )
}
