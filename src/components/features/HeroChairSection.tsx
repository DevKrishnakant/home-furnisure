import { Box, Typography } from "@mui/material";
import Link from "next/link";

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
      <Link href="/our-projects">
      <Box
        sx={{
          position: "absolute",
          left: { xs: 24, md: 87 },
          bottom: { xs: 32, md: 120 },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid white",
            borderRadius: 999,
            pl: 3,
            pr: 1.5,
            py: 1.2,
            fontSize: { xs: "1.3rem", md: "2rem" },
            fontWeight: 400,
            fontFamily: "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
            color: "white",
            background: "rgba(0,0,0,0.05)",
            cursor: "pointer",
            justifyContent: "space-between",
            width: "auto",
            letterSpacing: "-1px",
            boxShadow: 2,
            transition: "background 0.3s, color 0.3s",
            '&:hover': {
              background: "white",
              color: "black",
              '& .project-circle': {
                background: "black",
              },
            },
          }}
        >
          OUR PROJECTS
          <Box
            className="project-circle"
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              bgcolor: "white",
              ml: 2,
              display: "inline-block",
              transition: "background 0.3s",
            }}
          />
        </Box>
      </Box>
      </Link>
    </Box>
  );
} 