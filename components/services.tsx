'use client'

const services = [
  {
    title: 'Web Development',
    items: ['Front-End\nDevelopment', 'Back-End\nDevelopment', 'E-Commerce\nDevelopment'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop'
  },
  {
    title: 'Brand Identity',
    items: ['Logos & Visual\nIdentity', 'Colors &\nTypography', 'Brand\nGuidelines'],
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=2574&auto=format&fit=crop'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-[#FFFFFF] py-[100px] pt-[140px] overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-8 relative isolate">
        
        {/* Intense Central Background Glows */}
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 w-[70%] h-[70%] bg-[#FF3B00] blur-[150px] rounded-full z-0 opacity-90 pointer-events-none"></div>
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[40%] h-[40%] bg-[#FFB800] blur-[120px] rounded-full z-0 opacity-80 pointer-events-none"></div>

        <div className="flex flex-col relative z-10 w-full mb-16 space-y-24">
          <div className="w-full text-center flex justify-center mt-[-40px]">
            <h2 className="text-[100px] md:text-[150px] lg:text-[200px] font-heading font-normal uppercase leading-[0.8] tracking-[0.02em] text-[#0C0407]">
              SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[100px] w-full">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col gap-6 w-full">
                {/* Tile Mockup Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer bg-gray-100">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]" 
                    style={{ backgroundImage: `url(${service.image})`}}
                  ></div>
                  <div className="absolute inset-0 bg-[#0C0407]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] pointer-events-none"></div>
                </div>
                
                {/* Tile Info */}
                <div className="flex flex-col gap-6 pt-2 w-full max-w-[90%]">
                  <h3 className="text-[34px] md:text-[40px] font-sans font-medium tracking-tight text-[#0C0407] leading-[1.1]">
                    {service.title}
                  </h3>
                  
                  {/* Service Items grid divided by vertical borders */}
                  <div className="grid grid-cols-3 mt-1">
                    {service.items.map((item, i) => (
                       <div key={i} className={`flex flex-col justify-start h-full ${i !== 0 ? 'pl-5 md:pl-8 border-l border-[#0C0407]/15' : 'pr-5 md:pr-8'}`}>
                         <span className="text-[13px] md:text-[14px] font-sans font-medium text-[#0C0407] opacity-90 whitespace-pre-wrap leading-[1.5]">
                           {item}
                         </span>
                       </div>
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
