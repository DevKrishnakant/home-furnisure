"use client";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { MenuCategoryBelowText, ImageGrid } from "@/components/features";
import { SlidingText } from "@/components/animations";

export default function TrapezariaPage() {
  const trapezariaImages = [
    {
      url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-rigas.png.webp",
      title: "ΒΙΒΛΙΟΘΗΚΗ",
      height: "350px",
      width: "100%"
    },
    {
      url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/trapezi-%CF%84%CF%89.png.webp",
      title: "ΕΠΙΠΛΟ TV",
      height: "350px",
      width: "100%"
    }, 
    {
      url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/%CE%9A%CE%91%CE%A1%CE%95%CE%9A%CE%9B%CE%91-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91%CE%A1%CE%99%CE%91.webp",
      title: "ΚΑΘΙΣΜΑ",
      height: "480px",
      width: "100%"
    },
    {
      url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/%CE%9C%CE%A0%CE%9F%CE%A5%CE%A6%CE%95%CE%A3-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91%CE%A1%CE%99%CE%91.webp",
      title: "ΜΠΟΥΦΕΣ",
      height: "480px",
      width: "100%"
    },
    {
      url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/skampo-saloni-voithitiko.png.webp",
      title: "ΣΚΑΜΠΟ",
      height: "380px",
      width: "100%"
    },
    {
      url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91%CE%A1%CE%99%CE%91.png.webp",
      title: "ΤΡΑΠΕΖΙ",
      height: "760px",
      width: "100%"
    }
  ];

  return (
    <>
      <HeroMainSection
        backgroundImageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/03/HOME.avif"
        animatedLetters="ΤΡΑΠΕΖΑΡΙΑ"
        menuCatagory={true}
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
      <MenuCategoryBelowText lines={['Συνδυάστε πολυτέλεια, εργονομία και διαχρονικό design, δημιουργώντας μια',
        'ατμόσφαιρα φινέτσας και φιλοξενίας.'
      ]}/>
      <ImageGrid 
        images={trapezariaImages}
        gap={3}
      />
      <FooterSection />
      <SlidingText />
    </>
  );
} 