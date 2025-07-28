import { IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode, useState, useEffect } from "react";

interface SharesModalProps {
  open: boolean;
  onClose: () => void;
  leftSection?: ReactNode;
  children: ReactNode | ((props: { shouldStartReveal: boolean }) => ReactNode);
}

export default function SharesModal({ open, onClose, leftSection, children }: SharesModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsModalVisible(false);
      setIsContentVisible(false);
      
      // Start modal slide down animation
      requestAnimationFrame(() => {
        setIsModalVisible(true);
      });
      
      // Content reveals after modal is in place
      setTimeout(() => {
        setIsContentVisible(true);
      }, 500);
    } else {
      // Animate out content first, then modal
      setIsContentVisible(false);
      setTimeout(() => {
        setIsModalVisible(false);
        setTimeout(() => {
          setShouldRender(false);
        }, 500);
      }, 2000);
    }
  }, [open]);

  if (!shouldRender) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: "#181818",
        color: "white",
        opacity: isModalVisible ? 1 : 0,
        transform: isModalVisible ? "translateY(0)" : "translateY(-100vh)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        zIndex: 9999,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'stretch',
      }}
    >
      {leftSection}
      <Box sx={{ flex: 1, position: "relative", display: 'flex' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 24,
            right: 32,
            color: "white",
            zIndex: 10,
            opacity: isContentVisible ? 1 : 0,
            transition: "opacity 0.3s ease-out",
            transitionDelay: "0.1s"
          }}
          aria-label="close"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Box sx={{ width: '100%', height: '100%' }}>
          {typeof children === 'function' ? children({ shouldStartReveal: isContentVisible }) : children}
        </Box>
      </Box>
    </Box>
  );
} 