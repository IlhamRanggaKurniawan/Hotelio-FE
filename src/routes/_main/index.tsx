import BestHotelSection from '@/components/BestHotelSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import MostVisitedSection from '@/components/MostVisitedSection'
import ReviewSection from '@/components/ReviewSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='space-y-16 xl:space-y-24'>
      <HeroSection />
      <MostVisitedSection />
      <BestHotelSection />
      <ReviewSection />
      <Footer />
    </div>
  )
}
