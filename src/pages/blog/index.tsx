import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import MainLayout from '../../components/MainLayout';
import { AllMdx } from '../../types';

const BlogPage = ({ data }: PageProps<AllMdx>) => {
  return (
    <MainLayout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node?.frontmatter?.title}
              </Link>
            </h2>
            <p>Posted: {node?.frontmatter?.date}</p>
          </article>
        ))
      }
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
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;