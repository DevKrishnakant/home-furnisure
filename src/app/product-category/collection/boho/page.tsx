"use client";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { MenuCategoryBelowText, ImageGrid } from "@/components/features";
import { SlidingText } from "@/components/animations";

export default function BohoPage() {
  const bohoImages = [
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/BOHO-%CE%9A%CE%91%CE%98%CE%99%CE%A3%CE%9C%CE%91-scaled-1.jpg.webp", title: "ΚΑΘΙΣΜΑ", height: "350px", width: "100%" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/Unknown-scaled.jpeg.webp", title: "ΚΑΝΑΠΕΣ", height: "350px", width: "100%" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%92%CE%9F%CE%97%CE%9F-%CE%9C%CE%A0%CE%9F%CE%A5%CE%A6%CE%95%CE%A3--scaled.jpg.webp", title: "ΜΠΟΥΦΕΣ", height: "350px", width: "100%" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/boho-skampo.png.webp", title: "ΣΚΑΜΠΟ", height: "350px", width: "100%" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%92%CE%9F%CE%97%CE%9F-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%99-scaled.jpg.webp", title: "ΤΡΑΠΕΖΙ", height: "350px", width: "100%" }
  ];

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
      />
      <FooterSection />
      <SlidingText />
    </>
  );
} 