"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "School Building Front View",
    title: "Main School Building",
    category: "Infrastructure",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Science Laboratory",
    title: "Modern Science Lab",
    category: "Facilities",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Computer Lab",
    title: "Computer Laboratory",
    category: "Facilities",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Library",
    title: "School Library",
    category: "Facilities",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Playground",
    title: "Sports Ground",
    category: "Sports",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Classroom",
    title: "Modern Classroom",
    category: "Infrastructure",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Annual Function",
    title: "Annual Day Celebration",
    category: "Events",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sports Day",
    title: "Sports Day Activities",
    category: "Events",
  },
  {
    id: 9,
    src: "https://cypher1ravi.github.io/Rhswaidhan/img/WhatsApp%20Image%202023-05-26%20at%2012.13.00%20PM.jpeg",
    alt: "Science Exhibition",
    title: "Science Fair",
    category: "Events",
  },
]

const categories = ["All", "Infrastructure", "Facilities", "Sports", "Events"]

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id))
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="px-6 py-2"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
              <p className="text-sm text-gray-600">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="relative">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
