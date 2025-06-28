"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Monitor, Users, BookOpen, Shield, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

export default function StudentPortalSection() {
  const { getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()

  return (
    <section id="portal" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Simple Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Online{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeClasses.gradient}`}>
                Student Portal
              </span>
            </h2>
            <p className="text-gray-600">Access your academic information anytime, anywhere</p>
          </div>

          {/* Main Portal Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Portal Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${themeClasses.gradient} rounded-lg flex items-center justify-center`}
                  >
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">MP Online Portal</h3>
                    <p className="text-sm text-gray-600">Government School Management System</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">View grades and academic progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Check attendance records</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-700">Secure access for students & parents</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Online 24/7</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Real-time updates</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Access Button */}
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ready to Login?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Access your student portal with credentials provided by school
                    </p>
                  </div>

                  <Link
                    href="https://osms.mponline.gov.in/Portal/SMS/Home/SchoolLogin.aspx?ReqSchId=rtuKwB6rRa04MKr82BdLhA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className={`w-full bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white group`}
                    >
                      Open Portal
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </div>
    </section>
  )
}
