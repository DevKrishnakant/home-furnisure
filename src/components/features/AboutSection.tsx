"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

export default function AboutSection() {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Box
      ref={elementRef}
      sx={{
        bgcolor: '#fff',
        color: "black",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        minHeight: '100vh',
        opacity: hasIntersected ? 1 : 0,
        transform: hasIntersected ? 'translateY(0)' : 'translateY(60px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
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
        Discover timeless elegance
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          maxWidth: 900,
          marginLeft: "auto",
          textAlign: 'center',
        }}
      >
        Εξέλιξη και πάθος για τον χώρο του επίπλου, σεβασμός και προσφορά σε κάθε επαγγελματικό και οικιακό χώρο που θέλει να ξεχωρίζει.
      </Typography>
    </Box>
  );
} 