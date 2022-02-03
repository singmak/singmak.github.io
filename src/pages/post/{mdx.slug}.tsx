import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import MainLayout from '../../components/MainLayout';
import { PageProps } from 'gatsby';
import { Mdx } from '../../types';
import { Box, Container, Typography } from '@mui/material';

const BlogPost = ({ data }: PageProps<Mdx>) => {
  return (
    <MainLayout pageTitle={data.mdx?.frontmatter?.title ?? 'Blog'}>
      <Container maxWidth="md" sx={{
        padding: 5
      }}>
        <Typography component="h1" sx={{
          fontSize: '3rem'
        }}>{data.mdx?.frontmatter?.title}</Typography>
        <Typography component="p">{data.mdx?.frontmatter?.date}</Typography>
        <Box sx={{
          'img': {
            padding: 1,
            background: '#fff'
          }
        }}>
          <MDXRenderer>
            {data.mdx?.body ?? ''}
          </MDXRenderer>
        </Box>
      </Container>
    </MainLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
      body
    }
  }
`;
export default BlogPost;