"use client";
import { Box, SxProps, Theme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface AnimatedWordsProps {
  text: string;
  delayStep?: number;
  sx?: SxProps<Theme>;
  className?: string;
  parallaxOnScroll?: boolean;
}

export default function AnimatedWords({ text, delayStep = 0.18, sx, className, parallaxOnScroll = false }: AnimatedWordsProps) {
  const words = text.split(/\s+/);
  const [revealed, setRevealed] = useState(Array(words.length).fill(false));
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    words.forEach((_, i) => {
      setTimeout(() => {
        setRevealed((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * delayStep * 1000);
    });
  }, [words.length, delayStep]);

  // Parallax effect after reveal
  useEffect(() => {
    if (!parallaxOnScroll) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      wordRefs.current.forEach((el, i) => {
        if (el && revealed[i]) {
          // Parallax: leftmost moves fastest, rightmost slowest
          const speed = 1.4 - i * 0.03; // adjust as needed
          el.style.transform = `translateY(${scrollY * speed * -0.08}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [revealed, parallaxOnScroll]);

  return (
    <Box component="span" sx={{ display: "inline-block", ...sx }} className={className}>
      {words.map((word, i) => (
        <Box
          key={i}
          component="span"
          ref={(el: HTMLSpanElement | null) => {
            wordRefs.current[i] = el;
          }}
          
          sx={{
            display: "inline-block",
            mx: 0.5,
            opacity: revealed[i] ? 1 : 0,
            transform: revealed[i]
              ? "translateY(0)"
              : "translateY(60px)",
            transition: "opacity 0.5s cubic-bezier(.68,-0.55,.27,1.55), transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
            transitionDelay: `${i * delayStep}s`,
          }}
        >
          {word}
        </Box>
      ))}
    </Box>
  );
} 