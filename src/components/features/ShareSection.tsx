"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface ShareSectionProps {
  lines?: string[];
  title?: string;
  subtitle?: string;
}

export default function ShareSection({ 
  lines = [
    "Συνδυάστε πολυτέλεια, εργονομία και διαχρονικό design, δημιουργώντας μια",
    "ατμόσφαιρα φινέτσας και φιλοξενίας."
  ],
  title = "PHILOSOPHY",
  subtitle = "Our design philosophy blends classic elements with modern touches, offering timeless appeal while embracing contemporary trends. This is RIGAS concept."
}: ShareSectionProps) {
  const [revealedLines, setRevealedLines] = useState(Array(lines.length).fill(false));
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasTriggered) return;

    const observer = new window.IntersectionObserver(
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
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
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
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          fontSize: "54px",
          textAlign: 'center',
          margin: "2.1rem 0 1.68rem 0",
          fontFamily: "'Aeonik Pro', sans-serif",
          letterSpacing: "-1px",
        }}
      >
        {title}
      </Typography>
      
      <Typography 
        sx={{ 
          fontWeight: 500, 
          fontSize: { xs: '1.1rem', md: '1.3rem' }, 
          maxWidth: 900, 
          margin: "0 auto 3rem auto",
          textAlign: 'center'
        }}
      >
        {subtitle}
      </Typography>

      <Box sx={{ maxWidth: 900, margin: "0 auto" }}>
        {lines.map((line, index) => (
          <Typography
            key={index}
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.2rem' },
              textAlign: 'center',
              opacity: revealedLines[index] ? 1 : 0,
              transform: revealedLines[index] ? 'translateY(0)' : 'translateY(60px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: `${index * 0.2}s`,
              mb: 2,
            }}
          >
            {line}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}