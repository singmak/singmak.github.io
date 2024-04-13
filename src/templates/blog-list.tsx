import React, { useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import { Blog } from '../components/Blog';
import { AllMdxNodes } from '../types';
import { logPage } from '../analytics';
import PageWrapper from '../components/PageWrapper';
import { Container, Button } from '@mui/material';
import { Link } from 'gatsby-theme-material-ui';

const PAGE_DESCRIPTION = 'I am Sing Mak. This is my tech blog. I blog about NodeJS, React, AWS, DevOps, Android development, or anything I learned recently.';

// for going to previous page or next page
const PaginationControl = ({
  currentPage,
  numberOfPages,
}: {
  currentPage: number;
  numberOfPages: number;
}) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to={currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`} sx={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" disabled={currentPage === 1}>Previous</Button>
      </Link>
      <Link to={`/blog/${currentPage + 1}`} sx={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" disabled={currentPage === numberOfPages}>Next</Button>
      </Link>
    </Container>
  );
}


const BlogList = ({ data, pageContext }: PageProps<AllMdxNodes, {
  numPages: number;
  currentPage: number;
}>) => {
  useEffect(() => logPage('BlogList', 'blog-list'), []);
  console.log(pageContext);
  const { numPages, currentPage } = pageContext;
  return (
    <PageWrapper pageTitle="Blog" description={PAGE_DESCRIPTION}>
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 5 }}>
        <Blog data={data} />
      </Container>
      <Container maxWidth="md" sx={{ marginBottom: 5 }}>
        <PaginationControl numberOfPages={numPages} currentPage={currentPage}/>
      </Container>
    </PageWrapper>
  );
};

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: {frontmatter: {date: DESC}}, skip: $skip, limit: $limit) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          tags
        }
        id
        fields {
          slug
        }
      }
    }
  }`;

export default BlogList;