import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#4791db',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
  },
});

export default theme;
