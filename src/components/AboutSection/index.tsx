import { Box, Typography } from "@mui/material";
import { aboutSectionStyles } from "./AboutSection.styles";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [revealedLines, setRevealedLines] = useState([false, false, false]);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Split text into lines for animation
  const textLines = [
    "Attention to detail is paramount, with intricate carvings,",
    "bespoke upholstery and refined finishes elevating each",
    "pieceto a statement of opulence."
  ];

  // Parallax effect for ABOUT button
  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        // The further the section is from the top of the viewport, the more the button moves up
        const offset = Math.max(0, window.innerHeight - sectionRect.top);
        // Fast parallax: high speed factor
        const translateY = -offset * 0.08; // Adjust 0.25 for desired speed
        buttonRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger text reveal animation when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasTriggered) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          // Reveal lines one by one with staggered delay
          textLines.forEach((_, index) => {
            setTimeout(() => {
              setRevealedLines(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 120); // 120ms delay between each line
          });
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [hasTriggered, textLines.length]);

  return (
    <Box ref={sectionRef} sx={aboutSectionStyles.container}>
      <Link href="/about" passHref legacyBehavior>
        <Box ref={buttonRef} sx={aboutSectionStyles.aboutButton} component="a">
          ABOUT
          <Box className="about-circle" sx={aboutSectionStyles.aboutCircle} />
        </Box>
      </Link>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: { xs: 'center', md: 'flex-end' }, 
          flex: 1,
          mt: { xs: 2, md: 12 }, // Add margin-top to push text down below the button
        }}
      >
        {textLines.map((line, index) => (
          <Typography
            key={index}
            sx={{
              ...aboutSectionStyles.aboutText,
              textAlign: { xs: 'center', md: 'right' },
              opacity: revealedLines[index] ? 1 : 0,
              transform: revealedLines[index] ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.5s cubic-bezier(.68,-0.55,.27,1.55), transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)',
              transitionDelay: `${index * 0.12}s`,
              margin: 0,
              p: 0,
            }}
          >
            {line}
          </Typography>
        ))}
      </Box>
    </Box>
  );
} 