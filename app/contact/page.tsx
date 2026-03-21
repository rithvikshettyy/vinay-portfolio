import Header from '@/components/header'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] flex flex-col pt-16 md:pt-32">
      <Header />
      <div className="flex-grow">
        <CTA />
      </div>
      <Footer />
    </main>
  )
}
