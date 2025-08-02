import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#f5f5f5',
      dark: '#cccccc',
      contrastText: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#fafafa',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: [
      'Aeonik Pro',
      'Plus Jakarta Sans',
      'Inter',
      'Arial',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 900,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      letterSpacing: '-1px',
    },
    h2: {
      fontWeight: 900,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.4,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  spacing: (factor: number) => `${8 * factor}px`,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
          },
        },
      },
    },
  },
});

export const globalStyles = {
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  'a': {
    textDecoration: 'none',
    color: 'inherit',
  },
  'img': {
    maxWidth: '100%',
    height: 'auto',
  },
}; 