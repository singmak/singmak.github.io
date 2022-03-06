import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#bedbda', borderTop: '1px solid #99c5c2' }}>
      <Container maxWidth="md" >
        <Typography sx={{ textAlign: 'left', paddingTop: 2, paddingBottom: 1, fontSize: '12px' }}>© 2022 Sing Mak</Typography>
      </Container>
    </Box>
    
  );
};