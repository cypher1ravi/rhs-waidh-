"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Camera, ImageIcon, Award } from "lucide-react"
import ImageGallery from "@/components/image-gallery"
import { useTheme } from "@/contexts/theme-context"

export default function GalleryPage() {
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
                <Camera className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              School{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeClasses.gradient}`}>Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our beautiful campus, modern facilities, and memorable moments from school life at Ravindra High
              School.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${themeClasses.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Photos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Events Covered</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Achievements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Years of Memories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`${layoutClasses.sectionSpacing} bg-gradient-to-br from-gray-50 to-blue-50`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Photo Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse through our collection of photos showcasing our infrastructure, facilities, events, and student
                activities.
              </p>
            </div>

            <ImageGallery />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${layoutClasses.sectionSpacing} bg-white`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Visit Our Campus?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a visit to experience our facilities and campus environment in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${themeClasses.gradient} hover:opacity-90 text-white ${layoutClasses.buttonStyle}`}
              >
                Schedule Campus Visit
              </Button>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-${themeClasses.primary} text-${themeClasses.primary} hover:bg-${themeClasses.primary}/5 ${layoutClasses.buttonStyle}`}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
