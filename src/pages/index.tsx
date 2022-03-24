import React, { useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import { Blog } from '../components/Blog';
import { AllMdxNodes } from '../types';
import { logPage } from '../analytics';
import PageWrapper from '../components/PageWrapper';
import { Container } from '@mui/material';

const PAGE_DESCRIPTION = 'I am Sing Mak. This is my tech blog. I blog about NodeJS, React, AWS, DevOps, Android development, or anything I learned recently.';

const Index = ({ data }: PageProps<AllMdxNodes>) => {
  useEffect(() => logPage('Index', 'index'), []);
  return (
    <PageWrapper pageTitle="Blog" description={PAGE_DESCRIPTION}>
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 5 }}>
        <Blog data={data} />  
      </Container>
    </PageWrapper>
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
          tags
        }
        id
        slug
      }
    }
  }
`;

export default Index;