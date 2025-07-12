"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ExternalLink, Users, AlertCircle, BookOpen, LogIn, LayoutDashboard, Shield, CreditCard, Bell } from "lucide-react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

export default function StudentPortalSection() {
  const { getThemeClasses, getLayoutClasses } = useTheme()
  const themeClasses = getThemeClasses()
  const layoutClasses = getLayoutClasses()

  return (
    <section id="portal" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mb-6">
              <LayoutDashboard className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Student Portal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access your academic information, assignments, and school updates through our comprehensive digital platform
            </p>
          </div>

          {/* Portal Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Academic Records</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">View grades, attendance, and academic progress reports</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Fee Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">Pay school fees online and view payment history</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">Stay updated with school news and important notices</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">Connect with teachers and school administration</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Portal Access */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Portal Access Card */}
            <div className="lg:col-span-2">
              <Card className="border-0 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <LogIn className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">Access Your Portal</CardTitle>
                      <CardDescription className="text-blue-100">
                        Login with your school-provided credentials
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Our secure portal provides students, parents, and teachers with 24/7 access to academic information, 
                    assignments, fee management, and school communications.
                  </p>
                  <Link
                    href="https://osms.mponline.gov.in/Portal/SMS/Home/SchoolLogin.aspx?ReqSchId=rtuKwB6rRa04MKr82BdLhA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Login to Portal
                      <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Important Information */}
            <Card className="border-0 bg-white shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Important Info</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Secure Access</p>
                      <p className="text-xs text-gray-600">All data is encrypted and protected</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Role-Based Access</p>
                      <p className="text-xs text-gray-600">Different access levels for students, parents, and teachers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <LogIn className="w-5 h-5 text-purple-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Need Help?</p>
                      <p className="text-xs text-gray-600">Contact school office for login assistance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}