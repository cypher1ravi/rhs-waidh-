"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Menu, X, Palette, GraduationCap, NotebookPen } from "lucide-react"
import Link from "next/link"
import RHSLogo from "@/components/logo"
import { useTheme } from "@/contexts/theme-context"

export default function AcademicsClientPage() {
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

      {/* Academics Hero Section */}
      <section className={layoutClasses.sectionSpacing + " px-4"}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              className={`mb-4 bg-${themeClasses.primary}/10 text-${themeClasses.primary} hover:bg-${themeClasses.primary}/20`}
            >
              Academic Excellence
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeClasses.gradient}`}>
                Academic Programs
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive education from primary to high school levels following NCERT curriculum with focus on
              conceptual understanding and practical application. Our experienced faculty ensures every student receives
              personalized attention and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className={`${layoutClasses.sectionSpacing} bg-white`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From foundational learning to advanced concepts, our curriculum is designed to nurture critical thinking
              and academic excellence at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className={`hover:shadow-lg transition-shadow ${layoutClasses.cardStyle}`}>
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${themeClasses.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Primary Education</CardTitle>
                <CardDescription>Classes I - V</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Foundation in core subjects (NCERT)</li>
                  <li>• Activity-based learning approach</li>
                  <li>• Creative arts and crafts</li>
                  <li>• Physical education and sports</li>
                  <li>• Moral science and value education</li>
                  <li>• English and Hindi language development</li>
                  <li>• Basic mathematics and environmental studies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-lg transition-shadow ${layoutClasses.cardStyle}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <NotebookPen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Middle School</CardTitle>
                <CardDescription>Classes VI - VIII</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Advanced NCERT curriculum</li>
                  <li>• Science laboratory experiments</li>
                  <li>• Computer education and digital literacy</li>
                  <li>• Language development (Hindi & English)</li>
                  <li>• Project-based learning methodology</li>
                  <li>• Social studies and history</li>
                  <li>• Advanced mathematics concepts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-lg transition-shadow ${layoutClasses.cardStyle}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">High School</CardTitle>
                <CardDescription>Classes IX - X</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complete NCERT syllabus coverage</li>
                  <li>• Science & Mathematics specialization</li>
                  <li>• Social Studies & Languages</li>
                  <li>• Board exam preparation (MP Board)</li>
                  <li>• Career guidance and counseling</li>
                  <li>• Practical laboratory work</li>
                  <li>• Competitive exam preparation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className={`${layoutClasses.sectionSpacing}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Teaching Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Teaching Methods</h3>
                <p className="text-gray-600">
                  We employ interactive teaching methods, digital tools, and hands-on learning experiences to make
                  education engaging and effective for all students.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Individual Attention</h3>
                <p className="text-gray-600">
                  Small class sizes ensure that every student receives personalized attention and support to reach their
                  full academic potential.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Learning</h3>
                <p className="text-gray-600">
                  Our well-equipped laboratories and activity rooms provide students with hands-on experience in
                  science, computer studies, and creative arts.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Progress</h3>
                <p className="text-gray-600">
                  Regular assessments, parent-teacher meetings, and progress reports ensure continuous monitoring of
                  student development and academic growth.
                </p>
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
