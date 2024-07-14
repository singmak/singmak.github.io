/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import PageWrapper from '../components/PageWrapper';
import { logPage } from '../analytics';

const container = {
  minHeight: '100vh',
  padding: '30px 0px',
};

const ABOUT = ['I\'m Sing Mak, a Principal Software Engineer with over 15 years of experience in the tech industry.',
  'I\'ve always loved coding, ever since I was a kid. It started with simple Windows BAT files that I used to create menus for choosing DOS games. As a kid, I also enjoyed making small games with Adobe Flash and diving into game mods.',
  'I studied Computer Science at the University of Science and Technology. After graduating, I started my career focusing mainly on web development and creating apps for different smart TV platforms. My interest then shifted to Android development, where I had the chance to work on several media and messaging apps.',
  'Over time, I evolved into a full-stack developer. This role has me juggling various aspects of software development, from front-end to back-end, along with managing AWS services, deployment, and monitoring.',
  'Now, I find myself in the role of a principal software engineer. My job is to oversee the architecture and development of our software projects. I make sure everything we build is scalable, secure, and maintainable. I also keep our team aligned with the best practices and standards in the industry.'];

const TECHS = ['Typescript', 'Node.js', 'AWS Services', 'Docker', 'Nginx', 'ELK Stack', 'Jenkins', 'Serverless', 'Single-spa', 'Postgres database', 'Oracle database', 'Java', 'Keycloak', 'Android SDK', 'React', 'Next.js', 'Bootstrap', 'Material UI', 'Gatsby', 'Bash script', 'ArgoCD', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Jaeger', 'ELK Stack'];

const DESCRIPTION = `${ABOUT[0]} ${ABOUT[3]}`;

const About = () => {
  useEffect(() => logPage('About', 'about'), []);
  return (
    <PageWrapper pageTitle="About" description={DESCRIPTION}>
      <Container maxWidth='md'>
        <Box sx={container}>
          <Box>
            {ABOUT.map((text, index) => (
              <Typography key={index} paragraph>{text}</Typography>
            ))}
            <Typography>Here are a few technologies I have been working with in recent years:</Typography>
            <Grid container spacing={2} sx={{ padding: 3 }}>
              {
                TECHS.map((tech) => (
                  <Grid key={tech} item xs={6} md={3}>❋ {tech}</Grid>
                ))
              }
            </Grid>
            <Typography paragraph>
              You can contact me by: <a target="_blank" href="mailto:mssjsg@gmail.com" rel="noreferrer">mssjsg@gmail.com</a> or <a target="_blank" href="https://www.linkedin.com/in/sing-mak-dev" rel="noreferrer">LinkedIn</a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default About;