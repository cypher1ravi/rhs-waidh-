"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Palette } from "lucide-react"
import Link from "next/link"
import RHSLogo from "@/components/logo"
import { useTheme } from "@/contexts/theme-context"
import StudentPortalSection from "@/components/student-portal-section"

export default function PortalPageClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, getThemeClasses, getLayoutClasses } = useTheme()
  const themeClasses = getThemeClasses()
  const layoutClasses = getLayoutClasses()

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/portal", label: "Portal" },
    { href: "/admissions", label: "Admissions" },
    { href: "/contact", label: "Contact" },
  ]

  const linkClasses = `text-gray-700 hover:text-${themeClasses.primary} font-medium transition-colors`

  return (
    <div className={`min-h-screen ${layoutClasses.heroBackground}`}>
      {/* Theme Selector Button */}
      <div className="fixed top-20 left-4 z-40">
        <Link href="/themes">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Palette className="w-4 h-4 mr-2" />
            Themes
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <RHSLogo variant={"default"} size="md" theme={theme} onDark={false} add={false} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={linkClasses}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Portal Hero Section */}
      <section className={layoutClasses.sectionSpacing + " px-4"}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              className={`mb-4 bg-${themeClasses.primary}/10 text-${themeClasses.primary} hover:bg-${themeClasses.primary}/20`}
            >
              Student Portal
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Access Your{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeClasses.gradient}`}>
                Student Portal
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay connected with your academic journey. Access grades, attendance, assignments, and important
              announcements all in one place. Your gateway to academic success at Ravindra High School.
            </p>
          </div>
        </div>
      </section>

      {/* Student Portal Section */}
      <StudentPortalSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="mb-4">
                  <RHSLogo variant={"default"} size="md" theme={theme} onDark={true} />
                </div>
                <p className="opacity-90 mb-4">
                  Dedicated to delivering quality education and nurturing young minds for a brighter future in Waidhan,
                  Singrauli.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-20">
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>
                      <Link href="/about" className="hover:text-blue-400 transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/academics" className="hover:text-blue-400 transition-colors">
                        Academics
                      </Link>
                    </li>
                    <li>
                      <Link href="/portal" className="hover:text-blue-400 transition-colors">
                        Portal
                      </Link>
                    </li>
                    <li>
                      <Link href="/admissions" className="hover:text-blue-400 transition-colors">
                        Admissions
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-blue-400 transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>
                      <Link href="/gallery" className="hover:text-blue-400 transition-colors">
                        Photo Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty" className="hover:text-blue-400 transition-colors">
                        Our Faculty
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-sm opacity-75">
                © 2025 Ravindra High School, Waidhan, Singrauli. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
