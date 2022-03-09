import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const socialItems = [
  {
    icon: GitHub,
    url: 'https://github.com/singmak',
  },
  {
    icon: LinkedIn,
    url: 'https://www.linkedin.com/in/sing-mak-dev',
  }
];

export function Social({ direction }: { direction: 'column'|'row' }) {
  return <Grid container direction={direction || 'row'} spacing={1}>
    {socialItems.map((item) => <Grid item key={item.url}>
      <Link href={item.url}><IconButton><item.icon /></IconButton></Link>
    </Grid>)}
  </Grid>;
}
