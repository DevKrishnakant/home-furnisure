import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Category {
  title: string;
  items: string;
  path?: string;
}

const categories: Category[] = [
  {
    title: "ΤΡΑΠΕΖΑΡΙΑ",
    items: "ΤΡΑΠΕΖΙ ΚΑΘΙΣΜΑ ΣΚΑΜΠΟ ΒΙΒΛΙΟΘΗΚΗ ΕΠΙΠΛΟ TV ΜΠΟΥΦΕΣ",
    path: "/product-category/collection/trapezaria/"
  },
  {
    title: "ΣΑΛΟΝΙ",
    items: "ΚΑΝΑΠΕΣ ΠΟΛΥΘΡΟΝΑ ΤΡΑΠΕΖΙ ΣΑΛΟΝΙΟΥ-ΒΟΗΘΗΤΙΚΟ",
    path: "/product-category/collection/saloni/"
  },
  {
    title: "ΚΡΕΒΑΤΟΚΑΜΑΡΑ",
    items: "ΚΟΜΟΔΙΝΟ ΚΡΕΒΑΤΙ ΝΤΟΥΛΑΠΑ ΣΥΡΤΑΡΙΕΡΑ",
    path: "/product-category/collection/krevatokamara/"
  },
  {
    title: "BOHO",
    items: "ΚΑΘΙΣΜΑ ΤΡΑΠΕΖΙ ΣΚΑΜΠΟ ΚΑΝΑΠΕΣ ΜΠΟΥΦΕΣ",
    path: "/product-category/collection/boho/"
  },
  {
    title: "HORECA",
    items: "ΚΑΘΙΣΜΑ ΤΡΑΠΕΖΙ ΣΚΑΜΠΟ ΚΑΝΑΠΕΣ ΠΑΣΟ-STAND",
    path: "/product-category/collection/horeca/"
  },
  {
    title: "OUTDOOR",
    items: "ΚΑΘΙΣΜΑ ΤΡΑΠΕΖΙ ΣΚΑΜΠΟ ΚΑΝΑΠΕΣ ΣΕΤ ΣΑΛΟΝΙ ΣΕΤ ΤΡΑΠΕΖΑΡΙΑΣ ΠΑΣΟ-STAND ΟΜΠΡΕΛΑ ΞΑΠΛΩΣΤΡΑ DAYBED ΚΟΥΝΙΑ",
    path: "/product-category/collection/outdoor/"
  },
  {
    title: "DECO N MORE",
    items: "ΕΙΔΗ ΔΙΑΚΟΣΜΗΣΗΣ ΦΩΤΙΣΤΙΚΟ ΠΙΝΑΚΑΣ ΚΑΘΡΕΦΤΗΣ ΦΥΤΑ",
    path: "/product-category/collection/deco-n-more/"
  }
];

const rightRows = [
  { type: "heading", text: "Get in touch" },
  { type: "body", text: "Info Desk: contact@rigas-furniture.gr" },
  { type: "body", text: "AIRBNB: airbnb@rigas-furniture.gr" },
  { type: "body", text: "Λεωφ. Κηφισού 81," },
  { type: "body", text: "Αγ. Ιωάννης Ρέντης, 182 33" },
  { type: "body", text: "T: 2104830284" },
  { type: "heading", text: "Social Media" },
  { type: "body", text: "FACEBOOK" },
  { type: "body", text: "INSTAGRAM" },
  { type: "body", text: "LINKEDIN" },
  { type: "body", text: "PINTEREST" },
];

export default function SharesMenuContent({ shouldStartReveal = false }: { shouldStartReveal?: boolean }) {
  const [categoriesRevealed, setCategoriesRevealed] = useState(Array(categories.length).fill(false));
  const [rightRevealed, setRightRevealed] = useState(Array(rightRows.length).fill(false));
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    if (shouldStartReveal) {
      // Reveal categories from top to bottom
      categories.forEach((_, i) => {
        timeouts.push(setTimeout(() => {
          setCategoriesRevealed((prev) => {
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
      // Hide categories from bottom to top
      [...Array(categories.length).keys()].reverse().forEach((i, idx) => {
        timeouts.push(setTimeout(() => {
          setCategoriesRevealed((prev) => {
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

  const handleCategoryClick = (category: Category) => {
    if (category.path) {
      router.push(category.path);
    }
  };

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
      }}
    >
      {/* Center: Menu Categories */}
      <Box
        sx={{
          flex: 2,
          padding: "0 3rem",
          borderRight: { md: "1px solid white" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {categories.map((category, i) => {
          // Calculate opacity based on hover state and reveal state
          let opacity = 0;
          if (categoriesRevealed[i]) {
            if (hoveredCategory !== null && hoveredCategory !== i) {
              opacity = 0.1; // Other categories when one is hovered
            } else {
              opacity = 1; // Normal state or hovered category
            }
          }

          return (
            <Box
              key={i}
              onClick={() => handleCategoryClick(category)}
              onMouseEnter={() => setHoveredCategory(i)}
              onMouseLeave={() => setHoveredCategory(null)}
              sx={{
                cursor: category.path ? "pointer" : "default",
                borderRadius: 1,
                transition: "all 0.3s ease",
                opacity: opacity,
                transform: categoriesRevealed[i] ? "translateY(0)" : "translateY(80px)",
                transitionDelay: categoriesRevealed[i]
                  ? `${i * 0}s`
                  : `${(categories.length - 1 - i) * 0.12}s`,
                "&:hover": {
                  "& .category-items": {
                    color: "#fff",
                  }
                },
              }}
            >
              <Typography
                className="category-title"
                variant="h3"
                sx={{
                  fontWeight: 900,
                  fontSize: "3.5rem",
                  lineHeight: 1.1,
                  mb: 0.5,
                  color: "#fff",
                  transition: "color 0.3s ease, text-shadow 0.3s ease",
                }}
              >
                {category.title}
              </Typography>
              <Typography
                className="category-items"
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  lineHeight: 1.4,
                  color: "#ccc",
                  transition: "color 0.3s ease",
                }}
              >
                {category.items}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Right: Contact & Social */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 3, md: 6 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
                  : `${(rightRows.length - 1 - i) * 0.12}s`,
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