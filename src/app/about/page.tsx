"use client";
import { HeroMainSection } from "@/components/layout";
import { FooterSection } from "@/components/layout";
import { SlidingText } from "@/components/animations";
import { RevealImage } from "@/components/features";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const [revealedLines, setRevealedLines] = useState([false, false]);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [headlineRevealed, setHeadlineRevealed] = useState(false);

  // Split the final text into lines for animation
  const finalTextLines = [
    "Και φτάνουμε στο σήμερα. Η εταιρία συμπληρώνει 50 ολόκληρα χρόνια παρουσίας στον χώρο του επαγγελματικού επίπλου. Στο τιμόνι πλέον βρίσκονται η Κική και η Άννα Ρήγα, οι οποίες συνεχίζουν το όραμα και το έργο του πατέρα τους, Δημήτρη Ρήγα. Με νέα σχέδια, φρέσκιες ιδέες και σύγχρονη αισθητική, προχωρούν δυναμικά, παρουσιάζοντας νέο site με premium είδη και ένα καινοτόμο eshop, φέρνοντας στην αγορά μοναδικές προτάσεις που ανταποκρίνονται στις απαιτήσεις της εποχής.",
    "Είμαστε εδώ. Και συνεχίζουμε..."
  ];

  // Trigger headline reveal animation on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('aboutPageVisited');
    
    if (!hasVisited) {
      // First visit - trigger animation
      const timer = setTimeout(() => {
        setHeadlineRevealed(true);
      }, 500); // Start after 500ms

      // Mark as visited
      localStorage.setItem('aboutPageVisited', 'true');

      return () => clearTimeout(timer);
    } else {
      // Not first visit - show immediately
      setHeadlineRevealed(true);
    }
  }, []);

  // Trigger text reveal animation when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasTriggered) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);

          // Reveal lines one by one with staggered delay
          finalTextLines.forEach((_, index) => {
            setTimeout(() => {
              setRevealedLines(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200); // 200ms delay between each line
          });
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' } // Increased threshold and added rootMargin
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasTriggered, finalTextLines.length]);

  return (
    <>
      <HeroMainSection
        videoUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/04/RF.mp4"
        animatedLetters="about us"
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
      <Box sx={{ bgcolor: '#fff', color:"black", px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 }, minHeight: '100vh' }}>
        <Typography 
          ref={headlineRef}
          variant="h2" 
          sx={{ 
            fontWeight: 900, 
            fontSize:"54px", 
            textAlign: 'center', 
            margin:"2.1rem 0 1.68rem 0", 
            fontFamily: "'Aeonik Pro', sans-serif", 
            letterSpacing: "-1px",
            opacity: headlineRevealed ? 1 : 0,
            transform: headlineRevealed ? 'translateY(0)' : 'translateY(60px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          Discover timeless elegance
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 900, marginLeft:"auto" }}>
          Εξέλιξη και πάθος για τον χώρο του επίπλου, σεβασμός και προσφορά σε κάθε επαγγελματικό και οικιακό χώρο που θέλει να ξεχωρίζει.
        </Typography>
        <Box sx={{ maxWidth: 900, marginLeft: "auto"}}>
          <Typography variant="h4" sx={{ fontWeight: 700,  margin:"2.1rem 0 1.68rem 0" }}>
            1975
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, marginLeft:"auto" }}>
            Όλα ξεκίνησαν το <b>1975</b>, όταν ο <b>Δημήτρης Ρήγας</b>, επιστρέφοντας μετά απο 7 έτη από την Αμερική, συνέλαβε την ιδέα να δημιουργήσει καρέκλες εστίασης, εμπνευσμένος από τις ανάγκες και τις τάσεις που είχε παρατηρήσει εκεί. Με όραμα την ποιότητα και την ανθεκτικότητα, ξεκίνησε την παραγωγή σε ένα μικρό εργαστήριο, θέτοντας τις βάσεις για αυτό που έμελλε να εξελιχθεί σε μια πρωτοποριακή πορεία στον χώρο του επαγγελματικού επίπλου.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, marginLeft:"auto",  margin:"2.1rem 0 1.68rem 0" }}>
            1985
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, marginLeft:"auto" }}>
            Δέκα χρόνια αργότερα, το <b>1985</b>, ένα ταξίδι σε έκθεση στην Ιταλία θα του άλλαζε για άλλη μια φορά τη ματιά. Εκεί, γεννήθηκε η ιδέα της βιεννέζικης καρέκλας – όχι όμως ξύλινης, όπως ήταν παραδοσιακά, αλλά κατασκευασμένης από μέταλλο. Η πρόταση ήταν ριζοσπαστική και άκρως πρωτοποριακή για την εποχή. Η ανταπόκριση της αγοράς υπήρξε εντυπωσιακή: οι πωλήσεις εκτοξεύτηκαν και η μεταλλική βιεννέζικη καρέκλα έγινε συνώνυμη της αισθητικής, της ανθεκτικότητας και της λειτουργικότητας.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, marginLeft:"auto",  margin:"2.1rem 0 1.68rem 0" }}>
            1995
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, marginLeft:"auto" }}>
          Το 1995 αποτέλεσε ακόμη ένα σημαντικό σταθμό. Με γνώμονα την ανάπτυξη και την ανάγκη για μεγαλύτερη προβολή, πάρθηκε η απόφαση για την αγορά ιδιόκτητων εγκαταστάσεων συνολικής έκτασης 3.500 τετραγωνικών μέτρων, με στόχο τη δημιουργία μιας πλήρους και σύγχρονης έκθεσης. Την ίδια χρονιά ξεκίνησαν και οι πρώτες εισαγωγές προϊόντων, δίνοντας στην επιχείρηση νέα πνοή και φέρνοντας στην ελληνική αγορά σχέδια με απίστευτο design, που μέχρι τότε φάνταζαν άπιαστα. Η αγορά ήταν πια έτοιμη να αγκαλιάσει τη νέα αισθητική.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, marginLeft:"auto",  margin:"2.1rem 0 1.68rem 0" }}>
            2005
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, marginLeft:"auto" }}>
          Το 2005, η συνεχώς αυξανόμενη εισαγωγική δραστηριότητα δημιούργησε την ανάγκη για ακόμη μεγαλύτερες αποθηκευτικές δυνατότητες. Έτσι, ανεγέρθηκαν νέες, ιδιόκτητες αποθήκες συνολικής έκτασης 6.500 τετραγωνικών μέτρων, ενισχύοντας τον επιχειρησιακό μηχανισμό και διασφαλίζοντας ταχύτητα και συνέπεια.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 700, marginLeft:"auto",  margin:"2.1rem 0 1.68rem 0" }}>
            2015
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, marginLeft:"auto" }}>
          Το 2015, εν μέσω της οικονομικής κρίσης, η εταιρία δεν υποχώρησε – εξελίχθηκε. Στράφηκε σε νέα κανάλια επικοινωνίας και εμπορίου, λανσάροντας το πρώτο της eshop και εστιάζοντας στρατηγικά στον τομέα της εστίασης και του ξενοδοχειακού εξοπλισμού. Ήταν η αρχή μιας νέας εποχής.
          </Typography>

          {/* Final section with parallax reveal effect */}
          <Box ref={sectionRef} sx={{ mt: 6 }}>
            {finalTextLines.map((line, index) => (
              <Typography
                key={index}
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  marginLeft: "auto",
                  opacity: revealedLines[index] ? 1 : 0,
                  transform: revealedLines[index] ? 'translateY(0)' : 'translateY(60px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: `${index * 0.2}s`,
                  mb: 2,
                }}
              >
                {line}
              </Typography>
            ))}
          </Box>
        </Box>
        
        {/* Image section using reusable component */}
        <RevealImage 
          imageUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/04/DSC06742-scaled.jpg.webp"
          alt="Rigas Furniture"
        /> 
      </Box>
      <FooterSection />
      <SlidingText />
    </>
  );
} 