import { Box, Typography, Link } from "@mui/material";
import { footerSectionStyles } from "./FooterSection.styles";

export default function FooterSection() {
  return (
    <Box sx={footerSectionStyles.container}>
      <Box sx={footerSectionStyles.columns}>
        {/* MENU */}
        <Box>
          <Typography sx={footerSectionStyles.heading}>MENU</Typography>
          <Link sx={footerSectionStyles.link}>Home Page</Link>
          <Link sx={footerSectionStyles.link}>About</Link>
          <Link sx={footerSectionStyles.link}>Collection</Link>
          <Link sx={footerSectionStyles.link}>Catalogue</Link>
        </Box>
        {/* SOCIAL MEDIA */}
        <Box>
          <Typography sx={footerSectionStyles.heading}>SOCIAL MEDIA</Typography>
          <Link sx={footerSectionStyles.link}>Facebook</Link>
          <Link sx={footerSectionStyles.link}>Instagram</Link>
          <Link sx={footerSectionStyles.link}>Linkedin</Link>
          <Link sx={footerSectionStyles.link}>Pinterest</Link>
        </Box>
        {/* CONTACT US */}
        <Box>
          <Typography sx={footerSectionStyles.heading}>CONTACT US</Typography>
          <Link sx={footerSectionStyles.link}>Showroom</Link>
          <Link sx={footerSectionStyles.link}>AIRBNB Section</Link>
          <Link sx={footerSectionStyles.link}>Contact</Link>
          <Link sx={footerSectionStyles.link}>via Email</Link>
        </Box>
        {/* LOCATION */}
        <Box>
          <Typography sx={footerSectionStyles.heading}>LOCATION</Typography>
          <Typography sx={footerSectionStyles.link}>Λεωφ. Κηφισού 81,</Typography>
          <Typography sx={footerSectionStyles.link}>Αγ. Ιωάννης Ρέντης, 182 33</Typography>
          <Typography sx={footerSectionStyles.link}>T: 2104830284</Typography>
        </Box>
      </Box>
      {/* Subscribe Button */}
      <Box sx={footerSectionStyles.subscribeRow}>
        <Box sx={footerSectionStyles.subscribeButton}>
          SUBSCRIBE AND STAY INFORMED
          <Box sx={footerSectionStyles.subscribeCircle} />
        </Box>
      </Box>
      {/* Copyright */}
      <Typography sx={footerSectionStyles.copyright}>
        © 2025 RIGAS FURNITURE • by PROWEB
      </Typography>
    </Box>
  );
} 