import { Box, Typography } from "@mui/material";

export default function AwardsSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        mt: "10px",
        bgcolor: "white",
        border: "2px solid #111",
        borderLeft: 0,
        borderRight: 0,
        pb: { xs: "20px", md: "40px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: "4rem", sm: "7rem", md: "12rem", lg: "16rem" },
          letterSpacing: {
            xs: "-4px",
            sm: "-6px",
            md: "-10px",
            lg: "-14px",
          },
          transform: {
            xs: "scaleY(1.1)",
            sm: "scaleY(1.2)",
            md: "scaleY(1.3)",
          },
          color: "#111",
          fontFamily:
            "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
          textAlign: "center",
          lineHeight: 1,
          whiteSpace: "nowrap", // Prevent wrapping
        }}
      >
        awards.
      </Typography>
    </Box>
  );
}
