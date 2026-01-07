import Herosection from '@/app/components/home-page/hero-section/Hero-section'
import InvestorsSection from '@/app/components/home-page/investors/Investors'
import LifeAtISL from '@/app/components/home-page/LifeAtISL/LifeAtISL'
import NewsSection from '@/app/components/home-page/news/NewsSection'
import ProductsSection from '@/app/components/home-page/prodcut/Products'
import Sustainability from '@/app/components/home-page/sustainability/Sustainability'
import VideosSection from '@/app/components/home-page/video/VideosSection'


export default function Home () {
  return (
    <div>
      <Herosection />
      <ProductsSection />
      <VideosSection />
      <NewsSection />
      <LifeAtISL />
      <Sustainability />
      <InvestorsSection />
    </div>
  )
}
