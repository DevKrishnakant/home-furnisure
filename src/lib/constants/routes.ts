export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  OUR_PROJECTS: '/our-projects',
  PRODUCT_CATEGORIES: {
    TRAPEZARIA: '/product-category/collection/trapezaria',
    SALONI: '/product-category/collection/saloni',
    KREVATOKAMARA: '/product-category/collection/krevatokamara',
    BOHO: '/product-category/collection/boho',
    HORECA: '/product-category/collection/horeca',
    OUTDOOR: '/product-category/collection/outdoor',
    DECO_N_MORE: '/product-category/collection/deco-n-more',
  },
} as const;

export const CATEGORIES = [
  {
    title: "ΤΡΑΠΕΖΑΡΙΑ",
    items: "ΤΡΑΠΕΖΙ ΚΑΘΙΣΜΑ ΣΚΑΜΠΟ ΒΙΒΛΙΟΘΗΚΗ ΕΠΙΠΛΟ TV ΜΠΟΥΦΕΣ",
    path: ROUTES.PRODUCT_CATEGORIES.TRAPEZARIA,
  },
  {
    title: "ΣΑΛΟΝΙ",
    items: "ΚΑΝΑΠΕΣ ΠΟΛΥΘΡΟΝΑ ΤΡΑΠΕΖΙ ΣΑΛΟΝΙΟΥ-ΒΟΗΘΗΤΙΚΟ",
    path: ROUTES.PRODUCT_CATEGORIES.SALONI,
  },
  {
    title: "ΚΡΕΒΑΤΟΚΑΜΑΡΑ",
    items: "ΚΟΜΟΔΙΝΟ ΚΡΕΒΑΤΙ ΝΤΟΥΛΑΠΑ ΣΥΡΤΑΡΙΕΡΑ",
    path: ROUTES.PRODUCT_CATEGORIES.KREVATOKAMARA,
  },
  {
    title: "BOHO",
    items: "ΚΑΘΙΣΜΑ ΤΡΑΠΕΖΙ ΣΚΑΜΠΟ ΚΑΝΑΠΕΣ ΜΠΟΥΦΕΣ",
    path: ROUTES.PRODUCT_CATEGORIES.BOHO,
  },
  {
    title: "HORECA",
    items: "ΚΑΘΙΣΜΑ ΤΡΑΠΕΖΙ ΣΚΑΜΠΟ ΚΑΝΑΠΕΣ ΠΑΣΟ-STAND",
    path: ROUTES.PRODUCT_CATEGORIES.HORECA,
  },
  {
    title: "OUTDOOR",
    items: "ΚΑΘΙΣΜΑ ΤΡΑΠΕΖΙ ΣΚΑΜΠΟ ΚΑΝΑΠΕΣ ΣΕΤ ΣΑΛΟΝΙ ΣΕΤ ΤΡΑΠΕΖΑΡΙΑΣ ΠΑΣΟ-STAND ΟΜΠΡΕΛΑ ΞΑΠΛΩΣΤΡΑ DAYBED ΚΟΥΝΙΑ",
    path: ROUTES.PRODUCT_CATEGORIES.OUTDOOR,
  },
  {
    title: "DECO N MORE",
    items: "ΕΙΔΗ ΔΙΑΚΟΣΜΗΣΗΣ ΦΩΤΙΣΤΙΚΟ ΠΙΝΑΚΑΣ ΚΑΘΡΕΦΤΗΣ ΦΥΤΑ",
    path: ROUTES.PRODUCT_CATEGORIES.DECO_N_MORE,
  },
] as const; 