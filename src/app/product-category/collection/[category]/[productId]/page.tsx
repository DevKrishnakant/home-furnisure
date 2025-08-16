"use client";
import { useParams, useRouter } from "next/navigation";
import { HeroMainSection, FooterSection } from "@/components/layout";
import { SlidingText } from "@/components/animations";
import {MenuCategoryBelowText } from "@/components/features";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import ProductsList from "@/components/features/ProductsList";

const productsData = {
  "boho": {
    "kathisma-boho-1": {
      title: "ΚΑΘΙΣΜΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/BOHO-%CE%9A%CE%91%CE%98%CE%99%CE%A3%CE%9C%CE%91-scaled-1.jpg.webp",
      description: [
        "Τα καθίσματα boho style συνδυάζουν άνεση με φυσικότητα,",
        "χρησιμοποιώντας υλικά όπως ξύλο, ψάθα και φυσικά υφάσματα.",
        "Ιδανικά για χώρους που θέλουν να δημιουργήσουν μια χαλαρή και φιλόξενη ατμόσφαιρα."
      ],
       items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "kanapes-boho-1": {
      title: "ΚΑΝΑΠΕΣ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/Unknown-scaled.jpeg.webp",
      description: [
        "Οι καναπές boho style είναι γνωστές για την άνεσή τους και",
        "τον μοναδικό χαρακτήρα τους. Συχνά διακοσμημένες με",
        "πολύχρωμα cushions και ethnic patterns."
      ],
       items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "mpoufes-boho-1": {
      title: "ΜΠΟΥΦΕΣ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%92%CE%9F%CE%97%CE%9F-%CE%9C%CE%A0%CE%9F%CE%A5%CE%A6%CE%95%CE%A3--scaled.jpg.webp",
      description: [
        "Οι μπουφές boho προσθέτουν χρώμα και άνεση σε κάθε χώρο.",
        "Ιδανικές για επιπλήρωση και ως accent pieces."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "skampo-boho-1": {
      title: "ΣΚΑΜΠΟ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/boho-skampo.png.webp",
      description: [
        "Τα σκαμπό boho style προσθέτουν χρώμα και",
        "άνεση σε κάθε χώρο. Ιδανικά για επιπλήρωση",
        "και ως accent pieces."
      ],
     items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "trapezi-boho-1": {
      title: "ΤΡΑΠΕΖΙ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%92%CE%9F%CE%97%CE%9F-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%99-scaled.jpg.webp",
      description: [
        "Τα τραπέζια boho style συνδυάζουν φυσικότητα",
        "με στυλ. Χρησιμοποιούν φυσικά υλικά και",
        "ethnic patterns για μοναδικό χαρακτήρα."
      ],
     items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    }
  },
  "deco-n-more": {
    "eidi-diakosmisis-deco-1": {
      title: "ΕΙΔΗ ΔΙΑΚΟΣΜΗΣΗΣ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%95%CE%99%CE%94%CE%97-%CE%94%CE%99%CE%91%CE%9A%CE%9F%CE%A3%CE%9C%CE%97%CE%A3%CE%97%CE%A3-%CE%94%CE%99%CE%91%CE%9A%CE%9F%CE%A3%CE%9C%CE%97%CE%A3%CE%97-1.jpg.webp",
      description: [
        "Τα είδη διακόσμησης είναι ο τελικός πινέλιζας που",
        "ολοκληρώνει την εικόνα κάθε χώρου. Από μικρά διακοσμητικά",
        "αντικείμενα μέχρι μεγάλα έργα τέχνης."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "kathreftis-deco-1": {
      title: "ΚΑΘΡΕΦΤΗΣ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/mirror.png.webp",
      description: [
        "Οι καθρέφτες δεν είναι μόνο λειτουργικά αλλά και",
        "διακοσμητικά στοιχεία που μπορούν να διευρύνουν",
        "οπτικά έναν χώρο και να προσθέσουν φως."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "pinakas-deco-1": {
      title: "ΠΙΝΑΚΑΣ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A0%CE%99%CE%9D%CE%91%CE%9A%CE%91%CE%A3-%CE%94%CE%99%CE%91%CE%9A%CE%9F%CE%A3%CE%9C%CE%97%CE%A3%CE%97-1-scaled.jpg.webp",
      description: [
        "Οι πίνακες είναι ένας εξαιρετικός τρόπος για να",
        "προσθέσετε χρώμα και προσωπικότητα στον χώρο σας.",
        "Από σύγχρονες έως κλασικές επιλογές."
      ],
    items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "fyta-deco-1": {
      title: "ΦΥΤΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/fyta.png.webp",
      description: [
        "Τα φυτά προσθέτουν ζωή και φυσικότητα",
        "σε κάθε χώρο. Είναι ιδανικά για διακόσμηση",
        "και δημιουργούν μια υγιή ατμόσφαιρα."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "fwtistiko-deco-1": {
      title: "ΦΩΤΙΣΤΙΚΟ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A6%CE%A9%CE%A4%CE%99%CE%A3%CE%A4%CE%99%CE%9A%CE%91-%CE%94%CE%99%CE%91%CE%9A%CE%9F%CE%A3%CE%9C%CE%97%CE%A3%CE%97-1-scaled.jpg.webp",
      description: [
        "Τα φωτιστικά είναι απαραίτητα για τη δημιουργία",
        "της κατάλληλης ατμόσφαιρας. Από λάμπες μέχρι",
        "φωτιστικά οροφής και τοίχου."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    }
  },
  "horeca": {
    "kathisma-horeca-1": {
      title: "ΚΑΘΙΣΜΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/HORECA-%CE%9A%CE%91%CE%98%CE%99%CE%A3%CE%9C%CE%91.jpg.webp",
      description: [
        "Τα καθίσματα για HORECA χώρους πρέπει να είναι",
        "άνετα, ανθεκτικά και εύκολα στην καθαριότητα.",
        "Ιδανικά για εστιατόρια, καφέ και ξενοδοχεία."
      ],
    items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "kanapes-horeca-1": {
      title: "ΚΑΝΑΠΕΣ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%91%CE%9D%CE%91%CE%A0%CE%95%CE%A3-OUTDOOR-1.jpg.webp",
      description: [
        "Οι καναπές για HORECA πρέπει να ανταποκρίνονται",
        "στις ανάγκες του επαγγελματικού χώρου με",
        "ανθεκτικότητα και άνεση."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "paso-stand-horeca-1": {
      title: "ΠΑΣΟ-STAND",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/%CE%A0%CE%91%CE%A3%CE%9F-STAND-OUTDOOR.png.webp",
      description: [
        "Τα πάσο-stand είναι απαραίτητα για HORECA χώρους.",
        "Παρέχουν χώρο για διακόσμηση και πρακτική λειτουργικότητα.",
        "Ιδανικά για εστιατόρια και καφέ."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "skampo-horeca-1": {
      title: "ΣΚΑΜΠΟ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/Unknown-2-copy.jpeg.webp",
      description: [
        "Τα σκαμπό για HORECA χώρους πρέπει να είναι",
        "άνετα και ανθεκτικά. Ιδανικά για επιπλήρωση",
        "και προσαρμογή στον χώρο."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "trapezi-horeca-1": {
      title: "ΤΡΑΠΕΖΙ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%99-OUTDOOR-scaled.jpg.webp",
      description: [
        "Τα τραπέζια για HORECA χώρους πρέπει να είναι",
        "ανθεκτικά και εύκολα στην καθαριότητα.",
        "Ιδανικά για επαγγελματική χρήση."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    }
  },
  "saloni": {
    "kanapes-saloni-1": {
      title: "ΚΑΝΑΠΕΣ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/07/%CE%A3%CE%91%CE%9B%CE%9F%CE%9D%CE%99-%CE%9A%CE%91%CE%9D%CE%91%CE%A0%CE%95%CE%A3.jpg.webp",
      description: [
        "Οι καναπές του σαλονιού είναι το κεντρικό σημείο",
        "κάθε σπιτιού. Πρέπει να συνδυάζουν άνεση με",
        "κομψότητα και να ανταποκρίνονται στο στυλ του χώρου."
      ],
    items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "polythrona-saloni-1": {
      title: "ΠΟΛΥΘΡΟΝΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/07/%CE%A3%CE%91%CE%9B%CE%9F%CE%9D%CE%99-%CE%A0%CE%9F%CE%9B%CE%A5%CE%98%CE%A1%CE%9F%CE%9D%CE%91.jpg.webp",
      description: [
        "Τα πολυθρόνα προσθέτουν άνεση και στυλ στον",
        "σαλόνι. Είναι ιδανικά για ανάγνωση, τηλεόραση",
        "ή απλά για χαλάρωση."
      ],
     items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "trapezi-saloni-1": {
      title: "ΤΡΑΠΕΖΙ ΣΑΛΟΝΙΟΥ-ΒΟΗΘΗΤΙΚΟ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/trapezi-isaloni-voithiitiko.png.webp",
      description: [
        "Τα βοηθητικά τραπέζια του σαλονιού είναι",
        "ιδανικά για επιπλήρωση και πρακτική χρήση.",
        "Προσφέρουν ευελιξία στον χώρο."
      ],
     items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    }
  },
  "trapezaria": {
    "bibliothiki-trapezaria-1": {
      title: "ΒΙΒΛΙΟΘΗΚΗ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-rigas.png.webp",
      description:[
        "Με μοντέρνο ή διαχρονικό design και καθαρότητα γραμμών, αποτελεί το ιδανικό",
        "έπιπλο για κάθε σαλόνι, γραφείο ή επαγγελματικό χώρο."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "epiplo-tv-trapezaria-1": {
      title: "ΕΠΙΠΛΟ TV",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/trapezi-%CF%84%CF%89.png.webp",
      description: [
        "Τα έπιπλα TV είναι απαραίτητα για κάθε τραπεζαρία.",
        "Παρέχουν χώρο για τηλεόραση και αποθήκευση,",
        "συνδυάζοντας λειτουργικότητα με στυλ."
      ],
    items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "kathisma-trapezaria-1": {
      title: "ΚΑΘΙΣΜΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/%CE%9A%CE%91%CE%A1%CE%95%CE%9A%CE%9B%CE%91-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91%CE%A1%CE%99%CE%91.webp",
      description: [
        "Τα καθίσματα της τραπεζαρίας πρέπει να είναι",
        "άνετα για μακροχρόνια χρήση και να προσαρμόζονται",
        "στο στυλ του χώρου."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "mpoufes-trapezaria-1": {
      title: "ΜΠΟΥΦΕΣ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/%CE%9C%CE%A0%CE%9F%CE%A5%CE%A6%CE%95%CE%A3-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91%CE%A1%CE%99%CE%91.webp",
      description: [
        "Οι μπουφές της τραπεζαρίας προσθέτουν άνεση",
        "και στυλ στον χώρο. Ιδανικές για επιπλήρωση",
        "και ως accent pieces."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "skampo-trapezaria-1": {
      title: "ΣΚΑΜΠΟ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/skampo-saloni-voithitiko.png.webp",
      description: [
        "Τα σκαμπό της τραπεζαρίας είναι ιδανικά",
        "για επιπλήρωση και προσαρμογή στον χώρο.",
        "Προσφέρουν άνεση και ευελιξία."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "trapezi-trapezaria-1": {
      title: "ΤΡΑΠΕΖΙ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/05/%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91%CE%A1%CE%99%CE%91.png.webp",
      description: [
        "Το τραπέζι είναι το κεντρικό σημείο κάθε τραπεζαρίας.",
        "Πρέπει να είναι ανθεκτικό, λειτουργικό και",
        "να ανταποκρίνεται στο στυλ του χώρου."
      ],
    items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    }
  },
  "outdoor": {
    "daybed-outdoor-1": {
      title: "DAYBED",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/daybed.jpg.webp",
      description: [
        "Τα daybed είναι ιδανικά για εξωτερικούς χώρους,",
        "προσφέροντας άνεση και στυλ για χαλάρωση.",
        "Τέλεια για κήπους, βεράντες και πισίνες."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "kathisma-outdoor-1": {
      title: "ΚΑΘΙΣΜΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%91%CE%A1%CE%95%CE%9A%CE%9B%CE%91-OUTDOOR-1.jpg.webp",
      description: [
        "Τα καθίσματα εξωτερικού χώρου πρέπει να είναι",
        "ανθεκτικά στις καιρικές συνθήκες και άνετα.",
        "Ιδανικά για μακροχρόνια χρήση."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "kanapes-outdoor-1": {
      title: "ΚΑΝΑΠΕΣ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%91%CE%9D%CE%91%CE%A0%CE%95%CE%A3-OUTDOOR-1.jpg.webp",
      description: [
        "Οι καναπές εξωτερικού χώρου προσφέρουν",
        "άνεση και κοινωνικότητα σε κάθε εξωτερικό χώρο.",
        "Τέλεια για συγκεντρώσεις και χαλάρωση."
      ],
     items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "kounia-outdoor-1": {
      title: "ΚΟΥΝΙΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%9F%CE%A5%CE%9D%CE%99%CE%91.jpg.webp",
      description: [
        "Οι κουνιές εξωτερικού χώρου προσφέρουν",
        "άνεση και χαλάρωση. Ιδανικές για κήπους",
        "και βεράντες."
      ],
    items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "xaplostra-outdoor-1": {
      title: "ΞΑΠΛΩΣΤΡΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%BE%CE%B1%CF%80%CE%BB%CF%89%CF%83%CF%84%CF%81%CE%B1.jpg.webp",
      description: [
        "Οι ξαπλώστρες εξωτερικού χώρου είναι",
        "ιδανικές για χαλάρωση και ηλιοθεραπεία.",
        "Προσφέρουν άνεση και στυλ."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "omprela-outdoor-1": {
      title: "ΟΜΠΡΕΛΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/obrela.png.webp",
      description: [
        "Οι ομπρέλες εξωτερικού χώρου παρέχουν",
        "σκέπη από τον ήλιο και την κακοκαιρία.",
        "Ιδανικές για κήπους και βεράντες."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "paso-stand-outdoor-1": {
      title: "ΠΑΣΟ-STAND",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/paso-stand.png.webp",
      description: [
        "Τα πάσο-stand εξωτερικού χώρου είναι",
        "ιδανικά για διακόσμηση και πρακτική χρήση.",
        "Προσφέρουν ευελιξία στον χώρο."
      ],
     items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "set-salon-outdoor-1": {
      title: "ΣΕΤ ΣΑΛΟΝΙ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%91%CE%9D%CE%91%CE%A0%CE%95%CE%A3-OUTDOOR-2.jpg.webp",
      description: [
        "Τα σετ σαλονιού εξωτερικού χώρου",
        "προσφέρουν άνεση και κοινωνικότητα.",
        "Τέλεια για συγκεντρώσεις και χαλάρωση."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "skampo-outdoor-1": {
      title: "ΣΚΑΜΠΟ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/%CE%A3%CE%9A%CE%91%CE%9C%CE%A0%CE%9F-OUTDOOR.png.webp",
      description: [
        "Τα σκαμπό εξωτερικού χώρου είναι",
        "ιδανικά για επιπλήρωση και προσαρμογή.",
        "Προσφέρουν άνεση και ευελιξία."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "trapezi-outdoor-1": {
      title: "ΤΡΑΠΕΖΙ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%99-OUTDOOR-1-scaled.jpg.webp",
      description: [
        "Τα τραπέζια εξωτερικού χώρου πρέπει να είναι",
        "ανθεκτικά στις καιρικές συνθήκες.",
        "Ιδανικά για μακροχρόνια χρήση."
      ],
     items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    }
  },
  "krevatokamara": {
    "komodino-krevatokamara-1": {
      title: "ΚΟΜΟΔΙΝΟ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%9F%CE%9C%CE%9F%CE%94%CE%99%CE%9D%CE%9F-%CE%A5%CE%A0%CE%9D%CE%9F%CE%94%CE%A9%CE%9C%CE%91%CE%A4%CE%99%CE%9F.png.webp",
      description: [
        "Τα κομοδίνα είναι απαραίτητα έπιπλα για την",
        "οργάνωση του υπνοδωματίου. Παρέχουν χώρο",
        "αποθήκευσης και διακόσμησης."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "konsola-krevatokamara-1": {
      title: "ΚΟΝΣΟΛΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9A%CE%9F%CE%9D%CE%A3%CE%9F%CE%9B%CE%91-%CE%A5%CE%A0%CE%9D%CE%9F%CE%94%CE%A9%CE%9C%CE%91%CE%A4%CE%99%CE%9F.png.webp",
      description: [
        "Οι κονσόλες προσθέτουν στυλ και λειτουργικότητα",
        "στο υπνοδωμάτιο. Ιδανικές για διακόσμηση και",
        "αποθήκευση μικρών αντικειμένων."
      ],
     items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "krevati-krevatokamara-1": {
      title: "ΚΡΕΒΑΤΙ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/krevati.png.webp",
      description: [
        "Το κρεβάτι είναι το κεντρικό σημείο κάθε υπνοδωματίου.",
        "Πρέπει να συνδυάζει άνεση με στυλ και να",
        "ανταποκρίνεται στις ανάγκες του χώρου."
      ],
      items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "ntoulapa-krevatokamara-1": {
      title: "ΝΤΟΥΛΑΠΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%9D%CE%A4%CE%9F%CE%A5%CE%9B%CE%91%CE%A0%CE%91-%CE%A5%CE%A0%CE%9D%CE%9F%CE%94%CE%A9%CE%9C%CE%91%CE%A4%CE%99%CE%9F2-scaled.jpg.webp",
      description: [
        "Οι ντουλάπες του υπνοδωματίου παρέχουν",
        "αποθήκευση για ρούχα και αντικείμενα.",
        "Είναι απαραίτητες για την οργάνωση του χώρου."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    },
    "syrtariera-krevatokamara-1": {
      title: "ΣΥΡΤΑΡΙΕΡΑ",
      image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/04/%CE%A3%CE%A5%CE%A1%CE%A4%CE%91%CE%A1%CE%99%CE%95%CE%A1%CE%91-%CE%A5%CE%A0%CE%9D%CE%9F%CE%94%CE%A9%CE%9C%CE%91%CE%A4%CE%99%CE%9F.png.webp",
      description: [
        "Οι συρταριέρες του υπνοδωματίου παρέχουν",
        "οργανωμένη αποθήκευση για μικρά αντικείμενα.",
        "Ιδανικές για την τάξη του χώρου."
      ],
   items: [
        { id:1,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
       { id:2,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:3,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:4,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:5,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:6,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:7,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:8,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },{ id:9,
          name:{
            line1:"ΒΙΒΛΙΟΘΗΚΗ ROMULUS HM9803 ΑΝΑΚΥΚΛΩΜΕΝΟ",
            line2:"ΞΥΛΟ ΤΕΑΚ ΜΕ 2 ΣΥΡΤΑΡΙΑ 140x30x210,5Yεκ."
          },
          image: "https://www.rigas-furniture.gr/wp-content/uploads/2025/03/bibliothiki-fb99803-anakyklomeno-xylo-te.jpg.webp",
        },
      ],
    }
  },
  // Add other categories as needed
};

export default function ProductPage() {
  const { category, productId } = useParams();
  const router = useRouter();

  const categoryData = productsData[category as keyof typeof productsData];
  const product = categoryData?.[productId as string];

  if (!product) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '24px',
        color: '#666'
      }}>
        Product not found
      </div>
    );
  }

  const productImages = product.items.map((item, index) => ({
    url: item.image,
    title: {
      line1: item.name.line1,
      line2: item.name.line2
    },
    id: item.id,
    productId: `${productId}-item-${item.id}`
  }));

  return (
    <>
      <HeroMainSection
        backgroundImageUrl={product.image}
        animatedLetters={product.title}
        menuCatagory={true}
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />

      {/* Description below main image */}
      <MenuCategoryBelowText lines={product.description} />

      {/* Product Gallery */}
      <ProductsList 
        images={productImages} 
        gap={4} 
        category={category as string}
      />

      <FooterSection />
      <SlidingText />
    </>
  );
}
