'use client'

const projects = [
  {
    title: 'E-Commerce Platform',
    year: '2024',
    tags: ['Web Design', 'Development', 'React'],
  },
  {
    title: 'SaaS Dashboard',
    year: '2024',
    tags: ['Design', 'Development', 'Next.js'],
  },
  {
    title: 'Brand Redesign',
    year: '2023',
    tags: ['Branding', 'Design', 'Development'],
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-white py-[100px] pt-[140px] overflow-hidden">


      <div className="max-w-[1440px] mx-auto px-8">
        <div className="space-y-16">
          <div className="space-y-4 flex flex-col items-center text-center relative z-10 w-full mb-8">
            <h2 className="text-[80px] md:text-[124px] font-heading font-normal uppercase leading-[0.9] md:leading-[90px] tracking-[-2.48px] text-[#0C0407]">
              Selected Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10 mt-16 md:mt-24">
            {/* Column 1: Date text and Button */}
            <div className="flex flex-col justify-center relative pb-16 md:pb-0 h-full isolate">
              {/* Saturated backdrop blobs guaranteed to render */}
              <div className="absolute top-[0%] left-[-30%] w-[120%] h-[100%] bg-[#818CF8] blur-[100px] rounded-full z-0 opacity-40 pointer-events-none"></div>
              <div className="absolute top-[10%] left-[10%] w-[120%] h-[100%] bg-[#C084FC] blur-[100px] rounded-full z-0 opacity-30 pointer-events-none"></div>
              <div className="absolute top-[30%] left-[40%] w-[100%] h-[100%] bg-[#F472B6] blur-[100px] rounded-full z-0 opacity-20 pointer-events-none"></div>

              <h3 className="text-[100px] lg:text-[120px] xl:text-[140px] font-heading font-normal leading-[0.85] tracking-[0.02em] text-[#0C0407] mb-8 relative z-10">
                2022-2026
              </h3>

              <button className="bg-[#0C0407] text-[#FFFFFF] px-[24px] py-[16px] w-fit flex items-center justify-center gap-3 font-sans text-[14px] font-semibold hover:opacity-90 transition-opacity z-10 mt-auto md:mb-[15%]">
                View All Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Columns 2 & 3: Project Tiles */}
            {[
              {
                title: 'PixelForge',
                tags: ['Development', 'Marketing', 'Branding'],
                bg: 'bg-[#E5E5E5]',
                 gradient: 'from-[#818CF8] via-[#C084FC] to-[#F472B6]'
              },
              {
                title: 'SyncCraft',
                tags: ['Branding', 'Web design', 'Development'],
                bg: 'bg-[#E5E5E5]',
                gradient: 'from-[#6E42FF] via-[#5B10FF] to-[#3B00C3]'
              }
            ].map((project, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col gap-5">
                {/* Tile Cover */}
                <div className="relative w-full aspect-square bg-[#EAEAEA] overflow-hidden">

                  {/* Abstract placeholder visual blending gradients */}
                  <div className={`w-[120%] h-[120%] absolute top-[-10%] left-[-10%] bg-gradient-to-br ${project.gradient} transition-transform duration-[800ms] ease-out group-hover:scale-[1.05] group-hover:rotate-2 opacity-90`}>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                  </div>

                  {/* Centered Hover Circular indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-20 pointer-events-none">
                    <div className="w-[90px] h-[90px] bg-[#0C0407]/90 rounded-full flex items-center justify-center text-white backdrop-blur-md shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tile Meta */}
                <div className="flex flex-col gap-1 z-10 relative">
                  <h4 className="text-[20px] font-sans font-semibold text-[#0C0407] leading-[1.2]">{project.title}</h4>
                  <div className="flex flex-wrap gap-4 mt-0.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[#555555] text-[14px] font-sans font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
