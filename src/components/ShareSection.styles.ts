import { SxProps, Theme } from "@mui/material";

export const shareSectionStyles: Record<string, SxProps<Theme>> = {
  main: {
    minHeight: "100vh",
    bgcolor: "white",
    pt:20
  },
  typography: {
    color: "black",
    fontWeight: 300,
    lineHeight: 1.2,
    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
    fontFamily: "'Plus Jakarta Sans', 'Inter', 'Arial', 'Helvetica Neue', sans-serif",
  },
}; 