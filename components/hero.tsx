"use client"

import { ArrowRight, Phone } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(58, 68, 81, 0.8)" }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 leading-tight">SALINAS</h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light text-white">
          Yard Cleaning • Handyman • Junk Removal & Hauling
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#e8e8e8", color: "#3a4451" }}
          >
            Get Free Quote <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </button>
          <a
            href="tel:505-619-3506"
            className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition border-2 border-white hover:opacity-90 flex items-center justify-center"
          >
            <Phone className="mr-2" size={18} className="sm:w-5 sm:h-5" />
            Call 505-619-3506
          </a>
        </div>

        <div className="hidden sm:absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-sm mb-2">Scroll to explore</div>
          <div style={{ color: "#e8e8e8" }}>↓</div>
        </div>
      </div>
    </section>
  )
}
