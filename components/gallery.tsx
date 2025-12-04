"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/29192615/pexels-photo-29192615.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Yard cleaning with shovel and garbage bag",
    category: "Yard Cleaning",
  },
  {
    src: "https://images.pexels.com/photos/7641255/pexels-photo-7641255.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Handyman fixing light bulb with toolbox",
    category: "Handyman",
  },
  {
    src: "https://images.pexels.com/photos/7006131/pexels-photo-7006131.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Classic red truck junk removal vehicle",
    category: "Junk Removal",
  },
  {
    src: "https://images.pexels.com/photos/8580732/pexels-photo-8580732.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Organized boxes for home cleanout keep donate trash",
    category: "Cleanout",
  },
  {
    src: "https://images.pexels.com/photos/4162016/pexels-photo-4162016.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Lawn mower cutting green grass",
    category: "Yard Cleaning",
  },
  {
    src: "https://images.pexels.com/photos/6196240/pexels-photo-6196240.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Worker with cleaning equipment next to service van",
    category: "Handyman",
  },
  {
    src: "https://images.pexels.com/photos/8961300/pexels-photo-8961300.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Professional discussing home renovation",
    category: "Cleanout",
  },
  {
    src: "https://images.pexels.com/photos/30869138/pexels-photo-30869138.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Trash organization wooden letters",
    category: "Junk Removal",
  },
  {
    src: "https://images.pexels.com/photos/4487515/pexels-photo-4487515.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Professional team in service van with boxes",
    category: "Services",
  },
  {
    src: "https://images.pexels.com/photos/735319/pexels-photo-735319.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Interior renovation work by professional painter",
    category: "Handyman",
  },
  {
    src: "https://images.pexels.com/photos/5090640/pexels-photo-5090640.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Workshop storage organization",
    category: "Yard Cleaning",
  },
  {
    src: "https://images.pexels.com/photos/8961300/pexels-photo-8961300.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
    alt: "Home renovation transformation project",
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
