"use client";
import { useRouter } from "next/navigation";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { MenuCategoryBelowText, ImageGrid } from "@/components/features";
import { SlidingText } from "@/components/animations";

export default function KrevatokamaraPage() {
  const router = useRouter();
  
  const krevatokamaraImages = [
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%9F%CE%9C%CE%9F%CE%94%CE%99%CE%9D%CE%9F-%CE%A5%CE%A0%CE%9D%CE%9F%CE%94%CE%A9%CE%9C%CE%91%CE%A4%CE%99%CE%9F.png.webp", title: "ΚΟΜΟΔΙΝΟ", height: "350px", width: "100%", id: "komodino-krevatokamara-1", category: "krevatokamara" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%9F%CE%9D%CE%A3%CE%9F%CE%9B%CE%91-%CE%A5%CE%A0%CE%9D%CE%9F%CE%94%CE%A9%CE%9C%CE%91%CE%A4%CE%99%CE%9F.png.webp", title: "ΚΟΝΣΟΛΑ", height: "350px", width: "100%", id: "konsola-krevatokamara-1", category: "krevatokamara" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/krevati.png.webp", title: "ΚΡΕΒΑΤΙ", height: "350px", width: "100%", id: "krevati-krevatokamara-1", category: "krevatokamara" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9D%CE%A4%CE%9F%CE%A5%CE%9B%CE%91%CE%A0%CE%91-%CE%A5%CE%A0%CE%9D%CE%9F%CE%94%CE%A9%CE%9C%CE%91%CE%A4%CE%99%CE%9F2-scaled.jpg.webp", title: "ΝΤΟΥΛΑΠΑ", height: "350px", width: "100%", id: "ntoulapa-krevatokamara-1", category: "krevatokamara" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A3%CE%A5%CE%A1%CE%A4%CE%91%CE%A1%CE%99%CE%95%CE%A1%CE%91-%CE%A5%CE%A0%CE%9D%CE%9F%CE%94%CE%A9%CE%9C%CE%91%CE%A4%CE%99%CE%9F.png.webp", title: "ΣΥΡΤΑΡΙΕΡΑ", height: "350px", width: "100%", id: "syrtariera-krevatokamara-1", category: "krevatokamara" },
  ];

  const handleImageClick = (image: { url: string; title: string; id?: string; category?: string }) => {
    if (image.id && image.category) {
      router.push(`/product-category/collection/${image.category}/${image.id}`);
    }
  };

  return (
    <>
      <HeroMainSection
        backgroundImageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/05/%CE%A5%CE%A0%CE%9D%CE%9F%CE%94%CE%A9%CE%9C%CE%91%CE%A4%CE%99%CE%9F-scaled.jpg"
        animatedLetters="ΚΡΕΒΑΤΟΚΑΜΑΡΑ"
        menuCatagory={true}
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
      <ImageGrid
        images={krevatokamaraImages}
        gap={4}
        onImageClick={handleImageClick}
      />
      <FooterSection />
      <SlidingText />
    </>
  );
} 