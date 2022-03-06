/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import MainLayout from '../components/MainLayout';

const container = {
  height: '100vh',
  padding: '30px 0px',
};

const About = () => {
  return (
    <MainLayout pageTitle="Blog Posts">
      <Container maxWidth='md'>
        <Box sx={container}>
          <Box>
            <Typography variant='body1'>
              I am Sing Mak, a software engineer with 12 years' experience, 5 years of Android development experience and almost 4 years' full stack web development experience. Currently my main focus is on backend development with Typescript, Node.js and AWS services. I am also quite interesting in scripting and devops stuff.
            </Typography>
            <Typography variant='body1'>
              You can contact me by: <a href="mailto:mssjsg@gmail.com">mssjsg@gmail.com</a> or <a href="www.linkedin.com/in/sing-mak-dev">LinkedIn</a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default About;