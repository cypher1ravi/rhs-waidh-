"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const searchResults = [
    {
      title: "Admission Process",
      section: "admissions",
      description: "Learn about our admission requirements and process",
    },
    { title: "Academic Programs", section: "academics", description: "Explore our comprehensive academic offerings" },
    { title: "Faculty Information", section: "faculty", description: "Meet our experienced teaching staff" },
    { title: "School Facilities", section: "gallery", description: "View our modern facilities and infrastructure" },
    { title: "Contact Information", section: "contact", description: "Get in touch with us for any inquiries" },
  ]

  const filteredResults = searchResults.filter(
    (result) =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSearch = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <>
      {/* Search Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 z-40 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for information..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-lg"
                  autoFocus
                />
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="max-h-80 overflow-y-auto">
              {searchQuery && (
                <div className="p-4">
                  {filteredResults.length > 0 ? (
                    <div className="space-y-3">
                      {filteredResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(result.section)}
                          className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900">{result.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No results found for "{searchQuery}"</p>
                  )}
                </div>
              )}

              {!searchQuery && (
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Popular Searches</h3>
                  <div className="space-y-2">
                    {searchResults.slice(0, 3).map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(result.section)}
                        className="w-full text-left p-2 hover:bg-gray-50 rounded transition-colors"
                      >
                        <span className="text-gray-700">{result.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
