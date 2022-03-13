/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import MainLayout from '../components/MainLayout';

const container = {
  minHeight: '100vh',
  padding: '30px 0px',
};

const ABOUT = ['I am Sing Mak, a software engineer with 12 years experience, 5 years of Android development experience, and more than 3.5 years of full-stack development experience.',
  'Since I was a kid, I always like creating things. I built small games with Adobe Flash for me and my little brother to play together. I also remember I created a game characters mod for Little Fighter 2, a popular fighting game among kids at that time, and shared the game mod with other LF2 players.',
  'I studied Computer Science at University of Science and Technology and became a software engineer after graduation. In the first few years of my career, I mainly developed for the web and different smart TV platforms. After that, I got interested in Android development and pursued a career in Android development, and was involved in the development of some media apps and messaging apps. Many years passed, here I am now. I became a full-stack developer who needs to develop anything that the projects required, no matter it\'s frontend, backend, AWS services, or DevOps. To be honest, I didn\'t plan to become a full-stack developer. I became one mainly because I got the opportunity and I thought it was a very good opportunity for me to broaden my expertise after doing Android development for so many years.',
  'My main focus now is to build and maintain services that are reliable, secure, scalable, and can cope with changes well. I am also quite interested in DevOps topics such as infrastructure deployment and CICD.',
  'Now I am working hard to build and write on this blog. While it takes time to research and write a post, it helps me to think more and understand the topics better. I feel like I really own the knowledge every time I finish a new post.'];

const TECHS = ['Typescript', 'Node.js', 'AWS Services', 'Docker', 'Nginx', 'ELK Stack', 'Jenkins', 'Serverless', 'Single-spa', 'Postgres database', 'Oracle database', 'Java', 'Keycloak', 'Android SDK', 'Kotlin', 'React', 'Next.js', 'Bootstrap', 'Material UI', 'Gatsby', 'Bash script'];

const About = () => {
  return (
    <MainLayout pageTitle="About">
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
    </MainLayout>
  );
};

export default About;