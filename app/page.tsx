"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import WhyChoose from "@/components/why-choose"
import ServiceArea from "@/components/service-area"
import Contact from "@/components/contact"
import FloatingCTA from "@/components/floating-cta"
import Preloader from "@/components/preloader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyChoose />
      <ServiceArea />
      <Contact />
      <FloatingCTA />
    </main>
  )
}
