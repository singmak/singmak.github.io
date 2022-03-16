import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from './Footer';
import Header from './Header';
import { Social } from './Social';
import '../styles.css';

const MainLayout: React.FC<{ pageTitle: string }> = ({ pageTitle, children }) => {
  return (
    <Box sx={{
      backgroundColor: '#e6f1f3'
    }}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="0BOaKw-N8goBTlYnHzJWtb6Yn_4GeZjZHaVxq_RmV3E" />
        <title>Sing Mak&apos;s software engineering journey | {pageTitle}</title>
      </Helmet>
      <Header pageTitle={pageTitle} />
      <Box sx={{ position: 'fixed', right: 5, top: 200, display: { xs: 'none', md: 'block' } }}>
        <Social direction='column'/>
      </Box>
      <CssBaseline />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;