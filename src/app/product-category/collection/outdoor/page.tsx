"use client";
import { useRouter } from "next/navigation";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { MenuCategoryBelowText, ImageGrid } from "@/components/features";
import { SlidingText } from "@/components/animations";

export default function OutdoorPage() {
  const router = useRouter();
  
  const outdoorImages = [
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/daybed.jpg.webp", title: "DAYBED", height: "350px", width: "100%", id: "daybed-outdoor-1", category: "outdoor" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%91%CE%A1%CE%95%CE%9A%CE%9B%CE%91-OUTDOOR-1.jpg.webp", title: "ΚΑΘΙΣΜΑ", height: "350px", width: "100%", id: "kathisma-outdoor-1", category: "outdoor" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%91%CE%9D%CE%91%CE%A0%CE%95%CE%A3-OUTDOOR-1.jpg.webp", title: "ΚΑΝΑΠΕΣ", height: "350px", width: "100%", id: "kanapes-outdoor-1", category: "outdoor" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%9F%CE%A5%CE%9D%CE%99%CE%91.jpg.webp", title: "ΚΟΥΝΙΑ", height: "350px", width: "100%", id: "kounia-outdoor-1", category: "outdoor" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%BE%CE%B1%CF%80%CE%BB%CF%89%CF%83%CF%84%CF%81%CE%B1.jpg.webp", title: "ΞΑΠΛΩΣΤΡΑ", height: "350px", width: "100%", id: "xaplostra-outdoor-1", category: "outdoor" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/obrela.png.webp", title: "ΟΜΠΡΕΛΑ", height: "350px", width: "100%", id: "omprela-outdoor-1", category: "outdoor" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/paso-stand.png.webp", title: "ΠΑΣΟ-STAND", height: "350px", width: "100%", id: "paso-stand-outdoor-1", category: "outdoor" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%91%CE%9D%CE%91%CE%A0%CE%95%CE%A3-OUTDOOR-2.jpg.webp", title: "ΣΕΤ ΣΑΛΟΝΙ", height: "350px", width: "100%", id: "set-salon-outdoor-1", category: "outdoor" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/%CE%A3%CE%9A%CE%91%CE%9C%CE%A0%CE%9F-OUTDOOR.png.webp", title: "ΣΚΑΜΠΟ", height: "350px", width: "100%", id: "skampo-outdoor-1", category: "outdoor" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%99-OUTDOOR-1-scaled.jpg.webp", title: "ΤΡΑΠΕΖΙ", height: "350px", width: "100%", id: "trapezi-outdoor-1", category: "outdoor" }




  ];

  const handleImageClick = (image: { url: string; title: string; id?: string; category?: string }) => {
    if (image.id && image.category) {
      router.push(`/product-category/collection/${image.category}/${image.id}`);
    }
  };

  return (
    <>
      <HeroMainSection
        backgroundImageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/03/OUTDOOR.jpg"
        animatedLetters="OUTDOOR"
        menuCatagory={true}
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
      <MenuCategoryBelowText lines={['Τα έπιπλα εξωτερικού χώρου είναι απαραίτητα για να μετατρέψετε τον κήπο, τη',
        'βεράντα ή το μπαλκόνι σας σε μια όαση χαλάρωσης και διασκέδασης. Υπάρχει',
        'μια μεγάλη ποικιλία από επιλογές, από κλασικά ξύλινα σετ μέχρι μοντέρνα',
        'μεταλλικά και πολυτελή έπιπλα από ρατάν.'

      ]}/>      <ImageGrid
        images={outdoorImages}
        gap={4}
        onImageClick={handleImageClick}
      />
      <FooterSection />
      <SlidingText />
    </>
  );
} 