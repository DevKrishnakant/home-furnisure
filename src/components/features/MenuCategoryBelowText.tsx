"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface MenuCategoryBelowTextProps {
  lines: string[];
}

export default function MenuCategoryBelowText({ lines }: MenuCategoryBelowTextProps) {
  const [revealedLines, setRevealedLines] = useState(Array(lines.length).fill(false));
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasTriggered(true);
          lines.forEach((_, index) => {
            setTimeout(() => {
              setRevealedLines((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasTriggered, lines]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        bgcolor: "#fff",
        color: "black",
        padding: "80px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          ml: "auto",
          textAlign: "left",
        }}
      >
        {lines.map((line, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "2rem",
              letterSpacing: "-1px",
              fontWeight: 100,
              color: "#000",
              lineHeight: 1.1,
              opacity: revealedLines[index] ? 1 : 0,
              transform: revealedLines[index] ? "translateY(0)" : "translateY(60px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
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
