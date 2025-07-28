import { SxProps, Theme } from "@mui/material";

export const aboutSectionStyles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: "auto",
    width: "95%",
    px: 2,
    py: 4,
  },


  aboutButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    border: "2px solid #111",
    borderRadius: 999,
    px: 3,
    py: 1.2,
    fontSize: { xs: "1.5rem", md: "2rem" },
    fontWeight: 400,
    fontFamily: "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
    background: "#fff",
    cursor: "pointer",
    minWidth: 140,
    width: { xs: "auto", md: 220 },
    mb: { xs: 2, md: 0 },
    flexShrink: 0,
    transition: "background 0.3s, color 0.3s",
    '&:hover': {
      background: "#111",
      color: "#fff",
      '& .about-circle': {
        background: "#fff",
      },
    },
  },
  aboutCircle: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    bgcolor: "#111",
    ml: 2,
    display: "inline-block",
    transition: "background 0.3s",
  },
  aboutText: {
    fontSize: "3vw",
    fontWeight: 100,
    letterSpacing: -2,
    fontFamily: "'Aeonik Pro', sans-serif",
    color: "#111",
    textAlign: { xs: "center", md: "right" },
    lineHeight: "3vw",
    flex: 1, // <-- allow it to grow and fill space
  },

}; 