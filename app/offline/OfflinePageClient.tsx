"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WifiOff, RefreshCw, Home, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function OfflinePageClient() {
  const router = useRouter()

  const handleRetry = () => {
    if (navigator.onLine) {
      router.refresh()
    } else {
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <WifiOff className="w-8 h-8 text-gray-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">You're Offline</CardTitle>
          <CardDescription className="text-gray-600">
            It looks like you've lost your internet connection. Don't worry, some content is still available!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4 text-left">
            <h3 className="font-semibold text-blue-900 mb-2">Available Offline:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Previously visited pages</li>
              <li>• School contact information</li>
              <li>• Basic school information</li>
              <li>• Cached images and content</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Button onClick={handleRetry} className="w-full" size="lg">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <Link href="/">
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Emergency Contact</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9826986106</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>rhswaidhan@gmail.com</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
