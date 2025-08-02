"use client";
import { ShareSection, AboutSection, ProjectGallerySection, HeroChairSection, AwardsSection } from "@/components/features";
import { FooterSection, HeroMainSection } from "@/components/layout";

export default function Home() {
  return (
    <>
      <HeroMainSection
        backgroundImageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/04/DSC06648-2-scaled.jpg"
        animatedLines={["50 YEARS OF", "QUALITY", "EXPERIENCE AND", "PHILOSOPHY"]}
        animatedLetters="exclusive"
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
      <ShareSection />
      <AboutSection />
      <ProjectGallerySection />
      <HeroChairSection />
      <AwardsSection />
      <FooterSection />
    </>
  );
}
