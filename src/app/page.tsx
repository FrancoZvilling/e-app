'use client'
import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PanelSection from '@/components/PanelSection'
import FAQSection from '@/components/FAQSection'
import AboutSection from '@/components/AboutSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  useLenis()

  return (
    <main className="relative min-h-screen bg-[#020817] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PanelSection />
      <FAQSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
