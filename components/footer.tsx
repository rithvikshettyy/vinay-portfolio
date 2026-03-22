'use client'

import Link from 'next/link'

import { Twitter, Instagram, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#0C0407]/10">
      <div className="max-w-[1440px] mx-auto px-8 py-[100px]">
        <div className="grid md:grid-cols-3 gap-16 mb-12">
          <div className="space-y-4">
            <h3 className="font-heading text-[32px] font-normal text-[#0C0407] tracking-tight">VINAY POKHARKAR</h3>
            <p className="text-[#666666] text-[16px] font-sans leading-[25.6px] tracking-[-0.16px]">
              Frontend Developer & Freelancer crafting beautiful digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-subheading text-[18px] font-semibold text-[#0C0407]">Navigation</h4>
            <nav className="space-y-3">
              <Link href="#work" className="block text-[#666666] font-sans text-[16px] hover:text-[#6366F1] transition-colors leading-[25.6px]">
                Work
              </Link>
              <Link href="#services" className="block text-[#666666] font-sans text-[16px] hover:text-[#6366F1] transition-colors leading-[25.6px]">
                Services
              </Link>
              <Link href="/" className="block text-[#666666] font-sans text-[16px] hover:text-[#6366F1] transition-colors leading-[25.6px]">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-subheading text-[18px] font-semibold text-[#0C0407]">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#6366F1] transition-colors flex items-center justify-center w-[44px] h-[44px] border border-[#0C0407]/15 rounded-none bg-white hover:border-[#6366F1]/30"
              >
                <Twitter className="w-[18px] h-[18px]" strokeWidth={2} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#6366F1] transition-colors flex items-center justify-center w-[44px] h-[44px] border border-[#0C0407]/15 rounded-none bg-white hover:border-[#6366F1]/30"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={2} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#6366F1] transition-colors flex items-center justify-center w-[44px] h-[44px] border border-[#0C0407]/15 rounded-none bg-white hover:border-[#6366F1]/30"
              >
                <Github className="w-[18px] h-[18px]" strokeWidth={2} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#6366F1] transition-colors flex items-center justify-center w-[44px] h-[44px] border border-[#0C0407]/15 rounded-none bg-white hover:border-[#6366F1]/30"
              >
                <Linkedin className="w-[18px] h-[18px]" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0C0407]/10 pt-8 flex flex-col md:flex-row items-center justify-between font-sans text-[14px] text-[#666666] leading-[21px] tracking-[-0.16px]">
          <p>&copy; {new Date().getFullYear()} Vinay Pokharkar. All rights reserved.</p>
          <p>Designed with minimalism in mind</p>
        </div>
      </div>
    </footer>
  )
}
