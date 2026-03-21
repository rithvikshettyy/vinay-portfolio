import Header from '@/components/header'
import Work from '@/components/work'
import Footer from '@/components/footer'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] flex flex-col pt-12 md:pt-24">
      <Header />
      <div className="flex-grow">
        <Work />
      </div>
      <Footer />
    </main>
  )
}
