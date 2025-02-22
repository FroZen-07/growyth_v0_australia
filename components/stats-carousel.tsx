"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const stats = [
  { image: "/1.jpg", caption: "TechTalk VC" },
  { image: "/2.jpg", caption: "StartupGrowth" },
  { image: "/3.jpg", caption: "InvestorInsights" },
  { image: "/4.jpg", caption: "FutureFounders" },
  { image: "/5.jpg", caption: "VentureVoices" },
  { image: "/6.jpg", caption: "InnovativeInvestors" },
]

export function StatsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden w-full" style={{ height: "650px" }}>
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {stats.map((stat, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-red-950/20 rounded-xl p-4 flex flex-col items-center">
              <Image
                src={stat.image}
                width={800}
                height={500}
                alt={`${stat.caption} statistics`}
                className="rounded-lg mb-2"
              />
              {/* Uncomment below to show caption */}
              {/* <p className="text-purple-400 font-semibold">{stat.caption}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
