import React, { useState, useCallback } from 'react';
import { Link } from "gatsby-theme-material-ui";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ChevronRightIcon from '@mui/icons-material/ChevronRightOutlined';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

const navigationLinks = [
  { name: "About", href: "" },
  // { name: "Projects", href: "" },
  // { name: "Resume", href: "" },
  { name: "Blog", href: "" },
];

const linkStyle = {
  marginLeft: '20px',
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen(true), [setOpen]);
  const onClose = useCallback(() => setOpen(false), [setOpen]);
  return (<AppBar position='sticky' color='default'>
    <Container maxWidth="md">
      <Toolbar disableGutters>
        <Avatar sx={{
          marginRight: "auto",
          color: "white",
          backgroundColor: "black",
          borderRadius: 0,
          height: "auto",
          width: "auto",
          padding: 1,
          fontSize: "1em",
        }}>SING MAK</Avatar>
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
          <ListItem>
            <Link
              href={href}
              color="textPrimary"
              variant="button"
              underline="none"
            >
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  </AppBar>);
}
