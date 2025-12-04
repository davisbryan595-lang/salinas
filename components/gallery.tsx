"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    alt: "Yard cleaning",
    category: "Yard Cleaning",
  },
  {
    src: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=800&q=80",
    alt: "Handyman work",
    category: "Handyman",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Junk removal",
    category: "Junk Removal",
  },
  {
    src: "https://images.unsplash.com/photo-1578926314433-c6e7ad7ffd38?w=800&q=80",
    alt: "Cleanout service",
    category: "Cleanout",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    alt: "Debris removal",
    category: "Yard Cleaning",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    alt: "Home repair",
    category: "Handyman",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    alt: "Property cleaning",
    category: "Cleanout",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Junk hauling",
    category: "Junk Removal",
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    alt: "Service delivery",
    category: "Services",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    alt: "Team work",
    category: "Handyman",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    alt: "Maintenance",
    category: "Yard Cleaning",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    alt: "Transformation",
    category: "Cleanout",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: "#2d3642" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#d4d9e0" }}>
            Browse our gallery of completed projects showcasing professional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage || "/placeholder.svg"} alt="Lightbox view" className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:opacity-90 transition"
              style={{ backgroundColor: "white", color: "#3a4451" }}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
