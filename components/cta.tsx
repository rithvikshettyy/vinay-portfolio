'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="bg-[#FFFFFF] py-[100px] pt-[140px] border-t border-[#0C0407]/10">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="bg-[#F7F7F7] rounded-none p-16 md:p-24 space-y-12 text-center border border-[#0C0407]/10 relative overflow-hidden">
          {/* Subtle glow effect behind CTA */}
          <div className="absolute top-[-50%] left-[20%] w-[60%] h-[150%] bg-[rgba(59,130,246,0.05)] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="space-y-6 relative">
            <h2 className="text-[80px] md:text-[124px] font-heading font-normal uppercase leading-[0.9] md:leading-[90px] tracking-[-2.48px] text-[#0C0407]">
              Let's Talk!
            </h2>
            <p className="text-[16px] text-[#666666] font-sans leading-[25.6px] tracking-[-0.16px] max-w-2xl mx-auto mt-[24px]">
              I'd love to hear about your next project. Let's create something amazing together.
            </p>
          </div>

          <Link
            href="mailto:hello@vinaypokharkar.com"
            className="inline-flex items-center justify-center gap-3 px-[24px] py-[16px] bg-[#0C0407] text-[#FFFFFF] border-[0.8px] border-[#0C0407] rounded-none font-sans text-[14px] font-semibold hover:opacity-90 transition-opacity relative"
          >
            Say Hello
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
