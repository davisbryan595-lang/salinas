"use client"

import { CheckCircle } from "lucide-react"

const reasons = [
  { title: "Locally Owned & Operated", description: "Supporting your community with trusted, reliable service" },
  { title: "Licensed & Insured", description: "Full coverage and professional credentials for peace of mind" },
  { title: "Same-Day & Next-Day Service", description: "Fast response times to meet your urgent needs" },
  { title: "Upfront Flat-Rate Pricing", description: "No hidden fees, transparent pricing from the start" },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Why Choose SALINAS?</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#d4d9e0" }}>
            Quality service you can trust, backed by years of experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 border hover:transition"
              style={{ backgroundColor: "#2d3642", borderColor: "#556170" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#556170")}
            >
              <div className="mb-4" style={{ color: "#e8e8e8" }}>
                <CheckCircle size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#d4d9e0" }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
