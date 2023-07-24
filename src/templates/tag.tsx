import React, { useEffect, useCallback } from 'react';
import { graphql, PageProps, navigate } from 'gatsby';
import { Blog } from '../components/Blog';
import { AllMdxNodes } from '../types';
import PageWrapper from '../components/PageWrapper';
import { Chip, Container } from '@mui/material';
import { logPage } from '../analytics';

const Tag = ({ data, path, pageContext }: PageProps<AllMdxNodes, { tag: string }>) => {
  useEffect(() => logPage('Tag', path), []);
  const onDelete = useCallback(() => {
    navigate('/');
  }, []);
  return (
    <PageWrapper pageTitle="Blog">
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 5 }}>
        <Chip label={`Tag: ${pageContext.tag}`} variant='filled' onDelete={onDelete} sx={{ marginBottom: 2 }}/>
        <Blog data={data} />  
      </Container>
    </PageWrapper>
  );
};

export const query = graphql`query ($tag: String) {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {tags: {eq: $tag}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        description
        tags
      }
      id
    }
  }
}`;

export default Tag;
