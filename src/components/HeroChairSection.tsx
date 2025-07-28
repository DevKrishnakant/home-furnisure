import { Box, Typography } from "@mui/material";

export default function HeroChairSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: { xs: 400, md: 600 },
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        bgcolor: "#222",
        backgroundImage: `url('https://www.rigas-furniture.gr/wp-content/uploads/2025/04/DSCF2844-1-scaled.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        pb: 0,
      }}
    >
      {/* Logo and menu are assumed to be in the main layout */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 40, md: 60 },
          left: { xs: 24, md: 60 },
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            color: "white",
            fontWeight: 400,
            fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4.5rem" },
            lineHeight: 1.05,
            letterSpacing: 1,
            textShadow: "0 2px 16px rgba(0,0,0,0.25)",
            maxWidth: { xs: "90vw", md: 900 },
            mb: { xs: 8, md: 10 },
            mt: { xs: 2, md: 0 },
          }}
        >
          ELEGANCE ISN’T<br />ADDED, IT’S CURATED
        </Typography>
      </Box>
      {/* Our Projects Button */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 24, md: 60 },
          bottom: { xs: 32, md: 48 },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "2px solid white",
            borderRadius: 999,
            px: 3,
            py: 1.2,
            fontSize: { xs: "1.3rem", md: "2rem" },
            fontWeight: 400,
            fontFamily: "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
            color: "white",
            background: "rgba(0,0,0,0.05)",
            cursor: "pointer",
            minWidth: 180,
            justifyContent: "space-between",
            width: { xs: "auto", md: 260 },
            boxShadow: 2,
          }}
        >
          OUR PROJECTS
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              bgcolor: "white",
              ml: 2,
              display: "inline-block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
} 