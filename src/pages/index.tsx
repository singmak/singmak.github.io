import React, { useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import PageWrapper from '../components/PageWrapper';
import { AllMdx, MdxNode } from '../types';
import { Card, CardContent, CardMedia, Container, Grid, Typography, Chip, CardActions, Box } from '@mui/material';
import { Link } from 'gatsby-theme-material-ui';

import { logPage } from '../analytics';

const PAGE_DESCRIPTION = 'I am Sing Mak. This is my tech blog. I blog about NodeJS, React, AWS, DevOps, Android development, or anything I learned recently.';

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
          <CardActions sx={{flexWrap: 'wrap'}} disableSpacing>
            {meta.tags.map((tag) => (
              <Box key={tag} sx={{
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderBottom: '10px solid transparent',
              }}>
                <Chip label={tag} variant="outlined"/>
              </Box>
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

const Blog = ({ data }: { data: AllMdx }) => {
  return (
    <PageWrapper pageTitle="Blog" description={PAGE_DESCRIPTION}>
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 5 }}>
        <Grid container direction="column" rowSpacing={3}>
          {
            data.allMdx.nodes.map(node => (<BlogListItem mdx={node} key={node.id}/>))
          }
        </Grid>
      </Container>
    </PageWrapper>
  );
};

const Index = ({ data }: PageProps<AllMdx>) => {
  useEffect(() => logPage('Index', 'index'), []);
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