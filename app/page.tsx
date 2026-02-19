import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TechnologySection from "@/components/technology-section"
import AboutSection from "@/components/about-section"
import ProcessSection from "@/components/process-section"
import GlobalSection from "@/components/global-section"
import SustainabilitySection from "@/components/sustainability-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TechnologySection />
      <ProcessSection />
      <GlobalSection />
      <AboutSection />
      <SustainabilitySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
