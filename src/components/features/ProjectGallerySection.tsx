import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const images = [
  {
    src: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/HOME.avif",
    label: "HOME",
  },
  {
    src: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/HO.RE_.CA-1.jpeg",
    label: "HORECA",
  },
  {
    src: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/AIRBNB-02.avif",
    label: "AIRBNB",
  },
];

export default function ProjectGallerySection() {
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Trigger reveal animation when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasTriggered) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          // Start the reveal animation
          setRevealProgress(0);
          
          // Animate from 0% to 100% over 1.5 seconds
          const startTime = Date.now();
          const duration = 1500; // 1.5 seconds
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Use ease-out for smooth animation
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setRevealProgress(easeOutProgress);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, [hasTriggered]);

  // Parallax effect (only for middle image)
useEffect(() => {
const handleScroll = () => {
  const scrollY = window.scrollY;
  const screenWidth = window.innerWidth;

  let speedArr: number[];
  let liftArr: number[];
  let baseOffsetArr: number[]; // 👈 New

  if (screenWidth < 600) {
    // Mobile: keep small parallax speed
    speedArr = [0, 0.05, 0];
    liftArr = [0, 0.05, 0];
    baseOffsetArr = [0, 120, 0]; // 👈 Middle image starts 20px lower
  } else if (screenWidth < 960) {
    // Tablet: moderate parallax
    speedArr = [0, 0.08, 0];
    liftArr = [0, 0.05, 0];
    baseOffsetArr = [0, 180, 0];
  } else {
    // Desktop: full parallax
    speedArr = [0, 0.15, 0];
    liftArr = [0, 0.05, 0];
    baseOffsetArr = [0, 0, 0];
  }

  const baseSpeed = 1;
  const liftMultiplier = 0.4;

  imgRefs.current.forEach((el, i) => {
    if (el) {
      const speed = speedArr[i];
      const liftFactor = liftArr[i];
      const baseOffset = baseOffsetArr[i];
      const translateY =
        baseOffset - scrollY * (baseSpeed * speed + liftFactor * liftMultiplier);
      el.style.transform = `translateY(${translateY}px)`;
    }
  });
};


  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: "center",
        gap: 3,
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
        bgcolor: "white",
      }}
    >
   {images.map((img, idx) => (
  <Box
    key={img.label}
    ref={(el: HTMLDivElement | null) => { imgRefs.current[idx] = el; }}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: { xs: "100%", sm: "500px", md: "600px" }, // optional limit on bigger screens
      overflow: "hidden",
    mt: { 
  xs: idx === 1 ? 4 : 0,  // small offset in stacked view
  md: idx === 1 ? 45 : idx === 2 ? 2 : 0 // larger desktop offset
}

    }}
  >
    <Box
      component="img"
      src={img.src}
      alt={img.label}
      sx={{
        width: "100%",
        height: "auto", // let height scale with width
        aspectRatio: "4 / 3", // keeps consistent shape (adjust ratio if needed)
        objectFit: "cover",
        borderRadius: 2,
        boxShadow: 2,
        clipPath: `inset(0 ${100 - (revealProgress * 100)}% 0 0)`,
        transition: "clip-path 0.1s linear",
      }}
    />
    <Typography
      sx={{
        mt: { xs: 2, sm: 2.5, md: 3 },
        fontSize: { xs: "clamp(1.2rem, 5vw, 2rem)", md: "clamp(1.5rem, 3vw, 2.5rem)" },
        fontWeight: 400,
        fontFamily: "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
        color: "#111",
        letterSpacing: 0,
        textAlign: "left",
        width: "100%",
        opacity: revealProgress,
        transform: `translateX(${(1 - revealProgress) * 20}px)`,
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
      }}
    >
      {img.label}
    </Typography>
  </Box>
))}
  </Box>
  );
} 