import React, { useCallback } from 'react';
import { graphql, PageProps } from 'gatsby';
import MainLayout from '../../components/MainLayout';
import { AllMdx, MdxNode } from '../../types';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link } from 'gatsby-theme-material-ui';

const BlogListItem = ({ mdx }: { mdx: MdxNode }) => {
  return (
    <Grid item>
      <Card sx={{
        display: 'flex'
      }}>
        <CardContent>
          <Link to={`/blog/${mdx.slug}`}>
            <Typography variant="h5" paragraph>
              {mdx?.frontmatter?.title}
            </Typography>
          </Link>
          <Typography variant='subtitle1' paragraph>
            {mdx?.frontmatter?.description}
          </Typography>
        </CardContent>
        {mdx?.frontmatter?.imageUrl ? <CardMedia image={mdx?.frontmatter?.imageUrl} sx={{
          width: 180,
        }} /> : null}
      </Card>
    </Grid>
  );
};

const BlogPage = ({ data }: PageProps<AllMdx>) => {
  return (
    <MainLayout pageTitle="My Blog Posts">
      <Container maxWidth="md" sx={{ marginTop: 5 }}>
        <Grid container direction="column" rowSpacing={3}>
          {
            data.allMdx.nodes.map(node => (<BlogListItem mdx={node} key={node.id}/>))
          }
        </Grid>
      </Container>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;