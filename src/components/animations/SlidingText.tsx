import { Box, Typography } from "@mui/material";

export default function SlidingText() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        bgcolor: "white",
        py: 0,
        position: "relative",
      }}
    >
      <hr/>
      <Box
        sx={{
          display: "flex",
          animation: "slideLeft 20s linear infinite",
          whiteSpace: "nowrap",
          mt: -5.2,
          "@keyframes slideLeft": {
            "0%": {
              transform: "translateX(100%)",
            },
            "100%": {
              transform: "translateX(-100%)",
            },
          },
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "20rem",
            lineHeight:"18rem",
            fontWeight: 900,
            fontFamily: "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
            mr: 8,
            letterSpacing:"-15px",
            textTransform:"uppercase"
          }}
        >
          Rigas Furniture. Rigas Furniture. Rigas Furniture. Rigas Furniture. Rigas Furniture.
        </Typography>
      </Box>
    </Box>
  );
} 