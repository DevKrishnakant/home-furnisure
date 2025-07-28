"use client";
import ShareSection from "@/components/ShareSection";
import AboutSection from "@/components/AboutSection";
import ProjectGallerySection from "@/components/ProjectGallerySection";
import HeroChairSection from "@/components/HeroChairSection";
import AwardsSection from "@/components/AwardsSection";
import FooterSection from "@/components/FooterSection";
import HeroMainSection from "@/components/HeroMainSection";

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
