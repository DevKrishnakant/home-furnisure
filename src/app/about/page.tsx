"use client";
import HeroMainSection from "@/components/HeroMainSection";
import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <>
      <HeroMainSection
        videoUrl="https://www.rigas-furniture.gr/wp-content/uploads/2025/04/RF.mp4"
        animatedLetters="about us"
        showLogo={true}
        showMenu={true}
        showRightBar={true}
      />
      <Box sx={{ bgcolor: '#fff',color:"black", px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 }, minHeight: '100vh' }}>
        <Typography variant="h2" sx={{ fontWeight: 900, fontSize:"54px", textAlign: 'center', mb: 4, fontFamily: "'Aeonik Pro', sans-serif", letterSpacing: "-1px"}}>
          Discover timeless elegance
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.3rem' }, textAlign:"right", maxWidth: 900, mb: 6 }}>
          Εξέλιξη και πάθος για τον χώρο του επίπλου, σεβασμός και προσφορά σε κάθε επαγγελματικό και οικιακό χώρο που θέλει να ξεχωρίζει.
        </Typography>
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 4, mb: 1 }}>
            1975
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, mb: 4 }}>
            Όλα ξεκίνησαν το <b>1975</b>, όταν ο <b>Δημήτρης Ρήγας</b>, επιστρέφοντας μετά απο 7 έτη από την Αμερική, συνέλαβε την ιδέα να δημιουργήσει καρέκλες εστίασης, εμπνευσμένος από τις ανάγκες και τις τάσεις που είχε παρατηρήσει εκεί. Με όραμα την ποιότητα και την ανθεκτικότητα, ξεκίνησε την παραγωγή σε ένα μικρό εργαστήριο, θέτοντας τις βάσεις για αυτό που έμελλε να εξελιχθεί σε μια πρωτοποριακή πορεία στον χώρο του επαγγελματικού επίπλου.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 4, mb: 1 }}>
            1985
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, mb: 4 }}>
            Δέκα χρόνια αργότερα, το <b>1985</b>, ένα ταξίδι σε έκθεση στην Ιταλία θα του άλλαζε για άλλη μια φορά τη ματιά. Εκεί, γεννήθηκε η ιδέα της βιεννέζικης καρέκλας – όχι όμως ξύλινης, όπως ήταν παραδοσιακά, αλλά κατασκευασμένης από μέταλλο. Η πρόταση ήταν ριζοσπαστική και άκρως πρωτοποριακή για την εποχή. Η ανταπόκριση της αγοράς υπήρξε εντυπωσιακή: οι πωλήσεις εκτοξεύτηκαν και η μεταλλική βιεννέζικη καρέκλα έγινε συνώνυμη της αισθητικής, της ανθεκτικότητας και της λειτουργικότητας.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 4, mb: 1 }}>
            1995
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, mb: 4 }}>
          Το 1995 αποτέλεσε ακόμη ένα σημαντικό σταθμό. Με γνώμονα την ανάπτυξη και την ανάγκη για μεγαλύτερη προβολή, πάρθηκε η απόφαση για την αγορά ιδιόκτητων εγκαταστάσεων συνολικής έκτασης 3.500 τετραγωνικών μέτρων, με στόχο τη δημιουργία μιας πλήρους και σύγχρονης έκθεσης. Την ίδια χρονιά ξεκίνησαν και οι πρώτες εισαγωγές προϊόντων, δίνοντας στην επιχείρηση νέα πνοή και φέρνοντας στην ελληνική αγορά σχέδια με απίστευτο design, που μέχρι τότε φάνταζαν άπιαστα. Η αγορά ήταν πια έτοιμη να αγκαλιάσει τη νέα αισθητική.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 4, mb: 1 }}>
            2005
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, mb: 4 }}>
          Το 2005, η συνεχώς αυξανόμενη εισαγωγική δραστηριότητα δημιούργησε την ανάγκη για ακόμη μεγαλύτερες αποθηκευτικές δυνατότητες. Έτσι, ανεγέρθηκαν νέες, ιδιόκτητες αποθήκες συνολικής έκτασης 6.500 τετραγωνικών μέτρων, ενισχύοντας τον επιχειρησιακό μηχανισμό και διασφαλίζοντας ταχύτητα και συνέπεια.
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 700, mt: 4, mb: 1 }}>
            2015
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '1rem', md: '1.2rem' }, mb: 4 }}>
          Το 2015, εν μέσω της οικονομικής κρίσης, η εταιρία δεν υποχώρησε – εξελίχθηκε. Στράφηκε σε νέα κανάλια επικοινωνίας και εμπορίου, λανσάροντας το πρώτο της eshop και εστιάζοντας στρατηγικά στον τομέα της εστίασης και του ξενοδοχειακού εξοπλισμού. Ήταν η αρχή μιας νέας εποχής.
          </Typography>
        </Box>
      </Box>
    </>
  );
} 