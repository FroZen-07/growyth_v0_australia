"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Studio Growth has been instrumental in scaling our podcast audience. Their strategies have helped us connect with high-profile guests and increase our listener base tenfold.",
    author: "Sarah J., Tech Startup Founder",
  },
  {
    quote:
      "The YouTube optimization techniques provided by Studio Growth have dramatically improved our channel's visibility. We're now reaching our target audience more effectively than ever.",
    author: "Michael R., VC Partner",
  },
  {
    quote:
      "Working with Studio Growth has been a game-changer for our content strategy. Their team's expertise in both podcast and YouTube production is unmatched.",
    author: "Emily L., Marketing Director",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 3000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="text-center min-h-[200px] flex flex-col justify-center">
        <p className="text-xl md:text-2xl italic mb-4 transition-opacity duration-500">
          "{testimonials[currentIndex].quote}"
        </p>
        <p className="text-red-400 font-semibold transition-opacity duration-500">
          {testimonials[currentIndex].author}
        </p>
      </div>
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={prevTestimonial} className="text-red-400 bg-black border-red-400">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button variant="outline" onClick={nextTestimonial} className="text-red-400 bg-black border-red-400">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

