import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import PageWrapper from '../../components/PageWrapper';
import { PageProps } from 'gatsby';
import { Mdx } from '../../types';
import { Box, Container, Typography } from '@mui/material';

import { Code } from '../../components/Code';
import { logPage } from '../../analytics';

const BlogPost = ({ data, children }: PageProps<Mdx>) => {
  const pageTitle = data.mdx?.frontmatter?.title ?? 'Blog Post';
  useEffect(() => logPage('BlogPost', pageTitle), []);
  return (
    <PageWrapper pageTitle={pageTitle}>
      <Container maxWidth="md" sx={{
        padding: 5
      }}>
        <Typography component="h1" sx={{
          fontSize: {
            xs: '2rem',
            md: '2.5rem',
          }
        }}>{data.mdx?.frontmatter?.title}</Typography>
        <Typography component="p">{data.mdx?.frontmatter?.date}</Typography>
        <Box sx={{
          'img': {
            padding: 1,
            background: '#fff'
          }
        }}>
          <MDXProvider
            components={{
              code: Code,
            }}
          >
            {children}
          </MDXProvider>
          
        </Box>
      </Container>
    </PageWrapper>
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
    }
  }
`;
export default BlogPost;