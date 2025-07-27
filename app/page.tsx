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
  Download,
  Presentation,
  NotebookPen,
} from "lucide-react"
import Link from "next/link"
import RHSLogo from "@/components/logo"
import { useTheme } from "@/contexts/theme-context"
import StudentPortalSection from "@/components/student-portal-section"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, getThemeClasses, getLayoutClasses } = useTheme()
  const themeClasses = getThemeClasses()
  const layoutClasses = getLayoutClasses()

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#academics", label: "Academics" },
    { href: "#portal", label: "Portal" },
    { href: "#admissions", label: "Admissions" },
    { href: "#contact", label: "Contact" },
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

      {/* Header - Light background, so onDark=false */}
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

      {/* Hero Section */}
      <section id="home" className={layoutClasses.sectionSpacing + " px-4"}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              className={`mb-4 bg-${themeClasses.primary}/10 text-${themeClasses.primary} hover:bg-${themeClasses.primary}/20`}
            >
              Established Excellence Since 1988
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeClasses.gradient}`}>
                Ravindra High School
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Since 1988, Ravindra High School has been shaping the future of Waidhan, Singrauli with a commitment to quality education, strong values, and personal attention. From Classes I to X, our NCERT-based curriculum, dedicated faculty, and modern learning environment ensure every child grows with confidence, curiosity, and character.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                size="lg"
                className={`bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white ${layoutClasses.buttonStyle}`}
              >
                Apply for Admission
              </Button> */}
              <Button
                variant="outline"
                size="lg"
                className={`bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white ${layoutClasses.buttonStyle}`}
                onClick={() => window.location.href = "/gallery"}
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
                <Presentation className="w-8 h-8 text-white" />
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
      <section id="about" className={`${layoutClasses.sectionSpacing} `}>
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

      {/* Academics Section */}
      <section id="academics" className={`${layoutClasses.sectionSpacing} bg-white`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education from primary to high school levels following NCERT curriculum with focus on
              conceptual understanding and practical application.
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
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admissions Open</h2>
            <p className="text-lg text-gray-600 mb-10">
              Join the RHS family and begin a journey of academic excellence, personal growth, and future success.
            </p>

            {/* Step-by-Step Process */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Application",
                  desc: "Submit your application form with the necessary documents.",
                  step: "1",
                },
                {
                  title: "Assessment",
                  desc: "Attend the entrance test and interview for evaluation.",
                  step: "2",
                },
                {
                  title: "Enrollment",
                  desc: "Complete the admission process and pay the fees.",
                  step: "3",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${themeClasses.gradient} rounded-xl text-white p-6 text-left shadow-md`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            {/* <div className="flex flex-col items-center space-y-4">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white ${layoutClasses.buttonStyle}`}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Admission Form
              </Button>
              <p className="text-sm text-gray-500">
                For assistance, contact the school office or visit our campus.
              </p>
            </div> */}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className={`${layoutClasses.sectionSpacing}  bg-gradient-to-br from-gray-900 to-blue-900 text-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl opacity-90">We're here to help and answer any questions you might have</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${themeClasses.gradient} rounded-full flex items-center justify-center`}>
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="opacity-90">
                        Ravindra High School
                        <br />
                        Waidhan, Singrauli
                        <br />
                        Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="opacity-90">
                        +91 9826986106
                        <br />
                        {/* +91 87654 32109 */}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="opacity-90">
                        rhswaidhan@gmail.com
                        <br />
                        inforhswaidhan@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">School Hours</h3>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>KG to 5th (Morning Shift)</span>
                      <span>7:30 AM – 11:30 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>6th to 10th (Afternoon Shift)</span>
                      <span>12:00 PM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>


                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Office Hours</h4>
                  <p className="opacity-90">Monday - Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="opacity-90">For admissions and inquiries</p>
                </div>
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
                  <RHSLogo variant={"default"} size="md" theme={theme} onDark={true} />
                </div>
                <p className="opacity-90 mb-4">
                  Dedicated to delivering quality education and nurturing young minds for a brighter future in Waidhan, Singrauli.
                </p>
              </div>
              {/* Quick Links and Resources - same row, different columns on mobile and desktop */}
              <div className="grid grid-cols-2 gap-20">
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
                      <Link href="#portal" className="hover:text-blue-400 transition-colors">
                        Portal
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
