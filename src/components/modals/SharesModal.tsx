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
      
      // Start modal slide down animation with a slight delay
      setTimeout(() => {
        setIsModalVisible(true);
      }, 50);
      
      // Content reveals after modal is in place
      setTimeout(() => {
        setIsContentVisible(true);
      }, 600); // Increased delay for more pronounced effect
    } else {
      // First animate out content
      setIsContentVisible(false);
      
      // Then animate out modal after content is fully hidden
      setTimeout(() => {
        setIsModalVisible(false);
        
        // Finally remove from DOM after modal animation completes
        setTimeout(() => {
          setShouldRender(false);
        }, 800); // Match modal animation duration
      }, 800); // Wait longer for content to fully fade out
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
        transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 9999,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'stretch',
        overflow: 'hidden', // Prevent scroll during animation
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
            transform: isContentVisible ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.2s"
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