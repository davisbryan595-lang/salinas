"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur border-b"
      style={{ backgroundColor: "rgba(58, 68, 81, 0.95)", borderColor: "#556170" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src="/images/salinas.jpg" alt="SALINAS Logo" className="w-12 h-12 object-contain" />
            <span className="text-white font-bold text-lg hidden sm:inline">SALINAS</span>
          </div>

          <div className="hidden md:flex gap-8">
            {["services", "gallery", "why-choose", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="transition hover:text-white"
                style={{ color: "#d4d9e0" }}
              >
                {section === "why-choose" ? "Why Us" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="tel:505-619-3506"
              className="text-white px-6 py-2 rounded-full font-semibold transition hover:opacity-90"
              style={{ backgroundColor: "#e8e8e8", color: "#3a4451" }}
            >
              Call Now
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: "#556170" }}>
            {["services", "gallery", "why-choose", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 hover:text-white transition"
                style={{ color: "#d4d9e0" }}
              >
                {section === "why-choose" ? "Why Us" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <a
              href="tel:505-619-3506"
              className="block w-full text-white px-4 py-2 rounded-lg mt-4 text-center font-semibold"
              style={{ backgroundColor: "#e8e8e8", color: "#3a4451" }}
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
