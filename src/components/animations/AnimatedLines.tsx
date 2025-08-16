"use client";
import { Box, SxProps, Theme } from "@mui/material";
import { useEffect, useState } from "react";

interface AnimatedLinesProps {
  lines: string[];
  delayStep?: number;
  sx?: SxProps<Theme>;
  className?: string;
}

export default function AnimatedLines({ lines, delayStep = 0.25, sx, className }: AnimatedLinesProps) {
  const [revealed, setRevealed] = useState(Array(lines.length).fill(false));

  useEffect(() => {
    lines.forEach((_, i) => {
      setTimeout(() => {
        setRevealed((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * delayStep * 1000);
    });
  }, [lines.length, delayStep]);

  return (
    <Box sx={{ ...sx }} className={className}>
      {lines.map((line, i) => (
        <Box
          key={i}
          component="div"
          sx={{
            opacity: revealed[i] ? 1 : 0,
            transform: revealed[i] ? "translateY(0)" : "translateY(60px)",
            transition: "opacity 0.5s cubic-bezier(.68,-0.55,.27,1.55), transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
            transitionDelay: `${i * delayStep}s`,
            textAlign: "right",
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem", lg: "1.9rem" },
            fontFamily: "sans-serif",
            fontWeight: 300,
            letterSpacing: { xs: -0.5, sm: -1, md: -1.5, lg: -2 },
            lineHeight: { xs: "1.4rem", sm: "1.7rem", md: "1.9rem", lg: "2.3rem" },
            whiteSpace: "pre-line",
          }}
        >
          {line}
        </Box>
      ))}
    </Box>
  );
} 