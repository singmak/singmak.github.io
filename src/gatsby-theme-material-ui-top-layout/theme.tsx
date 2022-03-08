import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#456679',
    },
    secondary: {
      main: '#648a5f',
    },
  },
  typography: {
    fontFamily: [
      'Merriweather',
      'sans-serif'
    ].join(','),
  },
});

export default theme;