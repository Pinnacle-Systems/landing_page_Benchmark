import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProcessSection } from "@/components/process-section";
import { SustainabilitySection } from "@/components/sustainability-section";
import { GlobalSection } from "@/components/global-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HomeSection } from "@/components/home-section";
import { LeatherSection } from "@/components/leather-section";
import { AccessoriesSection } from "@/components/accessories-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <HomeSection/>
      <LeatherSection/>
      <AccessoriesSection/>
      <SustainabilitySection />
      {/* <GlobalSection /> */}
      <ContactSection />
      <Footer />
    </>
  );
}
