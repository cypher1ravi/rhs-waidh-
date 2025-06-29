"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ExternalLink, Users, AlertCircle, BookOpen, LogIn, LayoutDashboard,  } from "lucide-react"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

export default function StudentPortalSection() {
  const { getThemeClasses, getLayoutClasses } = useTheme()
  const themeClasses = getThemeClasses()
  const layoutClasses = getLayoutClasses()

  return (
    <section id="portal" className={`py-16 ${layoutClasses.sectionSpacing}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">School Portal Login</h2>
            <p className="text-gray-600">For Students, Parents, Teachers & Staff</p>
          </div>

          {/* Grid of 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Features Card */}
            <Card className={layoutClasses.cardStyle}>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${themeClasses.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <LayoutDashboard className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Portal Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>• View grades and attendance</li>
                  <li>• Check assignments and homework</li>
                  <li>• Pay school fees online</li>
                  <li>• School announcements and updates</li>
                  <li>• Parent-teacher communication</li>
                </ul>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className={layoutClasses.cardStyle}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Important Info</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li>All users share same portal with role-based access</li>
                  <li>Login credentials are provided by school</li>
                  <li>Contact school office for password issues</li>
                  <li>Do not share credentials with others</li>
                </ul>
              </CardContent>
            </Card>

            {/* Login Card */}
            <Card className={layoutClasses.cardStyle}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LogIn className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Login to Portal</CardTitle>
                <CardDescription className="text-sm text-gray-600 mt-2">
                  Use your credentials provided by the school to access the portal
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link
                  href="https://osms.mponline.gov.in/Portal/SMS/Home/SchoolLogin.aspx?ReqSchId=rtuKwB6rRa04MKr82BdLhA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className={`mt-4 bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white group ${layoutClasses.buttonStyle}`}
                  >
                    Login to Portal
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
