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
  ArrowRight,
  CheckCircle,
  Globe,
  Calendar,
  Target,
  Lightbulb,
  Shield,
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
    <div className="min-h-screen bg-white">
      {/* Theme Selector Button */}
      <div className="fixed top-20 left-4 z-40">
        <Link href="/themes">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/95 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 border-gray-200"
          >
            <Palette className="w-4 h-4 mr-2" />
            Themes
          </Button>
        </Link>
      </div>

      {/* Modern Header */}
      <header className="bg-white/95 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <RHSLogo variant={logoStyle} size="md" theme={theme} onDark={false} add={false} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
                About
              </Link>
              <Link href="#academics" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
                Academics
              </Link>
              <Link href="#portal" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
                Portal
              </Link>
              <Link href="#admissions" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
                Admissions
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
                Contact
              </Link>
              <Button className={`bg-gradient-to-r ${themeClasses.gradient} text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300`}>
                Apply Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#academics"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Academics
                </Link>
                <Link
                  href="#portal"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portal
                </Link>
                <Link
                  href="#admissions"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admissions
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button className={`bg-gradient-to-r ${themeClasses.gradient} text-white rounded-full mt-4`}>
                  Apply Now
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Modern Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-6 bg-white/80 text-blue-600 hover:bg-white/90 px-6 py-2 text-sm font-medium border border-blue-200">
              ✨ Established Excellence Since 1988
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Welcome to{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeClasses.gradient} animate-pulse`}>
                Ravindra High School
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Empowering minds, shaping futures. Since 1988, we've been nurturing young talents in Waidhan, Singrauli 
              with world-class education, innovative teaching methods, and a commitment to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                Explore Our Campus
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = "/gallery"}
              >
                Virtual Tour
                <Globe className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">1200+</div>
                <div className="text-gray-600 font-medium">Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">35+</div>
                <div className="text-gray-600 font-medium">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose RHS?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Ravindra High School the premier choice for quality education in Singrauli
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 bg-gradient-to-br ${themeClasses.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                  <Target className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  NCERT-aligned curriculum with innovative teaching methods, ensuring comprehensive learning and outstanding results.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Modern facilities, digital learning tools, and hands-on experiences that prepare students for the future.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-violet-50 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Character Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Strong emphasis on moral values, ethics, and social responsibility to develop well-rounded individuals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-blue-100 text-blue-600 px-4 py-2">About RHS</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Nurturing Excellence for Over Three Decades
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  At Ravindra High School, we believe every child has the potential to achieve greatness. 
                  Our mission is to provide holistic education that nurtures intellectual curiosity, 
                  moral values, and social responsibility.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Comprehensive NCERT Curriculum</h4>
                      <p className="text-gray-600">Aligned with modern educational standards and best practices</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Experienced Faculty</h4>
                      <p className="text-gray-600">Dedicated teachers with average 15+ years of experience</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Modern Infrastructure</h4>
                      <p className="text-gray-600">State-of-the-art facilities supporting 21st-century learning</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className={`bg-gradient-to-br ${themeClasses.gradient} rounded-3xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500`}>
                  <h3 className="text-3xl font-bold mb-6">Our Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-6 h-6" />
                      <span className="text-lg">95% Board Exam Success Rate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6" />
                      <span className="text-lg">25+ Academic Awards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6" />
                      <span className="text-lg">1200+ Happy Students</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-6 h-6" />
                      <span className="text-lg">Top-rated School in Region</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-6 h-6" />
                      <span className="text-lg">Strong Alumni Network</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs - Enhanced */}
      <section id="academics" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-600 px-4 py-2">Academic Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Excellence in Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education from Classes I-X with NCERT curriculum, focusing on conceptual understanding and practical application
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-orange-50 to-red-50 hover:scale-105">
              <CardHeader className="text-center pb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${themeClasses.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Primary Education</CardTitle>
                <CardDescription className="text-lg text-gray-600">Classes I - V</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Foundation in core subjects (NCERT)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Activity-based learning approach</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Creative arts and crafts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Physical education and sports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:scale-105">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <NotebookPen className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Middle School</CardTitle>
                <CardDescription className="text-lg text-gray-600">Classes VI - VIII</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Advanced NCERT curriculum</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Science laboratory experiments</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Computer education & digital literacy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Project-based learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-violet-50 hover:scale-105">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">High School</CardTitle>
                <CardDescription className="text-lg text-gray-600">Classes IX - X</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Complete NCERT syllabus coverage</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Science & Mathematics specialization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Board exam preparation (MP Board)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Career guidance & counseling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Portal Section */}
      <StudentPortalSection />

      {/* Modern Admissions Section */}
      <section id="admissions" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-indigo-100 text-indigo-600 px-4 py-2">Admissions Open</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join the RHS Family</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Begin your journey of academic excellence, personal growth, and future success with us
            </p>

            {/* Admission Process */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="relative">
                <div className={`bg-gradient-to-br ${themeClasses.gradient} rounded-2xl text-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Application</h3>
                  <p className="text-white/90">Submit your application form with necessary documents and photographs</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl text-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Assessment</h3>
                  <p className="text-white/90">Attend entrance test and interview for comprehensive evaluation</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl text-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Enrollment</h3>
                  <p className="text-white/90">Complete admission process and begin your educational journey</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <p className="text-xl text-gray-600 mb-8">
                Download our admission form and take the first step towards excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Admission Form
                </Button>
                <Link href="/#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  >
                    Contact Admissions Office
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-white/20 text-white px-4 py-2">Get in Touch</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                We're here to help and answer any questions you might have about admissions, academics, or school life
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${themeClasses.gradient} rounded-2xl flex items-center justify-center`}>
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Visit Our Campus</h4>
                      <p className="opacity-90 text-lg leading-relaxed">
                        Ravindra High School<br />
                        Waidhan, Singrauli<br />
                        Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Call Us</h4>
                      <p className="opacity-90 text-lg">
                        +91 9826986106<br />
                        Available Mon-Sat, 9 AM - 4 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Email Us</h4>
                      <p className="opacity-90 text-lg">
                        rhswaidhan@gmail.com<br />
                        inforhswaidhan@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold mb-8">School Hours</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-white/20">
                      <span className="text-lg font-medium">KG to 5th (Morning)</span>
                      <span className="text-lg">7:30 AM – 11:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-white/20">
                      <span className="text-lg font-medium">6th to 10th (Afternoon)</span>
                      <span className="text-lg">12:00 PM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-4">
                      <span className="text-lg font-medium">Sunday</span>
                      <span className="text-lg">Closed</span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white/10 rounded-2xl">
                    <h4 className="font-bold text-xl mb-4 flex items-center">
                      <Calendar className="w-6 h-6 mr-2" />
                      Office Hours
                    </h4>
                    <p className="opacity-90 text-lg">Monday - Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="opacity-75">For admissions and general inquiries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="mb-6">
                  <RHSLogo variant={logoStyle} size="md" theme={theme} onDark={true} />
                </div>
                <p className="opacity-90 mb-6 text-lg leading-relaxed">
                  Dedicated to delivering quality education and nurturing young minds for a brighter future in Waidhan, Singrauli.
                </p>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <span className="text-white font-bold">f</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                    <span className="text-white font-bold">t</span>
                  </div>
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                    <span className="text-white font-bold">y</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-6">Quick Links</h4>
                <ul className="space-y-4 text-lg opacity-90">
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
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-6">Resources</h4>
                <ul className="space-y-4 text-lg opacity-90">
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
                  <li>
                    <Link href="#contact" className="hover:text-blue-400 transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="opacity-75 text-lg">
                © 2025 Ravindra High School, Waidhan, Singrauli. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}