import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface RevealImageProps {
  imageUrl: string;
  alt?: string;
  width?: string;
  boxShadow?: number;
  mt?: number;
}

export default function RevealImage({ 
  imageUrl, 
  alt = "Image", 
  width = "90vw", 
  boxShadow = 3, 
  mt = 6 
}: RevealImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageRevealProgress, setImageRevealProgress] = useState(0);
  const [imageHasTriggered, setImageHasTriggered] = useState(false);

  // Trigger image reveal animation when image enters viewport
  useEffect(() => {
    const image = imageRef.current;
    if (!image || imageHasTriggered) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !imageHasTriggered) {
          setImageHasTriggered(true);
          setImageRevealProgress(0);
          
          const startTime = Date.now();
          const duration = 1500; // 1.5 seconds

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setImageRevealProgress(easeOutProgress);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(image);
    return () => observer.disconnect();
  }, [imageHasTriggered]);

  return (
    <Box ref={imageRef} sx={{ mt, display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box
        component="img"
        src={imageUrl}
        alt={alt}
        sx={{
          width,
          boxShadow,
          objectFit: 'cover',
          clipPath: `inset(0 ${100 - imageRevealProgress * 100}% 0 0)`,
          transition: 'clip-path 0.5s ease-out',
        }}
      />
    </Box>
  );
} 