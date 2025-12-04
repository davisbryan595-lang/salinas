"use client"

import { Phone } from "lucide-react"

export default function FloatingCTA() {
  return (
    <a
      href="tel:505-619-3506"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-110"
      style={{ backgroundColor: "#DC2626" }}
      title="Call SALINAS"
    >
      <Phone size={20} className="sm:w-6 sm:h-6" />
    </a>
  )
}
