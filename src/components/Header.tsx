import React, { useState, useCallback, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ChevronRightIcon from '@mui/icons-material/ChevronRightOutlined';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import { Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';

const navigationLinks = [
  { name: 'Blog', href: '/' },
  { name: 'Tags', href: '/tags' },
  // { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  // { name: 'Contact', href: '/contact' },
];

const linkStyle = {
  marginLeft: '20px',
  color: '#fff',
  fontFamily: 'roboto',
  padding: '5px 7px',
  backgroundColor: '#51748a',
  textAlign: 'center',
  ':hover': {
    color: '#fff',
    backgroundColor: '#6a889c',
  },
};

export default function Header({ pageTitle }: {
  pageTitle: string,
}) {
  const siteData = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`);
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen(true), [setOpen]);
  const onClose = useCallback(() => setOpen(false), [setOpen]);
  console.log('siteData', siteData, siteData?.site?.siteMetadata?.title);
  // const siteTitle = useMemo(() => siteData?.site?.siteMetadata?.title, [siteData]);
  return (<AppBar position='sticky' color='primary' elevation={5}>
    <Container>
      <Toolbar disableGutters>
        <Link
          href="/"
          color="textPrimary"
          variant="button"
          underline="none"
          sx={{
            marginRight: 1,
          }}
        >
          <StaticImage src="../images/singmak_logo.png" alt="SING MAK" placeholder="none"/>
        </Link>
        <Box sx={{
          marginX: 'auto',
        }}>
          <Typography component='h1' sx={{
            color: '#fff',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: {
              xs: 'none',
              md: 'block',
            },
          }}>{pageTitle}</Typography>
        </Box>
        <Box sx={{
          display: {
            xs: 'none',
            sm: 'block'
          }
        }}>
          {navigationLinks.map(({ name, href }) => (
            <Link
              href={href}
              color="textPrimary"
              variant="button"
              underline="none"
              sx={linkStyle}
              key={name}
            >
              {name}
            </Link>
          ))}
        </Box>
        <IconButton sx={{
          display: {
            sx: 'block',
            sm: 'none',
          },
          color: '#fff',
        }} onClick={onOpen}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </Container>
    <SwipeableDrawer anchor="right" open={open} onOpen={onOpen} onClose={onClose}>
      <Box>
        <IconButton onClick={onClose}>
          <ChevronRightIcon/>
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navigationLinks.map(({ name, href }) => (
          <ListItem key={name}>
            <Link
              href={href}
              color="textPrimary"
              variant="button"
              underline="none"
              key={name}
            >
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  </AppBar>);
}
