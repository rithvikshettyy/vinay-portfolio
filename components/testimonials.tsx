'use client'

const testimonials = [
  {
    quote:
      'Working with Vinay was an incredible experience. Their creativity, attention to detail, and ability to truly understand my vision made all the difference. From start to finish, they delivered the best results.',
    author: 'Sarah Anderson',
    role: 'Founder @ TechStartup',
  },
  {
    quote:
      'I was blown away by their professionalism and creativity. They took my ideas and transformed them into something better than I could have imagined. Excellence was evident in every aspect of the project.',
    author: 'Michael Chen',
    role: 'CEO @ InnovateCorp',
  },
  {
    quote:
      'Collaborating with Vinay was seamless and inspiring. Their insight and expertise brought my project to life in ways I hadn\'t envisioned. I\'m impressed with both their creativity and technical knowledge.',
    author: 'Emma Rodriguez',
    role: 'Product Manager @ DesignCo',
  },
  {
    quote:
      'I can\'t speak highly enough of their talent and work ethic. Their dedication, responsiveness, and creativity made my project a success. If you\'re looking for someone who goes above and beyond.',
    author: 'James Wilson',
    role: 'Entrepreneur @ VentureLab',
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-border">
      <div className="space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Client Reviews</h2>
          <p className="text-foreground/60 max-w-2xl">
            What clients have to say about working together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8 bg-secondary rounded-lg space-y-4 hover:bg-secondary/80 transition-colors">
              <p className="text-foreground/70 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="pt-2">
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-foreground/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
