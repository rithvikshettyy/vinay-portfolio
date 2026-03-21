'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: '5 Design Principles That Elevate Your Projects',
    date: 'March 15, 2025',
    excerpt:
      'Discover the fundamental design principles that transform ordinary projects into exceptional digital experiences. Learn how contrast, balance, and hierarchy shape user perception.',
    category: 'Design',
  },
  {
    title: 'Lessons Learned From My Most Challenging Project',
    date: 'March 10, 2025',
    excerpt:
      'Reflecting on a complex project that pushed my boundaries. This article shares key insights, technical challenges overcome, and how they shaped my approach to future work.',
    category: 'Development',
  },
  {
    title: 'How Storytelling Enhances Your Design and Branding',
    date: 'March 5, 2025',
    excerpt:
      'Storytelling isn\'t just for marketing. Discover how weaving narratives into your design creates emotional connections with users and strengthens brand loyalty.',
    category: 'Strategy',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-[#FFFFFF] py-[100px] pt-[140px] border-t border-[#0C0407]/10">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-[80px] md:text-[124px] font-heading font-normal uppercase leading-[0.9] md:leading-[90px] tracking-[-2.48px] text-[#0C0407]">
              Latest Articles
            </h2>
            <p className="text-[#666666] max-w-2xl text-[16px] font-sans leading-[25.6px] tracking-[-0.16px]">
              Insights, tips, and thoughts on design, development, and digital strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <article
                key={idx}
                className="group cursor-pointer p-6 border border-[#0C0407]/10 rounded-none hover:border-[#0C0407]/30 transition-all hover:shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-[28px]">
                    <span className="text-[12px] font-sans font-semibold text-[#0C0407] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-[14px] font-sans text-[#666666]">{article.date}</span>
                  </div>
                  <h3 className="text-[24px] font-subheading font-semibold text-[#0C0407] leading-[28.8px] tracking-[-0.96px] group-hover:text-[#FF2200] transition-colors mt-[12px]">
                    {article.title}
                  </h3>
                  <p className="text-[16px] font-sans text-[#666666] leading-[25.6px] tracking-[-0.16px] mt-[12px]">
                    {article.excerpt}
                  </p>
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-[14px] font-sans font-medium text-[#0C0407] hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4 text-[#FF2200]" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
