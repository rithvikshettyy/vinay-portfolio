import Header from '@/components/header'
import Why from '@/components/why'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] flex flex-col pt-24">
      <Header />
      <div className="flex-grow">
        <Why />
      </div>
      <Footer />
    </main>
  )
}
