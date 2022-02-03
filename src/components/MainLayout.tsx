import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import Header from './Header';

const MainLayout: React.FC<{ pageTitle: string }> = ({ pageTitle, children }) => {
  return (
    <Box>
      <Header pageTitle={pageTitle} />
      <CssBaseline />
      {children}
    </Box>
  );
};

export default MainLayout;