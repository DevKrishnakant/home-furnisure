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
      const speedArr = [0, 0.15, 0]; // Reduced middle image speed from 0.3 to 0.15
      const liftArr = [0, 0.05, 0]; // Reduced lift factor from 0.1 to 0.05
      const baseSpeed = 1; // Increased for faster movement
      const liftMultiplier = 1; // Increased for more lift
      imgRefs.current.forEach((el, i) => {
        if (el) {
          const speed = speedArr[i];
          const liftFactor = liftArr[i];
          const translateY = -scrollY * (baseSpeed * speed + liftFactor * liftMultiplier);
          // Apply parallax transform to the container, not the image
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
            overflow: "hidden", // Important for clip-path to work
            // Position middle image lower than the other two
            mt: { xs: 0, md: idx === 1 ? 50 : idx === 2 ? 12 : 0 }, // Middle image 50 units, third image 30 units
          }}
        >
          <Box
            component="img"
            src={img.src}
            alt={img.label}
            sx={{
              width: "100%" ,
              height: { xs: 220, md: 320 },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 2,
              // Clip-path animation for smooth left-to-right reveal
              clipPath: `inset(0 ${100 - (revealProgress * 100)}% 0 0)`,
              transition: "clip-path 0.1s linear", // Smooth clip-path transition
            }}
          />
          <Typography
            sx={{
              mt: 3,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 400,
              fontFamily: "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
              color: "#111",
              letterSpacing: 0,
              textAlign: "left",
              width: "100%",
              // Text also reveals with the image
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