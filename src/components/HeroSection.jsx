import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Social from './Social';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from '@mui/material/styles';

const HeroImage = styled(({ className }) => <StaticImage src="../images/hero.jpg" alt="Hero Image" className={className} />)``;

export default function HeroSection() {
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
  return <Paper sx={{
    height: "90vh",
  }}>
    <Box sx={{
      backgroundColor: "rgba(0,0,0,0.4)",
      height: "100%",
      position: "absolute",
      width: "100%",
      zIndex: 2
    }}></Box>
    <HeroImage sx={{
      height: "100%",
      position: "absolute",
      width: "100%",
      zIndex: 1
    }} />
    <Container maxWidth="md" sx={{
      height: "100%",
    }}>
      <Grid container alignItems="center" sx={{
        height: "100%",
        zIndex: 100,
        position: "relative"
      }} justifyContent="space-between">
        <Zoom in={shouldShow}>
          <Grid item sm={8}>
            <Typography component='h1' variant='h3'>Hi, my name is Sing Mak. I'm a software engineer.</Typography>
            <Typography variant='h5'>I build stuff.</Typography>
            <Box my={2}>
              <Button variant="outlined" color="secondary" href="email:mssjsg@gmail.com" >Get In Touch!</Button>
            </Box>
          </Grid>
        </Zoom>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' }}}><Social direction={'column'} /></Grid>
      </Grid>
    </Container>
  </Paper>;
}
