"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", address: "", service: "", bestDay: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will contact you shortly.")
    setFormData({ name: "", phone: "", email: "", address: "", service: "", bestDay: "" })
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">Get In Touch</h2>
            <p className="text-base sm:text-lg mb-8 sm:mb-12" style={{ color: "#d4d9e0" }}>
              Ready to get your project started? Contact us today for a free quote and professional service.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: Phone, label: "Phone", value: "505-619-3506", href: "tel:505-619-3506" },
                {
                  icon: Mail,
                  label: "Email",
                  value: "salinasbusiness2015@gmail.com",
                  href: "mailto:salinasbusiness2015@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Service Area",
                  value: "Los Lunas, Albuquerque, Rio Rancho, Belen, Bernalillo, Eldorado at Santa Fe, NM",
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0" style={{ color: "#e8e8e8" }}>
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="hover:text-white transition" style={{ color: "#d4d9e0" }}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ color: "#d4d9e0" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#2d3642", borderColor: "#556170" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                { name: "phone", label: "Phone", type: "tel", placeholder: "Your phone number" },
                { name: "email", label: "Email", type: "email", placeholder: "Your email" },
                { name: "address", label: "Address/City", type: "text", placeholder: "Your address" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-white font-semibold mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg px-4 py-3 focus:outline-none transition border text-white"
                    style={{ backgroundColor: "#3a4451", borderColor: "#556170" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#556170")}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="block text-white font-semibold mb-2">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg px-4 py-3 focus:outline-none transition border text-white"
                  style={{ backgroundColor: "#3a4451", borderColor: "#556170" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#556170")}
                >
                  <option value="">Select a service</option>
                  <option value="junk-removal">Junk Removal & Hauling</option>
                  <option value="cleanout">Full Cleanout</option>
                  <option value="yard-cleaning">Yard Cleaning</option>
                  <option value="handyman">Handyman Repairs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Best Day to Contact</label>
                <input
                  type="text"
                  name="bestDay"
                  value={formData.bestDay}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 focus:outline-none transition border text-white"
                  style={{ backgroundColor: "#3a4451", borderColor: "#556170" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#e8e8e8")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#556170")}
                  placeholder="E.g., Monday-Friday"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition transform hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: "#e8e8e8", color: "#3a4451" }}
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
