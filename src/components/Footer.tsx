import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'gatsby-theme-material-ui';

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#bedbda', borderTop: '1px solid #99c5c2' }}>
      <Container sx={{ display: 'flex', textAlign: 'left', paddingTop: 2, paddingBottom: 1 }}>
        <Typography paragraph sx={{ fontSize: '12px' }}>
          © 2022 Sing Mak
        </Typography>
        <Typography paragraph sx={{ fontSize: '12px', marginLeft: 3 }}>
        Built with <Link to="https://www.gatsbyjs.com">Gatsby</Link> and <Link to="https://mui.com">MUI</Link>
        </Typography>
      </Container>
    </Box>
    
  );
};