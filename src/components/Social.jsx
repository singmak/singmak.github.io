import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const socialItems = [
  {
    icon: GitHub,
    url: "",
  },
  {
    icon: LinkedIn,
    url: "",
  }
];

export default function Social({ direction }) {
  return <Grid container direction={direction || 'row'} spacing={1}>
    {socialItems.map((item) => <Grid item>
      <Link href={item.url}><IconButton><item.icon /></IconButton></Link>
      </Grid>)}
  </Grid>;
}
