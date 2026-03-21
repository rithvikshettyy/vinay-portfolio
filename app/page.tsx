import Header from '@/components/header'
import Hero from '@/components/hero'
import Brands from '@/components/brands'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] flex flex-col justify-between">
      <Header />
      <div className="flex-grow">
        <Hero />
        <Brands />
      </div>
      <Footer />
    </main>
  )
}
