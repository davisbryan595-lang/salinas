"use client"

import { MapPin } from "lucide-react"

const cities = ["Los Lunas", "Albuquerque", "Rio Rancho", "Belen", "Bernalillo", "Eldorado at Santa Fe"]

export default function ServiceArea() {
  return (
    <section className="py-24" style={{ backgroundColor: "#2d3642" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Service Area</h2>
          <p className="text-base sm:text-lg md:text-xl font-light" style={{ color: "#d4d9e0" }}>
            From Los Lunas to Eldorado at Santa Fe – We Cover It All
          </p>
        </div>

        <div className="mb-12 relative rounded-2xl overflow-hidden border h-48 sm:h-64 md:h-80" style={{ borderColor: "#556170" }}>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80)" }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: "rgba(58, 68, 81, 0.6)" }}
            >
              <div className="text-center">
                <MapPin className="mx-auto mb-4 float-up" size={64} style={{ color: "#e8e8e8" }} />
                <p className="text-white text-2xl font-bold">Central New Mexico Service Area</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="rounded-xl p-3 sm:p-4 text-center border hover:transition cursor-pointer"
              style={{ backgroundColor: "#3a4451", borderColor: "#556170" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#556170")}
            >
              <p className="text-white font-semibold text-sm sm:text-base">{city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
