"use client";
import { Box, Typography, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      // Let DOM render before triggering animation
      setTimeout(() => {
        setVisible(true);
      }, 20); // slight delay to ensure transition works
    } else {
      setVisible(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 800); // match total hide animation time
    }
  }, [open]);

  if (!shouldRender) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        left: 0,
        right: 0,
        height: "146px",
        bgcolor: "rgba(0, 0, 0)",
        color: "white",
        transform: visible ? "translateY(0)" : "translateY(-200px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.7s ease, opacity 0.7s ease",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
      

        <TextField
          fullWidth
          placeholder="Αναζήτηση..."
          variant="standard"
          sx={{
            flex: 1,
            mx: 3,
            "& .MuiInputBase-root": {
              color: "white",
              fontSize: "1.1rem",
            },
            "& .MuiInputBase-input": {
              color: "white",
              "&::placeholder": {
                color: "rgba(255, 255, 255, 0.7)",
                opacity: 1,
              },
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "rgba(255, 255, 255, 0.3)",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottomColor: "rgba(255, 255, 255, 0.5)",
            },
          }}
          autoFocus
        />

        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: "1rem",
            color: "white",
            cursor: "pointer",
            minWidth: "60px",
            textAlign: "right",
            "&:hover": {
              opacity: 0.8,
            },
          }}
          onClick={onClose}
        >
          CLOSE
        </Typography>
      </Box>
    </Box>
  );
}
