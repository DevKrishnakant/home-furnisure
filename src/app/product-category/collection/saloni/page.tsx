"use client";
import { useRouter } from "next/navigation";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { MenuCategoryBelowText, ImageGrid } from "@/components/features";
import { SlidingText } from "@/components/animations";

export default function SaloniPage() {
  const router = useRouter();
  
  const saloniImages = [
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/07/%CE%A3%CE%91%CE%9B%CE%9F%CE%9D%CE%99-%CE%9A%CE%91%CE%9D%CE%91%CE%A0%CE%95%CE%A3.jpg.webp", title: "ΚΑΝΑΠΕΣ", height: "350px", width: "100%", id: "kanapes-saloni-1", category: "saloni" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/07/%CE%A3%CE%91%CE%9B%CE%9F%CE%9D%CE%99-%CE%A0%CE%9F%CE%9B%CE%A5%CE%98%CE%A1%CE%9F%CE%9D%CE%91.jpg.webp", title: "ΠΟΛΥΘΡΟΝΑ", height: "350px", width: "100%", id: "polythrona-saloni-1", category: "saloni" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/trapezi-isaloni-voithiitiko.png.webp", title: "ΤΡΑΠΕΖΙ ΣΑΛΟΝΙΟΥ-ΒΟΗΘΗΤΙΚΟ", height: "350px", width: "100%", id: "trapezi-saloni-1", category: "saloni" },
  ];

  const handleImageClick = (image: { url: string; title: string; id?: string; category?: string }) => {
    if (image.id && image.category) {
      router.push(`/product-category/collection/${image.category}/${image.id}`);
    }
  };

  return (
    <>
      <HeroMainSection
        backgroundImageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/03/%CE%A3%CE%91%CE%9B%CE%9F%CE%9D%CE%99-scaled.jpg"
        animatedLetters="ΣΑΛΟΝΙ"
        menuCatagory={true}
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
      <ImageGrid
        images={saloniImages}
        gap={4}
        onImageClick={handleImageClick}
      />
      <FooterSection />
      <SlidingText />
    </>
  );
} 