"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import RHSLogo from "./logo"
import { Palette, Type, Layout, Check, Save, ImageIcon } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useState } from "react"

export default function ThemeSelector() {
  const {
    theme,
    layout,
    logoStyle,
    setTheme,
    setLayout,
    setLogoStyle,
    getThemeClasses,
    getLayoutClasses,
  } = useTheme()
  const [showSaveMessage, setShowSaveMessage] = useState(false)

  const themes = [
    {
      id: "blue" as const,
      name: "Ocean Blue",
      colors: "from-blue-600 to-indigo-600",
      description: "Professional and trustworthy",
      primary: "#2563eb",
      secondary: "#4f46e5",
    },
    {
      id: "green" as const,
      name: "Nature Green",
      colors: "from-green-600 to-emerald-600",
      description: "Growth and harmony",
      primary: "#059669",
      secondary: "#10b981",
    },
    {
      id: "purple" as const,
      name: "Royal Purple",
      colors: "from-purple-600 to-violet-600",
      description: "Creative and inspiring",
      primary: "#9333ea",
      secondary: "#8b5cf6",
    },
    {
      id: "orange" as const,
      name: "Sunset Orange",
      colors: "from-orange-600 to-red-600",
      description: "Energetic and warm",
      primary: "#ea580c",
      secondary: "#dc2626",
    },
    {
      id: "red" as const,
      name: "Crimson Red",
      colors: "from-red-600 to-pink-600",
      description: "Bold and passionate",
      primary: "#dc2626",
      secondary: "#e11d48",
    },
  ]

  const layouts = [
    {
      id: "modern" as const,
      name: "Modern",
      description: "Clean lines and gradients",
      preview: "Rounded corners, shadows, gradients",
    },
    {
      id: "classic" as const,
      name: "Classic",
      description: "Traditional academic style",
      preview: "Conservative design, subtle shadows",
    },
    {
      id: "minimal" as const,
      name: "Minimal",
      description: "Simple and focused",
      preview: "Clean lines, minimal shadows, borders",
    },
    {
      id: "vibrant" as const,
      name: "Vibrant",
      description: "Colorful and energetic",
      preview: "Bold colors, large spacing, rounded",
    },
  ]

  const logoStyles = [
    {
      id: "default" as const,
      name: "Full Logo",
      description: "Complete logo with school name",
      usage: "Headers, main branding",
    },
    {
      id: "compact" as const,
      name: "Compact Logo",
      description: "Logo with abbreviated text",
      usage: "Navigation, small spaces",
    },
    {
      id: "icon-only" as const,
      name: "Icon Only",
      description: "Just the school emblem",
      usage: "Favicons, mobile apps",
    },
  ]

  const selectedThemeData = themes.find((t) => t.id === theme)
  const selectedLayoutData = layouts.find((l) => l.id === layout)
  const selectedLogoData = logoStyles.find((l) => l.id === logoStyle)
  const layoutClasses = getLayoutClasses()

  const handleApplyTheme = () => {
    setShowSaveMessage(true)
    setTimeout(() => setShowSaveMessage(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">RHS Theme Customization</h1>
            <p className="text-xl text-gray-600">Customize your preferred logo style, color theme, and layout</p>
            {showSaveMessage && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg inline-block">
                <div className="flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Theme applied and saved successfully!</span>
                </div>
              </div>
            )}
          </div>

          {/* Logo Variations - NOW WITH REAL LOGO */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ImageIcon className="w-5 h-5" />
                <span>Official Logo Variations (Click to Apply)</span>
              </CardTitle>
              <CardDescription>Choose which logo style to use throughout the website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {logoStyles.map((logoOption) => (
                  <div
                    key={logoOption.id}
                    className={`text-center p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                      logoStyle === logoOption.id
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setLogoStyle(logoOption.id)}
                  >
                    <div className="mb-4 flex justify-center">
                      <RHSLogo variant={logoOption.id} size="lg" theme={theme} onDark={false} />
                    </div>
                    <h3 className="font-semibold mb-2">{logoOption.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{logoOption.description}</p>
                    <p className="text-xs text-gray-500">{logoOption.usage}</p>
                    {logoStyle === logoOption.id && (
                      <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">Active</Badge>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Official Logo Symbolism</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">📖</span>
                    <span>
                      <strong>Open Book:</strong> Knowledge and learning
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🪔</span>
                    <span>
                      <strong>Diya (Lamp):</strong> Enlightenment and wisdom
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🛡️</span>
                    <span>
                      <strong>Shield Shape:</strong> Protection and strength
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🏛️</span>
                    <span>
                      <strong>Traditional Design:</strong> Heritage and values
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-500">
                  <p className="text-sm font-medium text-gray-800">School Motto:</p>
                  <p className="text-sm text-gray-600 italic">"We Serve Society By Serving People"</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Theme Selection */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Color Themes</span>
              </CardTitle>
              <CardDescription>Select your preferred color scheme (changes apply instantly)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                {themes.map((themeOption) => (
                  <div
                    key={themeOption.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                      theme === themeOption.id
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setTheme(themeOption.id)}
                  >
                    <div
                      className={`w-full h-16 bg-gradient-to-r ${themeOption.colors} rounded-lg mb-3 relative overflow-hidden`}
                    >
                      {theme === themeOption.id && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{themeOption.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{themeOption.description}</p>
                    <div className="flex space-x-1">
                      <div
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: themeOption.primary }}
                      ></div>
                      <div
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: themeOption.secondary }}
                      ></div>
                    </div>
                    {theme === themeOption.id && (
                      <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">Active</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Layout Styles */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Layout className="w-5 h-5" />
                <span>Layout Styles (Click to Apply)</span>
              </CardTitle>
              <CardDescription>Different design approaches that change the entire website appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {layouts.map((layoutOption) => (
                  <div
                    key={layoutOption.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                      layout === layoutOption.id
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setLayout(layoutOption.id)}
                  >
                    <div className="w-full h-24 bg-gray-100 rounded mb-3 flex items-center justify-center relative overflow-hidden">
                      {/* Visual preview based on layout */}
                      {layoutOption.id === "modern" && (
                        <div className="space-y-1">
                          <div className="w-16 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                          <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
                          <div className="w-14 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                      )}
                      {layoutOption.id === "classic" && (
                        <div className="space-y-1">
                          <div className="w-16 h-2 bg-gray-600 rounded-sm"></div>
                          <div className="w-12 h-2 bg-gray-400 rounded-sm"></div>
                          <div className="w-14 h-2 bg-gray-400 rounded-sm"></div>
                        </div>
                      )}
                      {layoutOption.id === "minimal" && (
                        <div className="space-y-2">
                          <div className="w-16 h-1 bg-black"></div>
                          <div className="w-12 h-1 bg-gray-600"></div>
                          <div className="w-14 h-1 bg-gray-600"></div>
                        </div>
                      )}
                      {layoutOption.id === "vibrant" && (
                        <div className="space-y-1">
                          <div className="w-16 h-3 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full"></div>
                          <div className="w-12 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                          <div className="w-14 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                        </div>
                      )}
                      {layout === layoutOption.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-blue-500/20">
                          <Check className="w-4 h-4 text-blue-600" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{layoutOption.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{layoutOption.description}</p>
                    <p className="text-xs text-gray-500">{layoutOption.preview}</p>
                    {layout === layoutOption.id && (
                      <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">Active</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Preview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>See how your selections look together (updates in real-time)</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`p-8 rounded-lg bg-gradient-to-br ${selectedThemeData?.colors} text-white relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <RHSLogo variant={logoStyle} size="md" theme={theme} onDark={true} />
                    <nav className="hidden md:flex space-x-6 text-white">
                      <a href="#" className="hover:text-white/80 transition-colors">
                        Home
                      </a>
                      <a href="#" className="hover:text-white/80 transition-colors">
                        About
                      </a>
                      <a href="#" className="hover:text-white/80 transition-colors">
                        Academics
                      </a>
                      <a href="#" className="hover:text-white/80 transition-colors">
                        Contact
                      </a>
                    </nav>
                  </div>

                  <div className="font-nunito text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Ravindra High School</h1>
                    <p className="text-xl opacity-90 mb-6">
                      We Serve Society By Serving People • Classes I-X • Waidhan
                    </p>
                    <Button className={`bg-white text-gray-900 hover:bg-gray-100 ${layoutClasses.buttonStyle}`}>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Selection Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Current Selection</CardTitle>
              <CardDescription>Your customization preferences are automatically saved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Color Theme</h3>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${selectedThemeData?.colors} rounded-full mx-auto mb-2`}
                  ></div>
                  <p className="text-sm text-gray-600">{selectedThemeData?.name}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Layout Style</h3>
                  <div className="w-12 h-8 bg-gray-300 rounded mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">{selectedLayoutData?.name}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Logo Style</h3>
                  <div className="mb-2 flex justify-center">
                    <RHSLogo variant={logoStyle} size="sm" theme={theme} onDark={false} />
                  </div>
                  <p className="text-sm text-gray-600">{selectedLogoData?.name}</p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${selectedThemeData?.colors} text-white px-8 py-3 hover:opacity-90`}
                  onClick={handleApplyTheme}
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Current Theme
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  Changes are applied instantly and saved automatically to your browser. Using optimized Nunito font for best performance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
