'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden min-h-screen pt-28 pb-12 flex flex-col justify-between">
      {/* Intense gradient splash on the right side as seen in screenshot */}
      <div className="absolute inset-0 pointer-events-none flex justify-end items-center right-[-30%] sm:right-[-20%] md:right-[-10%] z-0">
        <div className="w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] bg-gradient-to-tr from-[#FFB800] via-[#FF3500] to-[#E51200] opacity-[0.85] blur-[100px] md:blur-[160px] rounded-full transform translate-x-1/4" />
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto px-8 flex-1 flex flex-col justify-between z-10 pt-16 lg:pt-24">
        
        {/* Status Badge - Top Left */}
        <div className="flex items-center gap-3 w-fit mt-[-32px] md:mt-[-48px]">
          {/* Sonar Ping Container */}
          <div className="relative flex items-center justify-center w-8 h-8">
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes smooth-ping {
                0% { transform: scale(0.8); opacity: 0.8; }
                80%, 100% { transform: scale(2.4); opacity: 0; }
              }
              .animate-smooth-ping {
                animation: smooth-ping 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
              }
            `}} />
            
            {/* Base pale green ring */}
            <div className="absolute inset-0 rounded-full bg-[#00B872]/20"></div>
            
            {/* Expanding radar wave */}
            <div className="absolute inset-0 rounded-full bg-[#00B872]/50 animate-smooth-ping"></div>

            {/* Static bright center dot */}
            <div className="relative w-[10px] h-[10px] bg-[#00B872] rounded-full shadow-[0_0_10px_rgba(0,184,114,0.8)] z-10"></div>
          </div>
          <p className="text-[13px] sm:text-[14px] font-semibold text-[#0C0407] font-sans leading-[1.2]">
            Currently Available<br />for new project
          </p>
        </div>

        {/* Main heading - Bottom Left */}
        <div className="flex flex-col mb-12 sm:mb-24 mt-32 md:mt-auto relative z-10 w-full overflow-visible">
          <div className="flex flex-col mb-4 lg:mb-8">
            <h1 className="text-[8vw] sm:text-[60px] md:text-[80px] lg:text-[100px] font-sans font-bold leading-[0.9] tracking-[-0.05em] text-[#0C0407] m-0 p-0">
              Hey there, I’m
            </h1>
            <h1 className="text-[8vw] sm:text-[60px] md:text-[80px] lg:text-[100px] font-sans font-bold leading-[0.9] tracking-[-0.05em] text-[#0C0407] m-0 p-0">
              Vinay Pokharkar
            </h1>
          </div>
          <h1 className="text-[11.5vw] md:text-[12vw] xl:text-[164px] 2xl:text-[176px] font-heading font-normal uppercase leading-[0.8] tracking-normal text-[#0C0407] m-0 p-0 whitespace-nowrap lg:-ml-1 w-full relative">
            FRONTEND DEVELOPER
          </h1>
        </div>

      </div>
    </section>
  )
}
