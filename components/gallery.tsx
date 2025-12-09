"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/salinasG/IMG-20251204-WA0072.jpg",
    alt: "Project 1",
    category: "Services",
  },
  {
    src: "/salinasG/IMG-20251204-WA0073.jpg",
    alt: "Project 2",
    category: "Services",
  },
  {
    src: "/salinasG/IMG-20251204-WA0074.jpg",
    alt: "Project 3",
    category: "Services",
  },
  {
    src: "/salinasG/IMG-20251204-WA0075.jpg",
    alt: "Project 4",
    category: "Services",
  },
  {
    src: "/salinasG/IMG-20251204-WA0076.jpg",
    alt: "Project 5",
    category: "Services",
  },
  {
    src: "/salinasG/IMG-20251204-WA0077.jpg",
    alt: "Project 6",
    category: "Services",
  },
  {
    src: "/salinasG/IMG-20251204-WA0078.jpg",
    alt: "Project 7",
    category: "Services",
  },
  {
    src: "/salinasG/IMG-20251204-WA0079.jpg",
    alt: "Project 8",
    category: "Services",
  },
  {
    src: "/salinasG/IMG-20251204-WA0080.jpg",
    alt: "Project 9",
    category: "Services",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: "#2d3642" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Our Work</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#d4d9e0" }}>
            Browse our gallery of completed projects showcasing professional results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div
                className="absolute inset-0 group-hover:opacity-100 transition duration-300"
                style={{ backgroundColor: "rgba(58, 68, 81, 0.6)" }}
              ></div>
              <div className="absolute top-4 right-4">
                <span
                  className="text-white px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "#e8e8e8", color: "#3a4451" }}
                >
                  {image.category}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div
                  className="text-sm rounded-full font-semibold px-6 py-2"
                  style={{ backgroundColor: "white", color: "#3a4451" }}
                >
                  View
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage || "/placeholder.svg"} alt="Lightbox view" className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 rounded-full hover:opacity-90 transition"
              style={{ backgroundColor: "white", color: "#3a4451" }}
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
