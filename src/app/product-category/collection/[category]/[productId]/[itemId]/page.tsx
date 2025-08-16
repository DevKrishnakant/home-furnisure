"use client";

import { Box, Typography, Button, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const productImages = [
  "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
  "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te-1.jpg.webp",
  "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te-2.jpg.webp",
  "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te-3.jpg.webp",
  "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te-4.jpg.webp",
];

export default function ProductItemPage() {
  const [current, setCurrent] = useState(0);
  const total = productImages.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <Box sx={{ maxWidth: "1000px", mx: "auto", p: 2 }}>
      {/* Carousel */}
      <Box sx={{ position: "relative", height: 500, mb: 4 }}>
        <img
          src={productImages[current]}
          alt={`Product ${current + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        {/* Left Arrow */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.7)",
            zIndex: 2, // Ensure it's clickable
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.7)",
            zIndex: 2, // Ensure it's clickable
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Product Info */}
      <Box sx={{ color: "black" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ΚΩΔΙΚΟΣ: <strong>0535411</strong>
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          ΥΛΙΚΟ: <strong>Ξύλο</strong>
        </Typography>

        <Typography paragraph>
          Η βιβλιοθήκη ROMULUS είναι μια από τις νέες προσθήκες στην γκάμα μας. Οι χώροι τοποθέτησης αντικειμένων είναι πολλοί αλλά με ασύμμετρη διάταξη δημιουργώντας μια πανέμορφη εικόνα. Η πρακτικότητα της βιβλιοθήκης ολοκληρώνεται με τα 2 μεγάλα συρτάρια στο κάτω μέρος. Ιδανική τόσο για το σπίτι όσο και για επαγγελματικούς χώρους.
        </Typography>

        <Typography fontWeight="bold" mt={2}>
          ΔΙΑΣΤΑΣΕΙΣ:
        </Typography>
        <Typography>140x30x210,5Y εκ.</Typography>
        <Typography>Διαστάσεις συρταριών: 60,5×23,5×26,5Y εκ. (x2)</Typography>

        <Typography fontWeight="bold" mt={2}>
          ΥΛΙΚΑ ΚΑΤΑΣΚΕΥΗΣ:
        </Typography>
        <Typography paragraph>
          Η βιβλιοθήκη είναι από ανακυκλωμένο ξύλο ΤΕΑΚ. Το ξύλο ΤΕΑΚ είναι ο πιο δημοφιλής τύπος σκληρού ξύλου. Είναι χρώματος κίτρινο έως σκούρο καφέ, εξαιρετικά βαρύ, υψηλής αντοχής, ανθεκτικό στις καιρικές συνθήκες, ανθεκτικό στο σκέβρωμα και δεν αποσυντίθεται.
        </Typography>

        <Typography fontWeight="bold" mt={2}>
          ΣΥΝΤΗΡΗΣΗ:
        </Typography>
        <Typography paragraph>
          Το μόνο που χρειάζεται είναι ένα ξεσκόνισμα και όταν χρειαστεί ένα καθάρισμα με ένα υγρό πανάκι.
        </Typography>

        <Typography variant="body2" color="textSecondary">
          * Η χρωματική απόδοση του προϊόντος ενδέχεται να διαφέρει ελαφρώς σε σχέση με την φωτογραφική απεικόνισή του στην οθόνη σας.
        </Typography>

        <Button
          variant="outlined"
          sx={{
            mt: 3,
            color: "black",
            borderColor: "black",
            fontWeight: "bold",
            ":hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          ADD TO CART
        </Button>
      </Box>
    </Box>
  );
}
