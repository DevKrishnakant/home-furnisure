"use client";
import { useRouter } from "next/navigation";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { MenuCategoryBelowText, ImageGrid } from "@/components/features";
import { SlidingText } from "@/components/animations";

export default function HorecaPage() {
  const router = useRouter();
  
  const horecaImages = [
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/HORECA-%CE%9A%CE%91%CE%98%CE%99%CE%A3%CE%9C%CE%91.jpg.webp", title: "ΚΑΘΙΣΜΑ", height: "350px", width: "100%", id: "kathisma-horeca-1", category: "horeca" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%91%CE%9D%CE%91%CE%A0%CE%95%CE%A3-OUTDOOR-1.jpg.webp", title: "ΚΑΝΑΠΕΣ", height: "350px", width: "100%", id: "kanapes-horeca-1", category: "horeca" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/%CE%A0%CE%91%CE%A3%CE%9F-STAND-OUTDOOR.png.webp", title: "ΠΑΣΟ-STAND", height: "350px", width: "100%", id: "paso-stand-horeca-1", category: "horeca" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/Unknown-2-copy.jpeg.webp", title: "ΣΚΑΜΠΟ", height: "350px", width: "100%", id: "skampo-horeca-1", category: "horeca" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%99-OUTDOOR-scaled.jpg.webp", title: "ΤΡΑΠΕΖΙ", height: "350px", width: "100%", id: "trapezi-horeca-1", category: "horeca" },
  ];

  const handleImageClick = (image: { url: string; title: string; id?: string; category?: string }) => {
    if (image.id && image.category) {
      router.push(`/product-category/collection/${image.category}/${image.id}`);
    }
  };

  return (
    <>
      <HeroMainSection
        backgroundImageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/07/HORECA-%CE%A0%CE%A1%CE%A9%CE%A4%CE%97-%CE%A3%CE%95%CE%9B%CE%99%CE%94%CE%91.jpg"
        animatedLetters="HORECA"
        menuCatagory={true}
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
    <MenuCategoryBelowText lines={['Μοντέρνα και κλασσικά έπιπλα για επαγγελματικούς χώρους HORECA',
'(Ξενοδοχεία, Εστιατόρια, Καφέ, Bar), που συνδυάζουν μοναδικό design, υψηλή', 
'ποιότητα και αντοχή στη χρήση.'
      ]}/>      <ImageGrid
        images={horecaImages}
        gap={4}
        onImageClick={handleImageClick}
      />
      <FooterSection />
      <SlidingText />
    </>
  );
} 