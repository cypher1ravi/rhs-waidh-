"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Users } from "lucide-react"
import Link from "next/link"

export default function StudentPortalSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Portal Access</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our online school management system for grades, attendance, assignments, fee payments and more
              through the official MP Online portal.
            </p>
          </div>

          {/* Single Portal Card */}
          <div className="max-w-md mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 group border-2 border-blue-100">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">School Portal Login</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  For Students, Parents, Teachers & Staff
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Access Features:</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• View grades and attendance</li>
                    <li>• Check assignments and homework</li>
                    <li>• Pay school fees online</li>
                    <li>• School announcements and updates</li>
                    <li>• Parent-teacher communication</li>
                  </ul>
                </div>

                <Link
                  href="https://osms.mponline.gov.in/Portal/SMS/Home/SchoolLogin.aspx?ReqSchId=rtuKwB6rRa04MKr82BdLhA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-white group-hover:shadow-lg transition-all duration-300 py-3 text-lg">
                    Login to Portal
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• All users (students, parents, teachers) use the same portal with different access levels</li>
                  <li>• Login credentials are provided by the school administration office</li>
                  <li>• For technical support or forgotten passwords, contact the school office</li>
                  <li>• Keep your login credentials secure and do not share with others</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help with Portal Access?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact School Office
                </Button>
              </Link>
              <Link href="tel:+911234567890">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Call for Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
