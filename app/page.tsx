"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Award,
  Star,
  Trophy,
  Heart,
  Menu,
  X,
  Palette,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import RHSLogo from "@/components/logo"
import { useTheme } from "@/contexts/theme-context"
import StudentPortalSection from "@/components/student-portal-section"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, logoStyle, getThemeClasses, getLayoutClasses } = useTheme()
  const themeClasses = getThemeClasses()
  const layoutClasses = getLayoutClasses()

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

      {/* Header - Light background, so onDark=false */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <RHSLogo variant={logoStyle} size="md" theme={theme} onDark={false} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="#academics" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Academics
              </Link>
              <Link href="/faculty" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Faculty
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Gallery
              </Link>
              <Link href="#admissions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Admissions
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
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
                <Link
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#academics"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Academics
                </Link>
                <Link
                  href="/faculty"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Faculty
                </Link>
                <Link
                  href="/gallery"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="#admissions"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admissions
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={layoutClasses.sectionSpacing + " px-4"}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              className={`mb-4 bg-${themeClasses.primary}/10 text-${themeClasses.primary} hover:bg-${themeClasses.primary}/20`}
            >
              Established Excellence Since 1985
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeClasses.gradient}`}>
                Ravindra High School
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nurturing young minds in Waidhan, Singrauli with quality CBSE education from Classes I-X, modern
              facilities, and a commitment to excellence that prepares students for their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white ${layoutClasses.buttonStyle}`}
              >
                Apply for Admission
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`border-${themeClasses.primary} text-${themeClasses.primary} hover:bg-${themeClasses.primary}/5 ${layoutClasses.buttonStyle}`}
              >
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${layoutClasses.sectionSpacing} bg-white`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${themeClasses.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1200+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Teachers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Pass Rate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${layoutClasses.sectionSpacing} bg-gradient-to-br from-gray-50 to-blue-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About RHS</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For over three decades, Ravindra High School has been a beacon of educational excellence in Waidhan,
                Singrauli, shaping generations of successful individuals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To provide holistic education that nurtures intellectual curiosity, moral values, and social
                  responsibility while preparing students for the challenges of tomorrow.
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
                        Comprehensive curriculum aligned with modern educational standards
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

      {/* Academics Section */}
      <section id="academics" className={`${layoutClasses.sectionSpacing} bg-white`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education from primary to high school levels with CBSE curriculum and board exam
              preparation.
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
                  <li>• Foundation in core subjects</li>
                  <li>• Activity-based learning</li>
                  <li>• Creative arts and crafts</li>
                  <li>• Physical education</li>
                  <li>• Moral science</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-lg transition-shadow ${layoutClasses.cardStyle}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Middle School</CardTitle>
                <CardDescription>Classes VI - VIII</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Advanced curriculum</li>
                  <li>• Science laboratory</li>
                  <li>• Computer education</li>
                  <li>• Language development</li>
                  <li>• Project-based learning</li>
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
                  <li>• CBSE Board curriculum</li>
                  <li>• Science & Mathematics</li>
                  <li>• Social Studies & Languages</li>
                  <li>• Board exam preparation</li>
                  <li>• Career guidance counseling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Portal Section */}
      <StudentPortalSection />

      {/* Admissions Section */}
      <section id="admissions" className={`${layoutClasses.sectionSpacing} bg-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Admissions Open</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the RHS family and embark on a journey of academic excellence and personal growth.
            </p>

            <div className={`bg-gradient-to-br ${themeClasses.gradient} rounded-2xl p-8 text-white mb-8`}>
              <h3 className="text-2xl font-bold mb-4">Admission Process</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Application</h4>
                  <p className="text-sm opacity-90">Submit online application with required documents</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Assessment</h4>
                  <p className="text-sm opacity-90">Entrance test and interview for evaluation</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Enrollment</h4>
                  <p className="text-sm opacity-90">Complete admission formalities and fee payment</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className={`bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white ${layoutClasses.buttonStyle}`}
            >
              Download Admission Form
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${layoutClasses.sectionSpacing} bg-gradient-to-br from-gray-50 to-blue-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">Contact us for any inquiries or to schedule a visit.</p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${themeClasses.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 text-sm">Waidhan, Singrauli</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 text-sm">+91 1234567890</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 text-sm">info@rhs.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Dark background, so onDark=true */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="mb-4">
                  <RHSLogo variant={logoStyle} size="md" theme={theme} onDark={true} />
                </div>
                <p className="opacity-90 mb-4">
                  Committed to providing quality education and nurturing young minds for a brighter future in Waidhan,
                  Singrauli.
                </p>
              </div>

              {/* Quick Links and Resources - side by side on mobile, separate columns on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0">
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>
                      <Link href="#about" className="hover:text-blue-400 transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#academics" className="hover:text-blue-400 transition-colors">
                        Academics
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty" className="hover:text-blue-400 transition-colors">
                        Faculty
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" className="hover:text-blue-400 transition-colors">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="#admissions" className="hover:text-blue-400 transition-colors">
                        Admissions
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="hover:text-blue-400 transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0">
                <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>
                      <Link
                        href="https://osms.mponline.gov.in/Portal/SMS/Home/SchoolLogin.aspx?ReqSchId=rtuKwB6rRa04MKr82BdLhA=="
                        target="_blank"
                        className="hover:text-blue-400 transition-colors"
                      >
                        Student Portal
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-blue-400 transition-colors">
                        Parent Portal
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-blue-400 transition-colors">
                        Faculty
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-blue-400 transition-colors">
                        Alumni
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-sm opacity-75">
                © 2024 Ravindra High School, Waidhan, Singrauli. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
