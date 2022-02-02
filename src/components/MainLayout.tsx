import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import Header from './Header';

const MainLayout: React.FC<{ pageTitle: string }> = ({ pageTitle, children }) => {
  return (
    <div>
      <Header pageTitle={pageTitle} />
      <CssBaseline />
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;