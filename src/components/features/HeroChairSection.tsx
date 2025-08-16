import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function HeroChairSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: 400, sm: 500, md: 600 },
        height: { xs: "auto", md: "100vh" }, // prevent too tall on small screens
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
      {/* Heading */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 32, sm: 40, md: 60 },
          left: { xs: 16, sm: 24, md: 60 },
          zIndex: 2,
          pr: { xs: 2, md: 0 }, // prevent text cutoff on mobile
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 400,
            fontSize: {
              xs: "clamp(1.8rem, 5vw, 2.4rem)", // mobile
              sm: "clamp(2.2rem, 5vw, 3.2rem)", // tablet
              md: "clamp(3rem, 5vw, 4.5rem)", // desktop
            },
            lineHeight: 1.1,
            letterSpacing: { xs: 0.5, md: 1 },
            textShadow: "0 2px 16px rgba(0,0,0,0.25)",
            maxWidth: { xs: "90vw", sm: "80vw", md: 900 },
            mb: { xs: 6, md: 10 },
            mt: { xs: 1, md: 0 },
          }}
        >
          ELEGANCE ISN’T
          <br />
          ADDED, IT’S CURATED
        </Typography>
      </Box>

      {/* Our Projects Button */}
      <Link href="/our-projects" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            position: "absolute",
            left: { xs: 16, sm: 24, md: 87 },
            bottom: { xs: 24, sm: 32, md: 120 },
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid white",
              borderRadius: 999,
              pl: { xs: 2, sm: 3 },
              pr: { xs: 1, sm: 1.5 },
              py: { xs: 0.8, sm: 1.2 },
              fontSize: { xs: "1rem", sm: "1.3rem", md: "2rem" },
              fontWeight: 400,
              fontFamily:
                "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
              color: "white",
              background: "rgba(0,0,0,0.05)",
              cursor: "pointer",
              justifyContent: "space-between",
              width: "auto",
              letterSpacing: "-1px",
              boxShadow: 2,
              transition: "background 0.3s, color 0.3s",
              "&:hover": {
                background: "white",
                color: "black",
                "& .project-circle": {
                  background: "black",
                },
              },
            }}
          >
            OUR PROJECTS
            <Box
              className="project-circle"
              sx={{
                width: { xs: 24, sm: 28, md: 32 },
                height: { xs: 24, sm: 28, md: 32 },
                borderRadius: "50%",
                bgcolor: "white",
                ml: { xs: 1, sm: 2 },
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
