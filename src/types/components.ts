import { ReactNode } from 'react';

// Hero Section Types
export interface HeroMainSectionProps {
  videoUrl?: string;
  backgroundImageUrl?: string;
  mainText?: string;
  subText?: string;
  showLogo?: boolean;
  showMenu?: boolean;
  showRightBar?: boolean;
  animatedLines?: string[];
  animatedLetters?: string;
  menuCatagory?: boolean;
  children?: ReactNode;
}

// Modal Types
export interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export interface SharesModalProps {
  open: boolean;
  onClose: () => void;
  leftSection?: ReactNode;
  children: ReactNode | ((props: { shouldStartReveal: boolean }) => ReactNode);
}

// Animation Types
export interface AnimatedLettersProps {
  text: string;
  delayStep?: number;
  sx?: any;
  className?: string;
  parallaxOnScroll?: boolean;
}

export interface AnimatedLinesProps {
  lines: string[];
  sx?: any;
  typographySx?: any;
  lineSx?: any;
}

// Feature Types
export interface ImageGridProps {
  images: {
    url: string;
    title: string;
    height?: string;
    width?: string;
  }[];
  gap?: number;
}

export interface RevealImageProps {
  imageUrl: string;
  alt?: string;
  width?: string;
  boxShadow?: number;
  mt?: number;
}

// Menu Types
export interface MenuCategoryBelowTextProps {
  lines?: string[];
  title?: string;
  subtitle?: string;
}

export interface Category {
  title: string;
  items: string;
  path?: string;
} 