"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImageGridProps {
  images: {
    url: string;
    title: string;
    height?: string;
    width?: string;
    id?: string;
    category?: string;
  }[];
  gap?: number;
  onImageClick?: (image: { url: string; title: string; id?: string; category?: string }) => void;
}

export default function ImageGrid({
  images,
  gap = 4,
  onImageClick
}: ImageGridProps) {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Reveal animation effect
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          
          // Animate reveal from 0 to 1
          const startTime = Date.now();
          const duration = 2000; // 2 seconds

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            setRevealProgress(progress);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasTriggered]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      imageRefs.current.forEach((el, index) => {
        if (el) {
          const isRightSide = index % 2 === 1;
          const speed = isRightSide ? 0.3 : 0.1;
          const translateY = -scrollY * speed;
          el.style.transform = `translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Separate left and right images
  const leftImages = images.filter((_, index) => index % 2 === 0);
  const rightImages = images.filter((_, index) => index % 2 === 1);

  return (
    <Box
      ref={sectionRef}
      sx={{
        padding:"120px",
        width: "88%",
        bgcolor: '#fff',
        display: 'flex',
        gap: gap,
        margin: 'auto',
      }}
    >
      {/* Left Column */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {leftImages.map((image, index) => (
          <Box
            key={index * 2}
            ref={(el: HTMLDivElement | null) => {
              imageRefs.current[index * 2] = el;
            }}
            sx={{
              transition: 'transform 0.3s ease-out',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: image.height || "400px",
                width: image.width || "100%",
                overflow: 'hidden',
                cursor: onImageClick ? 'pointer' : 'default',
                '&:hover': onImageClick ? {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease'
                } : {}
              }}
              onClick={() => onImageClick && onImageClick(image)}
            >
              <Box
                component="img"
                src={image.url}
                alt={image.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  clipPath: `inset(0 ${100 - (revealProgress * 100)}% 0 0)`,
                  transition: 'clip-path 0.1s linear',
                }}
              />
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                fontWeight: 600,
                textAlign: 'center',
                color: '#333',
                opacity: revealProgress,
                transform: `translateX(${(1 - revealProgress) * 20}px)`,
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
              }}
            >
              {image.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Right Column */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rightImages.map((image, index) => (
          <Box
            key={index * 2 + 1}
            ref={(el: HTMLDivElement | null) => {
              imageRefs.current[index * 2 + 1] = el;
            }}
            sx={{
              mt: index === 0 ? 20 : 0,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: image.height || "400px",
                width: image.width || "100%",
                overflow: 'hidden',
                cursor: onImageClick ? 'pointer' : 'default',
                '&:hover': onImageClick ? {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease'
                } : {}
              }}
              onClick={() => onImageClick && onImageClick(image)}
            >
              <Box
                component="img"
                src={image.url}
                alt={image.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  clipPath: `inset(0 ${100 - (revealProgress * 100)}% 0 0)`,
                  transition: 'clip-path 0.1s linear',
                }}
              />
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                fontWeight: 600,
                textAlign: 'center',
                color: '#333',
                opacity: revealProgress,
                transform: `translateX(${(1 - revealProgress) * 20}px)`,
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
              }}
            >
              {image.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
