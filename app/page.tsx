import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { BrandsMarquee } from "@/components/brands-marquee";
import { CertificationsSection } from "@/components/certifications-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { ImpactSection } from "@/components/impact-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BrandsMarquee />
      <CertificationsSection />
      <ProcessTimeline />
      <ImpactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
