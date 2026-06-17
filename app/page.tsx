import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FlavorCarousel } from "@/components/flavor-carousel"
import { BentoGrid } from "@/components/bento-grid"
import { AboutSection } from "@/components/lifestyle-section"
import { TeamCarousel } from "@/components/team-carousel"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BentoGrid />
      <AboutSection />
      <TeamCarousel />
      <FlavorCarousel />
      <SocialSection />
      <Footer />
    </main>
  )
}
