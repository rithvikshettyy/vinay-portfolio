'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    // Check initial scroll position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#0C0407]/10 py-2' : 'bg-transparent py-4'}`}>
      <nav className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">
        <Link href="/" className="text-[2rem] font-heading font-normal tracking-tight text-[#0C0407]">
          VINAY
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Home', href: '/' },
            { name: 'About me', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Projects', href: '/projects' },
            { name: 'Blog', href: '/blog' },
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className="nav-link font-sans text-[14px] transition-colors text-[#666666] hover:text-[#0C0407] aria-[current=page]:text-[#6366F1]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/contact" 
            className="group relative overflow-hidden bg-transparent border-[1.5px] border-[#0C0407] text-[#0C0407] px-7 py-3 text-[14px] font-semibold transition-colors duration-[400ms] hover:text-white flex items-center gap-2 rounded-none"
          >
            {/* Dark background wipe element */}
            <span className="absolute inset-0 bg-[#0C0407] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></span>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                {/* Outgoing arrow */}
                <svg className="w-4 h-4 absolute transform group-hover:translate-x-[150%] group-hover:-translate-y-[150%] transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
                </svg>
                {/* Incoming arrow */}
                <svg className="w-4 h-4 absolute transform -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#0C0407]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-8 py-4 space-y-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className={`block font-sans text-[14px] ${pathname === '/' ? 'text-[#6366F1]' : 'text-[#0C0407]'}`}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className={`block font-sans text-[14px] ${pathname === '/about' ? 'text-[#6366F1]' : 'text-[#0C0407]'}`}>About me</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className={`block font-sans text-[14px] ${pathname === '/services' ? 'text-[#6366F1]' : 'text-[#0C0407]'}`}>Services</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className={`block font-sans text-[14px] ${pathname === '/projects' ? 'text-[#6366F1]' : 'text-[#0C0407]'}`}>Projects</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className={`block font-sans text-[14px] ${pathname === '/blog' ? 'text-[#6366F1]' : 'text-[#0C0407]'}`}>Blog</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="w-full inline-block text-center bg-[#0C0407] text-[#FFFFFF] px-[16px] py-[12px] text-[14px] font-semibold border-[0.8px] border-[#0C0407] rounded-none">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
