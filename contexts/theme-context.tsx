"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "blue" | "green" | "purple" | "orange" | "red"
type Layout = "modern" | "classic" | "minimal" | "vibrant"

interface ThemeContextType {
  theme: Theme
  layout: Layout
  setTheme: (theme: Theme) => void
  setLayout: (layout: Layout) => void
  getThemeClasses: () => {
    gradient: string
    primary: string
    secondary: string
  }
  getLayoutClasses: () => {
    heroBackground: string
    cardStyle: string
    buttonStyle: string
    sectionSpacing: string
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const themeConfig = {
  blue: {
    gradient: "from-blue-600 to-indigo-600",
    primary: "blue-600",
    secondary: "indigo-600",
  },
  green: {
    gradient: "from-green-600 to-emerald-600",
    primary: "green-600",
    secondary: "emerald-600",
  },
  purple: {
    gradient: "from-purple-600 to-violet-600",
    primary: "purple-600",
    secondary: "violet-600",
  },
  orange: {
    gradient: "from-orange-600 to-red-600",
    primary: "orange-600",
    secondary: "red-600",
  },
  red: {
    gradient: "from-red-600 to-pink-600",
    primary: "red-600",
    secondary: "pink-600",
  },
}

const layoutConfig = {
  modern: {
    heroBackground: "bg-gradient-to-br from-blue-50 to-indigo-100",
    cardStyle: "rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0",
    buttonStyle: "rounded-lg px-6 py-3",
    sectionSpacing: "py-20",
  },
  classic: {
    heroBackground: "bg-gradient-to-b from-gray-50 to-white",
    cardStyle: "rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200",
    buttonStyle: "rounded-md px-8 py-2",
    sectionSpacing: "py-16",
  },
  minimal: {
    heroBackground: "bg-white",
    cardStyle: "rounded-none shadow-sm hover:shadow-md transition-shadow border-l-4 border-gray-900",
    buttonStyle: "rounded-none px-8 py-3 border-2 border-gray-900",
    sectionSpacing: "py-12",
  },
  vibrant: {
    heroBackground: "bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100",
    cardStyle: "rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-purple-200",
    buttonStyle: "rounded-full px-8 py-4",
    sectionSpacing: "py-24",
  },
}

const getRandomTheme = (): Theme => {
  const themes: Theme[] = ["blue", "green", "purple", "orange", "red"]
  return themes[Math.floor(Math.random() * themes.length)]
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("rhs-theme") as Theme) || getRandomTheme()
    }
    return getRandomTheme()
  })
  const [layout, setLayout] = useState<Layout>("modern")

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedLayout = localStorage.getItem("rhs-layout") as Layout

    if (savedLayout && layoutConfig[savedLayout]) {
      setLayout(savedLayout)
    }
  }, [])

  // Save preferences to localStorage
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("rhs-theme", newTheme)
  }

  const handleSetLayout = (newLayout: Layout) => {
    setLayout(newLayout)
    localStorage.setItem("rhs-layout", newLayout)
  }

  const getThemeClasses = () => themeConfig[theme]
  const getLayoutClasses = () => layoutConfig[layout]

  return (
    <ThemeContext.Provider
      value={{
        theme,
        layout,
        setTheme: handleSetTheme,
        setLayout: handleSetLayout,
        getThemeClasses,
        getLayoutClasses,
      }}
    >
      <div className="font-nunito">{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
