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
            fontSize: "1.9rem",
            fontFamily: "sans-serif",
            fontWeight: 300,
            letterSpacing: -2,
            lineHeight: "2.3rem",
            whiteSpace: "pre-line",
          }}
        >
          {line}
        </Box>
      ))}
    </Box>
  );
} 