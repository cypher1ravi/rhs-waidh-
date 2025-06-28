"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, Award, BookOpen, GraduationCap } from "lucide-react"
import FacultySection from "@/components/faculty-section"
import { useTheme } from "@/contexts/theme-context"

export default function FacultyPage() {
  const { getThemeClasses, getLayoutClasses } = useTheme()
  const themeClasses = getThemeClasses()
  const layoutClasses = getLayoutClasses()

  return (
    <div className={`min-h-screen ${layoutClasses.heroBackground}`}>
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className={`${layoutClasses.sectionSpacing} pt-20`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div
                className={`w-20 h-20 bg-gradient-to-br ${themeClasses.gradient} rounded-full flex items-center justify-center`}
              >
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeClasses.gradient}`}>Faculty</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Meet our dedicated team of experienced educators who are committed to nurturing young minds and fostering
              academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Teaching Philosophy</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Ravindra High School, our faculty believes in creating an environment where every student can
                  thrive. We combine traditional teaching methods with modern pedagogical approaches to ensure
                  comprehensive learning.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-6 h-6 bg-${themeClasses.primary}/10 rounded-full flex items-center justify-center mt-1`}
                    >
                      <BookOpen className={`w-3 h-3 text-${themeClasses.primary}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Student-Centered Learning</h4>
                      <p className="text-gray-600 text-sm">
                        Personalized attention to each student's unique learning style
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <GraduationCap className="w-3 h-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Continuous Professional Development</h4>
                      <p className="text-gray-600 text-sm">Regular training and skill enhancement for our educators</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <Award className="w-3 h-3 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Excellence in Education</h4>
                      <p className="text-gray-600 text-sm">Commitment to maintaining high academic standards</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`bg-gradient-to-br ${themeClasses.gradient} rounded-2xl p-8 text-white`}>
                <h3 className="text-2xl font-bold mb-4">Faculty Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>100% qualified and certified teachers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Average 15+ years of teaching experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Regular workshops and training programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Student-teacher ratio of 20:1</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Multiple award-winning educators</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className={`${layoutClasses.sectionSpacing} bg-gradient-to-br from-gray-50 to-blue-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Teachers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced and dedicated faculty members are the backbone of our educational excellence.
              </p>
            </div>

            <FacultySection />
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className={`${layoutClasses.sectionSpacing} bg-white`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Teaching Team</h2>
            <p className="text-xl text-gray-600 mb-8">
              Are you passionate about education? We're always looking for dedicated educators to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white ${layoutClasses.buttonStyle}`}
              >
                View Career Opportunities
              </Button>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-${themeClasses.primary} text-${themeClasses.primary} hover:bg-${themeClasses.primary}/5 ${layoutClasses.buttonStyle}`}
                >
                  Contact HR
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
