import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import { AllMdxNodes, MdxNode } from '../types';
import { Card, CardContent, CardMedia, Grid, Typography, Chip, CardActions, Box } from '@mui/material';
import { Link } from 'gatsby-theme-material-ui';

const Tag = ({ tag }: { tag: string }) => {
  const onTagClick = useCallback(() => {
    navigate(`/tag/${tag}`);
  }, [tag]);
  return (
    <Box key={tag} sx={{
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderBottom: '10px solid transparent',
    }}>
      <Chip label={tag} variant="outlined" onClick={onTagClick}/>
    </Box>
  );
};

const BlogListItem = ({ mdx }: { mdx: MdxNode }) => {
  const meta = mdx?.frontmatter;
  if (!meta) return null;
  return (
    <Grid item>
      <Card elevation={0} sx={{
        display: 'flex',
        backgroundColor: '#fff',
      }}>
        <Box>
          <CardContent>
            <Link to={`/post/${mdx.slug}`}>
              <Typography variant="h5" paragraph>
                {meta.title}
              </Typography>
            </Link>
            <Typography paragraph sx={{ fontSize: 12, lineHeight: 0 }}>
              {meta.date}
            </Typography>
            <Typography variant='subtitle1' paragraph sx={{ marginBottom: 0 }}>
              {meta.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ flexWrap: 'wrap', marginBottom: '-5px' }} disableSpacing>
            {meta.tags.map((tag) => (
              <Tag tag={tag} key={tag}/>
            ))}
          </CardActions>
        </Box>
        {meta.imageUrl ? <CardMedia image={meta.imageUrl} sx={{
          width: 180,
        }} /> : null}
      </Card>
    </Grid>
  );
};

export interface BlogProps {
  data: AllMdxNodes;
}

export const Blog = ({ data }: BlogProps) => {
  return (
    <Grid container direction="column" rowSpacing={3}>
      {
        data.allMdx.nodes.map(node => (<BlogListItem mdx={node} key={node.id}/>))
      }
    </Grid>
  );
};
