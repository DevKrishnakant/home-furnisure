"use client";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { SlidingText } from "@/components/animations";
import { AboutSection, ImageGrid } from "@/components/features";

export default function OurProjectsPage() {
  const imageUrls = [
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/AORITIS-Athens-1.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/AORITIS-Athens-2.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/ATHESENSE-Athens-1.jpeg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/ATHESENSE-Athens-2.jpeg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/ATHESENSE-Athens-3.jpeg",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/BARBAROSSA-Paros.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/BATU-Aigaleo.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/BRANCO-Platys-Gialos-Myconos-1.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/BRANCO-Platys-Gialos-Myconos-1.png.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/BRANCO-Platys-Gialos-Myconos-2.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/CARTEL-Pireas.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/COURTSIDE-Chalkida-1.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/COURTSIDE-Chalkida-2.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/COURTSIDE-Chalkida-3.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/DELFINI-AT-SAILING-Shinias-1.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/DELFINI-AT-SAILING-Shinias-2.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/EL-CATRIN-Glyfada-1.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/EL-CATRIN-Glyfada-2.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/GASTONE-Athens-1.jpeg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/GASTONE-Athens-1.png.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/GASTONE-Athens-2.png.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/LE-GRAND-PATRON-Aigaleo-1.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/LE-GRAND-PATRON-Aigaleo-2.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/LE-GRAND-PATRON-Aigaleo-3.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/LE-GRAND-PATRON-Aigaleo-4.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/MARINERA-Santorini-1.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/MARINERA-Santorini-2.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/MARINERA-Santorini-3.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/NEO-KASTRO-Neuburg-Germany-1.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/NEO-KASTRO-Neuburg-Germany-2.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/NEO-KASTRO-Neuburg-Germany-3.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/NEO-KASTRO-Neuburg-Germany-4.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/NEO-KASTRO-Neuburg-Germany-5.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/NEO-KASTRO-Neuburg-Germany-6.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/NLH-Hotels-Athens-1.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/NLH-Hotels-Athens-2.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/NLH-Hotels-Athens-3.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/PUEBLO-CHIDO-Kifisia.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/TSIFITS-GASTROKOUTOUKI-Athens.jpg.webp",
    "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/TSIFTIS-GASTROKOUTOUKI-Athens.jpg.webp"
  ];

  // Convert imageUrls to the format expected by ImageGrid
  const images = imageUrls.map((url, index) => ({
    url,
    title: `Project ${index + 1}`,
    height: "250px",
    width: "100%"
  }));

  return (
    <>
      <HeroMainSection
        backgroundImageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/04/ARGINI-LUXURY-HOTEL-Syros.jpg"
        animatedLetters="projects"
        menuCatagory={false}
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
      
      <AboutSection />
      
      <ImageGrid 
        images={images}
        gap={4}
      />
      
      <FooterSection />
      <SlidingText />
    </>
  );
} 