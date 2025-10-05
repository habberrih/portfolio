import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ServicesSection } from "@/components/services-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />

      <div className="space-y-0">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <EducationSection />
        <ProjectsSection />
        <NewsSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  )
}
