"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface ShareSectionProps {
  lines?: string[];
}

export default function ShareSection({ 
  lines = [
    "Our design philosophy blends classic elements",
    "with modern touches, offering timeless appeal while",
    "embracing contemporary trends. This is RIGAS",
    "concept."
  ],
}: ShareSectionProps) {
  const [revealedLines, setRevealedLines] = useState(Array(lines.length).fill(false));
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          lines.forEach((_, index) => {
            setTimeout(() => {
              setRevealedLines(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.4, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasTriggered, lines.length]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        bgcolor: '#fff',
        color: 'black',
        px: { xs: 2, sm: 4, md: 10, lg: 20 },
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        minHeight: { xs: '60vh', sm: '65vh', md: '70vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ margin: "0 auto", width: "100%", maxWidth: "1200px" }}>
        {lines.map((line, index) => (
          <Typography
            key={index}
            sx={{
              fontWeight: 400,
              fontSize: {
                xs: 'clamp(1.4rem, 5vw, 2rem)',  // mobile/tablet scaling
                sm: 'clamp(2rem, 4.5vw, 2.6rem)',
                md: 'clamp(2.6rem, 4vw, 3.2rem)',
                lg: 'clamp(3rem, 3.5vw, 3.8rem)' // large desktop
              },
              textAlign: 'center',
              letterSpacing: { xs: '-1px', sm: '-2px', md: '-3px' },
              lineHeight: 1.2,
              opacity: revealedLines[index] ? 1 : 0,
              transform: revealedLines[index] ? 'translateY(0)' : 'translateY(60px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: `${index * 0.2}s`,
            }}
          >
            {line}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
