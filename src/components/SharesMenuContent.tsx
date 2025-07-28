import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const centerRows = [
  { type: "h3", text: "ΤΡΑΠΕΖΑΡΙΑ" },
  { type: "body", text: "ΤΡΑΠΕΖΙ ΚΑΘΙΣΜΑ ΣΚΑΜΠΟ ΒΙΒΛΙΟΘΗΚΗ ΕΠΙΠΛΟ TV ΜΠΟΥΦΕΣ" },
  { type: "h3", text: "ΣΑΛΟΝΙ" },
  { type: "body", text: "ΚΑΝΑΠΕΣ ΠΟΛΥΘΡΟΝΑ ΤΡΑΠΕΖΙ ΣΑΛΟΝΙΟΥ-ΒΟΗΘΗΤΙΚΟ" },
  { type: "h3", text: "ΚΡΕΒΑΤΟΚΑΜΑΡΑ" },
  { type: "body", text: "ΚΟΜΟΔΙΝΟ ΚΡΕΒΑΤΙ ΝΤΟΥΛΑΠΑ ΣΥΡΤΑΡΙΕΡΑ" },
  { type: "h3", text: "BOHO" },
  { type: "body", text: "ΚΑΘΙΣΜΑ ΤΡΑΠΕΖΙ ΣΚΑΜΠΟ ΚΑΝΑΠΕΣ ΜΠΟΥΦΕΣ" },
  { type: "h3", text: "HORECA" },
  { type: "body", text: "ΚΑΘΙΣΜΑ ΤΡΑΠΕΖΙ ΣΚΑΜΠΟ ΚΑΝΑΠΕΣ ΠΑΣΟ-STAND" },
  { type: "h3", text: "OUTDOOR" },
  { type: "body", text: "ΚΑΘΙΣΜΑ ΤΡΑΠΕΖΙ ΣΚΑΜΠΟ ΚΑΝΑΠΕΣ ΣΕΤ ΣΑΛΟΝΙ ΣΕΤ ΤΡΑΠΕΖΑΡΙΑΣ ΠΑΣΟ-STAND ΟΜΠΡΕΛΑ ΞΑΠΛΩΣΤΡΑ DAYBED ΚΟΥΝΙΑ" },
  { type: "h3", text: "DECO N MORE" },
  { type: "body", text: "ΕΙΔΗ ΔΙΑΚΟΣΜΗΣΗΣ ΦΩΤΙΣΤΙΚΟ ΠΙΝΑΚΑΣ ΚΑΘΡΕΦΤΗΣ ΦΥΤΑ" },
];

const rightRows = [
  { type: "heading", text: "Get in touch" },
  { type: "body", text: "Info Desk: contact@rigas-furniture.gr" },
  { type: "body", text: "AIRBnB: airbnb@rigas-furniture.gr" },
  { type: "body", text: "Λεωφ. Κηφισού 81," },
  { type: "body", text: "Αγ. Ιωάννης Ρέντης, 182 33" },
  { type: "body", text: "T: 2104830284" },
  { type: "heading", text: "Social Media" },
  { type: "body", text: "FACEBOOK" },
  { type: "body", text: "INSTAGRAM" },
  { type: "body", text: "LINKEDIN" },
  { type: "body", text: "PINTEREST" },
];

const maxRows = Math.max(centerRows.length, rightRows.length);

export default function SharesMenuContent({ shouldStartReveal = false }: { shouldStartReveal?: boolean }) {
  const [centerRevealed, setCenterRevealed] = useState(Array(centerRows.length).fill(false));
  const [rightRevealed, setRightRevealed] = useState(Array(rightRows.length).fill(false));

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    if (shouldStartReveal) {
      // Reveal center rows from top to bottom
      centerRows.forEach((_, i) => {
        timeouts.push(setTimeout(() => {
          setCenterRevealed((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 1));
      });
      
      // Reveal right rows from top to bottom
      rightRows.forEach((_, i) => {
        timeouts.push(setTimeout(() => {
          setRightRevealed((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 1));
      });
    } else {
      // Hide center rows from bottom to top
      [...Array(centerRows.length).keys()].reverse().forEach((i, idx) => {
        timeouts.push(setTimeout(() => {
          setCenterRevealed((prev) => {
            const next = [...prev];
            next[i] = false;
            return next;
          });
        }, idx * 1));
      });
      
      // Hide right rows from bottom to top
      [...Array(rightRows.length).keys()].reverse().forEach((i, idx) => {
        timeouts.push(setTimeout(() => {
          setRightRevealed((prev) => {
            const next = [...prev];
            next[i] = false;
            return next;
          });
        }, idx * 1));
      });
    }
    return () => { timeouts.forEach(clearTimeout); };
  }, [shouldStartReveal]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#181818",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        justifyContent: "center",
        p: 0,
      }}
    >
      {/* Center: Menu */}
      <Box
        sx={{
          flex: 2,
          padding:"0 3rem",
          borderRight: { md: "1px solid #444" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {centerRows.map((row, i) => (
          <Typography
            key={i}
            variant={row.type === "h3" ? "h3" : "body1"}
            sx={{
              fontWeight: row.type === "h3" ? 900 : 400,
              fontSize: row.type === "h3" ? "4rem" : "1.1rem",
              opacity: centerRevealed[i] ? 1 : 0,
              transform: centerRevealed[i] ? "translateY(0)" : "translateY(80px)",
              transition: "opacity 0.6s ease-out, transform 0.8s ease-out",
              transitionDelay: centerRevealed[i]
                ? `${i * 0.08}s`
                : `${(centerRows.length - 1 - i) * 0.025}s`,
            }}
          >
            {row.text}
          </Typography>
        ))}
      </Box>

      {/* Right: Contact & Social */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 3, md: 6 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {rightRows.map((row, i) => {
          return (
            <Typography
              key={i}
              variant={row.type === "heading" ? "h6" : "body1"}
              sx={{
                fontWeight: row.type === "heading" ? 700 : 400,
                fontSize: row.type === "heading" ? "1.2rem" : "1rem",
                mb: row.type === "heading" ? 1 : 0,
                mt: row.type === "heading" && i !== 0 ? 3 : 0,
                opacity: rightRevealed[i] ? 1 : 0,
                transform: rightRevealed[i] ? "translateY(0)" : "translateY(80px)",
                transition: "opacity 0.6s ease-out, transform 0.8s ease-out",
                transitionDelay: rightRevealed[i]
                  ? `${i * 0.08}s`
                  : `${(rightRows.length - 1 - i) * 0.025}s`,
              }}
            >
              {row.text}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
} 