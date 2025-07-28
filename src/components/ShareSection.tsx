import { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import { shareSectionStyles } from "./ShareSection.styles";

export default function ShareSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let revealed = false;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !revealed) {
          revealed = true;
          [0, 1, 2, 3, 4].forEach((i) => {
            setTimeout(() => {
              const el = document.querySelector(`.share-line-${i}`);
              if (el) el.classList.add("revealed");
            }, i * 10);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={shareSectionStyles.main} ref={sectionRef}>
      <Container maxWidth={false} disableGutters>
        <Typography variant="h2" sx={shareSectionStyles.typography}>
          {[
            "Our design is philosophy blends classic elements",
            "with",
            "modern touches, offering timeless appeal while",
            "embracing contemporary trends. This is RIGAS",
            "concept.",
          ].map((line, i) => (
            <div
              key={i}
              style={{
                textAlign:"center",
                opacity: 0,
                transform: "translateY(60px)",
                transition:
                  "opacity 0.5s cubic-bezier(.68,-0.55,.27,1.55), transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
                transitionDelay: `${i * 0.25}s`,
              }}
              className={`share-line-${i}`}
            >
              {line}
            </div>
          ))}
        </Typography>
      </Container>
      <style>{`
  .share-line-0.revealed,
  .share-line-1.revealed,
  .share-line-2.revealed,
  .share-line-3.revealed,
  .share-line-4.revealed {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`}</style>

    </Box>
  );
}