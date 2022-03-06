import React from 'react';
import { graphql, PageProps } from 'gatsby';
import MainLayout from '../components/MainLayout';
import { AllMdx, MdxNode } from '../types';
import { Card, CardContent, CardMedia, Container, Grid, Typography, Chip, CardActions, Box } from '@mui/material';
import { Link } from 'gatsby-theme-material-ui';

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
          <CardActions>
            {meta.tags.map((tag) => <Chip key={tag} label={tag} variant="outlined"/>)}
          </CardActions>
        </Box>
        {meta.imageUrl ? <CardMedia image={meta.imageUrl} sx={{
          width: 180,
        }} /> : null}
      </Card>
    </Grid>
  );
};

const Blog = ({ data }: { data: AllMdx }) => {
  return (
    <MainLayout pageTitle="Blog Posts">
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 5 }}>
        <Grid container direction="column" rowSpacing={3}>
          {
            data.allMdx.nodes.map(node => (<BlogListItem mdx={node} key={node.id}/>))
          }
        </Grid>
      </Container>
    </MainLayout>
  );
};

const Index = ({ data }: PageProps<AllMdx>) => {
  return (<Blog data={data} />);
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          tags
        }
        id
        slug
      }
    }
  }
`;

export default Index;