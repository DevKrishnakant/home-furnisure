import { useEffect, useRef, useState, ReactNode } from "react";
import { Box, Typography, AppBar, Toolbar, IconButton, useTheme, useMediaQuery } from "@mui/material";
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
  menuCatagory: boolean;
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
  menuCatagory = false,
  children,
}: HeroMainSectionProps) {
  const [openShares, setOpenShares] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

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

  // Responsive font size calculations
  const getResponsiveFontSize = (mobile: number, tablet: number, desktop: number, largeDesktop?: number) => {
    if (isMobile) return `${mobile}px`;
    if (isTablet) return `${tablet}px`;
    if (isDesktop) return largeDesktop ? `${largeDesktop}px` : `${desktop}px`;
    return `${desktop}px`;
  };

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
                minWidth: { xs: "100%", md: "428px" },
                height: "100vh",
              }}
            >
              <Box
                component="img"
                src="https://www.rigas-furniture.gr/wp-content/uploads/2025/05/logo.png.webp"
                alt="Logo"
                sx={{
                  width: { xs: "100px", sm: "140px", md: "180px", lg: "220px" },
                  height: "auto",
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
          minHeight: { xs: '100vh', sm: '100vh', md: '100vh' },
          width: '100vw',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: backgroundImageUrl ? `url('${backgroundImageUrl}')` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
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
          <AppBar
            position="fixed"
            color="transparent"
            elevation={0}
            sx={{
              background: 'none',
              boxShadow: 'none',
              pt: { xs: 1, sm: 1.5, md: 2 },
              zIndex: 10
            }}
          >
            <Toolbar
              sx={{
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                px: { xs: 2, sm: 3, md: 6 },
                minHeight: { xs: '64px', sm: '70px', md: '80px' }
              }}
            >
              {/* Logo - already responsive */}
              {showLogo && (
                <Box sx={{
                  pl: { xs: 0, sm: 1, md: 6 },
                  pt: { xs: 0.5, sm: 1, md: 3 },
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Box
                    component="img"
                    src="https://www.rigas-furniture.gr/wp-content/uploads/2025/05/logo.png.webp"
                    alt="Logo"
                    sx={{
                      height: { xs: '32px', sm: '40px', md: '50px', lg: '70px', xl: '80px' },
                      width: 'auto',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </Box>
              )}

              {/* Menu & Search */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pr: { xs: 1, sm: 2, md: 4 },
                pt: { xs: 1, sm: 1.5, md: 7 },
                gap: { xs: 1, sm: 1.5, md: 2 }
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    mr: { xs: 0.5, sm: 1 },
                    fontWeight: 400,
                    letterSpacing: { xs: -0.5, sm: -1, md: -1.5 },
                    color: 'black',
                    fontSize: getResponsiveFontSize(14, 16, 20, 24),
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                  onClick={() => setOpenShares(true)}
                >
                  MENU
                </Typography>
                {/* Black circle */}
                <Box
                  sx={{
                    width: { xs: 12, sm: 14, md: 20 },
                    height: { xs: 12, sm: 14, md: 20 },
                    ml: { xs: '4px', sm: '6px', md: '7px' },
                    borderRadius: '50%',
                    bgcolor: 'black',
                    mb: { xs: '2px', sm: '3px', md: '7px' },
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                  onClick={() => setOpenShares(true)}
                />
                <IconButton
                  sx={{
                    color: 'black',
                    p: { xs: 0.25, sm: 0.5, md: 1 },
                    minWidth: 'auto'
                  }}
                  onClick={() => setOpenSearch(true)}
                >
                  <Box>
                    <img
                      src={"https://cdn-icons-png.flaticon.com/128/2811/2811806.png"}
                      height={isMobile ? "18px" : isTablet ? "20px" : "22px"}
                      style={{ marginBottom: '2px' }}
                    />
                  </Box>
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        )}

        {/* Main Content */}
        <Box sx={{
          flex: 1,
          position: 'relative',
          width: '100%',
          pt: { xs: 6, sm: 8, md: 10 },
          pb: { xs: 2, sm: 4, md: 6 }
        }}>
          {/* Animated Lines (e.g., 50 YEARS OF...) - Updated positioning */}
          {animatedLines && (
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 120, sm: 190, md: 250 }, // adjust to be right above animated letters
                right: { xs: 16, sm: 24, md: 95 },
                color: '#fff',
                textAlign: { xs: 'right', md: 'right' },
                zIndex: 2,
                width: { xs: 'calc(100vw - 32px)', sm: 'calc(100vw - 48px)', md: 'auto' },
                maxWidth: { xs: '100vw', md: 'none' },
                px: { xs: 1, sm: 2, md: 0 }
              }}
            >
              <AnimatedLines
                lines={animatedLines}
                delayStep={0.18}
                fontSize={{
                  xs: getResponsiveFontSize(12, 14, 16),
                  sm: getResponsiveFontSize(14, 16, 18),
                  md: getResponsiveFontSize(16, 18, 20)
                }}
              />
            </Box>

          )}

          {/* Right side black bar with W. Honors */}
          {showRightBar && (
            <Box
              sx={{
                position: { xs: 'absolute', md: 'fixed' },
                top: { xs: 100, sm: 140, md: 270 },
                right: 0,
                width: { xs: 24, sm: 32, md: 50 },
                height: { xs: '12vh', sm: '16vh', md: '24vh' },
                bgcolor: 'black',
                zIndex: 9,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                pt: { xs: 0.5, sm: 1, md: 2 },
                pb: { xs: 0.5, sm: 1, md: 2 }
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: 300,
                  fontSize: getResponsiveFontSize(12, 16, 20, 24)
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
                  marginBottom: { xs: 1, sm: 1.5, md: 2 },
                  fontSize: getResponsiveFontSize(10, 12, 14, 16)
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
                position: 'absolute',
                bottom: { xs: 20, sm: 30, md: 40 },
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                textAlign: 'center',
                margin: 0,
                fontWeight: 900,
                fontSize: menuCatagory
                  ? {
                    xs: '2rem',
                    sm: 'clamp(2rem, 4vw, 3.5rem)',
                    md: 'clamp(3.5rem, 8vw, 6rem)',
                    lg: 'clamp(6rem, 10vw, 8rem)'
                  }
                  : {
                    xs: 'clamp(2rem, 18vw, 10rem)',
                    sm: 'clamp(7rem, 14vw, 20rem)',
                    md: 'clamp(10rem, 18vw, 24rem)',
                    lg: 'clamp(15rem, 19vw, 26rem)'
                  },
                color: '#fff',
                textTransform: 'lowercase',
                letterSpacing: menuCatagory
                  ? { xs: -1, sm: -3, md: -6, lg: -10 }
                  : { xs: -4, sm: -10, md: -16, lg: -24 },
                lineHeight: menuCatagory
                  ? { xs: '2.5rem', sm: '1.2', md: '1.1', lg: '1' }
                  : { xs: '1.2', sm: '1.1', md: '1', lg: '0.9' },
                textShadow: '0 2px 16px rgba(0,0,0,0.4)',
                userSelect: 'none',
                zIndex: 3,
                pointerEvents: 'none',
                px: { xs: 2, sm: 3, md: 0 },
                whiteSpace: 'nowrap', // Forces single line

              }}
            >
              <AnimatedLetters
                text={animatedLetters}
                delayStep={0.08}
                parallaxOnScroll={true}
                sx={{
                  fontWeight: 900,
                  fontSize: 'inherit',
                  letterSpacing: 'inherit',
                  lineHeight: 'inherit',
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
                position: 'absolute',
                top: { xs: 80, sm: 120, md: 220 },
                left: 0,
                width: '100%',
                textAlign: 'center',
                zIndex: 2,
                px: { xs: 3, sm: 4, md: 6 },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: {
                    xs: 'clamp(1.5rem, 6vw, 2rem)',
                    sm: 'clamp(2rem, 5vw, 3rem)',
                    md: 'clamp(3rem, 6vw, 4rem)',
                    lg: 'clamp(4rem, 10vw, 6rem)'
                  },
                  color: '#fff',
                  textTransform: 'lowercase',
                  letterSpacing: { xs: -1, sm: -2, md: -4, lg: -6 },
                  lineHeight: { xs: 1.1, sm: 1.05, md: 1 },
                  textShadow: '0 2px 16px rgba(0,0,0,0.4)',
                  userSelect: 'none',
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
                    fontSize: {
                      xs: 'clamp(0.75rem, 3vw, 1rem)',
                      sm: 'clamp(1rem, 2.5vw, 1.25rem)',
                      md: 'clamp(1.25rem, 1.5vw, 1.5rem)',
                      lg: 'clamp(1.5rem, 2.5vw, 2rem)'
                    },
                    color: '#fff',
                    textShadow: '0 2px 16px rgba(0,0,0,0.4)',
                    userSelect: 'none',
                    m: 0,
                    p: 0,
                    mt: { xs: 1, sm: 1.5, md: 2 }
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