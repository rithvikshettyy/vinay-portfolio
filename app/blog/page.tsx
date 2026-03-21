import Header from '@/components/header'
import Blog from '@/components/blog'
import Footer from '@/components/footer'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] flex flex-col pt-12 md:pt-24">
      <Header />
      <div className="flex-grow">
        <Blog />
      </div>
      <Footer />
    </main>
  )
}
