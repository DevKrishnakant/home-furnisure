import { useEffect, useRef, useState, ReactNode } from "react";
import { Box, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { AnimatedLines, AnimatedLetters } from "@/components/animations";
import { SharesModal, SharesMenuContent, SearchModal } from "@/components/modals";

interface HeroMainSectionProps {
  videoUrl?: string;
  backgroundImageUrl?: string;
  mainText?: string;
  subText?: string;
  showLogo?: boolean;
  showMenu?: boolean;
  showRightBar?: boolean;
  animatedLines?: string[];
  animatedLetters?: string;
  menuCatagory:boolean;
  children?: ReactNode;
}

export default function HeroMainSection({
  videoUrl,
  backgroundImageUrl,
  mainText,
  subText,
  showLogo = true,
  showMenu = true,
  showRightBar = true,
  animatedLines,
  animatedLetters,
  menuCatagory=false,
  children,
}: HeroMainSectionProps) {
  const [openShares, setOpenShares] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  // For animatedLetters (exclusive text)
  const letters = animatedLetters
    ? animatedLetters.split("").map((char, i) => ({ char, speed: 1.4 - i * 0.03 }))
    : [];
  const letterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animatedLetters) return;
    // Initial page-load reveal animation for all text at the same time
    letterRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "opacity 1s ease, transform 1s ease";
      }
    });
    setTimeout(() => {
      letterRefs.current.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    }, 300);
    // Parallax on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      letterRefs.current.forEach((el, i) => {
        if (el) {
          const speed = letters[i].speed;
          const liftFactor = (letters.length - i);
          const baseSpeed = 0.0005;
          const liftMultiplier = 0.0002;
          let translateY = -scrollY * (baseSpeed * speed + liftFactor * liftMultiplier);
          translateY = Math.max(translateY, -60);
          el.style.transform = `translateY(${translateY}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animatedLetters, letters]);

  return (
    <>
      <SearchModal
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      />
      <SharesModal
        open={openShares}
        onClose={() => setOpenShares(false)}
        leftSection={
          showLogo ? (
            <Box
              sx={{
                flex: { xs: "none", md: "0 0 360px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: { md: "1px solid white" },
                bgcolor: "black",
                minHeight: 0,
                minWidth: "428px",
                height: "100vh",
              }}
            >
              <img
                src="https://www.rigas-furniture.gr/wp-content/uploads/2025/05/logo.png.webp"
                alt="Logo"
                style={{
                  width: 240,
                  height: 240,
                  objectFit: "contain",
                  display: "block",
                  filter: "invert(1)"
                }}
              />
            </Box>
          ) : null
        }
      >
        {({ shouldStartReveal }: { shouldStartReveal: boolean }) => (
          <SharesMenuContent shouldStartReveal={shouldStartReveal} />
        )}
      </SharesModal>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          position: "relative",
          overflow: "hidden",
          backgroundImage: backgroundImageUrl ? `url('${backgroundImageUrl}')` : undefined,
          backgroundSize: backgroundImageUrl ? "cover" : undefined,
          backgroundPosition: backgroundImageUrl ? "center" : undefined,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background Video */}
        {videoUrl && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              overflow: "hidden",
            }}
          >
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        )}
        {/* Top Bar */}
        {showMenu && (
          <AppBar position="fixed" color="transparent" elevation={0} sx={{ background: "none", boxShadow: "none", pt: 2, zIndex: 10 }}>
            <Toolbar sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              {/* Logo */}
              {showLogo && (
                <Box sx={{ pl: 6, pt: 3 }}>
                  <Image
                    src="https://www.rigas-furniture.gr/wp-content/uploads/2025/05/logo.png.webp"
                    alt="Logo"
                    width={90}
                    height={90}
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>
              )}
              {/* Menu & Search */}
              <Box sx={{ display: "flex", alignItems: "center", pr: 4, pt: 7 }}>
                <Typography variant="h6" sx={{ mr: 1, fontWeight: 400, letterSpacing: -1.5, color: "black", fontSize: "1.3rem", cursor: "pointer" }} onClick={() => setOpenShares(true)}>
                  MENU
                </Typography>
                {/* Black circle */}
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: "black",
                    mb: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenShares(true)}
                />
                <IconButton sx={{ color: "black" }} onClick={() => setOpenSearch(true)}>
                  <Box>
                    <SearchIcon sx={{ fontSize: 24 }} />
                  </Box>
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        )}
        {/* Main Content */}
        <Box sx={{ flex: 1, position: "relative", width: "100%", pt: 8 }}>
          {/* Animated Lines (e.g., 50 YEARS OF...) */}
          {animatedLines && (
            <Box
              sx={{
                position: "absolute",
                top: { xs: 100, md: 292 },
                right: { xs: 20, md: 71 },
                color: "#fff",
                textAlign: "right",
                zIndex: 2,
                width: { xs: '90vw', md: 'auto' },
                maxWidth: { xs: '100vw', md: 'none' },
              }}
            >
              <AnimatedLines
                lines={animatedLines}
                delayStep={0.18}
              />
            </Box>
          )}
          {/* Right side black bar with W. Honors */}
          {showRightBar && (
            <Box
              sx={{
                position: "fixed",
                top: 270,
                right: 0,
                width: 50,
                height: "24vh",
                bgcolor: "black",
                zIndex: 9,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                pt: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: 300,
                }}
              >
                W.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontWeight: 400,
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  marginBottom: 2,
                }}
              >
                Honors
              </Typography>
            </Box>
          )}
          {/* Large animated letters (e.g., exclusive) */}
          {animatedLetters && (
            <Box
              component="h2"
              className="no-margin"
              sx={{
                position: "absolute",
                bottom: { xs: 20, md: 40 },
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                textAlign: "center",
                margin: 0,
                fontWeight: 900,
                fontSize: menuCatagory ? "10vw" : "22vw",
                color: "#fff",
                textTransform: "lowercase",
                letterSpacing: menuCatagory?-10:-28,
                lineHeight: "13vw",
                textShadow: "0 2px 16px rgba(0,0,0,0.4)",
                userSelect: "none",
                zIndex: 3,
                pointerEvents: "none",
              }}
            >
              <AnimatedLetters
                text={animatedLetters}
                delayStep={0.08}
                parallaxOnScroll={true}
                sx={{
                  fontWeight: 900,
                  fontSize: menuCatagory ? "10vw" : "22vw",
                letterSpacing: menuCatagory?-10:-28,
                  lineHeight: "13vw",
                  color: "#fff",
                  textTransform: "lowercase",
                  textShadow: "0 2px 16px rgba(0,0,0,0.4)",
                  userSelect: "none",
                  display: "inline-block",
                  textAlign: 'center',
                }}
              />
            </Box>
          )}
          {/* Main Text (e.g., about us) */}
          {mainText && (
            <Box
              sx={{
                position: "absolute",
                top: { xs: 120, md: 220 },
                left: 0,
                width: "100%",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "3.5rem", md: "10vw" },
                  color: "#fff",
                  textTransform: "lowercase",
                  letterSpacing: -6,
                  lineHeight: 1,
                  textShadow: "0 2px 16px rgba(0,0,0,0.4)",
                  userSelect: "none",
                  m: 0,
                  p: 0,
                }}
              >
                {mainText}
              </Typography>
              {subText && (
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: "1.5rem", md: "2.5vw" },
                    color: "#fff",
                    textShadow: "0 2px 16px rgba(0,0,0,0.4)",
                    userSelect: "none",
                    m: 0,
                    p: 0,
                  }}
                >
                  {subText}
                </Typography>
              )}
            </Box>
          )}
          {children}
        </Box>
      </Box>
    </>
  );
} 