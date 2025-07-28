import { Box, Typography } from "@mui/material";

export default function AwardsSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        bgcolor: "white",
        border: "2px solid #111",
        borderLeft: 0,
        borderRight: 0,
        py: { xs: 3, md: 5 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: "3rem", sm: "5rem", md: "14rem" },
          color: "#111",
          fontFamily: "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        awards.
      </Typography>
    </Box>
  );
} 