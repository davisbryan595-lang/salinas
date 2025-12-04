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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">SALINAS</h1>

        {/* Updated text color to white */}
        <p className="text-xl sm:text-2xl mb-2 font-light text-white">
          Yard Cleaning • Handyman • Junk Removal & Hauling
        </p>

        <div
          className="mb-12 inline-block text-white px-6 py-3 rounded-full font-semibold"
          style={{ backgroundColor: "#e8e8e8", color: "#3a4451" }}
        >
          Serving All of Central New Mexico
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#e8e8e8", color: "#3a4451" }}
          >
            Get Free Quote <ArrowRight size={20} />
          </button>
          <a
            href="tel:505-619-3506"
            className="text-white px-8 py-4 rounded-full font-semibold transition border-2 border-white hover:opacity-90"
          >
            <Phone className="inline mr-2" size={20} />
            Call 505-619-3506
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-sm mb-2">Scroll to explore</div>
          {/* Updated arrow color to match logo white accent */}
          <div style={{ color: "#e8e8e8" }}>↓</div>
        </div>
      </div>
    </section>
  )
}
