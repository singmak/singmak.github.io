import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import MainLayout from '../../components/MainLayout';
import { PageProps } from 'gatsby';
import { Mdx } from '../../types';

const BlogPost = ({ data }: PageProps<Mdx>) => {
  return (
    <MainLayout pageTitle={data.mdx?.frontmatter?.title ?? ''}>
      <p>{data.mdx?.frontmatter?.date}</p>
      <MDXRenderer>
        {data.mdx?.body ?? ''}
      </MDXRenderer>
    </MainLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;
export default BlogPost;