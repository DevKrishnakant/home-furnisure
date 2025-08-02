"use client";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { MenuCategoryBelowText, ImageGrid } from "@/components/features";
import { SlidingText } from "@/components/animations";

export default function DecoNMorePage() {
  const decoNMoreImages = [
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%95%CE%99%CE%94%CE%97-%CE%94%CE%99%CE%91%CE%9A%CE%9F%CE%A3%CE%9C%CE%97%CE%A3%CE%97%CE%A3-%CE%94%CE%99%CE%91%CE%9A%CE%9F%CE%A3%CE%9C%CE%97%CE%A3%CE%97-1.jpg.webp", title: "ΕΙΔΗ ΔΙΑΚΟΣΜΗΣΗΣ", height: "350px", width: "100%" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/mirror.png.webp", title: "ΚΑΘΡΕΦΤΗΣ", height: "350px", width: "100%" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A0%CE%99%CE%9D%CE%91%CE%9A%CE%91%CE%A3-%CE%94%CE%99%CE%91%CE%9A%CE%9F%CE%A3%CE%9C%CE%97%CE%A3%CE%97-1-scaled.jpg.webp", title: "ΠΙΝΑΚΑΣ", height: "350px", width: "100%" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/fyta.png.webp", title: "ΦΥΤΑ", height: "350px", width: "100%" },
    { url: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A6%CE%A9%CE%A4%CE%99%CE%A3%CE%A4%CE%99%CE%9A%CE%91-%CE%94%CE%99%CE%91%CE%9A%CE%9F%CE%A3%CE%9C%CE%97%CE%A3%CE%97-1-scaled.jpg.webp", title: "ΦΩΤΙΣΤΙΚΟ", height: "350px", width: "100%" },
  ];

  return (
    <>
      <HeroMainSection
        backgroundImageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/03/diakosmitiko-12.png"
        animatedLetters="DECO N MORE"
        menuCatagory={true}
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
    <MenuCategoryBelowText lines={['Τα είδη διακόσμησης σπιτιού είναι ένας πολύ καλός τρόπος για να',
'μεταμορφώσετε το σπίτι σας σε έναν χώρο που αντικατοπτρίζει το προσωπικό', 
'σας στυλ και γούστο. Θα βρείτε μια τεράστια ποικιλία από είδη διακόσμησης,',
'από μικρά διακοσμητικά αντικείμενα μέχρι φυτά και φωτιστικά.'
      ]}/>         <ImageGrid
        images={decoNMoreImages}
        gap={4}
      />
      <FooterSection />
      <SlidingText />
    </>
  );
} 