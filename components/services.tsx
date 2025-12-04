"use client"

import { Trash2, Home, Leaf, Wrench, Zap } from "lucide-react"

const services = [
  {
    icon: Trash2,
    title: "Junk Removal & Hauling",
    description: "Professional removal of all types of junk and unwanted items from your property.",
  },
  {
    icon: Home,
    title: "Full Cleanouts",
    description: "Complete cleanouts for homes, garages, basements, and estate properties.",
  },
  {
    icon: Leaf,
    title: "Yard Cleaning & Debris",
    description: "Comprehensive yard cleaning and debris removal services.",
  },
  {
    icon: Wrench,
    title: "Handyman Repairs",
    description: "Professional handyman services for all your home repair needs.",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    description: "We offer same-day and next-day service for your convenience.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#d4d9e0" }}>
            Complete solutions for all your yard cleaning, handyman, and junk removal needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 hover:transition duration-300 transform hover:-translate-y-2 cursor-pointer border"
                style={{ backgroundColor: "#2d3642", borderColor: "#556170" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#556170")}
              >
                <div className="mb-4 group-hover:scale-110 transition" style={{ color: "#e8e8e8" }}>
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#d4d9e0" }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
