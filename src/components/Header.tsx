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

const navigationLinks = [
  { name: 'About', href: '/' },
  // { name: "Projects", href: "" },
  // { name: "Resume", href: "" },
  { name: 'Blog', href: '/blog' },
];

const linkStyle = {
  marginLeft: '20px',
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
  const siteTitle = useMemo(() => siteData?.site?.siteMetadata?.title, [siteData]);
  return (<AppBar position='sticky' color='default'>
    <Container maxWidth="md">
      <Toolbar disableGutters>
        <Link
          href="/"
          color="textPrimary"
          variant="button"
          underline="none"
          sx={{ marginRight: 'auto'}}
        >
          <Typography component='h1'>{siteTitle}</Typography>
        </Link>
        <Typography component='h1' sx={{ marginRight: 'auto'}}>{pageTitle}</Typography>
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
            sm: 'none'
          }
        }} onClick={onOpen}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </Container>
    <SwipeableDrawer anchor="right" open={open} onOpen={onOpen} onClose={onClose}>
      <Box>
        <IconButton>
          <ChevronRightIcon onClick={onClose} />
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
