"use client";
import { Box, SxProps, Theme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface AnimatedLettersProps {
  text: string;
  delayStep?: number;
  sx?: SxProps<Theme>;
  className?: string;
  parallaxOnScroll?: boolean;
}

export default function AnimatedLetters({ text, delayStep = 0.08, sx, className, parallaxOnScroll = true }: AnimatedLettersProps) {
  const letters = text.split("");
  const [revealed, setRevealed] = useState(Array(letters.length).fill(false));
  const [allRevealed, setAllRevealed] = useState(false);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    letters.forEach((_, i) => {
      setTimeout(() => {
        setRevealed((prev) => {
          const next = [...prev];
          next[i] = true;
          // If last letter, set allRevealed after its transition
          if (i === letters.length - 1) {
            setTimeout(() => setAllRevealed(true), 700); // match transition duration
          }
          return next;
        });
      }, i * delayStep * 1000);
    });
  }, [letters.length, delayStep]);

  // Parallax effect after reveal
  useEffect(() => {
    if (!parallaxOnScroll || !allRevealed) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      letterRefs.current.forEach((el, i) => {
        if (el) {
          // Parallax: leftmost moves fastest, rightmost slowest
          const speed = 1.4 - i * 0.03;
          // Lifting effect: leftmost letters lift more
          const liftFactor = (letters.length - i) * 0.08; // slower, more subtle lift
          el.style.transform = `translateY(${scrollY * speed * -0.08 - scrollY * liftFactor}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allRevealed, parallaxOnScroll]);

  return (
    <Box component="span" sx={{ display: "inline-block", ...sx }} className={className}>
      {letters.map((letter, i) => (
        <Box
          key={i}
          component="span"
          ref={(el: HTMLSpanElement | null) => {
            letterRefs.current[i] = el;
          }}
          sx={{
            display: "inline-block",
            mx: letter === " " ? 1 : 0,
            opacity: revealed[i] ? 1 : 0,
            transform: revealed[i]
              ? "translateY(0)"
              : "translateY(60px)",
            transition: allRevealed
              ? undefined
              : "opacity 0.5s cubic-bezier(.68,-0.55,.27,1.55), transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
            transitionDelay: allRevealed ? undefined : `${i * delayStep}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </Box>
      ))}
    </Box>
  );
} 