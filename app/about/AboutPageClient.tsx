"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Trophy, Heart, Menu, X, Palette } from "lucide-react"
import Link from "next/link"
import RHSLogo from "@/components/logo"
import { useTheme } from "@/contexts/theme-context"

export default function AboutPageClient() {
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

      {/* About Hero Section */}
      <section className={layoutClasses.sectionSpacing + " px-4"}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              className={`mb-4 bg-${themeClasses.primary}/10 text-${themeClasses.primary} hover:bg-${themeClasses.primary}/20`}
            >
              About Ravindra High School
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeClasses.gradient}`}>Legacy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over three decades, Ravindra High School has been a beacon of educational excellence in Waidhan,
              Singrauli, shaping generations of successful individuals with our commitment to quality education and
              holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`${layoutClasses.sectionSpacing} bg-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To provide holistic education that nurtures intellectual curiosity, moral values, and social
                  responsibility while preparing students for the challenges of tomorrow. We believe in creating an
                  environment where every child can discover their potential and excel in their chosen path.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-6 h-6 bg-${themeClasses.primary}/10 rounded-full flex items-center justify-center mt-1`}
                    >
                      <Star className={`w-3 h-3 text-${themeClasses.primary}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Excellence</h4>
                      <p className="text-gray-600 text-sm">
                        Comprehensive NCERT curriculum aligned with modern educational standards
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <Heart className="w-3 h-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Character Building</h4>
                      <p className="text-gray-600 text-sm">Emphasis on moral values and ethical development</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <Trophy className="w-3 h-3 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Holistic Development</h4>
                      <p className="text-gray-600 text-sm">
                        Sports, arts, and extracurricular activities for all-round growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className={`bg-gradient-to-br ${themeClasses.gradient} rounded-2xl p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-4">Why Choose RHS?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Experienced and dedicated faculty</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Modern infrastructure and facilities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Small class sizes for personalized attention</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Strong alumni network</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Focus on practical learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className={`${layoutClasses.sectionSpacing}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Journey</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className={`text-4xl font-bold text-${themeClasses.primary} mb-2`}>1988</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Foundation</h4>
                  <p className="text-sm text-gray-600">
                    Established with a vision to provide quality education in Waidhan
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Alumni</h4>
                  <p className="text-sm text-gray-600">Proud graduates making their mark in various fields</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">35+</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Years</h4>
                  <p className="text-sm text-gray-600">Of continuous service to the community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
