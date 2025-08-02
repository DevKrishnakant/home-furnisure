import { Box, Typography, Link } from "@mui/material";
import { footerSectionStyles } from "./FooterSection.styles";
import { useRouter, usePathname } from "next/navigation";

export default function FooterSection() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleCurrentPageNavigation = () => {
    router.push(pathname);
  };

  return (
    <Box sx={footerSectionStyles.container}>
      <Box sx={footerSectionStyles.columns}>
        {/* MENU */}
        <Box sx={footerSectionStyles.column}>
          <Typography sx={footerSectionStyles.heading}>MENU</Typography>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>Home Page</Link>
          <Link sx={footerSectionStyles.link}>About</Link>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>Collection</Link>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>Catalogue</Link>
        </Box>
        {/* SOCIAL MEDIA */}
        <Box sx={footerSectionStyles.column}>
          <Typography sx={footerSectionStyles.heading}>SOCIAL MEDIA</Typography>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>Facebook</Link>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>Instagram</Link>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>Linkedin</Link>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>Pinterest</Link>
        </Box>
        {/* CONTACT US */}
        <Box sx={footerSectionStyles.column}>
          <Typography sx={footerSectionStyles.heading}>CONTACT US</Typography>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>Showroom</Link>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>AIRBNB Section</Link>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>Contact</Link>
          <Link sx={footerSectionStyles.link} onClick={() => handleNavigation('/')}>via Email</Link>
        </Box>
        {/* LOCATION */}
        <Box sx={footerSectionStyles.column}>
          <Typography sx={footerSectionStyles.heading}>LOCATION</Typography>
          <Typography sx={footerSectionStyles.link}>Λεωφ. Κηφισού 81,</Typography>
          <Typography sx={footerSectionStyles.link}>Αγ. Ιωάννης Ρέντης, 182 33</Typography>
          <Typography sx={footerSectionStyles.link}>T: 2104830284</Typography>
        </Box>
      </Box>
      {/* Subscribe Button */}
      <Box sx={footerSectionStyles.subscribeRow}>
        <Box sx={footerSectionStyles.subscribeButton} onClick={() => handleCurrentPageNavigation()}>
          SUBSCRIBE AND STAY INFORMED
          <Box className="subscribe-circle" sx={footerSectionStyles.subscribeCircle} />
        </Box>
      </Box>
      {/* Copyright */}
      <Typography sx={footerSectionStyles.copyright}>
        © 2025 RIGAS FURNITURE • by PROWEB
      </Typography>
    </Box>
  );
} 