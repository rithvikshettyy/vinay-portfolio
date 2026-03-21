'use client'

import { Zap, Lightbulb, TrendingUp, Target } from 'lucide-react'

const reasons = [
  {
    title: 'On-Time Delivery',
    description:
      'Crafting visually stunning, user-centered websites tailored to your brand and business goals with meticulous attention to detail.',
    icon: Target,
  },
  {
    title: 'Creative Innovation',
    description:
      'Building websites optimized for all devices, from desktop to mobile, with ongoing support and maintenance included.',
    icon: Lightbulb,
  },
  {
    title: 'Continuous Learning',
    description:
      'Developing impactful logos and cohesive visual identities that resonate with your target audience and market positioning.',
    icon: Zap,
  },
  {
    title: 'Proven Results',
    description:
      'Optimizing your website and content to rank higher on search engines and attract organic traffic and qualified leads.',
    icon: TrendingUp,
  },
]

export default function Why() {
  return (
    <section id="about" className="bg-[#FFFFFF] py-[100px] pt-[140px] border-t border-[#0C0407]/10">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column */}
          <div className="space-y-16">
            <h2 className="text-[80px] md:text-[124px] font-heading font-normal uppercase leading-[0.9] md:leading-[90px] tracking-[-2.48px] text-[#0C0407]">
              Why<br />Choose Me?
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {reasons.map((reason) => {
                const Icon = reason.icon
                return (
                  <div key={reason.title} className="flex flex-col">
                    <div className="w-[52px] h-[52px] bg-[#F7F7F7] rounded-none flex items-center justify-center mb-[28px]">
                      <Icon className="w-6 h-6 text-[#0C0407]" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-[12px]">
                      <h3 className="text-[24px] font-subheading font-semibold text-[#0C0407] leading-[28.8px] tracking-[-0.96px]">
                        {reason.title}
                      </h3>
                      <p className="text-[#666666] text-[16px] font-sans leading-[25.6px] tracking-[-0.16px]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Portrait Image */}
          <div className="relative h-full min-h-[600px]">
            <div className="absolute inset-0 bg-[#F7F7F7] rounded-none flex items-center justify-center overflow-hidden">
               <div className="text-center">
                 <svg className="w-16 h-16 mx-auto mb-4 text-[#0C0407]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
                 <span className="text-[#666666] font-sans text-[14px]">Portrait Image</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
