"use client";
import { useRouter } from "next/navigation";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { MenuCategoryBelowText, ImageGrid } from "@/components/features";
import { SlidingText } from "@/components/animations";

export default function BohoPage() {
  const router = useRouter();
  
  const bohoImages = [
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/BOHO-%CE%9A%CE%91%CE%98%CE%99%CE%A3%CE%9C%CE%91-scaled-1.jpg.webp", title: "ΚΑΘΙΣΜΑ", height: "350px", width: "100%", id: "kathisma-boho-1", category: "boho" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/Unknown-scaled.jpeg.webp", title: "ΚΑΝΑΠΕΣ", height: "350px", width: "100%", id: "kanapes-boho-1", category: "boho" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%92%CE%9F%CE%97%CE%9F-%CE%9C%CE%A0%CE%9F%CE%A5%CE%A6%CE%95%CE%A3--scaled.jpg.webp", title: "ΜΠΟΥΦΕΣ", height: "350px", width: "100%", id: "mpoufes-boho-1", category: "boho" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/boho-skampo.png.webp", title: "ΣΚΑΜΠΟ", height: "350px", width: "100%", id: "skampo-boho-1", category: "boho" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%92%CE%9F%CE%97%CE%9F-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%99-scaled.jpg.webp", title: "ΤΡΑΠΕΖΙ", height: "350px", width: "100%", id: "trapezi-boho-1", category: "boho" }
  ];

  const handleImageClick = (image: { url: string; title: string; id?: string; category?: string }) => {
    if (image.id && image.category) {
      router.push(`/product-category/collection/${image.category}/${image.id}`);
    }
  };

  return (
    <>
      <HeroMainSection
        backgroundImageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/04/category-boho-scaled.jpg"
        animatedLetters="BOHO"
        menuCatagory={true}
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
      <MenuCategoryBelowText lines={['Τα έπιπλα boho style αποπνέουν μια αίσθηση ελευθερίας, φυσικότητας και',
        'χαλαρής κομψότητας, δημιουργώντας έναν ζεστό και φιλόξενο χώρο με ethnique',
        'και vintage επιρροές.'

      ]}/>
            <ImageGrid
        images={bohoImages}
        gap={4}
        onImageClick={handleImageClick}
      />
      <FooterSection />
      <SlidingText />
    </>
  );
} 