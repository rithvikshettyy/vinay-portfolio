'use client'

import { Maximize, Aperture, Asterisk, Grid, Component } from 'lucide-react'

const brands = [
  { name: 'ZestyBite', icon: Component },
  { name: 'CozyNest', icon: Maximize },
  { name: 'Energetix', icon: Aperture },
  { name: 'DigiMinds', icon: Asterisk },
  { name: 'LuxeAura', icon: Grid },
  { name: 'PureGlow', icon: Component },
]

export default function Brands() {
  return (
    <section className="w-full relative py-12 pt-[40px] md:pt-[60px] pb-[80px] bg-white overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes custom-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          animation: custom-marquee 25s linear infinite;
          will-change: transform;
        }
      `}} />
      <div className="flex w-max whitespace-nowrap marquee-container">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 md:gap-[120px] px-8 md:px-[60px] items-center">
            {brands.map((brand, idx) => {
              const Icon = brand.icon;
              return (
                <div key={`${i}-${idx}`} className="flex items-center gap-4 text-[#555555]">
                  <Icon className="w-8 h-8" strokeWidth={2.5} />
                  <span className="text-[28px] md:text-[32px] font-sans font-bold tracking-tight">{brand.name}</span>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
